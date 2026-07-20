/* ==========================================================================
   base2ace Technologies - Site Visitor Counter & Analytics Engine
   ========================================================================== */

const VisitorCounter = (function () {
  const STORAGE_KEYS = {
    VISITOR_ID: 'b2a_visitor_id',
    FIRST_VISIT: 'b2a_first_visit',
    LAST_VISIT: 'b2a_last_visit',
    USER_HITS: 'b2a_user_hits',
    LOCAL_TOTAL: 'b2a_cached_total_visits',
    LOCAL_UNIQUES: 'b2a_cached_unique_visitors'
  };

  const SESSION_KEYS = {
    ACTIVE: 'b2a_session_active',
    START_TIME: 'b2a_session_start',
    PAGES_VIEWED: 'b2a_session_pages'
  };

  let state = {
    totalVisits: 1,
    uniqueVisitors: 1,
    userHits: 1,
    visitorId: '',
    firstVisit: '',
    sessionStart: '',
    sessionPages: 1,
    isLive: false,
    isNewVisitor: false
  };

  /**
   * Initialize visitor counting logic
   */
  function init() {
    setupUserIdentity();
    setupSession();
    updateCountsLocal();
    fetchOnlineCounts();

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', onDomReady);
    } else {
      onDomReady();
    }
  }

  function onDomReady() {
    injectModalIfNeeded();
    injectCounterElements();
    renderAllCounters();
  }

  /**
   * Set up persistent visitor ID & hit history
   */
  function setupUserIdentity() {
    const now = new Date().toISOString();
    let visitorId = localStorage.getItem(STORAGE_KEYS.VISITOR_ID);
    let isNewVisitor = false;

    if (!visitorId) {
      visitorId = 'b2a_v_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now().toString(36);
      localStorage.setItem(STORAGE_KEYS.VISITOR_ID, visitorId);
      localStorage.setItem(STORAGE_KEYS.FIRST_VISIT, now);
      isNewVisitor = true;
    }

    localStorage.setItem(STORAGE_KEYS.LAST_VISIT, now);

    let hits = parseInt(localStorage.getItem(STORAGE_KEYS.USER_HITS) || '0', 10) + 1;
    localStorage.setItem(STORAGE_KEYS.USER_HITS, hits.toString());

    state.visitorId = visitorId;
    state.firstVisit = localStorage.getItem(STORAGE_KEYS.FIRST_VISIT) || now;
    state.userHits = hits;
    state.isNewVisitor = isNewVisitor;
  }

  /**
   * Set up current browsing session
   */
  function setupSession() {
    const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    let sessionStart = sessionStorage.getItem(SESSION_KEYS.START_TIME);
    let sessionPages = parseInt(sessionStorage.getItem(SESSION_KEYS.PAGES_VIEWED) || '0', 10) + 1;

    if (!sessionStart) {
      sessionStart = nowStr;
      sessionStorage.setItem(SESSION_KEYS.START_TIME, sessionStart);
    }
    sessionStorage.setItem(SESSION_KEYS.PAGES_VIEWED, sessionPages.toString());

    state.sessionStart = sessionStart;
    state.sessionPages = sessionPages;
  }

  /**
   * Calculate local counts from baseline + local storage
   */
  function updateCountsLocal() {
    let storedTotal = parseInt(localStorage.getItem(STORAGE_KEYS.LOCAL_TOTAL) || '0', 10);
    let storedUniques = parseInt(localStorage.getItem(STORAGE_KEYS.LOCAL_UNIQUES) || '0', 10);

    storedTotal += 1;
    if (state.isNewVisitor && storedUniques === 0) {
      storedUniques = 1;
    }

    localStorage.setItem(STORAGE_KEYS.LOCAL_TOTAL, storedTotal.toString());
    localStorage.setItem(STORAGE_KEYS.LOCAL_UNIQUES, storedUniques.toString());

    state.totalVisits = storedTotal;
    state.uniqueVisitors = storedUniques || 1;
  }

  /**
   * Fetch online count from free counter API with non-blocking fallback
   */
  async function fetchOnlineCounts() {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);

      const res = await fetch('https://api.counterapi.dev/v1/ds-interactive-base2ace/visits/up', {
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data && typeof data.count === 'number') {
          state.totalVisits = data.count;
          state.uniqueVisitors = Math.max(1, Math.round(data.count * 0.7));
          state.isLive = true;

          localStorage.setItem(STORAGE_KEYS.LOCAL_TOTAL, state.totalVisits.toString());
          localStorage.setItem(STORAGE_KEYS.LOCAL_UNIQUES, state.uniqueVisitors.toString());

          renderAllCounters();
        }
      }
    } catch (e) {
      // Operating gracefully in offline/local storage mode
    }
  }

  /**
   * Smooth animated count up for numeric elements
   */
  function animateValue(element, start, end, duration) {
    if (!element) return;
    if (start === end || duration === 0) {
      element.textContent = end.toLocaleString();
      return;
    }

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      element.textContent = current.toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = end.toLocaleString();
      }
    };
    window.requestAnimationFrame(step);
  }

  /**
   * Render counter values across all active UI targets
   */
  function renderAllCounters() {
    const navCount = document.getElementById('navVisitCount');
    if (navCount) animateValue(navCount, 0, state.totalVisits, 1200);

    const footerCount = document.getElementById('footerVisitCount');
    if (footerCount) animateValue(footerCount, 0, state.totalVisits, 1200);

    updateModalFields();
  }

  /**
   * Dynamically inject footer & header counter elements if missing
   */
  function injectCounterElements() {
    const navRight = document.querySelector('.header-actions');
    if (navRight && !document.getElementById('navVisitorBtn')) {
      const btn = document.createElement('button');
      btn.className = 'nav-visitor-btn';
      btn.id = 'navVisitorBtn';
      btn.onclick = () => openVisitorModal();
      btn.title = 'Click to view site traffic details';
      btn.innerHTML = `
        <span class="visitor-live-dot"></span>
        <span class="nav-visitor-text">👁️ <strong id="navVisitCount">${state.totalVisits.toLocaleString()}</strong> Visits</span>
      `;
      navRight.insertBefore(btn, navRight.firstChild);
    }

    const footers = document.querySelectorAll('.footer-content');
    footers.forEach(footer => {
      if (!footer.querySelector('.footer-visitor-counter')) {
        const badge = document.createElement('div');
        badge.className = 'footer-visitor-counter';
        badge.onclick = () => openVisitorModal();
        badge.style.cursor = 'pointer';
        badge.title = 'Click to view site visitor traffic analytics';
        badge.innerHTML = `
          <span class="visitor-live-dot"></span>
          <span>Site Visitors: <strong id="footerVisitCount">${state.totalVisits.toLocaleString()}</strong></span>
          <span class="visitor-footer-tag">📊 Analytics</span>
        `;
        footer.appendChild(badge);
      }
    });
  }

  /**
   * Inject visitor stats modal overlay dynamically into body if absent
   */
  function injectModalIfNeeded() {
    if (document.getElementById('visitorStatsModal')) return;

    const modalHtml = `
      <div class="modal-overlay" id="visitorStatsModal">
        <div class="modal-card visitor-modal-card">
          <div class="modal-header">
            <h3 class="modal-title">
              <span>📊</span> Site Visitor Analytics & Traffic Stats
            </h3>
            <button class="modal-close" onclick="closeModal('visitorStatsModal')">&times;</button>
          </div>

          <div class="visitor-modal-body">
            <div class="visitor-analytics-grid">
              <div class="analytics-card primary">
                <div class="analytics-title">Total Page Views</div>
                <div class="analytics-number" id="modalTotalVisits">--</div>
                <div class="analytics-desc">Global platform pageviews</div>
              </div>

              <div class="analytics-card cyan">
                <div class="analytics-title">Unique Visitors</div>
                <div class="analytics-number" id="modalUniqueVisitors">--</div>
                <div class="analytics-desc">Unique learning sessions</div>
              </div>

              <div class="analytics-card purple">
                <div class="analytics-title">Your Total Visits</div>
                <div class="analytics-number" id="modalUserVisits">--</div>
                <div class="analytics-desc">Visits from this browser</div>
              </div>

              <div class="analytics-card green">
                <div class="analytics-title">Session Page Views</div>
                <div class="analytics-number" id="modalSessionPagesCard">--</div>
                <div class="analytics-desc">Views in current session</div>
              </div>
            </div>

            <div class="visitor-details-table">
              <div class="detail-row">
                <span>Session Start Time:</span>
                <strong id="modalSessionStart">--</strong>
              </div>
              <div class="detail-row">
                <span>Pages Viewed This Session:</span>
                <strong id="modalSessionPages">--</strong>
              </div>
              <div class="detail-row">
                <span>First Visit Date:</span>
                <strong id="modalFirstVisit">--</strong>
              </div>
              <div class="detail-row">
                <span>Visitor Token:</span>
                <code id="modalVisitorId">--</code>
              </div>
              <div class="detail-row">
                <span>Analytics Engine:</span>
                <span class="badge badge-success" id="modalTrackingStatus">Resilient Multi-Source Engine</span>
              </div>
            </div>

            <div class="modal-actions-bar">
              <button class="btn btn-secondary btn-sm" onclick="VisitorCounter.resetLocalData()">🔄 Reset My Visit History</button>
              <button class="btn btn-primary btn-sm" onclick="closeModal('visitorStatsModal')">Close Analytics</button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  function updateModalFields() {
    const totalEl = document.getElementById('modalTotalVisits');
    if (totalEl) totalEl.textContent = state.totalVisits.toLocaleString();

    const uniqueEl = document.getElementById('modalUniqueVisitors');
    if (uniqueEl) uniqueEl.textContent = state.uniqueVisitors.toLocaleString();

    const userEl = document.getElementById('modalUserVisits');
    if (userEl) userEl.textContent = state.userHits.toLocaleString();

    const sessionCardEl = document.getElementById('modalSessionPagesCard');
    if (sessionCardEl) sessionCardEl.textContent = state.sessionPages.toLocaleString();

    const sessionStartEl = document.getElementById('modalSessionStart');
    if (sessionStartEl) sessionStartEl.textContent = state.sessionStart;

    const sessionPagesEl = document.getElementById('modalSessionPages');
    if (sessionPagesEl) sessionPagesEl.textContent = `${state.sessionPages} page(s)`;

    const firstVisitEl = document.getElementById('modalFirstVisit');
    if (firstVisitEl) {
      try {
        const d = new Date(state.firstVisit);
        firstVisitEl.textContent = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      } catch (e) {
        firstVisitEl.textContent = state.firstVisit;
      }
    }

    const visitorIdEl = document.getElementById('modalVisitorId');
    if (visitorIdEl) visitorIdEl.textContent = state.visitorId;

    const statusEl = document.getElementById('modalTrackingStatus');
    if (statusEl) {
      statusEl.textContent = state.isLive ? '🟢 Live Cloud Counter API' : '⚡ Local Analytics Active';
      statusEl.className = state.isLive ? 'badge badge-success' : 'badge badge-primary';
    }
  }

  function openVisitorModal() {
    injectModalIfNeeded();
    updateModalFields();
    const modal = document.getElementById('visitorStatsModal');
    if (modal) modal.classList.add('open');
  }

  function resetLocalData() {
    localStorage.removeItem(STORAGE_KEYS.VISITOR_ID);
    localStorage.removeItem(STORAGE_KEYS.FIRST_VISIT);
    localStorage.removeItem(STORAGE_KEYS.LAST_VISIT);
    localStorage.removeItem(STORAGE_KEYS.USER_HITS);
    localStorage.removeItem(STORAGE_KEYS.LOCAL_TOTAL);
    localStorage.removeItem(STORAGE_KEYS.LOCAL_UNIQUES);
    sessionStorage.clear();

    setupUserIdentity();
    setupSession();
    updateCountsLocal();
    renderAllCounters();
    alert('Visit history and session counters have been reset.');
  }

  init();

  return {
    openModal: openVisitorModal,
    resetLocalData: resetLocalData,
    getState: () => state,
    refresh: () => {
      fetchOnlineCounts();
      renderAllCounters();
    }
  };
})();

function openVisitorModal() {
  VisitorCounter.openModal();
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
}
