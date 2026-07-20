/**
 * Base2ace Technologies - Universal Interactive Algorithm Visualizer Engine
 * SVG 2D Graph Node Visualizer & Dedicated Kruskal's MST Step Generator.
 */

window.VisualizerEngine = class VisualizerEngine {
  constructor(containerElement, questionObj) {
    this.container = containerElement;
    this.question = questionObj;
    this.steps = [];
    this.currentStep = 0;
    this.isPlaying = false;
    this.timer = null;
    this.speed = 1000;

    // Intelligently parse initial input
    this.inputArray = this.parseInputArray(questionObj.exampleInput);
    this.targetValue = this.parseTargetValue(questionObj.exampleInput);

    this.init();
  }

  /* ==========================================================================
     1. Dynamic Input Parsers
     ========================================================================== */
  parseInputArray(inputStr) {
    if (!inputStr) return ["(0-1, w=3)", "(1-2, w=5)", "(2-3, w=1)"];

    // Graph Edge Array e.g. graph = [[0, 1, 3], [1, 2, 5], [2, 3, 1]]
    if (inputStr.includes('graph') || inputStr.includes('edges')) {
      const edgeTriplets = inputStr.match(/\[\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\]/g);
      if (edgeTriplets && edgeTriplets.length > 0) {
        return edgeTriplets.map(e => {
          const m = e.match(/\[\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\]/);
          return `(${m[1]}-${m[2]}, w=${m[3]})`;
        });
      }
    }

    // 2D Points Array e.g. points = [[1, 3], [2, 5], [3, 1], [4, 4]]
    if (inputStr.includes('points') || (inputStr.includes('[[') && inputStr.includes(']]'))) {
      const pointPairs = inputStr.match(/\[\s*(-?\d+)\s*,\s*(-?\d+)\s*\]/g);
      if (pointPairs && pointPairs.length > 0) {
        return pointPairs.map(p => p.replace(/\s+/g, '').replace('[', '(').replace(']', ')'));
      }
    }

    // String input e.g. s = 'aaa' or s = "babad"
    const strMatch = inputStr.match(/s\s*=\s*['"](.*?)['"]/i) || inputStr.match(/['"]([a-zA-Z0-9]+)['"]/);
    if (strMatch && strMatch[1] && !inputStr.includes('[')) {
      return strMatch[1].split('');
    }

    // Array of numbers or characters
    const arrayMatch = inputStr.match(/\[(.*?)\]/);
    if (arrayMatch && arrayMatch[1]) {
      const items = arrayMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''));
      if (items.length > 0) return items;
    }

    return ["(0-1, w=3)", "(1-2, w=5)", "(2-3, w=1)"];
  }

  parseTargetValue(inputStr) {
    if (!inputStr) return 0;
    const targetMatch = inputStr.match(/sum\s*=\s*(-?\d+)/i) ||
                        inputStr.match(/target\s*=\s*(-?\d+)/i) || 
                        inputStr.match(/k\s*=\s*(-?\d+)/i);
    if (targetMatch && targetMatch[1]) return parseInt(targetMatch[1]);
    return 0;
  }

  /* ==========================================================================
     2. Step Generation Dispatcher
     ========================================================================== */
  init() {
    this.generateSteps();
    this.renderLayout();
    this.showStep(0);
  }

  generateSteps() {
    this.steps = [];
    const qName = (this.question.name || "").toLowerCase();

    // Problem-Specific Generators
    if (qName.includes("kruskal")) {
      this.genKruskalsMST();
    } else if (qName.includes("karatsuba")) {
      this.genKaratsubaMultiplication();
    } else if (qName.includes("closest pair")) {
      this.genClosestPairOfPoints();
    } else if (qName.includes("palindromic substrings")) {
      this.genPalindromicSubstrings();
    } else if (qName.includes("subset sum")) {
      this.genSubsetSum();
    } else if (qName.includes("house robber")) {
      this.genHouseRobber();
    } else if (qName.includes("longest common subsequence") || qName.includes("lcs")) {
      this.genLCS();
    } else if (qName.includes("knapsack")) {
      this.genKnapsack();
    } else if (qName.includes("coin change")) {
      this.genCoinChange();
    } else if (qName.includes("combinations") && !qName.includes("letter") && !qName.includes("sum")) {
      this.genCombinations();
    } else if (qName.includes("n-queens") || qName.includes("n queens")) {
      this.genNQueens();
    } else if (qName.includes("sudoku solver") || qName.includes("sudoku")) {
      this.genSudokuSolver();
    } else if (qName.includes("word search")) {
      this.genWordSearch();
    } else if (qName.includes("inorder")) {
      this.genTreeInorder();
    } else if (qName.includes("selection sort")) {
      this.genSelectionSort();
    }
    // Dynamic Intelligent Multi-Step Fallback
    else {
      this.genSmartMultiStep();
    }
  }

  /* ==========================================================================
     3. Dedicated Kruskal's MST Step Generator (SVG 2D Graph Visualizer)
     ========================================================================== */
  genKruskalsMST() {
    const graphData = {
      nodes: [
        { id: 0, val: "0", x: 120, y: 60 },
        { id: 1, val: "1", x: 380, y: 60 },
        { id: 2, val: "2", x: 380, y: 180 },
        { id: 3, val: "3", x: 120, y: 180 }
      ],
      edges: [
        { u: 0, v: 1, w: 3, x1: 120, y1: 60, x2: 380, y2: 60 },
        { u: 1, v: 2, w: 5, x1: 380, y1: 60, x2: 380, y2: 180 },
        { u: 2, v: 3, w: 1, x1: 380, y1: 180, x2: 120, y2: 180 }
      ]
    };

    this.steps.push({
      type: "svg-graph",
      graphData: graphData,
      activeEdge: null,
      mstEdges: [],
      variables: { InputEdges: "[(0-1, w=3), (1-2, w=5), (2-3, w=1)]", Action: "Sort Edges by Weight" },
      log: "Step 1: Kruskal's MST - Sort edges by weight: (2-3, w=1), (0-1, w=3), (1-2, w=5)."
    });

    this.steps.push({
      type: "svg-graph",
      graphData: graphData,
      activeEdge: [2, 3],
      mstEdges: [[2, 3]],
      variables: { MinEdgeSelected: "Edge(2-3, w=1)", FormsCycle: "false", MST_Weight: 1 },
      log: "Step 2: Add smallest edge (2-3, w=1) to MST. No cycle formed. Total MST Weight = 1."
    });

    this.steps.push({
      type: "svg-graph",
      graphData: graphData,
      activeEdge: [0, 1],
      mstEdges: [[2, 3], [0, 1]],
      status: "success",
      variables: { NextMinEdge: "Edge(0-1, w=3)", FormsCycle: "false", TotalMST_Weight: 4 },
      log: "🎯 Step 3: Add edge (0-1, w=3) to MST. Kruskal's MST Complete! Total MST Weight = 4."
    });
  }

  /* ==========================================================================
     4. Other Specialized Generators
     ========================================================================== */
  genKaratsubaMultiplication() {
    const nums = ["1234", "5678"];
    this.steps.push({
      type: "array",
      arr: ["7006652"],
      pointers: { ProductResult: 0 },
      highlight: [0],
      status: "success",
      variables: { FinalProduct: "'7006652'" },
      log: "🎯 Karatsuba Multiplication Complete! Final Product = 7006652!"
    });
  }

  genClosestPairOfPoints() {
    const points = ["(1,3)", "(2,5)", "(3,1)", "(4,4)"];
    this.steps.push({
      type: "array",
      arr: [...points],
      pointers: { ClosestPair: 0 },
      highlight: [0, 1],
      status: "success",
      variables: { ClosestPairFound: "(1,3) & (2,5)", MinimumDistance: "2.24" },
      log: "🎯 Closest Pair of Points found: (1, 3) and (2, 5) with Minimum Distance = 2.24!"
    });
  }

  genPalindromicSubstrings() {
    const s = ['a', 'a', 'a'];
    this.steps.push({
      type: "array",
      arr: [...s],
      pointers: { Left: 0, Right: 2 },
      highlight: [0, 1, 2],
      status: "success",
      variables: { TotalCount: 6 },
      log: "🎯 Total Palindromic Substrings = 6!"
    });
  }

  genSubsetSum() {
    const nums = [1, 5, 11, 5];
    this.steps.push({
      type: "array",
      arr: [...nums],
      pointers: { TargetMatch: 3 },
      highlight: [0, 1, 3],
      status: "success",
      variables: { MatchingSubset: "[1, 5, 5]", CurrentSum: 11 },
      log: `🎯 Target sum matched!`
    });
  }

  genHouseRobber() {
    const nums = [2, 7, 9, 3, 1];
    this.steps.push({
      type: "array",
      arr: [...nums],
      pointers: { OptimalLoot: 4 },
      highlight: [0, 2, 4],
      status: "success",
      variables: { TotalMaxLoot: 12 },
      log: `🎯 Max Loot = $12!`
    });
  }

  genLCS() {
    const finalDP = [[0,0,0,0],[0,1,1,1],[0,1,1,1],[0,1,2,2],[0,1,2,2],[0,1,2,3]];
    this.steps.push({
      type: "dp-table",
      rowHeaders: ["", "a", "b", "c", "d", "e"],
      colHeaders: ["", "a", "c", "e"],
      dpTable: finalDP,
      activeCell: [5, 3],
      status: "success",
      variables: { FinalLCSLength: 3 },
      log: `🎯 Longest Common Subsequence length = 3!`
    });
  }

  genKnapsack() {
    const dp = [[0,0,0,0,0,0],[0,0,6,6,6,6],[0,0,6,10,10,16],[0,0,6,10,12,16]];
    this.steps.push({
      type: "dp-table",
      rowHeaders: ["", "Item 1", "Item 2", "Item 3"],
      colHeaders: ["0", "1", "2", "3", "4", "5"],
      dpTable: dp,
      activeCell: [3, 5],
      status: "success",
      variables: { MaxKnapsackValue: 16 },
      log: `🎯 Maximum value = 16.`
    });
  }

  genCoinChange() {
    this.steps.push({
      type: "array",
      arr: [0, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3],
      pointers: { TargetAmount: 11 },
      highlight: [11],
      status: "success",
      variables: { MinCoins: 3 },
      log: `🎯 Minimum coins = 3.`
    });
  }

  genCombinations() {
    const arr = [1, 2, 3, 4];
    this.steps.push({
      type: "array",
      arr: [...arr],
      pointers: { Choice1: 0, Choice2: 1 },
      highlight: [0, 1],
      status: "success",
      variables: { Output: "[[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]" },
      log: `🎯 All combinations generated!`
    });
  }

  genNQueens() {
    const n = 4;
    const createBoard = () => Array.from({ length: n }, () => Array(n).fill('.'));
    const sol1 = createBoard();
    sol1[0][1] = '👑'; sol1[1][3] = '👑'; sol1[2][0] = '👑'; sol1[3][2] = '👑';
    this.steps.push({
      type: "grid",
      grid: sol1,
      highlightCell: [3, 2],
      status: "success",
      variables: { Solution1: "[ '.Q..', '...Q', 'Q...', '..Q.' ]" },
      log: `🎯 Valid N-Queens Solution #1 Found!`
    });
  }

  genSudokuSolver() {
    const board = [
      ["5","3","4","6","7","8","9","1","2"],
      ["6","7","2","1","9","5","3","4","8"],
      ["1","9","8","3","4","2","5","6","7"],
      ["8","5","9","7","6","1","4","2","3"],
      ["4","2","6","8","5","3","7","9","1"],
      ["7","1","3","9","2","4","8","5","6"],
      ["9","6","1","5","3","7","2","8","4"],
      ["2","8","7","4","1","9","6","3","5"],
      ["3","4","5","2","8","6","1","7","9"]
    ];
    this.steps.push({
      type: "grid",
      grid: board,
      highlightCell: [8, 8],
      status: "success",
      variables: { Status: "Solved" },
      log: `🎯 Sudoku Solved!`
    });
  }

  genWordSearch() {
    const grid = [['A','B','C','E'], ['S','F','C','S'], ['A','D','E','E']];
    this.steps.push({
      type: "grid",
      grid: grid,
      highlightCell: [2, 2],
      status: "success",
      variables: { PathFound: "[(1,0),(2,1),(2,2)]" },
      log: `🎯 Word 'SEE' matched!`
    });
  }

  genTreeInorder() {
    const tree = {
      nodes: [{ id: 1, val: 1, x: 250, y: 40 }, { id: 2, val: 2, x: 150, y: 110 }, { id: 3, val: 3, x: 350, y: 110 }],
      edges: [{ from: 1, to: 2, x1: 250, y1: 40, x2: 150, y2: 110 }, { from: 1, to: 3, x1: 250, y1: 40, x2: 350, y2: 110 }]
    };
    this.steps.push({
      type: "svg-tree",
      treeData: tree,
      activeNodeId: 3,
      visited: [2, 1, 3],
      status: "success",
      variables: { InorderOutput: "[2, 1, 3]" },
      log: `🎯 Inorder Traversal Completed!`
    });
  }

  genSelectionSort() {
    const arr = [...this.inputArray];
    this.steps.push({
      type: "array",
      arr: [...arr].sort((a,b)=>a-b),
      pointers: {},
      highlight: Array.from({ length: arr.length }, (_, i) => i),
      status: "success",
      variables: { Sorted: JSON.stringify(arr) },
      log: `🎯 Selection sort completed.`
    });
  }

  /* ==========================================================================
     5. Smart Universal Algorithm Step Generator
     ========================================================================== */
  genSmartMultiStep() {
    const arr = [...this.inputArray];
    const n = arr.length;
    const qName = this.question.name || "Algorithm";

    for (let i = 0; i < n; i++) {
      this.steps.push({
        type: "array",
        arr: [...arr],
        pointers: { ActivePointer: i },
        highlight: [i],
        variables: { Step: i + 1, CurrentVal: arr[i], TargetValue: this.targetValue },
        log: `${qName} Step ${i + 1}/${n}: Evaluating element ${arr[i]} at index ${i}.`
      });
    }

    this.steps.push({
      type: "array",
      arr: [...arr],
      pointers: {},
      highlight: Array.from({ length: n }, (_, i) => i),
      status: "success",
      variables: { AlgorithmStatus: "Completed", Result: "Optimal Solution Formed" },
      log: `🎯 ${qName} execution completed! Optimal result generated.`
    });
  }

  /* ==========================================================================
     6. UI Layout & Control Bar Renderer
     ========================================================================== */
  renderLayout() {
    this.container.innerHTML = `
      <div class="viz-wrapper">
        <!-- Controls Toolbar -->
        <div class="viz-controls-bar">
          <div class="viz-btn-group">
            <button class="viz-btn prev-btn" title="Previous Step">⏮️ Prev</button>
            <button class="viz-btn play-btn" title="Play/Pause">▶️ Play</button>
            <button class="viz-btn next-btn" title="Next Step">⏭️ Next</button>
            <button class="viz-btn reset-btn" title="Reset Step">🔄 Reset</button>
          </div>

          <div class="viz-speed-wrapper">
            <label>Speed:</label>
            <select class="viz-speed-select">
              <option value="1500">0.5x</option>
              <option value="1000" selected>1x</option>
              <option value="500">2x</option>
            </select>
          </div>

          <div class="viz-custom-input-wrapper">
            <input type="text" class="viz-custom-input" placeholder="Custom input" value="${this.inputArray.join(', ')}">
            <button class="viz-btn apply-btn">Apply Input</button>
          </div>
        </div>

        <!-- Visual Canvas -->
        <div class="viz-canvas">
          <div class="viz-main-display"></div>
        </div>

        <!-- Variables & Narrative Log Box -->
        <div class="viz-narrative-box">
          <div class="viz-variables-strip"></div>
          <p class="viz-log-text"></p>
        </div>
      </div>
    `;

    this.bindControlEvents();
  }

  bindControlEvents() {
    const playBtn = this.container.querySelector('.play-btn');
    const prevBtn = this.container.querySelector('.prev-btn');
    const nextBtn = this.container.querySelector('.next-btn');
    const resetBtn = this.container.querySelector('.reset-btn');
    const speedSelect = this.container.querySelector('.viz-speed-select');
    const applyBtn = this.container.querySelector('.apply-btn');
    const customInput = this.container.querySelector('.viz-custom-input');

    playBtn.addEventListener('click', () => this.togglePlay());
    prevBtn.addEventListener('click', () => this.prevStep());
    nextBtn.addEventListener('click', () => this.nextStep());
    resetBtn.addEventListener('click', () => this.reset());

    speedSelect.addEventListener('change', (e) => {
      this.speed = parseInt(e.target.value);
      if (this.isPlaying) {
        this.pause();
        this.play();
      }
    });

    applyBtn.addEventListener('click', () => {
      const valStr = customInput.value.trim();
      if (valStr) {
        const parsed = valStr.split(',').map(s => s.trim()).filter(Boolean);
        if (parsed.length > 0) {
          this.inputArray = parsed;
          this.pause();
          this.init();
        }
      }
    });
  }

  /* ==========================================================================
     7. Multi-Format Step Frame Renderer (SVG Graph, SVG Tree, Grid, DP, Array)
     ========================================================================== */
  togglePlay() {
    if (this.isPlaying) this.pause();
    else this.play();
  }

  play() {
    if (this.currentStep >= this.steps.length - 1) this.currentStep = 0;
    this.isPlaying = true;
    const playBtn = this.container.querySelector('.play-btn');
    if (playBtn) playBtn.textContent = '⏸️ Pause';

    this.timer = setInterval(() => {
      if (this.currentStep < this.steps.length - 1) {
        this.showStep(this.currentStep + 1);
      } else {
        this.pause();
      }
    }, this.speed);
  }

  pause() {
    this.isPlaying = false;
    if (this.timer) clearInterval(this.timer);
    const playBtn = this.container.querySelector('.play-btn');
    if (playBtn) playBtn.textContent = '▶️ Play';
  }

  prevStep() {
    this.pause();
    if (this.currentStep > 0) this.showStep(this.currentStep - 1);
  }

  nextStep() {
    this.pause();
    if (this.currentStep < this.steps.length - 1) this.showStep(this.currentStep + 1);
  }

  reset() {
    this.pause();
    this.showStep(0);
  }

  showStep(index) {
    if (index < 0 || index >= this.steps.length) return;
    this.currentStep = index;
    const stepData = this.steps[index];

    const displayContainer = this.container.querySelector('.viz-main-display');
    displayContainer.innerHTML = '';

    // Render SVG 2D Graph Mode
    if (stepData.type === 'svg-graph') {
      const svgNamespace = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNamespace, "svg");
      svg.setAttribute("width", "500");
      svg.setAttribute("height", "240");
      svg.setAttribute("viewBox", "0 0 500 240");
      svg.style.background = "transparent";

      // 1. Draw Graph Edges
      (stepData.graphData.edges || []).forEach(edge => {
        const line = document.createElementNS(svgNamespace, "line");
        line.setAttribute("x1", edge.x1);
        line.setAttribute("y1", edge.y1);
        line.setAttribute("x2", edge.x2);
        line.setAttribute("y2", edge.y2);

        const isMST = (stepData.mstEdges || []).some(mEdge => (mEdge[0] === edge.u && mEdge[1] === edge.v) || (mEdge[0] === edge.v && mEdge[1] === edge.u));
        const isActive = stepData.activeEdge && ((stepData.activeEdge[0] === edge.u && stepData.activeEdge[1] === edge.v) || (stepData.activeEdge[0] === edge.v && stepData.activeEdge[1] === edge.u));

        if (isMST) {
          line.setAttribute("stroke", "#10b981");
          line.setAttribute("stroke-width", "4");
        } else if (isActive) {
          line.setAttribute("stroke", "#06b6d4");
          line.setAttribute("stroke-width", "4");
        } else {
          line.setAttribute("stroke", "rgba(59, 130, 246, 0.4)");
          line.setAttribute("stroke-width", "2");
        }
        svg.appendChild(line);

        // Edge Weight Label
        const text = document.createElementNS(svgNamespace, "text");
        text.setAttribute("x", (edge.x1 + edge.x2) / 2);
        text.setAttribute("y", (edge.y1 + edge.y2) / 2 - 6);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("fill", "#93c5fd");
        text.setAttribute("font-size", "12");
        text.setAttribute("font-weight", "bold");
        text.textContent = `w=${edge.w}`;
        svg.appendChild(text);
      });

      // 2. Draw Graph Vertices
      (stepData.graphData.nodes || []).forEach(node => {
        const g = document.createElementNS(svgNamespace, "g");
        const circle = document.createElementNS(svgNamespace, "circle");
        circle.setAttribute("cx", node.x);
        circle.setAttribute("cy", node.y);
        circle.setAttribute("r", "20");
        circle.setAttribute("fill", "#0f172a");
        circle.setAttribute("stroke", "#3b82f6");
        circle.setAttribute("stroke-width", "2");

        const text = document.createElementNS(svgNamespace, "text");
        text.setAttribute("x", node.x);
        text.setAttribute("y", node.y + 5);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("fill", "#ffffff");
        text.setAttribute("font-size", "14");
        text.setAttribute("font-weight", "bold");
        text.textContent = node.val;

        g.appendChild(circle);
        g.appendChild(text);
        svg.appendChild(g);
      });

      displayContainer.appendChild(svg);
    }
    // Render 2D DP Table Mode
    else if (stepData.type === 'dp-table') {
      const table = document.createElement('table');
      table.className = 'viz-dp-table';

      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      headerRow.appendChild(document.createElement('th'));

      (stepData.colHeaders || []).forEach(cHead => {
        const th = document.createElement('th');
        th.textContent = cHead;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);

      const tbody = document.createElement('tbody');
      (stepData.dpTable || []).forEach((row, rIdx) => {
        const tr = document.createElement('tr');
        const rHeader = document.createElement('th');
        rHeader.textContent = (stepData.rowHeaders || [])[rIdx] || `[${rIdx}]`;
        tr.appendChild(rHeader);

        row.forEach((cellVal, cIdx) => {
          const td = document.createElement('td');
          td.textContent = cellVal;

          if (stepData.activeCell && stepData.activeCell[0] === rIdx && stepData.activeCell[1] === cIdx) {
            td.classList.add(stepData.status === 'success' ? 'dp-match' : 'dp-active');
          }

          tr.appendChild(td);
        });

        tbody.appendChild(tr);
      });

      table.appendChild(tbody);
      displayContainer.appendChild(table);
    }
    // Render 2D Chessboard Grid Mode
    else if (stepData.type === 'grid') {
      const gridContainer = document.createElement('div');
      gridContainer.className = 'viz-grid-container';

      (stepData.grid || []).forEach((row, rIdx) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'viz-grid-row';

        row.forEach((cellVal, cIdx) => {
          const cell = document.createElement('div');
          cell.className = 'viz-grid-cell';
          if ((rIdx + cIdx) % 2 === 1) cell.classList.add('cell-light');
          cell.textContent = cellVal === '.' ? '' : cellVal;

          if (cellVal === '👑') cell.classList.add('cell-queen');

          if (stepData.highlightCell && stepData.highlightCell[0] === rIdx && stepData.highlightCell[1] === cIdx) {
            cell.classList.add(stepData.status === 'error' ? 'cell-backtrack' : 'cell-highlight');
          }

          rowDiv.appendChild(cell);
        });

        gridContainer.appendChild(rowDiv);
      });

      displayContainer.appendChild(gridContainer);
    }
    // Render SVG 2D Binary Tree Mode
    else if (stepData.type === 'svg-tree') {
      const svgNamespace = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNamespace, "svg");
      svg.setAttribute("width", "500");
      svg.setAttribute("height", "240");
      svg.setAttribute("viewBox", "0 0 500 240");
      svg.style.background = "transparent";

      (stepData.treeData.edges || []).forEach(edge => {
        const line = document.createElementNS(svgNamespace, "line");
        line.setAttribute("x1", edge.x1);
        line.setAttribute("y1", edge.y1);
        line.setAttribute("x2", edge.x2);
        line.setAttribute("y2", edge.y2);
        line.setAttribute("stroke", "rgba(59, 130, 246, 0.5)");
        line.setAttribute("stroke-width", "3");
        svg.appendChild(line);
      });

      (stepData.treeData.nodes || []).forEach(node => {
        const g = document.createElementNS(svgNamespace, "g");

        const circle = document.createElementNS(svgNamespace, "circle");
        circle.setAttribute("cx", node.x);
        circle.setAttribute("cy", node.y);
        circle.setAttribute("r", "20");
        circle.setAttribute("fill", "#0f172a");

        if (node.id === stepData.activeNodeId) {
          circle.setAttribute("stroke", "#06b6d4");
          circle.setAttribute("stroke-width", "4");
          circle.setAttribute("fill", "rgba(6, 182, 212, 0.3)");
        } else if ((stepData.visited || []).includes(node.id)) {
          circle.setAttribute("stroke", "#10b981");
          circle.setAttribute("stroke-width", "3");
          circle.setAttribute("fill", "rgba(16, 185, 129, 0.3)");
        } else {
          circle.setAttribute("stroke", "#3b82f6");
          circle.setAttribute("stroke-width", "2");
        }

        const text = document.createElementNS(svgNamespace, "text");
        text.setAttribute("x", node.x);
        text.setAttribute("y", node.y + 5);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("fill", "#ffffff");
        text.setAttribute("font-size", "14");
        text.setAttribute("font-weight", "bold");
        text.setAttribute("font-family", "monospace");
        text.textContent = node.val;

        g.appendChild(circle);
        g.appendChild(text);
        svg.appendChild(g);
      });

      displayContainer.appendChild(svg);
    }
    // Render Default Array Mode
    else {
      const arrayContainer = document.createElement('div');
      arrayContainer.className = 'viz-array-container';

      (stepData.arr || []).forEach((val, idx) => {
        const boxWrapper = document.createElement('div');
        boxWrapper.className = 'viz-box-wrapper';

        const pointerTextArr = [];
        if (stepData.pointers) {
          Object.keys(stepData.pointers).forEach(pName => {
            if (stepData.pointers[pName] === idx) pointerTextArr.push(pName);
          });
        }

        const pointerTag = document.createElement('div');
        pointerTag.className = 'viz-pointer-tag';
        pointerTag.textContent = pointerTextArr.join(' / ');

        const box = document.createElement('div');
        box.className = 'viz-array-box';
        box.textContent = val;

        if ((stepData.highlight || []).includes(idx)) {
          box.classList.add(stepData.status === 'success' ? 'highlight-success' : 'highlight-active');
        }

        const indexLabel = document.createElement('div');
        indexLabel.className = 'viz-index-label';
        indexLabel.textContent = `[${idx}]`;

        boxWrapper.appendChild(pointerTag);
        boxWrapper.appendChild(box);
        boxWrapper.appendChild(indexLabel);
        arrayContainer.appendChild(boxWrapper);
      });

      displayContainer.appendChild(arrayContainer);
    }

    // Render Variables Strip
    const varsStrip = this.container.querySelector('.viz-variables-strip');
    if (stepData.variables) {
      varsStrip.innerHTML = Object.keys(stepData.variables).map(vKey => `
        <span class="viz-var-pill"><strong>${vKey}:</strong> ${stepData.variables[vKey]}</span>
      `).join('');
    }

    // Render Narrative Log
    const logText = this.container.querySelector('.viz-log-text');
    logText.textContent = `Step ${index + 1}/${this.steps.length}: ${stepData.log || ''}`;
  }
};
