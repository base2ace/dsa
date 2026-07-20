/**
 * Base2Ace DSA Roadmap - Application Controller
 * Handles static data loading, filtering, search, interactive tabs, progress tracking, and theme switching.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Global Application State
  const state = {
    patterns: {},
    questions: {},
    activePattern: "two-pointers",
    searchQuery: "",
    patternSearchQuery: "",
    difficultyFilter: "all",
    companyFilter: "all",
    solvedQuestions: new Set(JSON.parse(localStorage.getItem("base2ace_solved") || "[]")),
    theme: localStorage.getItem("base2ace_theme") || "dark"
  };

  // DOM Element References
  const elements = {
    themeToggleBtn: document.getElementById("theme-toggle-btn"),
    mobileMenuBtn: document.getElementById("mobile-menu-btn"),
    sidebar: document.getElementById("sidebar"),
    sidebarBackdrop: document.getElementById("sidebar-backdrop"),
    patternList: document.getElementById("pattern-list"),
    patternSearchInput: document.getElementById("pattern-search-input"),
    patternTitle: document.getElementById("pattern-title"),
    patternSubtitle: document.getElementById("pattern-subtitle"),
    questionsList: document.getElementById("questions-list"),
    questionCountText: document.getElementById("question-count-text"),
    resetFiltersBtn: document.getElementById("reset-filters-btn"),
    patternDescription: document.getElementById("pattern-description"),
    rightPane: document.getElementById("right-pane"),
    togglePaneBtn: document.getElementById("toggle-pane-btn"),
    closePaneBtn: document.getElementById("close-pane-btn"),
    searchInput: document.getElementById("search-input"),
    clearSearchBtn: document.getElementById("clear-search-btn"),
    difficultyFilter: document.getElementById("difficulty-filter"),
    companyFilter: document.getElementById("company-filter"),
    solvedCount: document.getElementById("solved-count"),
    totalCount: document.getElementById("total-count"),
    progressFill: document.getElementById("progress-fill"),
    progressPercentage: document.getElementById("progress-percentage")
  };

  // Code Cache to avoid redundant network requests
  const codeCache = new Map();

  /* ==========================================================================
     1. Initialization & Theme Setup
     ========================================================================== */
  function init() {
    applyTheme(state.theme);
    bindEvents();
    loadData();
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    state.theme = theme;
    localStorage.setItem("base2ace_theme", theme);
  }

  /* ==========================================================================
     2. Asynchronous Data Fetching & Local Fallbacks
     ========================================================================== */
  async function loadData() {
    if (window.DSA_DATA && window.DSA_DATA.patterns) {
      state.patterns = window.DSA_DATA.patterns || {};
      state.questions = window.DSA_DATA.questions || {};
      renderPatternNav();
      renderCurrentView();
      updateProgressBar();
      return;
    }

    try {
      const response = await fetch("data/dsa-data.json");
      if (!response.ok) throw new Error("Failed to load DSA data");
      
      const data = await response.json();
      state.patterns = data.patterns || {};
      state.questions = data.questions || {};

      renderPatternNav();
      renderCurrentView();
      updateProgressBar();
    } catch (err) {
      console.error("Error loading DSA data:", err);
      elements.questionsList.innerHTML = `<li class="error-msg">⚠️ Unable to load questions data. Please check local server connection.</li>`;
    }
  }

  async function fetchCode(filePath) {
    if (!filePath) return "// Solution file not specified.";
    if (window.DSA_SOLUTIONS && window.DSA_SOLUTIONS[filePath]) {
      return window.DSA_SOLUTIONS[filePath];
    }
    if (codeCache.has(filePath)) return codeCache.get(filePath);

    try {
      const res = await fetch(filePath);
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const text = await res.text();
      codeCache.set(filePath, text);
      return text;
    } catch (err) {
      return `// Solution code file: ${filePath}\n// Code solution for this problem will be updated soon.`;
    }
  }

  /* ==========================================================================
     3. Event Binding
     ========================================================================== */
  function bindEvents() {
    // Theme Switch
    elements.themeToggleBtn.addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark");
    });

    // Mobile Sidebar Drawer
    elements.mobileMenuBtn.addEventListener("click", toggleMobileSidebar);
    elements.sidebarBackdrop.addEventListener("click", toggleMobileSidebar);

    // Right Cheat Sheet Drawer
    elements.togglePaneBtn.addEventListener("click", () => {
      elements.rightPane.classList.toggle("collapsed");
    });
    elements.closePaneBtn.addEventListener("click", () => {
      elements.rightPane.classList.add("collapsed");
    });

    // Global Search & Clear
    elements.searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      elements.clearSearchBtn.classList.toggle("hidden", !state.searchQuery);
      renderCurrentView();
    });

    elements.clearSearchBtn.addEventListener("click", () => {
      elements.searchInput.value = "";
      state.searchQuery = "";
      elements.clearSearchBtn.classList.add("hidden");
      renderCurrentView();
    });

    // Pattern Search
    elements.patternSearchInput.addEventListener("input", (e) => {
      state.patternSearchQuery = e.target.value.trim().toLowerCase();
      renderPatternNav();
    });

    // Dropdown Filters
    elements.difficultyFilter.addEventListener("change", (e) => {
      state.difficultyFilter = e.target.value;
      renderCurrentView();
    });

    elements.companyFilter.addEventListener("change", (e) => {
      state.companyFilter = e.target.value;
      renderCurrentView();
    });

    elements.resetFiltersBtn.addEventListener("click", () => {
      state.searchQuery = "";
      state.difficultyFilter = "all";
      state.companyFilter = "all";
      elements.searchInput.value = "";
      elements.difficultyFilter.value = "all";
      elements.companyFilter.value = "all";
      elements.clearSearchBtn.classList.add("hidden");
      renderCurrentView();
    });
  }

  function toggleMobileSidebar() {
    elements.sidebar.classList.toggle("open");
    elements.sidebarBackdrop.classList.toggle("active");
  }

  /* ==========================================================================
     4. Pattern Navigation Rendering
     ========================================================================== */
  function renderPatternNav() {
    elements.patternList.innerHTML = "";
    
    Object.keys(state.patterns).forEach((key) => {
      const formattedTitle = formatPatternName(key);
      const questionCount = (state.questions[key] || []).length;

      if (state.patternSearchQuery && !formattedTitle.toLowerCase().includes(state.patternSearchQuery)) {
        return;
      }

      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.dataset.pattern = key;
      if (key === state.activePattern && !state.searchQuery) {
        a.classList.add("active");
      }

      a.innerHTML = `
        <span>${formattedTitle}</span>
        <span class="pattern-item-count">${questionCount}</span>
      `;

      a.addEventListener("click", (e) => {
        e.preventDefault();
        state.activePattern = key;
        state.searchQuery = "";
        elements.searchInput.value = "";
        elements.clearSearchBtn.classList.add("hidden");

        renderPatternNav();
        renderCurrentView();

        if (window.innerWidth <= 992) {
          toggleMobileSidebar();
        }
      });

      li.appendChild(a);
      elements.patternList.appendChild(li);
    });
  }

  function formatPatternName(key) {
    return key.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  }

  /* ==========================================================================
     5. Main View Rendering & Filtering Logic
     ========================================================================== */
  function renderCurrentView() {
    let questionsToDisplay = [];
    const isGlobalSearch = Boolean(state.searchQuery || state.difficultyFilter !== "all" || state.companyFilter !== "all");

    if (isGlobalSearch) {
      // Search across all patterns
      Object.keys(state.questions).forEach(patternKey => {
        const patternQuestions = state.questions[patternKey] || [];
        patternQuestions.forEach(q => {
          if (matchesFilter(q, patternKey)) {
            questionsToDisplay.push({ ...q, patternKey });
          }
        });
      });

      elements.patternTitle.textContent = "Search Results";
      elements.patternSubtitle.textContent = `Showing filtered questions matching your query across all DSA patterns.`;
      elements.resetFiltersBtn.classList.remove("hidden");
    } else {
      // Display active pattern questions
      const activeQuestions = state.questions[state.activePattern] || [];
      questionsToDisplay = activeQuestions.map(q => ({ ...q, patternKey: state.activePattern }));

      elements.patternTitle.textContent = formatPatternName(state.activePattern);
      elements.patternSubtitle.textContent = `Explore key problems and master the ${formatPatternName(state.activePattern)} pattern.`;
      elements.resetFiltersBtn.classList.add("hidden");

      // Update right pane cheat sheet description
      elements.patternDescription.innerHTML = state.patterns[state.activePattern] || "<p>Select a pattern to view its description.</p>";
    }

    elements.questionCountText.textContent = `Showing ${questionsToDisplay.length} problem${questionsToDisplay.length === 1 ? "" : "s"}`;
    renderQuestionsList(questionsToDisplay);
  }

  function matchesFilter(question, patternKey) {
    // Difficulty filter
    if (state.difficultyFilter !== "all" && question.difficulty.toLowerCase() !== state.difficultyFilter.toLowerCase()) {
      return false;
    }

    // Company filter
    if (state.companyFilter !== "all") {
      const matchesCompany = (question.companies || []).some(c => c.toLowerCase().includes(state.companyFilter.toLowerCase()));
      if (!matchesCompany) return false;
    }

    // Search Query (matches name, problem statement, or company)
    if (state.searchQuery) {
      const qName = (question.name || "").toLowerCase();
      const qStmt = (question.problemStatement || "").toLowerCase();
      const qComps = (question.companies || []).join(" ").toLowerCase();
      const qPattern = patternKey.replace(/-/g, " ").toLowerCase();

      if (!qName.includes(state.searchQuery) && !qStmt.includes(state.searchQuery) && !qComps.includes(state.searchQuery) && !qPattern.includes(state.searchQuery)) {
        return false;
      }
    }

    return true;
  }

  /* ==========================================================================
     6. Question Cards & Accordion Rendering
     ========================================================================== */
  function renderQuestionsList(questions) {
    elements.questionsList.innerHTML = "";

    if (questions.length === 0) {
      elements.questionsList.innerHTML = `
        <li class="no-results" style="padding: 40px; text-align: center; color: var(--text-muted);">
          <h3>No matching problems found</h3>
          <p style="margin-top: 8px; font-size: 0.9rem;">Try adjusting your search query, difficulty, or company filters.</p>
        </li>
      `;
      return;
    }

    questions.forEach((q) => {
      const questionId = `${q.patternKey}_${q.name.replace(/\s+/g, "_")}`;
      const isMastered = state.solvedQuestions.has(questionId);

      const li = document.createElement("li");
      li.className = `question-card ${isMastered ? "mastered" : ""}`;

      const companyPills = (q.companies || []).slice(0, 3).map(c => `<span class="company-pill">${c}</span>`).join("");

      li.innerHTML = `
        <div class="question-header">
          <div class="question-header-left">
            <input type="checkbox" class="master-checkbox" ${isMastered ? "checked" : ""} title="Mark as Mastered">
            <span class="question-title">${q.name}</span>
            <span class="difficulty-badge ${q.difficulty}">${q.difficulty}</span>
          </div>

          <div class="question-header-right">
            <div class="company-pills">${companyPills}</div>
            <a href="${q.link}" target="_blank" rel="noopener" class="leetcode-link" onclick="event.stopPropagation()">LeetCode ↗</a>
            <svg class="chevron-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>

        <div class="solution-body">
          <div class="section-block">
            <h4>Problem Statement</h4>
            <p class="problem-statement">${q.problemStatement || "No statement available."}</p>
          </div>

          ${q.exampleInput ? `
          <div class="section-block">
            <h4>Example</h4>
            <div class="example-box"><strong>Input:</strong> ${q.exampleInput}<br><strong>Output:</strong> ${q.exampleOutput || "N/A"}</div>
            ${q.explanation ? `<p class="explanation-text"><strong>Explanation:</strong> ${q.explanation}</p>` : ''}
          </div>
          ` : ''}

          <div class="section-block">
            <h4>⚡ Interactive Algorithm Flow & Visualizer</h4>
            <div class="visualizer-mount-point"></div>
          </div>

          <div class="section-block">
            <div class="solution-tabs-header">
              <div class="tab-group">
                <button class="lang-tab active" data-lang="python">Python</button>
                <button class="lang-tab" data-lang="cpp">C++</button>
              </div>
              <button class="copy-code-btn">📋 Copy Code</button>
            </div>
            
            <div class="code-wrapper">
              <pre class="language-python"><code class="code-block">Click tab or expand to load solution code...</code></pre>
            </div>
          </div>

          <div class="section-block" style="margin-bottom: 0;">
            <span class="complexity-strip">⏱️ ${q.complexity || 'Complexity details provided in solution code.'}</span>
          </div>
        </div>
      `;

      // Checkbox event logic
      const checkbox = li.querySelector(".master-checkbox");
      checkbox.addEventListener("change", (e) => {
        e.stopPropagation();
        if (checkbox.checked) {
          state.solvedQuestions.add(questionId);
          li.classList.add("mastered");
        } else {
          state.solvedQuestions.delete(questionId);
          li.classList.remove("mastered");
        }
        localStorage.setItem("base2ace_solved", JSON.stringify([...state.solvedQuestions]));
        updateProgressBar();
      });

      // Accordion click logic
      let visualizerInstance = null;
      const header = li.querySelector(".question-header");
      header.addEventListener("click", () => {
        const isOpen = li.classList.contains("open");
        li.classList.toggle("open");

        if (!isOpen) {
          // Load solution code when expanded
          loadSolutionCode(li, q);

          // Initialize Interactive Algorithm Visualizer
          const mountPoint = li.querySelector('.visualizer-mount-point');
          if (mountPoint && !visualizerInstance && window.VisualizerEngine) {
            visualizerInstance = new window.VisualizerEngine(mountPoint, q);
          }
        }
      });

      // Language Tab Switcher
      const tabs = li.querySelectorAll(".lang-tab");
      tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
          e.stopPropagation();
          tabs.forEach(t => t.classList.remove("active"));
          tab.classList.add("active");
          const selectedLang = tab.dataset.lang;
          loadSolutionCode(li, q, selectedLang);
        });
      });

      // Copy Code Action
      const copyBtn = li.querySelector(".copy-code-btn");
      copyBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const codeElement = li.querySelector("code.code-block");
        if (codeElement) {
          navigator.clipboard.writeText(codeElement.textContent).then(() => {
            copyBtn.textContent = "✅ Copied!";
            setTimeout(() => { copyBtn.textContent = "📋 Copy Code"; }, 2000);
          });
        }
      });

      elements.questionsList.appendChild(li);
    });
  }

  async function loadSolutionCode(cardElement, questionObj, lang = "python") {
    const codePre = cardElement.querySelector("pre");
    const codeBlock = cardElement.querySelector("code.code-block");
    if (!codeBlock || !questionObj.files) return;

    const filePath = questionObj.files[lang];
    codeBlock.textContent = "Loading solution code...";

    const code = await fetchCode(filePath);
    codeBlock.textContent = code;

    codePre.className = `language-${lang}`;
    if (window.Prism) {
      Prism.highlightElement(codeBlock);
    }
  }

  /* ==========================================================================
     7. Progress Tracker Calculation
     ========================================================================== */
  function updateProgressBar() {
    let totalQuestionsCount = 0;
    Object.values(state.questions).forEach(arr => {
      totalQuestionsCount += (arr || []).length;
    });

    const solved = state.solvedQuestions.size;
    const percentage = totalQuestionsCount > 0 ? Math.round((solved / totalQuestionsCount) * 100) : 0;

    elements.solvedCount.textContent = solved;
    elements.totalCount.textContent = totalQuestionsCount;
    elements.progressPercentage.textContent = `${percentage}%`;
    elements.progressFill.style.width = `${percentage}%`;
  }

  // Run initialization
  init();
});
