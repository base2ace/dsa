document.addEventListener("DOMContentLoaded", function () {
    const questionsList = document.getElementById("questions-list");
    const patternTitle = document.getElementById("pattern-title");
    const sidebarLinks = document.querySelectorAll(".sidebar a");
    const patternDescription = document.getElementById("pattern-description");

// To preserve the line breaks, replace \n with <br>
function formatDescription(description) {
    return description.replace(/\n/g, "<br>");
}

const patternDescriptions = {
    "two-pointers": `
        The <strong>Two Pointers</strong> technique is used to solve problems involving arrays or sequences by using two pointers 
        to traverse the data structure. The two pointers typically move towards each other (from opposite ends) or 
        move in the same direction (from the same starting point) depending on the problem. 
        This technique is often used to solve problems like finding pairs, subarrays, or other patterns in linear time.<br><br>
        
        <strong>Example Problem</strong>: Finding if there exists a pair in a sorted array that sums to a target value.<br><br>
        
        <strong>Example</strong>:<br>
        Given a sorted array of integers, <code>arr = [1, 2, 3, 4, 6]</code>, and a target sum of 6, use the two-pointers technique 
        to find if there exists a pair that sums to the target.<br><br>
        
        <strong>Approach</strong>:<br>
        1. Initialize two pointers, one at the beginning (<code>left = 0</code>) and the other at the end (<code>right = arr.length - 1</code>).<br>
        2. Check the sum of the values at both pointers: <code>arr[left] + arr[right]</code>.<br>
        3. If the sum equals the target, return <code>true</code> (pair found).<br>
        4. If the sum is smaller than the target, move the <code>left</code> pointer rightwards (<code>left++</code>).<br>
        5. If the sum is larger than the target, move the <code>right</code> pointer leftwards (<code>right--</code>).<br>
        6. Repeat until the pointers meet.<br><br>
        
        <strong>Time Complexity</strong>: O(n) because we only traverse the array once.<br>
        <strong>Space Complexity</strong>: O(1) as we only use a constant amount of space for the two pointers.
    `,

    "sliding-window": `
        The <strong>Sliding Window</strong> technique is used to solve problems involving subarrays or substrings by maintaining 
        a window that slides over the data structure. This technique works by expanding the window to include more 
        elements and shrinking it to exclude elements, keeping track of relevant information within the window.<br><br>
        
        The sliding window is especially useful for problems like finding the maximum sum of a subarray of a given size, 
        or finding the longest substring with unique characters.<br><br>
        
        <strong>Example Problem</strong>: Finding the longest substring without repeating characters.<br><br>
        
        <strong>Example</strong>:<br>
        Given a string <code>s = "abcabcbb"</code>, find the length of the longest substring without repeating characters.<br><br>
        
        <strong>Approach</strong>:<br>
        1. Initialize two pointers, <code>left</code> and <code>right</code>, both starting at the beginning of the string.<br>
        2. Expand the window by moving <code>right</code> and include characters in the current window.<br>
        3. Keep track of the characters using a hashmap to count their frequency within the window.<br>
        4. If a character is repeated, move the <code>left</code> pointer to the right to shrink the window until there are no repeated characters.<br>
        5. Track the maximum length of the substring without repeating characters.<br><br>
        
        <strong>Example Execution</strong>:<br>
        - Start with <code>left = 0</code> and <code>right = 0</code>, and expand the window.<br>
        - When <code>right</code> reaches index 3, the window contains "abc", which is unique. The length of the substring is 3.<br>
        - When <code>right</code> moves to index 4, the window now contains "abca", with a repeating "a". Move <code>left</code> to 1 to shrink the window.<br>
        - Continue this process until the entire string is processed.<br><br>
        
        <strong>Time Complexity</strong>: O(n) because we only iterate over the string once.<br>
        <strong>Space Complexity</strong>: O(min(n, m)) where <code>n</code> is the length of the string and <code>m</code> is the size of the character set, 
        which is the space used to store characters in the sliding window.
    `,
	
    "greedy": `
        The <strong>Greedy Algorithm</strong> technique is used to solve optimization problems by making locally optimal choices 
        at each step, with the hope of finding a global optimum. The idea is to select the best option available at each 
        decision point without worrying about the consequences of previous decisions.<br><br>
        
        Greedy algorithms are typically used in problems where you can make decisions step-by-step, and once you make 
        a choice, you don't need to reconsider it.<br><br>
        
        <strong>Example Problem</strong>: Activity Selection Problem.<br><br>
        
        <strong>Example</strong>:<br>
        Given a set of activities with their start and finish times, select the maximum number of activities that don't 
        overlap.<br><br>
        
        <strong>Approach</strong>:<br>
        1. Sort the activities by their finish time.<br>
        2. Select the first activity.<br>
        3. For each subsequent activity, select it if its start time is greater than or equal to the finish time of the 
        last selected activity.<br><br>
        
        <strong>Example Execution</strong>:<br>
        - Given activities with start times [1, 3, 0, 5, 8, 5] and finish times [2, 4, 6, 7, 9, 9].<br>
        - Select the activity (1, 2), then (3, 4), and finally (8, 9).<br><br>
        
        <strong>Time Complexity</strong>: O(n log n) because we need to sort the activities.<br>
        <strong>Space Complexity</strong>: O(1), as we are using a constant amount of space for tracking the selected activities.
    `,
	
    "dynamic-programming": `
        The <strong>Dynamic Programming</strong> technique is used to solve problems by breaking them down into simpler subproblems 
        and storing the solutions to these subproblems to avoid redundant work. This technique is typically used when the problem 
        can be broken down into overlapping subproblems and has an optimal substructure.<br><br>
        
        Dynamic programming involves two key techniques:
        <ul>
            <li><strong>Memoization</strong>: Storing the results of expensive function calls and reusing them when needed.</li>
            <li><strong>Tabulation</strong>: Building up a table (or array) iteratively to store solutions to subproblems.</li>
        </ul><br>
        
        <strong>Example Problem</strong>: The Knapsack Problem.<br><br>
        
        <strong>Example</strong>:<br>
        You are given a set of items, each with a weight and a value, and a maximum weight capacity. Your goal is to 
        determine the maximum value you can obtain by picking items without exceeding the weight capacity.<br><br>
        
        <strong>Approach</strong>:<br>
        1. Create a 2D array \`dp\` where \`dp[i][w]\` represents the maximum value that can be obtained with the first 
        \`i\` items and a weight limit \`w\`.<br>
        2. If the weight of the \`i\`-th item is less than or equal to the current weight limit \`w\`, choose the maximum 
        between including the item or excluding it.<br>
        3. Otherwise, exclude the item.<br><br>
        
        <strong>Example Execution</strong>:<br>
        Given items with weights [1, 2, 3] and values [10, 20, 30], and a knapsack with capacity 4.<br>
        The 2D array \`dp\` will help us calculate the optimal value at each step.<br><br>
        
        <strong>Time Complexity</strong>: O(n * W) where \`n\` is the number of items and \`W\` is the weight capacity.<br>
        <strong>Space Complexity</strong>: O(n * W) for the DP table.
    `,
	
    "backtracking": `
        The <strong>Backtracking</strong> technique is used to solve problems by incrementally building a solution 
        and abandoning it (backtracking) if it is found to be invalid or incomplete. The technique is often applied to 
        problems that involve making decisions step by step, where each decision leads to subsequent decisions. Backtracking 
        is particularly useful in combinatorial problems, where a solution is built up piece by piece and can be discarded 
        if it violates constraints.<br><br>
        
        <strong>Key Concepts:</strong>
        <ul>
            <li><strong>Recursive Exploration</strong>: The solution space is explored recursively by making a series of choices.</li>
            <li><strong>Pruning</strong>: If a partial solution is found to be invalid, the algorithm "backtracks" and discards the solution.</li>
        </ul><br>
        
        <strong>Example Problem</strong>: The N-Queens Problem.<br><br>
        
        <strong>Example</strong>:<br>
        You are given an N x N chessboard, and your goal is to place N queens on the board such that no two queens 
        threaten each other. This means no two queens can be in the same row, column, or diagonal.<br><br>
        
        <strong>Approach</strong>:<br>
        1. Start by placing a queen in the first row and explore all possible positions in that row.<br>
        2. Move to the next row and try placing a queen in each column, checking if it is safe (i.e., not in the same column or diagonal as any previously placed queens).<br>
        3. If a valid placement is found, continue placing queens in the next row.<br>
        4. If a row is reached where no valid placement is possible, backtrack by removing the queen from the previous row and trying the next possible position.<br>
        5. Repeat this process until all queens are placed on the board or until all possibilities have been explored.<br><br>
        
        <strong>Example Execution</strong>:<br>
        For a 4x4 board, the algorithm places queens step by step and backtracks if a conflict is detected. This results in 
        the solution where the queens are placed such that no two queens threaten each other.<br><br>
        
        <strong>Time Complexity</strong>: O(N!) where N is the number of queens. In the worst case, we need to check all 
        possible placements for each queen.<br>
        <strong>Space Complexity</strong>: O(N) for the recursion stack and storing the positions of queens on the board.
    `,

    "divide-and-conquer": `
        The <strong>Divide and Conquer</strong> technique is used to solve problems by recursively breaking them down into smaller subproblems, 
        solving each subproblem individually, and then combining their results to obtain the final solution. This technique is effective for problems 
        that can be divided into similar smaller subproblems, where solving each smaller problem and combining them is more efficient than solving 
        the entire problem at once.<br><br>
        
        <strong>Key Concepts:</strong>
        <ul>
            <li><strong>Divide</strong>: Break the problem into smaller subproblems that are similar to the original problem.</li>
            <li><strong>Conquer</strong>: Solve each subproblem independently, often recursively.</li>
            <li><strong>Combine</strong>: Merge the results of the subproblems to form the solution to the original problem.</li>
        </ul><br>
        
        <strong>Example Problem</strong>: Merge Sort.<br><br>
        
        <strong>Example</strong>:<br>
        Given an unsorted array of integers, the task is to sort the array using the divide and conquer strategy.<br><br>
        
        <strong>Approach</strong>:<br>
        1. **Divide**: Split the unsorted array into two halves.<br>
        2. **Conquer**: Recursively sort each half by repeating the divide and conquer process.<br>
        3. **Combine**: Merge the two sorted halves into a single sorted array.<br><br>
        
        <strong>Example Execution</strong>:<br>
        Given the array <code>[38, 27, 43, 3, 9, 82, 10]</code>, the divide and conquer approach splits the array into smaller arrays 
        until each array has only one element. Then, the arrays are merged back together while sorting them, resulting in the sorted array: 
        <code>[3, 9, 10, 27, 38, 43, 82]</code>.<br><br>
        
        <strong>Time Complexity</strong>: O(n log n), as the array is split into halves at each level of recursion (log n levels), 
        and each level requires linear time (O(n)) to merge the results.<br>
        <strong>Space Complexity</strong>: O(n), as additional space is required for the temporary arrays during the merge process.
    `,
	
    "graph-traversal": `
        The <strong>Graph Traversal</strong> technique is used to explore all the nodes and edges of a graph systematically. 
        Graph traversal is crucial for various applications such as finding the shortest path, detecting cycles, or exploring all connected nodes in a graph. 
        The two primary graph traversal techniques are **Breadth-First Search (BFS)** and **Depth-First Search (DFS)**.<br><br>
        
        <strong>Key Concepts:</strong>
        <ul>
            <li><strong>Breadth-First Search (BFS)</strong>: Explores the graph level by level, starting from a given node and visiting all its neighbors before moving on to their neighbors. It uses a queue data structure to manage the nodes to be visited.</li>
            <li><strong>Depth-First Search (DFS)</strong>: Explores the graph by going deep into each branch before backtracking. It uses a stack (either implicitly via recursion or explicitly) to keep track of nodes to be visited.</li>
        </ul><br>
        
        <strong>Example Problem</strong>: Finding the Shortest Path in an Unweighted Graph.<br><br>
        
        <strong>Example</strong>:<br>
        Given an unweighted graph represented as an adjacency list, find the shortest path from a source node to a destination node.<br><br>
        
        <strong>Approach (using BFS)</strong>:<br>
        1. Initialize a queue and enqueue the source node.<br>
        2. While the queue is not empty, dequeue a node and check its neighbors.<br>
        3. For each neighbor, if it has not been visited, mark it as visited and enqueue it.<br>
        4. Track the distance from the source node to each visited node.<br>
        5. Once the destination node is reached, the shortest path is found.<br><br>
        
        <strong>Example Execution</strong>:<br>
        For a graph represented as an adjacency list:
        <code>graph = { 0: [1, 2], 1: [0, 3], 2: [0, 3], 3: [1, 2] }</code>
        Starting from node 0, the BFS will explore the graph level by level, and the shortest path from node 0 to node 3 is found.<br><br>
        
        <strong>Time Complexity</strong>: O(V + E) where V is the number of vertices and E is the number of edges. Both BFS and DFS visit each vertex and edge once.<br>
        <strong>Space Complexity</strong>: O(V) for the queue or recursion stack, as each node is stored while it is being processed.
    `,
	
    "bit-manipulation": `
        The <strong>Bit Manipulation</strong> technique involves manipulating individual bits of data in a number. 
        It is an efficient way to solve problems that involve binary numbers or require low-level operations. By using bitwise operators, 
        problems such as determining the parity of a number, flipping specific bits, or finding the unique element in a list can be solved efficiently.<br><br>
        
        <strong>Key Concepts:</strong>
        <ul>
            <li><strong>Bitwise AND (&amp;)</strong>: This operator compares two bits and returns 1 if both bits are 1, otherwise returns 0.</li>
            <li><strong>Bitwise OR (|)</strong>: This operator compares two bits and returns 1 if at least one bit is 1, otherwise returns 0.</li>
            <li><strong>Bitwise XOR (^)</strong>: This operator compares two bits and returns 1 if the bits are different, otherwise returns 0.</li>
            <li><strong>Bitwise NOT (~)</strong>: This operator flips the bits (1s become 0s and vice versa).</li>
            <li><strong>Left Shift (<<)</strong>: Shifts the bits of a number to the left, effectively multiplying the number by 2 for each shift.</li>
            <li><strong>Right Shift (>>)</strong>: Shifts the bits of a number to the right, effectively dividing the number by 2 for each shift.</li>
        </ul><br>
        
        <strong>Example Problem</strong>: Finding the unique number in an array where every element appears twice except one.<br><br>
        
        <strong>Example</strong>:<br>
        Given an array of integers, where every element appears twice except for one, find the element that appears only once.<br><br>
        
        <strong>Approach</strong>:<br>
        1. Initialize a variable <code>result = 0</code>.<br>
        2. Iterate through the array and XOR each element with the current <code>result</code>: <code>result ^= num</code>.<br>
        3. The property of XOR ensures that pairs of equal numbers cancel out, leaving the unique number in the <code>result</code>.<br><br>
        
        <strong>Example Execution</strong>:<br>
        For the array <code>[4, 1, 2, 1, 2]</code>, the XOR operation is performed as follows:
        <code>result = 0 ^ 4 ^ 1 ^ 2 ^ 1 ^ 2 = 4</code>, so the unique number is <code>4</code>.<br><br>
        
        <strong>Time Complexity</strong>: O(n) where <code>n</code> is the number of elements in the array, as each element is processed once.<br>
        <strong>Space Complexity</strong>: O(1), as only a constant amount of space is used (the <code>result</code> variable).
    `,
	
    "prefix-sum": `
        The <strong>Prefix Sum</strong> technique is used to solve problems that require efficient computation of cumulative sums over a range of elements, 
        such as finding the sum of elements in a subarray. It involves preprocessing an array to store the cumulative sum up to each index, 
        allowing for fast range sum queries.<br><br>
        
        <strong>Key Concepts:</strong>
        <ul>
            <li><strong>Prefix Sum Array</strong>: An array where each element at index <code>i</code> represents the sum of all elements from index 0 to <code>i</code> in the original array.</li>
            <li><strong>Range Sum Query</strong>: By using a prefix sum array, we can compute the sum of elements in any subarray <code>arr[l...r]</code> efficiently.</li>
        </ul><br>
        
        <strong>Example Problem</strong>: Finding the sum of elements in a subarray given an array of integers.<br><br>
        
        <strong>Example</strong>:<br>
        Given an array <code>arr = [1, 2, 3, 4, 5]</code>, calculate the sum of elements in the subarray from index 1 to 3 (i.e., the sum of <code>[2, 3, 4]</code>).<br><br>
        
        <strong>Approach</strong>:<br>
        1. First, preprocess the array to create a prefix sum array where each element at index <code>i</code> is the sum of all elements in <code>arr[0...i]</code>.<br>
        2. The prefix sum array for <code>arr = [1, 2, 3, 4, 5]</code> will be <code>prefixSum = [1, 3, 6, 10, 15]</code>.<br>
        3. To calculate the sum of the subarray <code>arr[l...r]</code>, use the formula:
        <pre>sum = prefixSum[r] - (l > 0 ? prefixSum[l-1] : 0)</pre><br>
        4. For the subarray from index 1 to 3, <code>sum = prefixSum[3] - prefixSum[0] = 10 - 1 = 9</code>.<br><br>
        
        <strong>Example Execution</strong>:<br>
        For the array <code>arr = [1, 2, 3, 4, 5]</code> and the query for the subarray from index 1 to 3, the prefix sum array is:
        <code>prefixSum = [1, 3, 6, 10, 15]</code>, and the sum is <code>prefixSum[3] - prefixSum[0] = 10 - 1 = 9</code>.<br><br>
        
        <strong>Time Complexity</strong>: O(n) for preprocessing the array to create the prefix sum array, and O(1) for each range sum query.<br>
        <strong>Space Complexity</strong>: O(n) for storing the prefix sum array.
    `,
	
    "recursion": `
        The <strong>Recursion</strong> technique is a fundamental concept in computer science where a function calls itself to solve a problem. 
        Recursion is typically used to break down problems into smaller, more manageable subproblems. Each recursive call works on a smaller 
        portion of the problem until a base case is reached, at which point the function returns a solution.<br><br>
        
        <strong>Key Concepts:</strong>
        <ul>
            <li><strong>Base Case</strong>: The simplest, smallest instance of the problem, which can be solved directly without further recursion.</li>
            <li><strong>Recursive Case</strong>: The step where the problem is divided into smaller subproblems and the function calls itself to solve these subproblems.</li>
        </ul><br>

        <strong>Example Problem</strong>: Calculating the factorial of a number.<br><br>
        
        <strong>Example</strong>:<br>
        The factorial of a number <code>n</code>, denoted as <code>n!</code>, is the product of all positive integers less than or equal to <code>n</code>. 
        The factorial of a number can be defined as:<br>
        <pre>n! = n * (n - 1) * (n - 2) * ... * 1</pre>
        And the recursive definition is:<br>
        <pre>n! = n * (n - 1)!</pre>
        The base case is: <code>0! = 1</code>.<br><br>
        
        <strong>Approach</strong>:<br>
        1. Define a function <code>factorial(n)</code> that calculates the factorial of <code>n</code> recursively.<br>
        2. If <code>n</code> equals 0, return 1 as the base case.<br>
        3. Otherwise, call the function recursively with <code>n - 1</code> and multiply the result by <code>n</code>.<br><br>
        
        <strong>Example Execution</strong>:<br>
        For <code>factorial(4)</code>, the recursive calls would look like:
        <pre>factorial(4) = 4 * factorial(3)</pre>
        <pre>factorial(3) = 3 * factorial(2)</pre>
        <pre>factorial(2) = 2 * factorial(1)</pre>
        <pre>factorial(1) = 1 * factorial(0)</pre>
        <pre>factorial(0) = 1 (base case)</pre><br>
        Then the recursion unwinds, returning the result: <code>4 * 3 * 2 * 1 = 24</code>.<br><br>
        
        <strong>Time Complexity</strong>: O(n) where <code>n</code> is the input number, as there are <code>n</code> recursive calls.<br>
        <strong>Space Complexity</strong>: O(n) for the recursive call stack, as each recursive call adds a new frame to the stack.
    `,
	
    "sorting": `
        The <strong>Sorting</strong> technique is used to arrange the elements of a data structure (usually an array or list) in a particular order. 
        Sorting is a fundamental operation in computer science, and many algorithms rely on sorting to optimize other operations or solve problems. 
        The common orderings are ascending and descending, though other custom orders may also be used.<br><br>
        
        <strong>Key Sorting Algorithms:</strong>
        <ul>
            <li><strong>Bubble Sort</strong>: A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.</li>
            <li><strong>Selection Sort</strong>: This algorithm repeatedly selects the smallest (or largest) element from the unsorted part and swaps it with the element at the beginning of the unsorted part.</li>
            <li><strong>Insertion Sort</strong>: It builds the sorted array one item at a time, by taking elements from the unsorted part and inserting them into the correct position in the sorted part.</li>
            <li><strong>Merge Sort</strong>: A divide-and-conquer algorithm that splits the list into halves, recursively sorts them, and then merges the sorted halves.</li>
            <li><strong>Quick Sort</strong>: Another divide-and-conquer algorithm that selects a pivot element, partitions the array into two sub-arrays, and recursively sorts them.</li>
            <li><strong>Heap Sort</strong>: A comparison-based sorting algorithm that uses a binary heap to build a heap structure and sort elements.</li>
        </ul><br>

        <strong>Example Problem</strong>: Sorting an array of integers.<br><br>
        
        <strong>Example</strong>:<br>
        Given an array of integers <code>arr = [5, 2, 9, 1, 5, 6]</code>, we want to sort this array in ascending order.<br><br>
        
        <strong>Approach</strong>:<br>
        We can use one of the sorting algorithms to sort the array. Let’s use **Merge Sort** for this example.<br><br>
        
        <strong>Merge Sort Approach</strong>:<br>
        1. Divide the array into two halves.<br>
        2. Recursively sort both halves.<br>
        3. Merge the two sorted halves into a single sorted array.<br><br>
        
        <strong>Example Execution</strong>:<br>
        Given the array <code>arr = [5, 2, 9, 1, 5, 6]</code>, the recursive steps of merge sort would look like this:
        <ul>
            <li>Divide into two halves: <code>[5, 2, 9]</code> and <code>[1, 5, 6]</code>.</li>
            <li>Recursively sort each half: <code>[2, 5, 9]</code> and <code>[1, 5, 6]</code>.</li>
            <li>Merge the two halves: <code>[1, 2, 5, 5, 6, 9]</code>.</li>
        </ul><br><br>

        <strong>Time Complexity</strong>: O(n log n) for both average and worst-case scenarios in Merge Sort, where <code>n</code> is the number of elements in the array.<br>
        <strong>Space Complexity</strong>: O(n) for Merge Sort due to the additional space used for the auxiliary array during merging.<br><br>

        <strong>Space and Time Complexity of Other Algorithms:</strong>
        <ul>
            <li><strong>Bubble Sort</strong>: Time Complexity O(n²), Space Complexity O(1)</li>
            <li><strong>Selection Sort</strong>: Time Complexity O(n²), Space Complexity O(1)</li>
            <li><strong>Insertion Sort</strong>: Time Complexity O(n²), Space Complexity O(1)</li>
            <li><strong>Quick Sort</strong>: Time Complexity O(n log n) on average, O(n²) in the worst case, Space Complexity O(log n)</li>
            <li><strong>Heap Sort</strong>: Time Complexity O(n log n), Space Complexity O(1)</li>
        </ul>
    `,

    "hashing": `
        The <strong>Hashing</strong> technique is used to efficiently map data to unique values using a hash function. 
        A hash function takes an input (or 'key') and returns a fixed-size string, often a number, which represents the data. 
        Hashing is commonly used to implement data structures like hash tables, hash maps, and sets, which provide quick lookups, insertions, and deletions.<br><br>
        
        Hashing is particularly useful when you need to store and retrieve data in constant time, O(1), and avoid collisions 
        (when two different inputs produce the same hash). Hash functions are designed to minimize collisions, but they are not 
        entirely avoidable. When collisions happen, techniques like chaining or open addressing are used to resolve them.<br><br>
        
        <strong>Common Hashing Structures:</strong>
        <ul>
            <li><strong>Hash Table</strong>: A key-value store that uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.</li>
            <li><strong>Hash Map</strong>: A type of hash table where the keys are unique and can be used to store and retrieve values efficiently.</li>
            <li><strong>Set</strong>: A collection of unique elements, often implemented using hashing to allow for quick membership testing.</li>
        </ul><br>

        <strong>Example Problem</strong>: Checking if two arrays have the same elements (with duplicates).<br><br>
        
        <strong>Example</strong>:<br>
        Given two arrays <code>arr1 = [1, 2, 3, 4, 5]</code> and <code>arr2 = [5, 4, 3, 2, 1]</code>, check if they contain the same elements, 
        even if they are in different orders.<br><br>
        
        <strong>Approach</strong>:<br>
        1. Create a hash map to store the frequency of each element in the first array.<br>
        2. Iterate through the second array and check if each element exists in the hash map with the same frequency.<br>
        3. If all elements match, return true. Otherwise, return false.<br><br>
        
        <strong>Example Execution</strong>:<br>
        For <code>arr1 = [1, 2, 3, 4, 5]</code> and <code>arr2 = [5, 4, 3, 2, 1]</code>:
        <ul>
            <li>Create a hash map for <code>arr1</</code>: {1: 1, 2: 1, 3: 1, 4: 1, 5: 1}</li>
            <li>Check each element of <code>arr2</code> against the map: all elements are found with the correct frequency.</li>
            <li>Return true, since the arrays are equal when disregarding order.</li>
        </ul><br><br>

        <strong>Time Complexity</strong>: O(n), where <code>n</code> is the number of elements in the arrays, since each lookup and insertion in the hash map takes constant time.<br>
        <strong>Space Complexity</strong>: O(n), where <code>n</code> is the number of elements in the array, as we store each element's frequency in the hash map.<br><br>

        <strong>Handling Collisions in Hashing:</strong>
        <ul>
            <li><strong>Chaining</strong>: If two keys hash to the same index, store them in a linked list at that index.</li>
            <li><strong>Open Addressing</strong>: If a collision occurs, find another open slot in the table using methods like linear probing, quadratic probing, or double hashing.</li>
        </ul>
    `,

    "monotonic-stack": `
        The <strong>Monotonic Stack</strong> technique is used to solve problems involving stacks where the elements in the stack
        either increase or decrease monotonically (i.e., the stack maintains a specific order). This technique is especially 
        useful when solving problems related to finding the next greater or smaller element in an array or for finding elements 
        that satisfy specific constraints, like maintaining a range or order.<br><br>
        
        A monotonic stack can either be:<br>
        <ul>
            <li><strong>Increasing</strong>: where the elements are pushed onto the stack in an increasing order, and each new element is smaller 
            than the previous one.</li>
            <li><strong>Decreasing</strong>: where the elements are pushed onto the stack in a decreasing order, and each new element is larger 
            than the previous one.</li>
        </ul><br>
        
        This technique is highly efficient for solving problems with linear time complexity, O(n), where n is the number of elements in the array.<br><br>
        
        <strong>Example Problem</strong>: Finding the next greater element for each element in the array.<br><br>
        
        <strong>Example</strong>:<br>
        Given an array <code>arr = [4, 5, 2, 10, 8]</code>, for each element in the array, find the next greater element.<br><br>
        
        <strong>Approach</strong>:<br>
        1. Initialize an empty stack.<br>
        2. Iterate through the array from left to right.<br>
        3. For each element, check if the stack is empty or if the current element is greater than the element at the top of the stack.<br>
        4. If the current element is greater than the stack's top, pop the stack and record the current element as the next greater element.<br>
        5. Push the current element onto the stack.<br>
        6. Repeat until the end of the array.<br><br>
        
        <strong>Example Execution</strong>:<br>
        For <code>arr = [4, 5, 2, 10, 8]</code>:
        <ul>
            <li>Start with an empty stack.</li>
            <li>Process element <code>4</code>, push it onto the stack.</li>
            <li>Process element <code>5</code>, pop <code>4</code> (because 5 > 4), and record <code>5</code> as the next greater element of <code>4</code>.</li>
            <li>Push <code>5</code> onto the stack.</li>
            <li>Process element <code>2</code>, push it onto the stack.</li>
            <li>Process element <code>10</code>, pop <code>2</code> and <code>5</code> (because 10 > 2 and 10 > 5), and record <code>10</code> as the next greater element for both.</li>
            <li>Push <code>10</code> onto the stack.</li>
            <li>Process element <code>8</code>, push it onto the stack.</li>
            <li>Final result: [5, 10, 10, -1, -1] (next greater elements for each).</li>
        </ul><br><br>
        
        <strong>Time Complexity</strong>: O(n), where n is the number of elements in the array. Each element is pushed and popped from the stack at most once.<br>
        <strong>Space Complexity</strong>: O(n), where n is the number of elements in the array, for storing the stack.<br><br>

        <strong>Use Cases of Monotonic Stack:</strong>
        <ul>
            <li><strong>Next Greater Element</strong>: Find the next greater element for each element in an array.</li>
            <li><strong>Previous Greater Element</strong>: Find the previous greater element for each element in an array.</li>
            <li><strong>Largest Rectangle in Histogram</strong>: Find the largest rectangle in a histogram (array of heights).</li>
            <li><strong>Valid Parentheses</strong>: Check whether a string has valid parentheses using a monotonic stack.</li>
        </ul>
    `,

    "tree-traversal": `
        <strong>Tree Traversal</strong> refers to the process of visiting each node in a tree data structure exactly once in a systematic way. 
        Tree traversal is an essential concept for many tree-based algorithms and can be classified into three main types: Pre-order, In-order, and Post-order.<br><br>
        
        Tree traversal is crucial for operations like searching, inserting, and deleting nodes in binary trees, binary search trees, or other types of trees.<br><br>

        <strong>Types of Tree Traversal</strong>:<br>
        <ul>
            <li><strong>Pre-order Traversal</strong>: In pre-order traversal, the nodes are recursively visited in this order:
                <code>Root -> Left Subtree -> Right Subtree</code>.</li>
            <li><strong>In-order Traversal</strong>: In in-order traversal, the nodes are recursively visited in this order:
                <code>Left Subtree -> Root -> Right Subtree</code>. This is particularly useful for binary search trees because it visits the nodes in ascending order.</li>
            <li><strong>Post-order Traversal</strong>: In post-order traversal, the nodes are recursively visited in this order:
                <code>Left Subtree -> Right Subtree -> Root</code>.</li>
        </ul><br>

        <strong>Example Problem</strong>: Given a binary tree, perform pre-order, in-order, and post-order traversals.<br><br>
        
        <strong>Example</strong>:<br>
        Given a binary tree:<br>
        <code>       1</code><br>
        <code>     /   \\</code><br>
        <code>    2     3</code><br>
        <code>   / \\</code><br>
        <code>  4   5</code><br><br>

        The results of the tree traversals would be as follows:<br><br>
        
        <strong>Pre-order Traversal</strong>: <code>1, 2, 4, 5, 3</code><br>
        <strong>In-order Traversal</strong>: <code>4, 2, 5, 1, 3</code><br>
        <strong>Post-order Traversal</strong>: <code>4, 5, 2, 3, 1</code><br><br>
        
        <strong>Approach</strong>:<br>
        - **Pre-order**: Visit the root node first, then traverse the left subtree, followed by the right subtree.<br>
        - **In-order**: Traverse the left subtree first, then visit the root node, followed by the right subtree.<br>
        - **Post-order**: Traverse the left subtree first, then the right subtree, and finally visit the root node.<br><br>
        
        <strong>Time Complexity</strong>: O(n), where n is the number of nodes in the tree, because each node is visited exactly once.<br>
        <strong>Space Complexity</strong>: O(h), where h is the height of the tree. The space complexity is proportional to the recursion stack size in the case of recursive tree traversal.<br><br>
        
        <strong>Use Cases of Tree Traversal:</strong>
        <ul>
            <li><strong>Binary Search Tree (BST) Traversal</strong>: In-order traversal is often used to get elements in sorted order.</li>
            <li><strong>Expression Trees</strong>: Traversals are used to evaluate or print expressions represented as binary trees.</li>
            <li><strong>Binary Tree Algorithms</strong>: Traversals are used for implementing algorithms such as searching for a node, calculating depth, and others.</li>
            <li><strong>Level-order Traversal</strong>: A breadth-first traversal technique for visiting nodes level by level (using a queue).</li>
        </ul>
    `,

    "linked-list-manipulation": `
        <strong>Linked List Manipulation</strong> refers to the operations and techniques applied to manipulate linked lists. A linked list is a linear data structure where elements, called nodes, are connected via pointers. Each node has two parts:
        - The <strong>data</strong> or value part.
        - The <strong>next</strong> pointer which points to the next node in the sequence.<br><br>
        
        Linked lists are commonly used in problems involving data insertion, deletion, or searching. Operations on linked lists include:
        - **Inserting nodes** at the beginning, middle, or end of the list.
        - **Deleting nodes** based on specific conditions.
        - **Reversing** a linked list.
        - **Detecting cycles** (loop detection).
        - **Merging** two sorted linked lists.<br><br>

        <strong>Types of Linked Lists</strong>:<br>
        <ul>
            <li><strong>Single Linked List</strong>: Each node points to the next node in the list.</li>
            <li><strong>Doubly Linked List</strong>: Each node has two pointers: one pointing to the next node and the other pointing to the previous node.</li>
            <li><strong>Circular Linked List</strong>: The last node points back to the first node, forming a circular structure.</li>
        </ul><br>
        
        <strong>Example Problem</strong>: Reverse a singly linked list.<br><br>
        
        <strong>Example</strong>:<br>
        Given a singly linked list: <code>head -> 1 -> 2 -> 3 -> 4 -> 5</code>, reverse the list to: <code>head -> 5 -> 4 -> 3 -> 2 -> 1</code>.<br><br>
        
        <strong>Approach</strong>:<br>
        1. Initialize three pointers: <code>prev</code> as <code>null</code>, <code>current</code> as <code>head</code>, and <code>next</code> as <code>null</code>.<br>
        2. Traverse the linked list. For each node:
            - Save the next node <code>next = current.next</code>.
            - Reverse the current node's pointer by setting <code>current.next = prev</code>.
            - Move the <code>prev</code> pointer to the current node and <code>current</code> to the next node.<br>
        3. Continue until all nodes are reversed.<br><br>
        
        <strong>Time Complexity</strong>: O(n), where n is the number of nodes in the list, because we need to traverse each node once.<br>
        <strong>Space Complexity</strong>: O(1), because we are only using a constant amount of extra space for the pointers.<br><br>
        
        <strong>Common Linked List Manipulation Problems</strong>:<br>
        <ul>
            <li><strong>Detecting Cycle (Floyd's Tortoise and Hare)</strong>: Detect if a linked list has a cycle using two pointers moving at different speeds.</li>
            <li><strong>Finding the Middle of a Linked List</strong>: Use the two-pointer technique to find the middle node of the list.</li>
            <li><strong>Removing N-th Node from the End</strong>: Traverse the list to remove a node from the end by using two pointers.</li>
            <li><strong>Reversing K Nodes in a Linked List</strong>: Reverse nodes in groups of k while preserving the rest of the list.</li>
            <li><strong>Merge Two Sorted Linked Lists</strong>: Merge two sorted linked lists into a single sorted list.</li>
        </ul>
    `,

    "combination-generation": `
        <strong>Combination Generation</strong> refers to the process of generating all possible subsets or combinations of a set of elements, typically used in combinatorics and optimization problems. Unlike permutations, where the order of elements matters, combinations focus on selecting a subset of elements without considering the order.<br><br>

        Common use cases of combination generation include:
        - Generating all possible combinations of elements from a set.
        - Solving problems where order does not matter but selection does.
        - Finding combinations that meet certain criteria, such as summing to a specific value.<br><br>

        The key to solving combination problems is to generate all possible ways of picking elements from a set while ensuring no repeated selections.<br><br>

        <strong>Example Problem</strong>: Generate all combinations of size <code>k</code> from a set of <code>n</code> elements.<br><br>

        <strong>Example</strong>:<br>
        Given a set of numbers <code>nums = [1, 2, 3, 4]</code> and a combination size <code>k = 2</code>, the goal is to generate all possible combinations of 2 elements from the set.<br><br>

        <strong>Example Output</strong>:<br>
        <code>[[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]</code><br><br>

        <strong>Approach</strong>:<br>
        1. Use a backtracking approach to explore all combinations.<br>
        2. Start with an empty list and try to add elements to the list one by one.<br>
        3. When the list reaches the desired size <code>k</code>, add it to the result list.<br>
        4. After adding an element, move forward and recursively try adding the next element to the combination.<br>
        5. Backtrack by removing the last added element and try the next possible combination.<br><br>

        <strong>Recursive Backtracking Approach Example</strong>:<br>
        Given <code>nums = [1, 2, 3, 4]</code> and <code>k = 2</code>:
        - Start with an empty combination.
        - Add 1, then recurse with the remaining numbers [2, 3, 4].
        - Add 2, then recurse further.
        - Continue until all combinations are generated.<br><br>

        <strong>Time Complexity</strong>: O(C(n, k)) where C(n, k) is the number of combinations possible, which is calculated as <code>n! / (k!(n-k)!)</code>.<br>
        <strong>Space Complexity</strong>: O(k) due to the recursive call stack and the size of each combination.<br><br>

        <strong>Common Combination Generation Problems</strong>:<br>
        <ul>
            <li><strong>Subset Generation</strong>: Generate all possible subsets (also known as the power set) of a set.</li>
            <li><strong>Combination Sum</strong>: Find all unique combinations of numbers that sum to a target value.</li>
            <li><strong>Combination Sum II</strong>: Find all unique combinations from a collection of candidate numbers that sum to a target, allowing each number to be used once.</li>
            <li><strong>Permutations</strong>: Generate all possible permutations (ordered combinations) of a set of elements.</li>
            <li><strong>Combination with Repetition</strong>: Generate combinations where repetition of elements is allowed (e.g., selecting items from a bag of the same type).</li>
        </ul>
    `,

    "game-theory": `
        <strong>Game Theory</strong> is a mathematical framework used to study and analyze the strategic interactions between rational decision-makers, often referred to as players. It is used to model situations in which the outcome depends on the choices of multiple agents or players, and the decisions of each player affect the others.<br><br>

        Game theory can be applied to a wide range of problems, including economics, politics, psychology, and competitive environments such as video games or markets. Key concepts in game theory include:
        - **Nash Equilibrium**: A situation in which no player can improve their situation by unilaterally changing their strategy.
        - **Zero-sum Games**: A situation where one player's gain is another player's loss, such as in competitive games like chess.
        - **Minimax Strategy**: In zero-sum games, the strategy of minimizing the possible loss for a worst-case scenario.<br><br>

        The two most common types of games studied in game theory are:
        - **Cooperative Games**: Where players can form coalitions and work together to achieve a common goal.
        - **Non-Cooperative Games**: Where players act independently to maximize their individual utility.<br><br>

        <strong>Example Problem</strong>: The Prisoner's Dilemma.<br><br>

        <strong>Example</strong>:<br>
        Two criminals are arrested and charged with a crime. The prosecutors offer each a deal:
        - If both criminals remain silent, both will serve 1 year in prison.
        - If one betrays the other (defects) while the other remains silent, the betrayer goes free while the other serves 3 years in prison.
        - If both betray each other, both will serve 2 years in prison.<br><br>

        The dilemma is that, while cooperating (remaining silent) leads to the best overall outcome for both, each prisoner has a strong incentive to defect (betray), leading to a worse outcome for both.<br><br>

        <strong>Approach</strong>:<br>
        1. Analyze the payoffs for each player in every possible scenario (cooperate, defect).
        2. Identify the Nash Equilibrium, where neither player has an incentive to deviate from their strategy.
        3. In the Prisoner's Dilemma, the Nash Equilibrium occurs when both players defect, even though both would be better off if they both cooperated.<br><br>

        <strong>Example Execution</strong>:<br>
        - Player 1 has two choices: Cooperate or Defect.
        - Player 2 also has two choices: Cooperate or Defect.
        - Payoff Matrix:
            <code>
            |           | Cooperate | Defect  |
            |-----------|----------|---------|
            | Cooperate | (1, 1)   | (3, 0)  |
            | Defect    | (0, 3)   | (2, 2)  |
            </code><br><br>

        In this case, (2, 2) is the Nash Equilibrium, where both players defect.<br><br>

        <strong>Time Complexity</strong>: O(n), where <code>n</code> is the number of players or possible strategies.<br>
        <strong>Space Complexity</strong>: O(n) due to the need to store the payoffs or strategies of players.<br><br>

        <strong>Common Game Theory Problems</strong>:<br>
        <ul>
            <li><strong>Prisoner's Dilemma</strong>: A problem that highlights the conflict between cooperation and self-interest.</li>
            <li><strong>Battle of the Sexes</strong>: A game where two players prefer different outcomes but want to coordinate.</li>
            <li><strong>Chicken Game</strong>: A game where players must decide whether to cooperate or risk mutual destruction.</li>
            <li><strong>Zero-Sum Games</strong>: Games where the total sum of outcomes for all players is constant, and one player's gain is another's loss.</li>
            <li><strong>Evolutionary Game Theory</strong>: The study of strategies that evolve over time in populations of agents (e.g., in biology).</li>
        </ul>
    `	
	
};


    // Questions metadata (name, link, complexity, problem statement, and file paths)
    const questionsData = {
        "two-pointers": [{
                name: "Two Sum II - Input Array Is Sorted",
                link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy", // Add difficulty level				
				companies: ["To be added soon"],
				problemStatement: `
      Given a 1-indexed array of integers \`numbers\` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target.
      Return the indices of the two numbers.
    `,
                exampleInput: "numbers = [2, 7, 11, 15], target = 9",
                exampleOutput: "[1, 2]",
                explanation: `
      - numbers[0] + numbers[1] = 2 + 7 = 9.
      - So we return indices [1, 2] (1-based indexing).
    `,
                files: {
                    python: "data/two-pointers/two-sum.py",
                    cpp: "data/two-pointers/two-sum.cpp",
                }
            }, {
                name: "Three Sum",
                link: "https://leetcode.com/problems/3sum/",
                complexity: "Time: O(n^2), Space: O(1)",
                difficulty: "medium", 
				companies: ["Google", "Adobe", "Bloomberg"],
				problemStatement: `
      Given an integer array \`nums\`, return all the unique triplets \`[nums[i], nums[j], nums[k]]\` such that:
      - i ≠ j, i ≠ k, and j ≠ k
      - nums[i] + nums[j] + nums[k] == 0.
    `,
                exampleInput: "nums = [-1, 0, 1, 2, -1, -4]",
                exampleOutput: "[[-1, -1, 2], [-1, 0, 1]]",
                explanation: `
      - (-1) + (-1) + 2 = 0
      - (-1) + 0 + 1 = 0
      - Only unique triplets are returned.
    `,
                files: {
                    python: "data/two-pointers/three-sum.py",
                    cpp: "data/two-pointers/three-sum.cpp",
                }
            }, {
                name: "Container With Most Water",
                link: "https://leetcode.com/problems/container-with-most-water/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
      Given an integer array \`height\` where each element represents a vertical line at that index, find two lines that form a container with the most water.
    `,
                exampleInput: "height = [1,8,6,2,5,4,8,3,7]",
                exampleOutput: "49",
                explanation: `
      - The max water is formed between indices 1 and 8.
      - Min(height[1], height[8]) * (8 - 1) = 7 * 7 = 49.
    `,
                files: {
                    python: "data/two-pointers/container-with-most-water.py",
                    cpp: "data/two-pointers/container-with-most-water.cpp",
                }
            }, {
                name: "Remove Duplicates from Sorted Array",
                link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
      Given a sorted array \`nums\`, remove the duplicates in-place such that each unique element appears only once.
    `,
                exampleInput: "nums = [1,1,2]",
                exampleOutput: "2, nums = [1,2,_]",
                explanation: `
      - The modified array should only contain unique values.
      - Remaining elements can be ignored.
    `,
                files: {
                    python: "data/two-pointers/remove-duplicates.py",
                    cpp: "data/two-pointers/remove-duplicates.cpp",
                }
            }, {
                name: "Merge Sorted Array",
                link: "https://leetcode.com/problems/merge-sorted-array/",
                complexity: "Time: O(m + n), Space: O(1)",
				difficulty: "medium",
				companies: ["To be added soon"],
				problemStatement: `
      Given two sorted arrays \`nums1\` and \`nums2\`, merge them into one sorted array.
    `,
                exampleInput: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
                exampleOutput: "[1,2,2,3,5,6]",
                explanation: `
      - nums1 has three initial elements: [1,2,3].
      - nums2 contains: [2,5,6].
      - After merging, the sorted array is [1,2,2,3,5,6].
    `,
                files: {
                    python: "data/two-pointers/merge-sorted-array.py",
                    cpp: "data/two-pointers/merge-sorted-array.cpp",
                }
            }, {
                name: "Valid Palindrome",
                link: "https://leetcode.com/problems/valid-palindrome/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
      Given a string \`s\`, return true if it is a palindrome considering only alphanumeric characters and ignoring cases.
    `,
                exampleInput: "s = 'A man, a plan, a canal: Panama'",
                exampleOutput: "true",
                explanation: `
      - After removing non-alphanumeric characters, the string becomes "amanaplanacanalpanama".
      - It reads the same forward and backward.
    `,
                files: {
                    python: "data/two-pointers/valid-palindrome.py",
                    cpp: "data/two-pointers/valid-palindrome.cpp",
                }
            }, {
                name: "Move Zeroes",
                link: "https://leetcode.com/problems/move-zeroes/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
      Given an integer array \`nums\`, move all 0's to the end while maintaining the relative order of non-zero elements.
    `,
                exampleInput: "nums = [0,1,0,3,12]",
                exampleOutput: "[1,3,12,0,0]",
                explanation: `
      - All zeros are moved to the end while non-zero elements keep their order.
    `,
                files: {
                    python: "data/two-pointers/move-zeroes.py",
                    cpp: "data/two-pointers/move-zeroes.cpp",
                }
            }, {
                name: "Reverse String",
                link: "https://leetcode.com/problems/reverse-string/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
      Write a function that reverses a string. The input string is given as an array of characters.
    `,
                exampleInput: "s = ['h','e','l','l','o']",
                exampleOutput: "['o','l','l','e','h']",
                explanation: `
      - The function modifies the array in place to reverse the characters.
    `,
                files: {
                    python: "data/two-pointers/reverse-string.py",
                    cpp: "data/two-pointers/reverse-string.cpp",
                }
            }, {
                name: "Sort Colors",
                link: "https://leetcode.com/problems/sort-colors/",
                complexity: "Time: O(n), Space: O(1)",
				difficulty: "hard",
				companies: ["To be added soon"],
				problemStatement: `
      Given an array \`nums\` with colors (0, 1, 2), sort them in-place without using extra space.
    `,
                exampleInput: "nums = [2,0,2,1,1,0]",
                exampleOutput: "[0,0,1,1,2,2]",
                explanation: `
      - The array is sorted such that 0s come first, then 1s, then 2s.
    `,
                files: {
                    python: "data/two-pointers/sort-colors.py",
                    cpp: "data/two-pointers/sort-colors.cpp",
                }
            }, {
                name: "Remove Element",
                link: "https://leetcode.com/problems/remove-element/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
      Given an array \`nums\` and a value \`val\`, remove all instances of that value in-place.
    `,
                exampleInput: "nums = [3,2,2,3], val = 3",
                exampleOutput: "2, nums = [2,2,_]",
                explanation: `
      - The array should only contain elements ≠ val.
      - Remaining elements can be ignored.
    `,
                files: {
                    python: "data/two-pointers/remove-element.py",
                    cpp: "data/two-pointers/remove-element.cpp",
                }
            }
        ],
        "sliding-window": [{
                name: "Longest Substring Without Repeating Characters",
                link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
                complexity: "Time: O(n), Space: O(min(n, m))",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
      Given a string \`s\`, find the length of the longest substring without repeating characters.
    `,
                exampleInput: "s = 'abcabcbb'",
                exampleOutput: "3",
                explanation: `
      - The longest substring without repeating characters is "abc" with length 3.
    `,
                files: {
                    python: "data/sliding-window/longest-substring.py",
                    cpp: "data/sliding-window/longest-substring.cpp",
                }
            }, {
                name: "Sliding Window Maximum",
                link: "https://leetcode.com/problems/sliding-window-maximum/",
                complexity: "Time: O(n), Space: O(k)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
      Given an array \`nums\` and an integer \`k\`, return the maximum value in each sliding window of size \`k\`.
    `,
                exampleInput: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
                exampleOutput: "[3, 3, 5, 5, 6, 7]",
                explanation: `
      - The max value in each window of size 3 is recorded in the output.
    `,
                files: {
                    python: "data/sliding-window/sliding-window-maximum.py",
                    cpp: "data/sliding-window/sliding-window-maximum.cpp",
                }
            }, {
                name: "Minimum Size Subarray Sum",
                link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
      Given an array of positive integers \`nums\` and a target sum \`target\`, find the minimal length of a contiguous subarray of which the sum is at least \`target\`.
    `,
                exampleInput: "target = 7, nums = [2,3,1,2,4,3]",
                exampleOutput: "2",
                explanation: `
      - The subarray [4,3] has a sum ≥ 7 and has the minimum length of 2.
    `,
                files: {
                    python: "data/sliding-window/minimum-size-subarray.py",
                    cpp: "data/sliding-window/minimum-size-subarray.cpp",
                }
            }, {
                name: "Permutation in String",
                link: "https://leetcode.com/problems/permutation-in-string/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
      Given two strings \`s1\` and \`s2\`, return true if \`s2\` contains a permutation of \`s1\`.
    `,
                exampleInput: "s1 = 'ab', s2 = 'eidbaooo'",
                exampleOutput: "true",
                explanation: `
      - The substring 'ba' in 'eidbaooo' is a permutation of 'ab'.
    `,
                files: {
                    python: "data/sliding-window/permutation-in-string.py",
                    cpp: "data/sliding-window/permutation-in-string.cpp",
                }
            }, {
                name: "Find All Anagrams in a String",
                link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
      Given two strings \`s\` and \`p\`, return all start indices of \`p\`'s anagrams in \`s\`.
    `,
                exampleInput: "s = 'cbaebabacd', p = 'abc'",
                exampleOutput: "[0, 6]",
                explanation: `
      - 'cba' and 'bac' are anagrams of 'abc' and appear at indices 0 and 6.
    `,
                files: {
                    python: "data/sliding-window/find-all-anagrams.py",
                    cpp: "data/sliding-window/find-all-anagrams.cpp",
                }
            }, {
                name: "Longest Repeating Character Replacement",
                link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
      Given a string \`s\` and an integer \`k\`, return the length of the longest substring that contains the same letter after at most \`k\` replacements.
    `,
                exampleInput: "s = 'AABABBA', k = 1",
                exampleOutput: "4",
                explanation: `
      - Replacing one 'B' in 'AABABBA' results in 'AAAA' which has length 4.
    `,
                files: {
                    python: "data/sliding-window/longest-repeating-char-replacement.py",
                    cpp: "data/sliding-window/longest-repeating-char-replacement.cpp",
                }
            }, {
                name: "Binary Subarrays With Sum",
                link: "https://leetcode.com/problems/binary-subarrays-with-sum/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
      Given a binary array \`nums\` and an integer \`goal\`, return the number of non-empty subarrays with sum equal to \`goal\`.
    `,
                exampleInput: "nums = [1,0,1,0,1], goal = 2",
                exampleOutput: "4",
                explanation: `
      - The subarrays [1,0,1], [0,1,0,1], [1,0,1], and [1,0,1] sum to 2.
    `,
                files: {
                    python: "data/sliding-window/binary-subarrays-sum.py",
                    cpp: "data/sliding-window/binary-subarrays-sum.cpp",
                }
            }, {
                name: "Fruit Into Baskets",
                link: "https://leetcode.com/problems/fruit-into-baskets/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
      Given an integer array \`fruits\` where \`fruits[i]\` represents the type of fruit at index \`i\`, find the maximum number of fruits you can collect in two baskets.
    `,
                exampleInput: "fruits = [1,2,1,2,3]",
                exampleOutput: "4",
                explanation: `
      - The longest subarray with at most two types is [1,2,1,2], which has length 4.
    `,
                files: {
                    python: "data/sliding-window/fruit-into-baskets.py",
                    cpp: "data/sliding-window/fruit-into-baskets.cpp",
                }
            }, {
                name: "Maximum Points You Can Obtain from Cards",
                link: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
      Given an array \`cardPoints\` and an integer \`k\`, return the maximum points you can get by picking exactly \`k\` cards from either the start or the end.
    `,
                exampleInput: "cardPoints = [1,2,3,4,5,6,1], k = 3",
                exampleOutput: "12",
                explanation: `
      - The best choice is to pick the last three cards: 6, 5, and 1, giving a sum of 12.
    `,
                files: {
                    python: "data/sliding-window/max-points-from-cards.py",
                    cpp: "data/sliding-window/max-points-from-cards.cpp",
                }
            }, {
                name: "Subarrays with K Different Integers",
                link: "https://leetcode.com/problems/subarrays-with-k-different-integers/",
                complexity: "Time: O(n), Space: O(k)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
      Given an integer array \`nums\` and an integer \`k\`, return the number of subarrays that contain exactly \`k\` different integers.
    `,
                exampleInput: "nums = [1,2,1,2,3], k = 2",
                exampleOutput: "7",
                explanation: `
      - There are 7 subarrays that contain exactly 2 different integers.
    `,
                files: {
                    python: "data/sliding-window/subarrays-with-k-different-integers.py",
                    cpp: "data/sliding-window/subarrays-with-k-different-integers.cpp",
                }
            }
        ],
        "greedy": [{
                name: "Jump Game",
                link: "https://leetcode.com/problems/jump-game/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
		Given an array of non-negative integers \`nums\`, you are initially positioned at the first index.
		Each element in the array represents your maximum jump length at that position.
		Determine if you can reach the last index.
	  `,
                exampleInput: "nums = [2, 3, 1, 1, 4]",
                exampleOutput: "true",
                explanation: `
		- Jump 1 step from index 0 to 1, then 3 steps to the last index.
	  `,
                files: {
                    python: "data/greedy/jump-game.py",
                    cpp: "data/greedy/jump-game.cpp",
                }
            }, {
                name: "Gas Station",
                link: "https://leetcode.com/problems/gas-station/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
		There are \`n\` gas stations along a circular route.
		Given two integer arrays \`gas\` and \`cost\`, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.
	  `,
                exampleInput: "gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]",
                exampleOutput: "3",
                explanation: `
		- Start at station 3 (index 3) and fill up with 4 units of gas. Your tank = 0 + 4 = 4.
		- Travel to station 4. Your tank = 4 - 1 + 5 = 8.
		- Travel to station 0. Your tank = 8 - 2 + 1 = 7.
		- Travel to station 1. Your tank = 7 - 3 + 2 = 6.
		- Travel to station 2. Your tank = 6 - 4 + 3 = 5.
		- Travel to station 3. The cost is 5. Your tank = 5 - 5 + 4 = 4.
		- You have enough gas to travel back to station 3.
	  `,
                files: {
                    python: "data/greedy/gas-station.py",
                    cpp: "data/greedy/gas-station.cpp",
                }
            }, {
                name: "Maximum Subarray",
                link: "https://leetcode.com/problems/maximum-subarray/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
		Given an integer array \`nums\`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
	  `,
                exampleInput: "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
                exampleOutput: "6",
                explanation: `
		- The contiguous subarray [4, -1, 2, 1] has the largest sum = 6.
	  `,
                files: {
                    python: "data/greedy/maximum-subarray.py",
                    cpp: "data/greedy/maximum-subarray.cpp",
                }
            }, {
                name: "Best Time to Buy and Sell Stock II",
                link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
		Given an array \`prices\` where \`prices[i]\` is the price of a given stock on the \`i-th\` day, find the maximum profit you can achieve by buying and selling stocks multiple times.
	  `,
                exampleInput: "prices = [7, 1, 5, 3, 6, 4]",
                exampleOutput: "7",
                explanation: `
		- Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5 - 1 = 4.
		- Buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6 - 3 = 3.
		- Total profit = 4 + 3 = 7.
	  `,
                files: {
                    python: "data/greedy/best-time-to-buy-and-sell-stock-ii.py",
                    cpp: "data/greedy/best-time-to-buy-and-sell-stock-ii.cpp",
                }
            }, {
                name: "Assign Cookies",
                link: "https://leetcode.com/problems/assign-cookies/",
                complexity: "Time: O(n log n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
		Assume you are an awesome parent and want to give your children some cookies.
		Given two integer arrays \`g\` (greed factor of children) and \`s\` (size of cookies), return the maximum number of content children.
	  `,
                exampleInput: "g = [1, 2, 3], s = [1, 1]",
                exampleOutput: "1",
                explanation: `
		- You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
		- You can only satisfy the child with greed factor 1.
	  `,
                files: {
                    python: "data/greedy/assign-cookies.py",
                    cpp: "data/greedy/assign-cookies.cpp",
                }
            }, {
                name: "Minimum Number of Arrows to Burst Balloons",
                link: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
                complexity: "Time: O(n log n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
		Given an array of balloon intervals \`points\`, where \`points[i] = [x_start, x_end]\`, return the minimum number of arrows needed to burst all balloons.
	  `,
                exampleInput: "points = [[10, 16], [2, 8], [1, 6], [7, 12]]",
                exampleOutput: "2",
                explanation: `
		- Shoot an arrow at x = 6 (bursting [2, 8] and [1, 6]).
		- Shoot another arrow at x = 11 (bursting [10, 16] and [7, 12]).
	  `,
                files: {
                    python: "data/greedy/minimum-arrows-to-burst-balloons.py",
                    cpp: "data/greedy/minimum-arrows-to-burst-balloons.cpp",
                }
            }, {
                name: "Non-overlapping Intervals",
                link: "https://leetcode.com/problems/non-overlapping-intervals/",
                complexity: "Time: O(n log n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
		Given an array of intervals \`intervals\`, where \`intervals[i] = [start, end]\`, return the minimum number of intervals you need to remove to make the rest non-overlapping.
	  `,
                exampleInput: "intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]",
                exampleOutput: "1",
                explanation: `
		- Remove [1, 3] to make the rest of the intervals non-overlapping.
	  `,
                files: {
                    python: "data/greedy/non-overlapping-intervals.py",
                    cpp: "data/greedy/non-overlapping-intervals.cpp",
                }
            }, {
                name: "Task Scheduler",
                link: "https://leetcode.com/problems/task-scheduler/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
		Given a characters array \`tasks\`, representing tasks CPU needs to do, and an integer \`n\`, representing the cooldown period between two same tasks, return the least number of units of time the CPU will take to finish all the tasks.
	  `,
                exampleInput: "tasks = ['A', 'A', 'A', 'B', 'B', 'B'], n = 2",
                exampleOutput: "8",
                explanation: `
		- A -> B -> idle -> A -> B -> idle -> A -> B.
	  `,
                files: {
                    python: "data/greedy/task-scheduler.py",
                    cpp: "data/greedy/task-scheduler.cpp",
                }
            }, {
                name: "Partition Labels",
                link: "https://leetcode.com/problems/partition-labels/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
		Given a string \`s\`, partition the string into as many parts as possible so that each letter appears in at most one part.
		Return a list of integers representing the size of these parts.
	  `,
                exampleInput: "s = 'abacdc'",
                exampleOutput: "[3, 3]",
                explanation: `
		- The partition is "aba" and "cdc".
	  `,
                files: {
                    python: "data/greedy/partition-labels.py",
                    cpp: "data/greedy/partition-labels.cpp",
                }
            }, {
                name: "Lemonade Change",
                link: "https://leetcode.com/problems/lemonade-change/",
                complexity: "Time: O(n), Space: O(1)",
                difficulty: "easy",
				companies: ["To be added soon"],
				problemStatement: `
		At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills).
		Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.
		Return \`true\` if you can provide every customer with the correct change, otherwise return \`false\`.
	  `,
                exampleInput: "bills = [5, 5, 5, 10, 20]",
                exampleOutput: "true",
                explanation: `
		- Collect $5 from the first 3 customers.
		- Give $5 back to the 4th customer.
		- Give $10 back to the 5th customer.
	  `,
                files: {
                    python: "data/greedy/lemonade-change.py",
                    cpp: "data/greedy/lemonade-change.cpp",
                }
            },
        ],
        "dynamic-programming": [{
                "name": "0/1 Knapsack Problem",
                "link": "https://leetcode.com/problems/knapsack-problem/",
                "complexity": "Time: O(nW), Space: O(nW)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a set of items, each with a weight and a value, determine the maximum value that can be obtained by selecting items such that the total weight does not exceed a given capacity.
	  `,
                "exampleInput": "weights = [2, 3, 4, 5], values = [3, 4, 5, 6], W = 5",
                "exampleOutput": "7",
                "explanation": `
		- You can select items with weights 2 and 3, which gives a value of 7.
	  `,
                "files": {
                    "python": "data/dp/knapsack.py",
                    "cpp": "data/dp/knapsack.cpp"
                }
            }, {
                "name": "Longest Increasing Subsequence",
                "link": "https://leetcode.com/problems/longest-increasing-subsequence/",
                "complexity": "Time: O(n^2), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an integer array, return the length of the longest strictly increasing subsequence.
	  `,
                "exampleInput": "nums = [10, 9, 2, 5, 3, 7, 101, 18]",
                "exampleOutput": "4",
                "explanation": `
		- The longest increasing subsequence is [2, 3, 7, 101].
	  `,
                "files": {
                    "python": "data/dp/longest-increasing-subsequence.py",
                    "cpp": "data/dp/longest-increasing-subsequence.cpp"
                }
            }, {
                "name": "Coin Change Problem",
                "link": "https://leetcode.com/problems/coin-change/",
                "complexity": "Time: O(n * amount), Space: O(amount)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an integer array of coins and an integer amount, return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
	  `,
                "exampleInput": "coins = [1, 2, 5], amount = 11",
                "exampleOutput": "3",
                "explanation": `
		- You can use 5 + 5 + 1 to make 11.
	  `,
                "files": {
                    "python": "data/dp/coin-change.py",
                    "cpp": "data/dp/coin-change.cpp"
                }
            }, {
                "name": "Longest Common Subsequence",
                "link": "https://leetcode.com/problems/longest-common-subsequence/",
                "complexity": "Time: O(mn), Space: O(mn)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given two strings, return the length of their longest common subsequence.
	  `,
                "exampleInput": "text1 = 'abcde', text2 = 'ace' ",
                "exampleOutput": "3",
                "explanation": `
		- The longest common subsequence is 'ace'.
	  `,
                "files": {
                    "python": "data/dp/longest-common-subsequence.py",
                    "cpp": "data/dp/longest-common-subsequence.cpp"
                }
            }, {
                "name": "Unique Paths",
                "link": "https://leetcode.com/problems/unique-paths/",
                "complexity": "Time: O(mn), Space: O(mn)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		There is a robot on an m x n grid. The robot starts at the top-left corner and can only move either down or right at any point in time. How many unique paths does the robot take to reach the bottom-right corner?
	  `,
                "exampleInput": "m = 3, n = 7",
                "exampleOutput": "28",
                "explanation": `
		- There are 28 unique paths from the top-left corner to the bottom-right corner.
	  `,
                "files": {
                    "python": "data/dp/unique-paths.py",
                    "cpp": "data/dp/unique-paths.cpp"
                }
            }, {
                "name": "Edit Distance",
                "link": "https://leetcode.com/problems/edit-distance/",
                "complexity": "Time: O(mn), Space: O(mn)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given two strings, return the minimum number of operations required to convert one string to the other. Operations include insert, delete, or replace a character.
	  `,
                "exampleInput": "word1 = 'horse', word2 = 'ros'",
                "exampleOutput": "3",
                "explanation": `
		- The three operations are: 'horse' -> 'rorse' -> 'rose' -> 'ros'.
	  `,
                "files": {
                    "python": "data/dp/edit-distance.py",
                    "cpp": "data/dp/edit-distance.cpp"
                }
            }, {
                "name": "House Robber",
                "link": "https://leetcode.com/problems/house-robber/",
                "complexity": "Time: O(n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected, and it will automatically contact the police if two adjacent houses are robbed.
		Return the maximum amount of money you can rob tonight without alerting the police.
	  `,
                "exampleInput": "nums = [2, 7, 9, 3, 1]",
                "exampleOutput": "12",
                "explanation": `
		- The maximum amount you can rob is 12 (rob houses 1, 3, and 5).
	  `,
                "files": {
                    "python": "data/dp/house-robber.py",
                    "cpp": "data/dp/house-robber.cpp"
                }
            }, {
                "name": "Subset Sum Problem",
                "link": "https://leetcode.com/problems/partition-equal-subset-sum/",
                "complexity": "Time: O(n * sum), Space: O(n * sum)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a set of positive integers, find whether there is a subset whose sum is equal to a given number.
	  `,
                "exampleInput": "nums = [1, 5, 11, 5], sum = 11",
                "exampleOutput": "true",
                "explanation": `
		- You can find a subset [1, 5, 5] that sums to 11.
	  `,
                "files": {
                    "python": "data/dp/subset-sum.py",
                    "cpp": "data/dp/subset-sum.cpp"
                }
            }, {
                "name": "Palindromic Substrings",
                "link": "https://leetcode.com/problems/palindromic-substrings/",
                "complexity": "Time: O(n^2), Space: O(n^2)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a string, return the number of palindromic substrings in it.
	  `,
                "exampleInput": "s = 'aaa'",
                "exampleOutput": "6",
                "explanation": `
		- The palindromic substrings are: 'a', 'a', 'a', 'aa', 'aa', 'aaa'.
	  `,
                "files": {
                    "python": "data/dp/palindromic-substrings.py",
                    "cpp": "data/dp/palindromic-substrings.cpp"
                }
            }, {
                "name": "Word Break Problem",
                "link": "https://leetcode.com/problems/word-break/",
                "complexity": "Time: O(n^2), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
	  `,
                "exampleInput": "s = 'leetcode', wordDict = ['leet', 'code']",
                "exampleOutput": "true",
                "explanation": `
		- The string 'leetcode' can be segmented as 'leet code'.
	  `,
                "files": {
                    "python": "data/dp/word-break.py",
                    "cpp": "data/dp/word-break.cpp"
                }
            }
        ],
        "backtracking": [{
                "name": "N-Queens Problem",
                "link": "https://leetcode.com/problems/n-queens/",
                "complexity": "Time: O(N!), Space: O(N^2)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		The N-Queens puzzle is the problem of placing N chess queens on an N×N chessboard so that no two queens threaten each other. A queen can attack another queen if they share the same row, column, or diagonal.
		Return all distinct solutions to the N-Queens puzzle.
	  `,
                "exampleInput": "n = 4",
                "exampleOutput": "[['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]",
                "explanation": `
		- For n = 4, there are two distinct solutions where no queens threaten each other.
	  `,
                "files": {
                    "python": "data/backtracking/n-queens.py",
                    "cpp": "data/backtracking/n-queens.cpp"
                }
            }, {
                "name": "Permutations",
                "link": "https://leetcode.com/problems/permutations/",
                "complexity": "Time: O(n!), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array of distinct integers, return all possible permutations of the array.
	  `,
                "exampleInput": "nums = [1, 2, 3]",
                "exampleOutput": "[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]",
                "explanation": `
		- There are 6 possible permutations of the array [1, 2, 3].
	  `,
                "files": {
                    "python": "data/backtracking/permutations.py",
                    "cpp": "data/backtracking/permutations.cpp"
                }
            }, {
                "name": "Combinations",
                "link": "https://leetcode.com/problems/combinations/",
                "complexity": "Time: O(n choose k), Space: O(k)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
	  `,
                "exampleInput": "n = 4, k = 2",
                "exampleOutput": "[[2, 4], [3, 4], [1, 2], [2, 3], [1, 3], [1, 4]]",
                "explanation": `
		- The combinations of 2 numbers from the set [1, 2, 3, 4] are listed.
	  `,
                "files": {
                    "python": "data/backtracking/combinations.py",
                    "cpp": "data/backtracking/combinations.cpp"
                }
            }, {
                "name": "Subset Sum Problem",
                "link": "https://leetcode.com/problems/partition-equal-subset-sum/",
                "complexity": "Time: O(2^n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a set of positive integers, find whether there is a subset whose sum is equal to a given number.
	  `,
                "exampleInput": "nums = [1, 5, 11, 5], sum = 11",
                "exampleOutput": "true",
                "explanation": `
		- You can find a subset [1, 5, 5] that sums to 11.
	  `,
                "files": {
                    "python": "data/backtracking/subset-sum.py",
                    "cpp": "data/backtracking/subset-sum.cpp"
                }
            }, {
                "name": "Word Search",
                "link": "https://leetcode.com/problems/word-search/",
                "complexity": "Time: O(m * n * 4^L), Space: O(m * n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an m x n board of characters and a string word, find if the word exists in the grid.
		The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.
	  `,
                "exampleInput": "board = [['A','B','C','E'], ['S','F','C','S'], ['A','D','E','E']], word = 'ABCCED'",
                "exampleOutput": "true",
                "explanation": `
		- The word 'ABCCED' exists in the grid.
	  `,
                "files": {
                    "python": "data/backtracking/word-search.py",
                    "cpp": "data/backtracking/word-search.cpp"
                }
            }, {
                "name": "Palindrome Partitioning",
                "link": "https://leetcode.com/problems/palindrome-partitioning/",
                "complexity": "Time: O(2^n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a string s, partition s such that every substring of the partition is a palindrome.
		Return all possible palindrome partitioning of s.
	  `,
                "exampleInput": "s = 'aab'",
                "exampleOutput": "[['a', 'a', 'b'], ['aa', 'b']]",
                "explanation": `
		- The two palindrome partitions of 'aab' are ['a', 'a', 'b'] and ['aa', 'b'].
	  `,
                "files": {
                    "python": "data/backtracking/palindrome-partitioning.py",
                    "cpp": "data/backtracking/palindrome-partitioning.cpp"
                }
            }, {
                "name": "Combination Sum",
                "link": "https://leetcode.com/problems/combination-sum/",
                "complexity": "Time: O(2^n), Space: O(k)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
		The same repeated number may be chosen from candidates unlimited times.
	  `,
                "exampleInput": "candidates = [2, 3, 6, 7], target = 7",
                "exampleOutput": "[[2, 2, 3], [7]]",
                "explanation": `
		- The combinations that sum to 7 are [2, 2, 3] and [7].
	  `,
                "files": {
                    "python": "data/backtracking/combination-sum.py",
                    "cpp": "data/backtracking/combination-sum.cpp"
                }
            }, {
                "name": "Letter Case Permutation",
                "link": "https://leetcode.com/problems/letter-case-permutation/",
                "complexity": "Time: O(2^n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a string s, you can transform every letter individually to be lowercase or uppercase to create a new string. Return all possible strings we could create.
	  `,
                "exampleInput": "s = 'a1b2'",
                "exampleOutput": "['a1b2', 'A1b2', 'a1B2', 'A1B2']",
                "explanation": `
		- The possible strings are ['a1b2', 'A1b2', 'a1B2', 'A1B2'].
	  `,
                "files": {
                    "python": "data/backtracking/letter-case-permutation.py",
                    "cpp": "data/backtracking/letter-case-permutation.cpp"
                }
            }, {
                "name": "Combination Sum II",
                "link": "https://leetcode.com/problems/combination-sum-ii/",
                "complexity": "Time: O(2^n), Space: O(k)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once in the combination.
	  `,
                "exampleInput": "candidates = [10, 1, 2, 7, 6, 5], target = 8",
                "exampleOutput": "[[1, 2, 5], [1, 7], [2, 6]]",
                "explanation": `
		- The unique combinations that sum to 8 are [1, 2, 5], [1, 7], and [2, 6].
	  `,
                "files": {
                    "python": "data/backtracking/combination-sum-ii.py",
                    "cpp": "data/backtracking/combination-sum-ii.cpp"
                }
            }, {
                "name": "Sudoku Solver",
                "link": "https://leetcode.com/problems/sudoku-solver/",
                "complexity": "Time: O(9^81), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Solve a Sudoku puzzle by filling the empty cells. Each number 1-9 must appear exactly once in each row, column, and 3x3 subgrid.
	  `,
                "exampleInput": "board = [['5', '3', '.', '.', '7', '.', '.', '.', '.'], ['6', '.', '.', '1', '9', '5', '.', '.', '.'], ['.', '9', '8', '.', '.', '.', '.', '6', '.']]",
                "exampleOutput": "[['5', '3', '4', '6', '7', '8', '9', '1', '2'], ['6', '7', '2', '1', '9', '5', '3', '4', '8'], ['1', '9', '8', '3', '4', '2', '5', '6', '7']]",
                "explanation": `
		- The Sudoku puzzle is solved by filling all empty cells.
	  `,
                "files": {
                    "python": "data/backtracking/sudoku-solver.py",
                    "cpp": "data/backtracking/sudoku-solver.cpp"
                }
            }
        ],
        "divide-and-conquer": [{
                "name": "Merge Sort",
                "link": "https://leetcode.com/problems/sort-an-array/",
                "complexity": "Time: O(n log n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Sort an array in ascending order using the merge sort algorithm.
		Merge Sort is a divide and conquer algorithm that divides the array into two halves, recursively sorts them, and merges them back together.
	  `,
                "exampleInput": "nums = [5, 2, 9, 1, 5, 6]",
                "exampleOutput": "[1, 2, 5, 5, 6, 9]",
                "explanation": `
		- Merge Sort divides the array into smaller subarrays, sorts each, and merges them to produce the final sorted array.
	  `,
                "files": {
                    "python": "data/dac/merge-sort.py",
                    "cpp": "data/dac/merge-sort.cpp"
                }
            }, {
                "name": "Quick Sort",
                "link": "https://leetcode.com/problems/sort-an-array/",
                "complexity": "Time: O(n log n), Space: O(log n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Sort an array in ascending order using the quick sort algorithm.
		Quick Sort is a divide and conquer algorithm that picks a pivot element and partitions the array around the pivot. The algorithm is recursively applied to the subarrays.
	  `,
                "exampleInput": "nums = [3, 1, 4, 1, 5, 9]",
                "exampleOutput": "[1, 1, 3, 4, 5, 9]",
                "explanation": `
		- Quick Sort uses a pivot to divide the array, recursively sorting the subarrays until the whole array is sorted.
	  `,
                "files": {
                    "python": "data/dac/quick-sort.py",
                    "cpp": "data/dac/quick-sort.cpp"
                }
            }, {
                "name": "Binary Search",
                "link": "https://leetcode.com/problems/binary-search/",
                "complexity": "Time: O(log n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Implement binary search to find the target value in a sorted array.
		Binary search divides the search interval in half, comparing the target value to the midpoint, and recursively narrows the search.
	  `,
                "exampleInput": "nums = [-1, 0, 3, 5, 9, 12], target = 9",
                "exampleOutput": "4",
                "explanation": `
		- The target value 9 is found at index 4 using binary search.
	  `,
                "files": {
                    "python": "data/dac/binary-search.py",
                    "cpp": "data/dac/binary-search.cpp"
                }
            }, {
                "name": "Find Peak Element",
                "link": "https://leetcode.com/problems/find-peak-element/",
                "complexity": "Time: O(log n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		A peak element in an array is an element that is strictly greater than its neighbors.
		Find a peak element in the array. The array may not be sorted, and you may not need to find all peaks.
	  `,
                "exampleInput": "nums = [1, 2, 3, 1]",
                "exampleOutput": "2",
                "explanation": `
		- In this array, element 3 is a peak because it is greater than both its neighbors (2 and 1).
	  `,
                "files": {
                    "python": "data/dac/find-peak-element.py",
                    "cpp": "data/dac/find-peak-element.cpp"
                }
            }, {
                "name": "Closest Pair of Points",
                "link": "https://leetcode.com/problems/minimum-distance-between-bst-nodes/",
                "complexity": "Time: O(n log n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array of points, find the closest pair of points.
		Use divide and conquer to efficiently solve this problem by dividing the points into smaller subsets.
	  `,
                "exampleInput": "points = [[1, 3], [2, 5], [3, 1], [4, 4]]",
                "exampleOutput": "1",
                "explanation": `
		- Divide and conquer finds the closest pair of points, which is the distance between points [1, 3] and [3, 1].
	  `,
                "files": {
                    "python": "data/dac/closest-pair.py",
                    "cpp": "data/dac/closest-pair.cpp"
                }
            }, {
                "name": "Strassen's Matrix Multiplication",
                "link": "https://leetcode.com/problems/matrix-multiplication/",
                "complexity": "Time: O(n^log7), Space: O(n^2)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Implement Strassen's matrix multiplication algorithm to multiply two matrices efficiently using divide and conquer.
		This algorithm reduces the number of multiplications required for matrix multiplication.
	  `,
                "exampleInput": "matrix1 = [[1, 2], [3, 4]], matrix2 = [[5, 6], [7, 8]]",
                "exampleOutput": "[[19, 22], [43, 50]]",
                "explanation": `
		- Strassen's algorithm performs matrix multiplication more efficiently by dividing the matrices into submatrices.
	  `,
                "files": {
                    "python": "data/dac/strassens-matrix-multiplication.py",
                    "cpp": "data/dac/strassens-matrix-multiplication.cpp"
                }
            }, {
                "name": "Karatsuba Multiplication",
                "link": "https://leetcode.com/problems/multiply-strings/",
                "complexity": "Time: O(n^log3), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Implement Karatsuba's algorithm to multiply large numbers efficiently using divide and conquer.
		Karatsuba reduces the number of multiplications needed for large number multiplication.
	  `,
                "exampleInput": "num1 = '1234', num2 = '5678'",
                "exampleOutput": "'7006652'",
                "explanation": `
		- Karatsuba's algorithm splits the numbers and recursively multiplies smaller parts to compute the result.
	  `,
                "files": {
                    "python": "data/dac/karatsuba-multiplication.py",
                    "cpp": "data/dac/karatsuba-multiplication.cpp"
                }
            }, {
                "name": "Maximum Subarray Problem (Divide and Conquer Approach)",
                "link": "https://leetcode.com/problems/maximum-subarray/",
                "complexity": "Time: O(n log n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Find the contiguous subarray (containing at least one number) which has the largest sum.
		This can be solved using the divide and conquer approach.
	  `,
                "exampleInput": "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
                "exampleOutput": "6",
                "explanation": `
		- The maximum subarray is [4, -1, 2, 1], which sums to 6.
	  `,
                "files": {
                    "python": "data/dac/maximum-subarray.py",
                    "cpp": "data/dac/maximum-subarray.cpp"
                }
            }, {
                "name": "Ternary Search",
                "link": "https://leetcode.com/problems/ternary-search/",
                "complexity": "Time: O(log n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Implement ternary search to find the target in a sorted array.
		Ternary search divides the array into three parts and recursively narrows down the search.
	  `,
                "exampleInput": "nums = [1, 3, 5, 7, 9], target = 7",
                "exampleOutput": "3",
                "explanation": `
		- The target value 7 is found at index 3 using ternary search.
	  `,
                "files": {
                    "python": "data/dac/ternary-search.py",
                    "cpp": "data/dac/ternary-search.cpp"
                }
            }, {
                "name": "Find the Majority Element",
                "link": "https://leetcode.com/problems/majority-element/",
                "complexity": "Time: O(n log n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array of size n, find the majority element, which is the element that appears more than ⌊ n/2 ⌋ times.
		Use a divide and conquer approach to solve this problem.
	  `,
                "exampleInput": "nums = [3, 3, 4, 2, 4, 4, 2, 4, 4]",
                "exampleOutput": "4",
                "explanation": `
		- The majority element is 4, as it appears 5 times, which is greater than ⌊ 9/2 ⌋ = 4.
	  `,
                "files": {
                    "python": "data/dac/majority-element.py",
                    "cpp": "data/dac/majority-element.cpp"
                }
            }
        ],
        "graph-traversal": [{
                "name": "Depth First Search (DFS)",
                "link": "https://leetcode.com/problems/number-of-islands/",
                "complexity": "Time: O(V + E), Space: O(V)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Implement Depth First Search (DFS) to traverse or search through a graph.
		DFS explores as far as possible along a branch before backtracking.
	  `,
                "exampleInput": "graph = [[1, 2], [0, 2], [0, 1, 3], [2]]",
                "exampleOutput": "[0, 1, 2, 3]",
                "explanation": `
		- Starting from node 0, DFS explores node 1, then node 2, and finally node 3.
	  `,
                "files": {
                    "python": "data/graph-traversal/dfs.py",
                    "cpp": "data/graph-traversal/dfs.cpp"
                }
            }, {
                "name": "Breadth First Search (BFS)",
                "link": "https://leetcode.com/problems/clone-graph/",
                "complexity": "Time: O(V + E), Space: O(V)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Implement Breadth First Search (BFS) to traverse or search through a graph.
		BFS explores all the neighbors at the present depth level before moving on to nodes at the next depth level.
	  `,
                "exampleInput": "graph = [[1, 2], [0, 2], [0, 1, 3], [2]]",
                "exampleOutput": "[0, 1, 2, 3]",
                "explanation": `
		- BFS starts from node 0, visits all neighbors at distance 1 (nodes 1 and 2), then visits node 3.
	  `,
                "files": {
                    "python": "data/graph-traversal/bfs.py",
                    "cpp": "data/graph-traversal/bfs.cpp"
                }
            }, {
                "name": "Topological Sort",
                "link": "https://leetcode.com/problems/course-schedule-ii/",
                "complexity": "Time: O(V + E), Space: O(V)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Perform a topological sort on a Directed Acyclic Graph (DAG).
		Topological sorting orders vertices of a directed graph such that for every directed edge (u, v), vertex u comes before vertex v in the ordering.
	  `,
                "exampleInput": "graph = [[2, 3], [3], [3], []]",
                "exampleOutput": "[0, 1, 2, 3]",
                "explanation": `
		- A topological ordering of the vertices is [0, 1, 2, 3], respecting the dependencies between them.
	  `,
                "files": {
                    "python": "data/graph-traversal/topological-sort.py",
                    "cpp": "data/graph-traversal/topological-sort.cpp"
                }
            }, {
                "name": "Dijkstra's Algorithm",
                "link": "https://leetcode.com/problems/network-delay-time/",
                "complexity": "Time: O((V + E) log V), Space: O(V)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Find the shortest path from a source vertex to all other vertices in a graph with non-negative edge weights using Dijkstra's Algorithm.
	  `,
                "exampleInput": "graph = [[0, 1, 2], [1, 2], [2], []], start = 0",
                "exampleOutput": "[0, 1, 2, 4]",
                "explanation": `
		- Starting from vertex 0, Dijkstra’s algorithm finds the shortest distances to all other vertices.
	  `,
                "files": {
                    "python": "data/graph-traversal/dijkstra.py",
                    "cpp": "data/graph-traversal/dijkstra.cpp"
                }
            }, {
                "name": "Bellman-Ford Algorithm",
                "link": "https://leetcode.com/problems/shortest-path-in-undirected-graph-with-weights/",
                "complexity": "Time: O(V * E), Space: O(V)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Find the shortest path from a source vertex to all other vertices in a graph, allowing negative edge weights using Bellman-Ford's Algorithm.
	  `,
                "exampleInput": "graph = [[0, 1, 2], [1, 2], [2], []], start = 0",
                "exampleOutput": "[0, 1, 2, 4]",
                "explanation": `
		- Bellman-Ford computes shortest paths and detects negative weight cycles.
	  `,
                "files": {
                    "python": "data/graph-traversal/bellman-ford.py",
                    "cpp": "data/graph-traversal/bellman-ford.cpp"
                }
            }, {
                "name": "Floyd-Warshall Algorithm",
                "link": "https://leetcode.com/problems/shortest-path-in-graph-with-negative-edges/",
                "complexity": "Time: O(V^3), Space: O(V^2)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Compute shortest paths between all pairs of vertices in a graph using the Floyd-Warshall Algorithm.
		Works for graphs with negative weights but no negative weight cycles.
	  `,
                "exampleInput": "graph = [[0, 5, INF], [INF, 0, 2], [INF, INF, 0]]",
                "exampleOutput": "[[0, 5, 7], [INF, 0, 2], [INF, INF, 0]]",
                "explanation": `
		- The shortest paths between all pairs of vertices are calculated.
	  `,
                "files": {
                    "python": "data/graph-traversal/floyd-warshall.py",
                    "cpp": "data/graph-traversal/floyd-warshall.cpp"
                }
            }, {
                "name": "Kruskal's Algorithm",
                "link": "https://leetcode.com/problems/minimum-spanning-tree/",
                "complexity": "Time: O(E log E), Space: O(V)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Find the Minimum Spanning Tree (MST) of a graph using Kruskal's Algorithm.
		Kruskal's algorithm sorts all edges and adds them to the MST if they do not form a cycle.
	  `,
                "exampleInput": "graph = [[0, 1, 3], [1, 2, 5], [2, 3, 1]]",
                "exampleOutput": "[[0, 1, 3], [2, 3, 1]]",
                "explanation": `
		- The MST of the graph consists of edges [(0, 1, 3), (2, 3, 1)].
	  `,
                "files": {
                    "python": "data/graph-traversal/kruskal.py",
                    "cpp": "data/graph-traversal/kruskal.cpp"
                }
            }, {
                "name": "Prim's Algorithm",
                "link": "https://leetcode.com/problems/minimum-spanning-tree/",
                "complexity": "Time: O(E log V), Space: O(V)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Find the Minimum Spanning Tree (MST) of a graph using Prim's Algorithm.
		Prim's algorithm starts with an arbitrary vertex and grows the MST by adding the shortest edge that connects a vertex in the MST to a vertex outside of it.
	  `,
                "exampleInput": "graph = [[0, 1, 3], [1, 2, 5], [2, 3, 1]]",
                "exampleOutput": "[[0, 1, 3], [2, 3, 1]]",
                "explanation": `
		- The MST of the graph consists of edges [(0, 1, 3), (2, 3, 1)].
	  `,
                "files": {
                    "python": "data/graph-traversal/prims.py",
                    "cpp": "data/graph-traversal/prims.cpp"
                }
            }, {
                "name": "Johnson's Algorithm",
                "link": "https://leetcode.com/problems/all-pairs-shortest-path/",
                "complexity": "Time: O(V^2 log V + VE), Space: O(V^2)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Find the shortest paths between all pairs of vertices in a graph with negative weights using Johnson’s Algorithm.
		This algorithm works by transforming the graph to make all edge weights non-negative and then running Bellman-Ford and Dijkstra's algorithms.
	  `,
                "exampleInput": "graph = [[0, 5, INF], [INF, 0, 2], [INF, INF, 0]]",
                "exampleOutput": "[[0, 5, 7], [INF, 0, 2], [INF, INF, 0]]",
                "explanation": `
		- Johnson’s algorithm computes shortest paths between all pairs of vertices in a graph with negative weights.
	  `,
                "files": {
                    "python": "data/graph-traversal/johnsons-algorithm.py",
                    "cpp": "data/graph-traversal/johnsons-algorithm.cpp"
                }
            }, {
                "name": "Cycle Detection (DFS)",
                "link": "https://leetcode.com/problems/course-schedule-ii/",
                "complexity": "Time: O(V + E), Space: O(V)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Detect a cycle in a directed graph using Depth First Search (DFS).
		DFS can be used to detect cycles by marking nodes during traversal and checking if we revisit a node.
	  `,
                "exampleInput": "graph = [[1], [2], [3], [1]]",
                "exampleOutput": "True",
                "explanation": `
		- The graph contains a cycle involving nodes 1, 2, and 3.
	  `,
                "files": {
                    "python": "data/graph-traversal/cycle-detection.py",
                    "cpp": "data/graph-traversal/cycle-detection.cpp"
                }
            }
        ],
        "bit-manipulation": [{
                "name": "Single Number",
                "link": "https://leetcode.com/problems/single-number/",
                "complexity": "Time: O(n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a non-empty array of integers, every element appears twice except for one. Find that single one.
		You must implement a solution that runs in linear time and uses only constant space.
	  `,
                "exampleInput": "nums = [2, 2, 1]",
                "exampleOutput": "1",
                "explanation": `
		- Using the XOR operation, we can find the number that appears only once because all numbers that appear twice cancel each other out.
	  `,
                "files": {
                    "python": "data/bit-manipulation/single-number.py",
                    "cpp": "data/bit-manipulation/single-number.cpp"
                }
            }, {
                "name": "Power of Two",
                "link": "https://leetcode.com/problems/power-of-two/",
                "complexity": "Time: O(1), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an integer n, return true if it is a power of two. Otherwise, return false.
		An integer is a power of two if there exists an integer x such that n == 2^x.
	  `,
                "exampleInput": "n = 16",
                "exampleOutput": "true",
                "explanation": `
		- We check if n is greater than 0 and if it has exactly one '1' bit in its binary representation.
	  `,
                "files": {
                    "python": "data/bit-manipulation/power-of-two.py",
                    "cpp": "data/bit-manipulation/power-of-two.cpp"
                }
            }, {
                "name": "Counting Bits",
                "link": "https://leetcode.com/problems/counting-bits/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
	  `,
                "exampleInput": "n = 5",
                "exampleOutput": "[0, 1, 1, 2, 1, 2]",
                "explanation": `
		- For each number from 0 to n, we count the number of set bits (1's) using the built-in method.
	  `,
                "files": {
                    "python": "data/bit-manipulation/counting-bits.py",
                    "cpp": "data/bit-manipulation/counting-bits.cpp"
                }
            }, {
                "name": "Reverse Bits",
                "link": "https://leetcode.com/problems/reverse-bits/",
                "complexity": "Time: O(1), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Reverse the bits of a given 32-bit unsigned integer.
	  `,
                "exampleInput": "n = 43261596",
                "exampleOutput": "964176192",
                "explanation": `
		- The input is a 32-bit unsigned integer, and we reverse its binary representation.
	  `,
                "files": {
                    "python": "data/bit-manipulation/reverse-bits.py",
                    "cpp": "data/bit-manipulation/reverse-bits.cpp"
                }
            }, {
                "name": "Missing Number",
                "link": "https://leetcode.com/problems/missing-number/",
                "complexity": "Time: O(n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
	  `,
                "exampleInput": "nums = [3, 7, 1, 2, 8, 4, 5]",
                "exampleOutput": "6",
                "explanation": `
		- Using XOR, we can XOR all elements in the array with all numbers from 0 to n. The result will be the missing number.
	  `,
                "files": {
                    "python": "data/bit-manipulation/missing-number.py",
                    "cpp": "data/bit-manipulation/missing-number.cpp"
                }
            }, {
                "name": "Sum of Two Integers",
                "link": "https://leetcode.com/problems/sum-of-two-integers/",
                "complexity": "Time: O(1), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given two integers a and b, return their sum without using the operator + and -.
	  `,
                "exampleInput": "a = 1, b = 2",
                "exampleOutput": "3",
                "explanation": `
		- We can calculate the sum using bitwise XOR and bitwise AND with left shifts to handle carry.
	  `,
                "files": {
                    "python": "data/bit-manipulation/sum-of-two-integers.py",
                    "cpp": "data/bit-manipulation/sum-of-two-integers.cpp"
                }
            }, {
                "name": "Single Number II",
                "link": "https://leetcode.com/problems/single-number-ii/",
                "complexity": "Time: O(n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an integer array nums where every element appears three times except for one, which appears exactly once. Find that single one.
	  `,
                "exampleInput": "nums = [2, 2, 3, 2]",
                "exampleOutput": "3",
                "explanation": `
		- Using bitwise operations, we can identify the number that appears exactly once.
	  `,
                "files": {
                    "python": "data/bit-manipulation/single-number-ii.py",
                    "cpp": "data/bit-manipulation/single-number-ii.cpp"
                }
            }, {
                "name": "Add Binary",
                "link": "https://leetcode.com/problems/add-binary/",
                "complexity": "Time: O(max(m, n)), Space: O(max(m, n))",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given two binary strings a and b, return their sum as a binary string.
	  `,
                "exampleInput": "a = '11', b = '1'",
                "exampleOutput": "'100'",
                "explanation": `
		- Perform binary addition using bitwise operations for each corresponding bit.
	  `,
                "files": {
                    "python": "data/bit-manipulation/add-binary.py",
                    "cpp": "data/bit-manipulation/add-binary.cpp"
                }
            }, {
                "name": "Integer to Roman",
                "link": "https://leetcode.com/problems/integer-to-roman/",
                "complexity": "Time: O(1), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Convert an integer to a Roman numeral.
	  `,
                "exampleInput": "num = 58",
                "exampleOutput": "'LVIII'",
                "explanation": `
		- We use bitwise operations to determine the number's components in the Roman numeral system.
	  `,
                "files": {
                    "python": "data/bit-manipulation/integer-to-roman.py",
                    "cpp": "data/bit-manipulation/integer-to-roman.cpp"
                }
            }, {
                "name": "Roman to Integer",
                "link": "https://leetcode.com/problems/roman-to-integer/",
                "complexity": "Time: O(1), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Convert a Roman numeral to an integer.
	  `,
                "exampleInput": "s = 'IX'",
                "exampleOutput": "9",
                "explanation": `
		- Traverse the Roman numeral string and subtract values when a smaller numeral appears before a larger one.
	  `,
                "files": {
                    "python": "data/bit-manipulation/roman-to-integer.py",
                    "cpp": "data/bit-manipulation/roman-to-integer.cpp"
                }
            }
        ],
        "prefix-sum": [{
                "name": "Prefix Sum Array",
                "link": "https://leetcode.com/problems/range-sum-query-immutable/",
                "complexity": "Time: O(1) for queries, O(n) for building the array, Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Implement a prefix sum array to quickly compute the sum of elements in a given range.
		You are given an integer array and you need to implement a method that computes the sum of the elements in a given range [i, j] inclusive in constant time.
	  `,
                "exampleInput": "nums = [-2, 0, 3, -5, 2, -1], i = 0, j = 2",
                "exampleOutput": "1",
                "explanation": `
		- The prefix sum array allows constant-time range sum queries by storing the cumulative sum of elements at each index.
	  `,
                "files": {
                    "python": "data/prefix-sum/prefix-sum-array.py",
                    "cpp": "data/prefix-sum/prefix-sum-array.cpp"
                }
            }, {
                "name": "Range Sum Query - 2D",
                "link": "https://leetcode.com/problems/range-sum-query-2d-immutable/",
                "complexity": "Time: O(1) for queries, O(m * n) for building the array, Space: O(m * n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Implement a 2D prefix sum array to calculate the sum of elements in a 2D submatrix.
		You are given a 2D matrix and need to compute the sum of elements in a submatrix using the prefix sum array.
	  `,
                "exampleInput": "matrix = [[3, 0, 1, 4], [5, 6, 3, 2], [1, 2, 0, 1]], topLeft = (2, 1), bottomRight = (1, 2)",
                "exampleOutput": "11",
                "explanation": `
		- We use a 2D prefix sum array to efficiently compute the sum of elements in the given submatrix.
	  `,
                "files": {
                    "python": "data/prefix-sum/range-sum-query-2d.py",
                    "cpp": "data/prefix-sum/range-sum-query-2d.cpp"
                }
            }, {
                "name": "Subarray Sum Equals K",
                "link": "https://leetcode.com/problems/subarray-sum-equals-k/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array of integers and an integer k, find the total number of continuous subarrays whose sum equals k.
		Using a prefix sum array helps to efficiently track sums of subarrays and avoid redundant computations.
	  `,
                "exampleInput": "nums = [1, 1, 1], k = 2",
                "exampleOutput": "2",
                "explanation": `
		- We compute the prefix sum for each index and track how many times a subarray sum equals k.
	  `,
                "files": {
                    "python": "data/prefix-sum/subarray-sum-equals-k.py",
                    "cpp": "data/prefix-sum/subarray-sum-equals-k.cpp"
                }
            }, {
                "name": "Maximum Sum of Subarray of Size K",
                "link": "https://leetcode.com/problems/maximum-sum-of-subarray-of-size-k/",
                "complexity": "Time: O(n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array of integers and a number k, find the maximum sum of a subarray of size k.
		You can use a sliding window approach along with a prefix sum array for efficient computation.
	  `,
                "exampleInput": "nums = [2, 1, 5, 1, 3, 2], k = 3",
                "exampleOutput": "9",
                "explanation": `
		- We maintain a sliding window of size k and compute the sum using prefix sums to find the maximum sum.
	  `,
                "files": {
                    "python": "data/prefix-sum/maximum-sum-of-subarray.py",
                    "cpp": "data/prefix-sum/maximum-sum-of-subarray.cpp"
                }
            }, {
                "name": "Product of Array Except Self",
                "link": "https://leetcode.com/problems/product-of-array-except-self/",
                "complexity": "Time: O(n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array of n integers, return an array output such that output[i] is the product of all the elements of nums except nums[i].
		Use prefix and suffix products to avoid using division.
	  `,
                "exampleInput": "nums = [1, 2, 3, 4]",
                "exampleOutput": "[24, 12, 8, 6]",
                "explanation": `
		- Compute the prefix product and suffix product to calculate the result without using division.
	  `,
                "files": {
                    "python": "data/prefix-sum/product-of-array-except-self.py",
                    "cpp": "data/prefix-sum/product-of-array-except-self.cpp"
                }
            }, {
                "name": "Count of Subarrays with Given XOR",
                "link": "https://leetcode.com/problems/subarray-xor-equals-k/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array and a value k, find the number of subarrays where the XOR of the elements equals k.
		Using prefix XOR and hashmaps helps solve this problem efficiently.
	  `,
                "exampleInput": "nums = [4, 2, 2, 6, 4], k = 6",
                "exampleOutput": "4",
                "explanation": `
		- We compute the XOR of all elements in the prefix sum array and use a hashmap to count the number of valid subarrays.
	  `,
                "files": {
                    "python": "data/prefix-sum/count-of-subarrays-with-xor.py",
                    "cpp": "data/prefix-sum/count-of-subarrays-with-xor.cpp"
                }
            }, {
                "name": "Subarray Sum Divisible by K",
                "link": "https://leetcode.com/problems/subarray-sum-divisible-by-k/",
                "complexity": "Time: O(n), Space: O(k)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array of integers and an integer k, return the total number of subarrays whose sum is divisible by k.
		We can use a prefix sum array to calculate the sum of subarrays efficiently.
	  `,
                "exampleInput": "nums = [23, 2, 4, 6, 7], k = 6",
                "exampleOutput": "4",
                "explanation": `
		- Use the prefix sum array and modulus to identify subarrays whose sum is divisible by k.
	  `,
                "files": {
                    "python": "data/prefix-sum/subarray-sum-divisible-by-k.py",
                    "cpp": "data/prefix-sum/subarray-sum-divisible-by-k.cpp"
                }
            }, {
                "name": "Subarray with Sum at Most K",
                "link": "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/",
                "complexity": "Time: O(n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array and an integer k, find the length of the longest subarray such that the sum of its elements is at most k.
		We can use a sliding window technique combined with a prefix sum for efficient computation.
	  `,
                "exampleInput": "nums = [1, 2, 3, 4, 5], k = 11",
                "exampleOutput": "3",
                "explanation": `
		- Use the sliding window to adjust the range and track the sum of the current subarray.
	  `,
                "files": {
                    "python": "data/prefix-sum/subarray-with-sum-at-most-k.py",
                    "cpp": "data/prefix-sum/subarray-with-sum-at-most-k.cpp"
                }
            }, {
                "name": "Find Pivot Index",
                "link": "https://leetcode.com/problems/find-pivot-index/",
                "complexity": "Time: O(n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array of integers, find the pivot index where the sum of the elements on the left is equal to the sum of the elements on the right.
		Use a prefix sum approach to efficiently calculate the sums.
	  `,
                "exampleInput": "nums = [1, 7, 3, 6, 5, 6]",
                "exampleOutput": "3",
                "explanation": `
		- We compute the prefix sum and track the left and right sums to find the pivot index.
	  `,
                "files": {
                    "python": "data/prefix-sum/find-pivot-index.py",
                    "cpp": "data/prefix-sum/find-pivot-index.cpp"
                }
            }, {
                "name": "Maximum Product Subarray",
                "link": "https://leetcode.com/problems/maximum-product-subarray/",
                "complexity": "Time: O(n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an integer array, find the contiguous subarray (containing at least one number) which has the largest product.
		Using a prefix product array, we can solve this problem more efficiently.
	  `,
                "exampleInput": "nums = [2, 3, -2, 4]",
                "exampleOutput": "6",
                "explanation": `
		- We maintain two running products (max and min) to handle both positive and negative numbers.
	  `,
                "files": {
                    "python": "data/prefix-sum/maximum-product-subarray.py",
                    "cpp": "data/prefix-sum/maximum-product-subarray.cpp"
                }
            }
        ],
        "recursion": [{
                "name": "Fibonacci Number",
                "link": "https://leetcode.com/problems/fibonacci-number/",
                "complexity": "Time: O(2^n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1. 
		Write a function to return the nth Fibonacci number.
	  `,
                "exampleInput": "n = 4",
                "exampleOutput": "3",
                "explanation": `
		- Recursively calculate the Fibonacci number by summing the previous two numbers in the sequence.
	  `,
                "files": {
                    "python": "data/recursion/fibonacci-number.py",
                    "cpp": "data/recursion/fibonacci-number.cpp"
                }
            }, {
                "name": "Climbing Stairs",
                "link": "https://leetcode.com/problems/climbing-stairs/",
                "complexity": "Time: O(2^n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. 
		How many distinct ways can you climb to the top?
	  `,
                "exampleInput": "n = 3",
                "exampleOutput": "3",
                "explanation": `
		- Use recursion to break the problem into smaller subproblems where each step can either be a 1-step or 2-step climb.
	  `,
                "files": {
                    "python": "data/recursion/climbing-stairs.py",
                    "cpp": "data/recursion/climbing-stairs.cpp"
                }
            }, {
                "name": "Generate Parentheses",
                "link": "https://leetcode.com/problems/generate-parentheses/",
                "complexity": "Time: O(4^n / sqrt(n)), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
	  `,
                "exampleInput": "n = 3",
                "exampleOutput": '["((()))", "(()())", "(())()", "()(())", "()()()"]',
                "explanation": `
		- Use recursion to add open and close parentheses in all possible valid configurations, ensuring that at no point the number of closing parentheses exceeds the number of open ones.
	  `,
                "files": {
                    "python": "data/recursion/generate-parentheses.py",
                    "cpp": "data/recursion/generate-parentheses.cpp"
                }
            }, {
                "name": "Permutations",
                "link": "https://leetcode.com/problems/permutations/",
                "complexity": "Time: O(n!), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array of distinct integers, return all the possible permutations.
	  `,
                "exampleInput": "nums = [1, 2, 3]",
                "exampleOutput": "[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]",
                "explanation": `
		- Use recursion to generate all possible permutations by choosing an element at each recursive step and then backtracking.
	  `,
                "files": {
                    "python": "data/recursion/permutations.py",
                    "cpp": "data/recursion/permutations.cpp"
                }
            }, {
                "name": "Subsets",
                "link": "https://leetcode.com/problems/subsets/",
                "complexity": "Time: O(2^n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a set of distinct integers, return all possible subsets.
	  `,
                "exampleInput": "nums = [1, 2, 3]",
                "exampleOutput": "[[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]",
                "explanation": `
		- Use recursion to generate all subsets by either including or excluding each element at each step.
	  `,
                "files": {
                    "python": "data/recursion/subsets.py",
                    "cpp": "data/recursion/subsets.cpp"
                }
            }, {
                "name": "N-Queens",
                "link": "https://leetcode.com/problems/n-queens/",
                "complexity": "Time: O(n!), Space: O(n^2)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Implement the N-Queens puzzle. Solve the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
	  `,
                "exampleInput": "n = 4",
                "exampleOutput": "[['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]",
                "explanation": `
		- Use recursion to place queens row by row and backtrack if an invalid placement is detected.
	  `,
                "files": {
                    "python": "data/recursion/n-queens.py",
                    "cpp": "data/recursion/n-queens.cpp"
                }
            }, {
                "name": "Letter Combinations of a Phone Number",
                "link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
                "complexity": "Time: O(4^n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
		You can assume that the input is always valid.
	  `,
                "exampleInput": "digits = '23'",
                "exampleOutput": '["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]',
                "explanation": `
		- Use recursion to map each digit to corresponding letters and generate all possible combinations.
	  `,
                "files": {
                    "python": "data/recursion/letter-combinations-of-phone-number.py",
                    "cpp": "data/recursion/letter-combinations-of-phone-number.cpp"
                }
            }, {
                "name": "Combination Sum",
                "link": "https://leetcode.com/problems/combination-sum/",
                "complexity": "Time: O(2^n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array of distinct integers and a target number, find all unique combinations of numbers that sum up to the target.
		Each number in the array may be used more than once in the combination.
	  `,
                "exampleInput": "candidates = [2, 3, 6, 7], target = 7",
                "exampleOutput": "[[2, 2, 3], [7]]",
                "explanation": `
		- Use recursion to explore all possible combinations of candidates that sum to the target.
	  `,
                "files": {
                    "python": "data/recursion/combination-sum.py",
                    "cpp": "data/recursion/combination-sum.cpp"
                }
            }, {
                "name": "Combination Sum II",
                "link": "https://leetcode.com/problems/combination-sum-ii/",
                "complexity": "Time: O(2^n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a collection of candidate numbers (which may have duplicates) and a target number, find all unique combinations that sum up to the target.
	  `,
                "exampleInput": "candidates = [10, 1, 2, 7, 6, 5], target = 8",
                "exampleOutput": "[[1, 2, 5], [1, 7], [2, 6]]",
                "explanation": `
		- Use recursion and backtracking to explore possible combinations and skip duplicates to avoid repeated results.
	  `,
                "files": {
                    "python": "data/recursion/combination-sum-ii.py",
                    "cpp": "data/recursion/combination-sum-ii.cpp"
                }
            }, {
                "name": "Unique Paths",
                "link": "https://leetcode.com/problems/unique-paths/",
                "complexity": "Time: O(m * n), Space: O(m * n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		You are given a m x n grid, starting from the top-left corner. You can only move either down or right at any point in time. 
		Find how many unique paths exist from the top-left corner to the bottom-right corner.
	  `,
                "exampleInput": "m = 3, n = 7",
                "exampleOutput": "28",
                "explanation": `
		- Use recursion to calculate the number of ways to reach each cell by combining the ways to reach from above and left cells.
	  `,
                "files": {
                    "python": "data/recursion/unique-paths.py",
                    "cpp": "data/recursion/unique-paths.cpp"
                }
            }
        ],
        "sorting": [{
                "name": "Merge Sort",
                "link": "https://leetcode.com/problems/merge-sorted-array/",
                "complexity": "Time: O(n log n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Sort an array using the merge sort algorithm. Merge Sort is a divide and conquer algorithm that splits the array into two halves, 
		recursively sorts each half, and then merges the two sorted halves.
	  `,
                "exampleInput": "nums = [38, 27, 43, 3, 9, 82, 10]",
                "exampleOutput": "[3, 9, 10, 27, 38, 43, 82]",
                "explanation": `
		- Split the array into two halves.
		- Recursively sort each half.
		- Merge the sorted halves back together.
	  `,
                "files": {
                    "python": "data/sorting/merge-sort.py",
                    "cpp": "data/sorting/merge-sort.cpp"
                }
            }, {
                "name": "Quick Sort",
                "link": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
                "complexity": "Time: O(n log n) on average, O(n^2) in the worst case, Space: O(log n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Sort an array using the quicksort algorithm. Quicksort is a divide and conquer algorithm that selects a pivot element and partitions
		the array around it, recursively sorting the partitions.
	  `,
                "exampleInput": "nums = [10, 80, 30, 90, 40, 50, 70]",
                "exampleOutput": "[10, 30, 40, 50, 70, 80, 90]",
                "explanation": `
		- Choose a pivot (usually the last element in the array).
		- Partition the array such that all elements smaller than the pivot are on the left, and all larger elements are on the right.
		- Recursively apply quicksort to the left and right partitions.
	  `,
                "files": {
                    "python": "data/sorting/quick-sort.py",
                    "cpp": "data/sorting/quick-sort.cpp"
                }
            }, {
                "name": "Bubble Sort",
                "link": "https://leetcode.com/problems/sort-an-array/",
                "complexity": "Time: O(n^2), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Sort an array using the bubble sort algorithm. Bubble sort works by repeatedly stepping through the list, comparing adjacent items
		and swapping them if they are in the wrong order.
	  `,
                "exampleInput": "nums = [64, 34, 25, 12, 22, 11, 90]",
                "exampleOutput": "[11, 12, 22, 25, 34, 64, 90]",
                "explanation": `
		- Iterate through the array.
		- Swap adjacent elements if they are in the wrong order.
		- Repeat the process until the array is sorted.
	  `,
                "files": {
                    "python": "data/sorting/bubble-sort.py",
                    "cpp": "data/sorting/bubble-sort.cpp"
                }
            }, {
                "name": "Insertion Sort",
                "link": "https://leetcode.com/problems/sort-an-array/",
                "complexity": "Time: O(n^2), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Sort an array using the insertion sort algorithm. Insertion sort builds the final sorted array one item at a time by inserting 
		each item into its correct position.
	  `,
                "exampleInput": "nums = [12, 11, 13, 5, 6]",
                "exampleOutput": "[5, 6, 11, 12, 13]",
                "explanation": `
		- Take one element from the unsorted part of the array.
		- Insert it into its correct position in the sorted part.
		- Repeat until the whole array is sorted.
	  `,
                "files": {
                    "python": "data/sorting/insertion-sort.py",
                    "cpp": "data/sorting/insertion-sort.cpp"
                }
            }, {
                "name": "Selection Sort",
                "link": "https://leetcode.com/problems/sort-an-array/",
                "complexity": "Time: O(n^2), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Sort an array using the selection sort algorithm. Selection sort repeatedly selects the smallest element from the unsorted part 
		and swaps it with the leftmost unsorted element.
	  `,
                "exampleInput": "nums = [29, 10, 14, 37, 13]",
                "exampleOutput": "[10, 13, 14, 29, 37]",
                "explanation": `
		- Find the minimum element in the unsorted part of the array.
		- Swap it with the leftmost unsorted element.
		- Repeat the process for the remaining unsorted part.
	  `,
                "files": {
                    "python": "data/sorting/selection-sort.py",
                    "cpp": "data/sorting/selection-sort.cpp"
                }
            }, {
                "name": "Heap Sort",
                "link": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
                "complexity": "Time: O(n log n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Sort an array using the heap sort algorithm. Heap sort builds a max heap and repeatedly extracts the largest element to 
		build the sorted array.
	  `,
                "exampleInput": "nums = [3, 2, 1, 5, 6, 4]",
                "exampleOutput": "[1, 2, 3, 4, 5, 6]",
                "explanation": `
		- Build a max heap.
		- Repeatedly extract the largest element from the heap and place it at the end of the array.
		- Heapify the remaining array.
	  `,
                "files": {
                    "python": "data/sorting/heap-sort.py",
                    "cpp": "data/sorting/heap-sort.cpp"
                }
            }, {
                "name": "Counting Sort",
                "link": "https://leetcode.com/problems/counting-elements/",
                "complexity": "Time: O(n+k), Space: O(n+k)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Sort an array using the counting sort algorithm. Counting sort counts the occurrences of each element and then uses that 
		information to place each element in its correct position.
	  `,
                "exampleInput": "nums = [1, 2, 2, 1, 3, 3, 3]",
                "exampleOutput": "[1, 1, 2, 2, 3, 3, 3]",
                "explanation": `
		- Count the occurrences of each element.
		- Place each element in its correct position based on the count.
	  `,
                "files": {
                    "python": "data/sorting/counting-sort.py",
                    "cpp": "data/sorting/counting-sort.cpp"
                }
            }, {
                "name": "Radix Sort",
                "link": "https://leetcode.com/problems/radix-sort/",
                "complexity": "Time: O(nk), Space: O(n+k)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Sort an array using the radix sort algorithm. Radix sort sorts numbers by processing individual digits in a number. 
		It uses counting sort as a subroutine to sort each digit.
	  `,
                "exampleInput": "nums = [170, 45, 75, 90, 802, 24, 2, 66]",
                "exampleOutput": "[2, 24, 45, 66, 75, 90, 170, 802]",
                "explanation": `
		- Process each digit of the numbers starting from the least significant digit.
		- Use counting sort to sort the numbers by each digit.
	  `,
                "files": {
                    "python": "data/sorting/radix-sort.py",
                    "cpp": "data/sorting/radix-sort.cpp"
                }
            }, {
                "name": "Bucket Sort",
                "link": "https://leetcode.com/problems/bucket-sort/",
                "complexity": "Time: O(n+k), Space: O(n+k)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Sort an array using the bucket sort algorithm. Bucket sort divides the array into a number of buckets, sorts each bucket, 
		and then concatenates the sorted buckets.
	  `,
                "exampleInput": "nums = [0.42, 0.32, 0.52, 0.62, 0.71, 0.83]",
                "exampleOutput": "[0.32, 0.42, 0.52, 0.62, 0.71, 0.83]",
                "explanation": `
		- Divide the array into buckets.
		- Sort each bucket using another sorting algorithm.
		- Concatenate the sorted buckets.
	  `,
                "files": {
                    "python": "data/sorting/bucket-sort.py",
                    "cpp": "data/sorting/bucket-sort.cpp"
                }
            }
        ],
        "hashing": [{
                "name": "Two Sum",
                "link": "https://leetcode.com/problems/two-sum/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array of integers, return the indices of the two numbers such that they add up to a specific target.
		You may assume that each input would have exactly one solution, and you may not use the same element twice.
	  `,
                "exampleInput": "nums = [2, 7, 11, 15], target = 9",
                "exampleOutput": "[0, 1]",
                "explanation": `
		- Use a hash map to store the difference between the target and the current element as the key, 
		  and its index as the value. If the difference is found in the hash map, return the indices.
	  `,
                "files": {
                    "python": "data/hashing/two-sum.py",
                    "cpp": "data/hashing/two-sum.cpp"
                }
            }, {
                "name": "Group Anagrams",
                "link": "https://leetcode.com/problems/group-anagrams/",
                "complexity": "Time: O(n * k), Space: O(n * k)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array of strings, group the anagrams together.
		You can return the answer in any order.
	  `,
                "exampleInput": 'strs = ["eat", "tea", "tan", "ate", "nat", "bat"]',
                "exampleOutput": '[["eat","tea","ate"],["tan","nat"],["bat"]]',
                "explanation": `
		- Use a hash map to group strings by their sorted version or frequency of characters as the key.
		- The key will allow you to find anagrams efficiently.
	  `,
                "files": {
                    "python": "data/hashing/group-anagrams.py",
                    "cpp": "data/hashing/group-anagrams.cpp"
                }
            }, {
                "name": "Longest Consecutive Sequence",
                "link": "https://leetcode.com/problems/longest-consecutive-sequence/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
		Your algorithm should run in O(n) complexity.
	  `,
                "exampleInput": "nums = [100, 4, 200, 1, 3, 2]",
                "exampleOutput": "4",
                "explanation": `
		- Use a hash set to store all the elements.
		- For each element, check if it starts a sequence by verifying if the previous element exists.
		- Count the length of the sequence.
	  `,
                "files": {
                    "python": "data/hashing/longest-consecutive-sequence.py",
                    "cpp": "data/hashing/longest-consecutive-sequence.cpp"
                }
            }, {
                "name": "Subarray Sum Equals K",
                "link": "https://leetcode.com/problems/subarray-sum-equals-k/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array of integers and an integer k, find the total number of continuous subarrays whose sum equals to k.
	  `,
                "exampleInput": "nums = [1, 1, 1], k = 2",
                "exampleOutput": "2",
                "explanation": `
		- Use a hash map to store the cumulative sum up to the current index.
		- Check if the difference between the cumulative sum and k has been encountered before.
	  `,
                "files": {
                    "python": "data/hashing/subarray-sum-equals-k.py",
                    "cpp": "data/hashing/subarray-sum-equals-k.cpp"
                }
            }, {
                "name": "Contains Duplicate",
                "link": "https://leetcode.com/problems/contains-duplicate/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an integer array, return true if any value appears at least twice in the array, and return false if every element is distinct.
	  `,
                "exampleInput": "nums = [1, 2, 3, 1]",
                "exampleOutput": "true",
                "explanation": `
		- Use a hash set to store elements as you iterate through the array.
		- If an element is already present in the set, return true. Otherwise, continue.
	  `,
                "files": {
                    "python": "data/hashing/contains-duplicate.py",
                    "cpp": "data/hashing/contains-duplicate.cpp"
                }
            }, {
                "name": "Happy Number",
                "link": "https://leetcode.com/problems/happy-number/",
                "complexity": "Time: O(log n), Space: O(log n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Write an algorithm to determine if a number is "happy". A happy number is defined by the following process:
		1. Starting with any positive integer, replace the number by the sum of the squares of its digits.
		2. Repeat the process until the number equals 1 (where it will remain), or it loops endlessly in a cycle that does not include 1.
		Return true if the number is happy, and false if not.
	  `,
                "exampleInput": "n = 19",
                "exampleOutput": "true",
                "explanation": `
		- Use a hash set to keep track of the numbers that appear during the transformation.
		- If the number is repeated, it means the process is stuck in a cycle and the number is not happy.
	  `,
                "files": {
                    "python": "data/hashing/happy-number.py",
                    "cpp": "data/hashing/happy-number.cpp"
                }
            }, {
                "name": "Find the Duplicate Number",
                "link": "https://leetcode.com/problems/find-the-duplicate-number/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. 
		Find the duplicate one.
	  `,
                "exampleInput": "nums = [1, 3, 4, 2, 2]",
                "exampleOutput": "2",
                "explanation": `
		- Use a hash set to track the numbers that have been encountered as you iterate through the array.
		- If a number has already been seen, it's the duplicate.
	  `,
                "files": {
                    "python": "data/hashing/find-the-duplicate-number.py",
                    "cpp": "data/hashing/find-the-duplicate-number.cpp"
                }
            }, {
                "name": "Intersection of Two Arrays II",
                "link": "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given two arrays, write a function to compute their intersection.
		Each element in the result should appear as many times as it shows in both arrays.
	  `,
                "exampleInput": "nums1 = [1, 2, 2, 1], nums2 = [2, 2]",
                "exampleOutput": "[2, 2]",
                "explanation": `
		- Use a hash map to store the frequency of each element in the first array.
		- Iterate through the second array and check if the element exists in the hash map.
	  `,
                "files": {
                    "python": "data/hashing/intersection-of-two-arrays-ii.py",
                    "cpp": "data/hashing/intersection-of-two-arrays-ii.cpp"
                }
            }, {
                "name": "Valid Sudoku",
                "link": "https://leetcode.com/problems/valid-sudoku/",
                "complexity": "Time: O(1), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
		- Each row must contain the digits 1-9 without repetition.
		- Each column must contain the digits 1-9 without repetition.
		- Each of the 9 sub-boxes must contain the digits 1-9 without repetition.
	  `,
                "exampleInput": 'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."] ...]',
                "exampleOutput": "true",
                "explanation": `
		- Use hash sets to track the numbers seen in each row, column, and sub-box.
		- Ensure no number is repeated in any of these sets.
	  `,
                "files": {
                    "python": "data/hashing/valid-sudoku.py",
                    "cpp": "data/hashing/valid-sudoku.cpp"
                }
            }, {
                "name": "Top K Frequent Elements",
                "link": "https://leetcode.com/problems/top-k-frequent-elements/",
                "complexity": "Time: O(n log k), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an integer array, return the k most frequent elements.
	  `,
                "exampleInput": "nums = [1,1,1,2,2,3], k = 2",
                "exampleOutput": "[1, 2]",
                "explanation": `
		- Use a hash map to count the frequency of each element.
		- Use a heap or bucket sort to extract the k most frequent elements.
	  `,
                "files": {
                    "python": "data/hashing/top-k-frequent-elements.py",
                    "cpp": "data/hashing/top-k-frequent-elements.cpp"
                }
            }
        ],
        "monotonic-stack": [{
                "name": "Daily Temperature",
                "link": "https://leetcode.com/problems/daily-temperatures/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a list of daily temperatures, where temperatures[i] is the temperature of the day i.
		Return a list of the number of days you have to wait until a warmer temperature. 
		If there is no future day for which this is possible, put 0 instead.
	  `,
                "exampleInput": "temperatures = [73, 74, 75, 71, 69, 72, 76, 73]",
                "exampleOutput": "[1, 1, 4, 2, 1, 1, 0, 0]",
                "explanation": `
		- Use a monotonic stack to track the indices of the temperatures in descending order.
		- For each temperature, if it's warmer than the temperature at the top of the stack, pop the stack and calculate the difference in days.
	  `,
                "files": {
                    "python": "data/monotonic-stack/daily-temperatures.py",
                    "cpp": "data/monotonic-stack/daily-temperatures.cpp"
                }
            }, {
                "name": "Next Greater Element I",
                "link": "https://leetcode.com/problems/next-greater-element-i/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		You are given two arrays nums1 and nums2 where nums1 is a subset of nums2.
		For each element of nums1, find the next greater element in nums2. 
		The next greater element of a number x in nums1 is the first greater number to the right of x in nums2. 
		If it does not exist, output -1 for this number.
	  `,
                "exampleInput": "nums1 = [4,1,2], nums2 = [1,3,4,2,5]",
                "exampleOutput": "[5, 3, -1]",
                "explanation": `
		- Use a monotonic stack to store the elements of nums2.
		- For each element in nums2, find the next greater element by popping smaller elements from the stack.
		- Once the stack is processed, map the results to nums1.
	  `,
                "files": {
                    "python": "data/monotonic-stack/next-greater-element-i.py",
                    "cpp": "data/monotonic-stack/next-greater-element-i.cpp"
                }
            }, {
                "name": "Largest Rectangle in Histogram",
                "link": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array of integers heights representing the histogram's bar heights where the width of each bar is 1, 
		find the area of the largest rectangle in the histogram.
	  `,
                "exampleInput": "heights = [2,1,5,6,2,3]",
                "exampleOutput": "10",
                "explanation": `
		- Use a monotonic stack to keep track of the indices of the histogram bars in increasing order.
		- Calculate the area by popping the stack when a shorter bar is encountered.
	  `,
                "files": {
                    "python": "data/monotonic-stack/largest-rectangle-in-histogram.py",
                    "cpp": "data/monotonic-stack/largest-rectangle-in-histogram.cpp"
                }
            }, {
                "name": "Next Greater Element II",
                "link": "https://leetcode.com/problems/next-greater-element-ii/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a circular array nums (nums[0] and nums[nums.length-1] are adjacent), 
		find the next greater element of each element of the array.
		The next greater element of a number x is the first greater number to the right of x in the array. 
		If it does not exist, output -1 for this number.
	  `,
                "exampleInput": "nums = [1,2,1]",
                "exampleOutput": "[2,-1,2]",
                "explanation": `
		- Use a monotonic stack to simulate the circular nature of the array by iterating twice over the array.
		- Track the next greater element for each element efficiently.
	  `,
                "files": {
                    "python": "data/monotonic-stack/next-greater-element-ii.py",
                    "cpp": "data/monotonic-stack/next-greater-element-ii.cpp"
                }
            }, {
                "name": "Trapping Rain Water",
                "link": "https://leetcode.com/problems/trapping-rain-water/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given n non-negative integers representing an elevation map where the width of each bar is 1, 
		compute how much water it can trap after raining.
	  `,
                "exampleInput": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
                "exampleOutput": "6",
                "explanation": `
		- Use a monotonic stack to keep track of the indices where water can be trapped.
		- For each element, calculate the trapped water by comparing the current element's height with the heights in the stack.
	  `,
                "files": {
                    "python": "data/monotonic-stack/trapping-rain-water.py",
                    "cpp": "data/monotonic-stack/trapping-rain-water.cpp"
                }
            }, {
                "name": "Remove Duplicate Letters",
                "link": "https://leetcode.com/problems/remove-duplicate-letters/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		You are given a string s. You need to remove duplicate letters so that every letter appears once and only once. 
		You must make sure that the resulting string is the smallest in lexicographical order among all possible results.
	  `,
                "exampleInput": "s = \"bcabc\"",
                "exampleOutput": "\"abc\"",
                "explanation": `
		- Use a monotonic stack to track the characters in the lexicographically smallest order.
		- Ensure that each character appears only once in the final result.
	  `,
                "files": {
                    "python": "data/monotonic-stack/remove-duplicate-letters.py",
                    "cpp": "data/monotonic-stack/remove-duplicate-letters.cpp"
                }
            }, {
                "name": "Sum of Subarray Minimums",
                "link": "https://leetcode.com/problems/sum-of-subarray-minimums/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array of integers arr, find the sum of the minimums of every subarray of arr. 
		As the answer may be very large, return the answer modulo 10^9 + 7.
	  `,
                "exampleInput": "arr = [3,1,2,4]",
                "exampleOutput": "17",
                "explanation": `
		- Use a monotonic stack to calculate the minimum for each subarray by maintaining the previous smaller element's index.
		- Add the minimum values to get the sum.
	  `,
                "files": {
                    "python": "data/monotonic-stack/sum-of-subarray-minimums.py",
                    "cpp": "data/monotonic-stack/sum-of-subarray-minimums.cpp"
                }
            }, {
                "name": "Largest Rectangle in Histogram II",
                "link": "https://leetcode.com/problems/largest-rectangle-in-histogram-ii/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a matrix of m x n elements representing a binary matrix, find the largest rectangle containing only 1's.
	  `,
                "exampleInput": "matrix = [[1,0,1,0,0], [1,0,1,1,1], [1,1,1,1,1], [1,0,0,1,0]]",
                "exampleOutput": "6",
                "explanation": `
		- Use a monotonic stack on each row to calculate the largest rectangle area as you treat each row as a histogram.
		- Calculate the maximum rectangle area iteratively.
	  `,
                "files": {
                    "python": "data/monotonic-stack/largest-rectangle-in-histogram-ii.py",
                    "cpp": "data/monotonic-stack/largest-rectangle-in-histogram-ii.cpp"
                }
            }, {
                "name": "Maximal Rectangle",
                "link": "https://leetcode.com/problems/maximal-rectangle/",
                "complexity": "Time: O(m * n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
	  `,
                "exampleInput": "matrix = [[1,0,1,0,0], [1,0,1,1,1], [1,1,1,1,1], [1,0,0,1,0]]",
                "exampleOutput": "6",
                "explanation": `
		- Use a monotonic stack on the histogram of each row of the matrix to compute the largest rectangle area.
		- Treat each row as a base and calculate the area for each row.
	  `,
                "files": {
                    "python": "data/monotonic-stack/maximal-rectangle.py",
                    "cpp": "data/monotonic-stack/maximal-rectangle.cpp"
                }
            }, {
                "name": "Largest Rectangle in Skyline",
                "link": "https://leetcode.com/problems/largest-rectangle-in-skyline/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a series of building heights represented by an array, find the largest rectangular area possible in the skyline.
	  `,
                "exampleInput": "heights = [2,1,5,6,2,3]",
                "exampleOutput": "10",
                "explanation": `
		- Use a monotonic stack to maintain the indices of the building heights.
		- Calculate the area by determining the width of the rectangle formed with each building.
	  `,
                "files": {
                    "python": "data/monotonic-stack/largest-rectangle-in-skyline.py",
                    "cpp": "data/monotonic-stack/largest-rectangle-in-skyline.cpp"
                }
            }
        ],
        "tree-traversal": [{
                "name": "Binary Tree Inorder Traversal",
                "link": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given the root of a binary tree, return the inorder traversal of its nodes' values.
	  `,
                "exampleInput": "root = [1,null,2,3]",
                "exampleOutput": "[1,3,2]",
                "explanation": `
		- Inorder traversal of a binary tree visits nodes in the left subtree, followed by the root node, and then the right subtree.
		- Use a recursive approach or stack-based iteration to achieve this.
	  `,
                "files": {
                    "python": "data/tree/binary-tree-inorder-traversal.py",
                    "cpp": "data/tree/binary-tree-inorder-traversal.cpp"
                }
            }, {
                "name": "Binary Tree Level Order Traversal",
                "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given the root of a binary tree, return the level order traversal of its nodes' values.
		(From left to right, level by level).
	  `,
                "exampleInput": "root = [3,9,20,null,null,15,7]",
                "exampleOutput": "[[3],[9,20],[15,7]]",
                "explanation": `
		- Perform a breadth-first search (BFS) traversal using a queue to process nodes level by level.
	  `,
                "files": {
                    "python": "data/tree/binary-tree-level-order-traversal.py",
                    "cpp": "data/tree/binary-tree-level-order-traversal.cpp"
                }
            }, {
                "name": "Maximum Depth of Binary Tree",
                "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
                "complexity": "Time: O(n), Space: O(h)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given the root of a binary tree, return its maximum depth.
		A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
	  `,
                "exampleInput": "root = [3,9,20,null,null,15,7]",
                "exampleOutput": "3",
                "explanation": `
		- Use depth-first search (DFS) or breadth-first search (BFS) to calculate the maximum depth.
	  `,
                "files": {
                    "python": "data/tree/maximum-depth-of-binary-tree.py",
                    "cpp": "data/tree/maximum-depth-of-binary-tree.cpp"
                }
            }, {
                "name": "Symmetric Tree",
                "link": "https://leetcode.com/problems/symmetric-tree/",
                "complexity": "Time: O(n), Space: O(h)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given the root of a binary tree, determine if it is a mirror of itself (symmetric around its center).
	  `,
                "exampleInput": "root = [1,2,2,3,4,4,3]",
                "exampleOutput": "true",
                "explanation": `
		- Use a recursive approach to compare the left and right subtrees of each node.
		- The tree is symmetric if its left and right subtrees are mirror images of each other.
	  `,
                "files": {
                    "python": "data/tree/symmetric-tree.py",
                    "cpp": "data/tree/symmetric-tree.cpp"
                }
            }, {
                "name": "Path Sum II",
                "link": "https://leetcode.com/problems/path-sum-ii/",
                "complexity": "Time: O(n), Space: O(h)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a binary tree and a target sum, return all root-to-leaf paths where each path's sum equals the given target sum.
	  `,
                "exampleInput": "root = [5,4,8,11,null,13,4,7,2,null,null,null,1], target = 22",
                "exampleOutput": "[[5,4,11,2], [5,8,4,1]]",
                "explanation": `
		- Use depth-first search (DFS) to explore all paths from root to leaf.
		- For each path, keep track of the sum and backtrack when necessary.
	  `,
                "files": {
                    "python": "data/tree/path-sum-ii.py",
                    "cpp": "data/tree/path-sum-ii.cpp"
                }
            }, {
                "name": "Validate Binary Search Tree",
                "link": "https://leetcode.com/problems/validate-binary-search-tree/",
                "complexity": "Time: O(n), Space: O(h)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given the root of a binary tree, determine if it is a valid binary search tree (BST).
		A valid BST is a tree where for each node:
		- The left subtree's values are less than the node's value.
		- The right subtree's values are greater than the node's value.
		- Both subtrees must also be binary search trees.
	  `,
                "exampleInput": "root = [2,1,3]",
                "exampleOutput": "true",
                "explanation": `
		- Use a recursive approach to check if each node satisfies the BST property.
		- Track the valid range for each node as you traverse.
	  `,
                "files": {
                    "python": "data/tree/validate-binary-search-tree.py",
                    "cpp": "data/tree/validate-binary-search-tree.cpp"
                }
            }, {
                "name": "Lowest Common Ancestor of a Binary Tree",
                "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
                "complexity": "Time: O(n), Space: O(h)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
		The LCA is the deepest node that is an ancestor of both nodes.
	  `,
                "exampleInput": "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
                "exampleOutput": "3",
                "explanation": `
		- Use a recursive approach to traverse the tree and find the common ancestor.
		- Return the node when both left and right children are non-null.
	  `,
                "files": {
                    "python": "data/tree/lowest-common-ancestor-of-binary-tree.py",
                    "cpp": "data/tree/lowest-common-ancestor-of-binary-tree.cpp"
                }
            }, {
                "name": "Kth Smallest Element in a BST",
                "link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
                "complexity": "Time: O(h + k), Space: O(h)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given the root of a binary search tree (BST), return the kth smallest value (1-indexed) of all the nodes' values.
	  `,
                "exampleInput": "root = [3,1,4,null,2], k = 1",
                "exampleOutput": "1",
                "explanation": `
		- Perform an in-order traversal of the BST, which gives the elements in sorted order.
		- Return the kth element.
	  `,
                "files": {
                    "python": "data/tree/kth-smallest-element-in-bst.py",
                    "cpp": "data/tree/kth-smallest-element-in-bst.cpp"
                }
            }, {
                "name": "Construct Binary Tree from Preorder and Inorder Traversal",
                "link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the binary tree, 
		construct and return the binary tree.
	  `,
                "exampleInput": "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
                "exampleOutput": "[3,9,20,null,null,15,7]",
                "explanation": `
		- Use the preorder array to identify the root node and recursively build the left and right subtrees using the inorder array.
	  `,
                "files": {
                    "python": "data/tree/construct-binary-tree-from-preorder-and-inorder-traversal.py",
                    "cpp": "data/tree/construct-binary-tree-from-preorder-and-inorder-traversal.cpp"
                }
            }, {
                "name": "Serialize and Deserialize Binary Tree",
                "link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
                "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Design an algorithm to serialize and deserialize a binary tree.
		Serialization is the process of converting a binary tree into a string, while deserialization is the reverse process.
	  `,
                "exampleInput": "root = [1,2,3,null,null,4,5]",
                "exampleOutput": "Serialized: '1,2,3,null,null,4,5', Deserialized: Tree with root 1",
                "explanation": `
		- Use level-order traversal to serialize the tree into a string.
		- Use the serialized string to reconstruct the tree using a queue.
	  `,
                "files": {
                    "python": "data/tree/serialize-and-deserialize-binary-tree.py",
                    "cpp": "data/tree/serialize-and-deserialize-binary-tree.cpp"
                }
            }
        ],
        "combination-generation": [{
                "name": "Combinations",
                "link": "https://leetcode.com/problems/combinations/",
                "complexity": "Time: O(C(n, k) * k), Space: O(k)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
	  `,
                "exampleInput": "n = 4, k = 2",
                "exampleOutput": "[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]",
                "explanation": `
		- Generate all combinations by using backtracking. Recursively choose numbers, backtrack to explore all options.
	  `,
                "files": {
                    "python": "data/combination/combinations.py",
                    "cpp": "data/combination/combinations.cpp"
                }
            }, {
                "name": "Permutations",
                "link": "https://leetcode.com/problems/permutations/",
                "complexity": "Time: O(n!), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array of distinct integers, return all the possible permutations of the array.
	  `,
                "exampleInput": "nums = [1,2,3]",
                "exampleOutput": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
                "explanation": `
		- Generate permutations by recursively swapping elements and backtracking to explore all unique arrangements.
	  `,
                "files": {
                    "python": "data/combination/permutations.py",
                    "cpp": "data/combination/permutations.cpp"
                }
            }, {
                "name": "Subsets",
                "link": "https://leetcode.com/problems/subsets/",
                "complexity": "Time: O(2^n), Space: O(2^n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an integer array nums, return all possible subsets (the power set).
		The solution set must not contain duplicate subsets.
	  `,
                "exampleInput": "nums = [1,2,3]",
                "exampleOutput": "[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]",
                "explanation": `
		- Use backtracking to generate all possible subsets by including or excluding each element.
	  `,
                "files": {
                    "python": "data/combination/subsets.py",
                    "cpp": "data/combination/subsets.cpp"
                }
            }, {
                "name": "Combination Sum",
                "link": "https://leetcode.com/problems/combination-sum/",
                "complexity": "Time: O(2^n), Space: O(k)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an array of candidate numbers (candidates) and a target number (target), 
		find all unique combinations in candidates where the candidate numbers sum to target.
		The same number may be chosen from candidates an unlimited number of times.
	  `,
                "exampleInput": "candidates = [2,3,6,7], target = 7",
                "exampleOutput": "[[2,2,3],[7]]",
                "explanation": `
		- Use backtracking to explore all combinations of candidates that sum up to the target.
		- Recurse with the same candidate to allow repetition.
	  `,
                "files": {
                    "python": "data/combination/combination-sum.py",
                    "cpp": "data/combination/combination-sum.cpp"
                }
            }, {
                "name": "Combination Sum II",
                "link": "https://leetcode.com/problems/combination-sum-ii/",
                "complexity": "Time: O(2^n), Space: O(k)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a collection of candidate numbers (candidates) and a target number (target), 
		find all unique combinations in candidates where the candidate numbers sum to target.
		Each number in candidates may only be used once in the combination.
	  `,
                "exampleInput": "candidates = [10,1,2,7,6,5], target = 8",
                "exampleOutput": "[[1,2,5],[1,7],[2,6]]",
                "explanation": `
		- Use backtracking and sort the candidates to avoid duplicates.
		- Skip duplicate candidates to ensure each combination is unique.
	  `,
                "files": {
                    "python": "data/combination/combination-sum-ii.py",
                    "cpp": "data/combination/combination-sum-ii.cpp"
                }
            }, {
                "name": "Letter Combinations of a Phone Number",
                "link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
                "complexity": "Time: O(4^n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a string containing digits from 2-9 inclusive, return all possible letter combinations
		that the number could represent. Return the answer in any order.
		A mapping of digit to letters (just like on the telephone buttons) is given below:
		2 -> "abc", 3 -> "def", 4 -> "ghi", 5 -> "jkl", 6 -> "mno", 7 -> "pqrs", 8 -> "tuv", 9 -> "wxyz".
	  `,
                "exampleInput": "digits = '23'",
                "exampleOutput": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]",
                "explanation": `
		- Use backtracking to explore all combinations of letters corresponding to the digits.
	  `,
                "files": {
                    "python": "data/combination/letter-combinations-of-phone-number.py",
                    "cpp": "data/combination/letter-combinations-of-phone-number.cpp"
                }
            }, {
                "name": "Palindrome Partitioning",
                "link": "https://leetcode.com/problems/palindrome-partitioning/",
                "complexity": "Time: O(2^n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a string s, partition s such that every substring of the partition is a palindrome.
		Return all possible palindrome partitioning of s.
	  `,
                "exampleInput": "s = \"aab\"",
                "exampleOutput": "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]",
                "explanation": `
		- Use backtracking to partition the string into substrings, checking if each substring is a palindrome.
	  `,
                "files": {
                    "python": "data/combination/palindrome-partitioning.py",
                    "cpp": "data/combination/palindrome-partitioning.cpp"
                }
            }, {
                "name": "Subset Sum",
                "link": "https://leetcode.com/problems/partition-equal-subset-sum/",
                "complexity": "Time: O(n * target), Space: O(target)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given a non-empty array of integers, determine if it can be partitioned into two subsets such that
		the sum of the elements in both subsets is equal.
	  `,
                "exampleInput": "nums = [1,5,11,5]",
                "exampleOutput": "true",
                "explanation": `
		- Use dynamic programming to check if a subset of numbers can sum up to half of the total sum.
		- If it can, the remaining numbers will automatically sum to the other half.
	  `,
                "files": {
                    "python": "data/combination/partition-equal-subset-sum.py",
                    "cpp": "data/combination/partition-equal-subset-sum.cpp"
                }
            }, {
                "name": "Combination Sum IV",
                "link": "https://leetcode.com/problems/combination-sum-iv/",
                "complexity": "Time: O(target * n), Space: O(target)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given an integer array nums and an integer target, return the number of possible combinations that add up to target.
		- The same number in nums can be used an unlimited number of times.
	  `,
                "exampleInput": "nums = [1,2,3], target = 4",
                "exampleOutput": "7",
                "explanation": `
		- Use dynamic programming or backtracking to count the number of ways to make up the target using elements from nums.
	  `,
                "files": {
                    "python": "data/combination/combination-sum-iv.py",
                    "cpp": "data/combination/combination-sum-iv.cpp"
                }
            }, {
                "name": "Combinations of Balanced Parentheses",
                "link": "https://leetcode.com/problems/generate-parentheses/",
                "complexity": "Time: O(2^n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
                problemStatement: `
		Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
	  `,
                "exampleInput": "n = 3",
                "exampleOutput": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"][",
                "explanation": `
		- Use backtracking to generate all valid combinations by ensuring that at any point, the number of closing brackets doesn't exceed the opening brackets.
	  `,
                "files": {
                    "python": "data/combination/generate-parentheses.py",
                    "cpp": "data/combination/generate-parentheses.cpp"
                }
            }
        ],
		"linked-list-manipulation": [
			{
			"name": "Reverse Linked List",
			"link": "https://leetcode.com/problems/reverse-linked-list/",
			"complexity": "Time: O(n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
			problemStatement: `
			Reverse a singly linked list.
		  `,
			"exampleInput": "head = [1,2,3,4,5]",
			"exampleOutput": "[5,4,3,2,1]",
			"explanation": `
			- Traverse the list and reverse the links between nodes.
			- Use three pointers (prev, current, next) to reverse the links.
		  `,
			"files": {
				"python": "data/linkedlist/reverse-linked-list.py",
				"cpp": "data/linkedlist/reverse-linked-list.cpp"
			}
		},
		{
			"name": "Detect Cycle in Linked List",
			"link": "https://leetcode.com/problems/linked-list-cycle/",
			"complexity": "Time: O(n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
			problemStatement: `
			Determine if a linked list has a cycle in it.
			Use Floyd's cycle-finding algorithm (Tortoise and Hare) to detect the cycle.
		  `,
			"exampleInput": "head = [3,2,0,-4], pos = 1",
			"exampleOutput": "true",
			"explanation": `
			- Traverse the list using two pointers, one moving at a slow pace and the other at a fast pace.
			- If they meet at any point, the list has a cycle.
		  `,
			"files": {
				"python": "data/linkedlist/detect-cycle-in-linked-list.py",
				"cpp": "data/linkedlist/detect-cycle-in-linked-list.cpp"
			}
		},
		{
			"name": "Merge Two Sorted Lists",
			"link": "https://leetcode.com/problems/merge-two-sorted-lists/",
			"complexity": "Time: O(n + m), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
			problemStatement: `
			Merge two sorted linked lists and return it as a new sorted list.
			The new list should be made by splicing together the nodes of the first two lists.
		  `,
			"exampleInput": "l1 = [1,2,4], l2 = [1,3,4]",
			"exampleOutput": "[1,1,2,3,4,4]",
			"explanation": `
			- Traverse both linked lists and compare the nodes' values, appending the smaller one to the result list.
		  `,
			"files": {
				"python": "data/linkedlist/merge-two-sorted-lists.py",
				"cpp": "data/linkedlist/merge-two-sorted-lists.cpp"
			}
		},		
		{
			"name": "Remove Nth Node from End of List",
			"link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
			"complexity": "Time: O(n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
			problemStatement: `
			Given the head of a linked list, remove the nth node from the end of the list and return its head.
		  `,
			"exampleInput": "head = [1,2,3,4,5], n = 2",
			"exampleOutput": "[1,2,3,5]",
			"explanation": `
			- Use two pointers to traverse the list.
			- First, move one pointer n steps ahead, then move both pointers until the first pointer reaches the end.
			- The second pointer will be at the node to remove.
		  `,
			"files": {
				"python": "data/linkedlist/remove-nth-node-from-end-of-list.py",
				"cpp": "data/linkedlist/remove-nth-node-from-end-of-list.cpp"
			}
		},
		{
			"name": "Add Two Numbers",
			"link": "https://leetcode.com/problems/add-two-numbers/",
			"complexity": "Time: O(max(m,n)), Space: O(max(m,n))",
				difficulty: "easy",
				companies: ["To be added soon"],
			problemStatement: `
			Given two non-empty linked lists representing two non-negative integers, 
			add the two numbers and return it as a linked list.
			The digits are stored in reverse order and each of their nodes contains a single digit.
		  `,
			"exampleInput": "l1 = [2,4,3], l2 = [5,6,4]",
			"exampleOutput": "[7,0,8]",
			"explanation": `
			- Traverse both linked lists, adding corresponding digits and handling carry.
			- Create new nodes to store the sum and update the carry.
		  `,
			"files": {
				"python": "data/linkedlist/add-two-numbers.py",
				"cpp": "data/linkedlist/add-two-numbers.cpp"
			}
		},
		{
			"name": "Intersection of Two Linked Lists",
			"link": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
			"complexity": "Time: O(m + n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
			problemStatement: `
			Find the node where two linked lists intersect.
			Note that the intersection is defined based on reference, not value.
		  `,
			"exampleInput": "headA = [4,1,8,4,5], headB = [5,0,1,8,4,5]",
			"exampleOutput": "8",
			"explanation": `
			- Use two pointers to traverse both lists.
			- If one pointer reaches the end of a list, switch it to the head of the other list.
			- The intersection will be the first node where the two pointers meet.
		  `,
			"files": {
				"python": "data/linkedlist/intersection-of-two-linked-lists.py",
				"cpp": "data/linkedlist/intersection-of-two-linked-lists.cpp"
			}
		}, 
		{
			"name": "Flatten a Multilevel Doubly Linked List",
			"link": "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
			"complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
			problemStatement: `
			Flatten a multilevel doubly linked list, where each node can have a next pointer, a prev pointer, and a child pointer.
			Flatten the list such that all nodes appear in a single-level doubly linked list.
		  `,
			"exampleInput": "head = [1,2,3,4,5,6,null,null,7,8,9,10]",
			"exampleOutput": "[1,2,3,4,5,6,7,8,9,10]",
			"explanation": `
			- Traverse the list, flattening any child nodes recursively while maintaining the correct order.
		  `,
			"files": {
				"python": "data/linkedlist/flatten-a-multilevel-doubly-linked-list.py",
				"cpp": "data/linkedlist/flatten-a-multilevel-doubly-linked-list.cpp"
			}
		}, 
		{
			"name": "Swap Nodes in Pairs",
			"link": "https://leetcode.com/problems/swap-nodes-in-pairs/",
			"complexity": "Time: O(n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
			problemStatement: `
			Given a linked list, swap every two adjacent nodes and return its head.
		  `,
			"exampleInput": "head = [1,2,3,4]",
			"exampleOutput": "[2,1,4,3]",
			"explanation": `
			- Traverse the list in pairs and swap adjacent nodes by adjusting the next pointers.
		  `,
			"files": {
				"python": "data/linkedlist/swap-nodes-in-pairs.py",
				"cpp": "data/linkedlist/swap-nodes-in-pairs.cpp"
			}
		},
	{
		"name": "Remove Duplicates from Sorted List",
		"link": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
		"complexity": "Time: O(n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
		problemStatement: `
		Remove all duplicates from a sorted linked list such that each element appears only once.
	  `,
		"exampleInput": "head = [1,1,2]",
		"exampleOutput": "[1,2]",
		"explanation": `
		- Traverse the list and remove nodes with the same value as the previous node.
	  `,
		"files": {
			"python": "data/linkedlist/remove-duplicates-from-sorted-list.py",
			"cpp": "data/linkedlist/remove-duplicates-from-sorted-list.cpp"
		}
	},		
	{
	  "name": "Copy List with Random Pointer",
	  "link": "https://leetcode.com/problems/copy-list-with-random-pointer/",
	  "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
	  problemStatement: `
		A linked list is given where each node contains two pointers:
		- \`next\` points to the next node in the list,
		- \`random\` points to any node in the list or null.
		You need to create a deep copy of the list.
	  `,
	  "exampleInput": "head = [[7,null],[13,0],[11,4],[10,2],[1,0]]",
	  "exampleOutput": "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
	  "explanation": `
		- Use a hashmap or constant-space approach to store the mapping of original nodes to the new copied nodes.
	  `,
	  "files": {
		"python": "data/linkedlist/copy-list-with-random-pointer.py",
		"cpp": "data/linkedlist/copy-list-with-random-pointer.cpp"
	  }
	},
	],
		"game-theory": [
	{
	  "name": "Nim Game",
	  "link": "https://leetcode.com/problems/nim-game/",
	  "complexity": "Time: O(1), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
	  problemStatement: `
		You are playing the following Nim Game:
		- Initially, there is a pile of stones.
		- You and your friend take turns removing 1 to 3 stones from the pile.
		- The player who removes the last stone wins.
		Determine if you can win the game given that you go first. If so, return true, otherwise return false.
	  `,
	  "exampleInput": "n = 4",
	  "exampleOutput": "false",
	  "explanation": `
		- This problem can be solved using the modulo operation, as the game's state is periodic.
		- If the number of stones modulo 4 is 0, the second player can always win with optimal play.
	  `,
	  "files": {
		"python": "data/game-theory/nim-game.py",
		"cpp": "data/game-theory/nim-game.cpp"
	  }
	},
	{
	  "name": "Predict the Winner",
	  "link": "https://leetcode.com/problems/predict-the-winner/",
	  "complexity": "Time: O(n^2), Space: O(n^2)",
				difficulty: "easy",
				companies: ["To be added soon"],
	  problemStatement: `
		Given an integer array nums, the objective is to determine if the first player can win the game.
		In each turn, a player can choose either the first or the last element from the array.
		The goal is to maximize the player's score while minimizing the opponent's score.
	  `,
	  "exampleInput": "nums = [1,5,233,7]",
	  "exampleOutput": "true",
	  "explanation": `
		- Use dynamic programming to simulate the process and determine the best possible score a player can achieve.
		- The problem can be reduced to finding the optimal score difference between the two players.
	  `,
	  "files": {
		"python": "data/game-theory/predict-the-winner.py",
		"cpp": "data/game-theory/predict-the-winner.cpp"
	  }
	},
	{
	  "name": "Stone Game",
	  "link": "https://leetcode.com/problems/stone-game/",
	  "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
	  problemStatement: `
		In the Stone Game, two players take turns to pick a pile of stones. On each turn, a player can choose either 
		the first or the last pile from the available stones. The player with the maximum score wins.
		Determine if the first player can win.
	  `,
	  "exampleInput": "piles = [5,3,4,5]",
	  "exampleOutput": "true",
	  "explanation": `
		- This problem can be solved with dynamic programming by considering each game state and comparing outcomes for both players.
	  `,
	  "files": {
		"python": "data/game-theory/stone-game.py",
		"cpp": "data/game-theory/stone-game.cpp"
	  }
	},
	{
	  "name": "Can I Win",
	  "link": "https://leetcode.com/problems/can-i-win/",
	  "complexity": "Time: O(2^n), Space: O(2^n)",
				difficulty: "easy",
				companies: ["To be added soon"],
	  problemStatement: `
		You are given a game where two players take turns removing 1 to x stones from a pile of n stones.
		Determine if you can win the game assuming both players play optimally.
	  `,
	  "exampleInput": "n = 10, x = 3",
	  "exampleOutput": "false",
	  "explanation": `
		- This problem can be solved using dynamic programming by considering each possible move and determining if the current player can force a win.
	  `,
	  "files": {
		"python": "data/game-theory/can-i-win.py",
		"cpp": "data/game-theory/can-i-win.cpp"
	  }
	},
	{
	  "name": "Divisor Game",
	  "link": "https://leetcode.com/problems/divisor-game/",
	  "complexity": "Time: O(1), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
	  problemStatement: `
		In the divisor game, Alice starts with an integer n. In each turn, Alice chooses any x such that 
		0 < x < n and n % x == 0. Then, Alice reduces n by x, and it’s Bob's turn.
		Determine if Alice can win the game.
	  `,
	  "exampleInput": "n = 2",
	  "exampleOutput": "true",
	  "explanation": `
		- The game is simple, if n is odd, Bob wins, and if n is even, Alice can always win with optimal play.
	  `,
	  "files": {
		"python": "data/game-theory/divisor-game.py",
		"cpp": "data/game-theory/divisor-game.cpp"
	  }
	},
	{
	  "name": "Maximal Rectangle",
	  "link": "https://leetcode.com/problems/maximal-rectangle/",
	  "complexity": "Time: O(n^2), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
	  problemStatement: `
		Find the maximal rectangle in a 2D binary matrix that contains only 1's.
		Return the area of the largest rectangle.
	  `,
	  "exampleInput": "matrix = [['1','0','1','0','0'], ['1','0','1','1','1'], ['1','1','1','1','1'], ['1','0','0','1','0']]",
	  "exampleOutput": "6",
	  "explanation": `
		- This problem is related to dynamic programming and histogram-based approaches to compute the maximal area.
		- Consider each row as the base of a histogram and calculate the maximal rectangle that can be formed.
	  `,
	  "files": {
		"python": "data/game-theory/maximal-rectangle.py",
		"cpp": "data/game-theory/maximal-rectangle.cpp"
	  }
	},
	{
	  "name": "Ugly Number II",
	  "link": "https://leetcode.com/problems/ugly-number-ii/",
	  "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
	  problemStatement: `
		Ugly numbers are numbers whose only prime factors are 2, 3, or 5.
		Given an integer n, return the nth ugly number.
	  `,
	  "exampleInput": "n = 10",
	  "exampleOutput": "12",
	  "explanation": `
		- Use dynamic programming to find the smallest possible numbers generated by multiplying 2, 3, or 5 with previous ugly numbers.
	  `,
	  "files": {
		"python": "data/game-theory/ugly-number-ii.py",
		"cpp": "data/game-theory/ugly-number-ii.cpp"
	  }
	},
	{
	  "name": "Game of Life",
	  "link": "https://leetcode.com/problems/game-of-life/",
	  "complexity": "Time: O(m * n), Space: O(1)",
				difficulty: "easy",
				companies: ["To be added soon"],
	  problemStatement: `
		According to the rules of the Game of Life, each cell in a grid can be live or dead. 
		- Any live cell with fewer than two live neighbors dies (as if caused by under-population).
		- Any live cell with more than three live neighbors dies (as if by over-population).
		- Any live cell with exactly two or three live neighbors lives on to the next generation.
		- Any dead cell with exactly three live neighbors becomes a live cell (as if by reproduction).
		Determine the next state (after one update) of the board.
	  `,
	  "exampleInput": "board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]",
	  "exampleOutput": "[[0,0,0],[1,1,1],[0,1,1],[0,1,0]]",
	  "explanation": `
		- This problem requires simulating the next generation based on the current state of the grid.
		- Carefully calculate neighbors to determine each cell's future state.
	  `,
	  "files": {
		"python": "data/game-theory/game-of-life.py",
		"cpp": "data/game-theory/game-of-life.cpp"
	  }
	},
	{
	  "name": "Find the Winner of a Circular Game",
	  "link": "https://leetcode.com/problems/find-the-winner-of-a-circular-game/",
	  "complexity": "Time: O(n), Space: O(n)",
				difficulty: "easy",
				companies: ["To be added soon"],
	  problemStatement: `
		There are n people in a circle, numbered from 1 to n. 
		They start at 1 and every second person is eliminated until only one remains. 
		Find the winner of the game.
	  `,
	  "exampleInput": "n = 5, k = 2",
	  "exampleOutput": "3",
	  "explanation": `
		- This problem can be solved using the Josephus problem, which involves recursively eliminating every k-th person.
	  `,
	  "files": {
		"python": "data/game-theory/find-winner-of-circular-game.py",
		"cpp": "data/game-theory/find-winner-of-circular-game.cpp"
	  }
	}
],

        // Add more patterns here...
    };

    // Function to load code from a file
async function loadCode(filePath) {
    try {
        console.log("Fetching file from:", filePath); // For debugging
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.text();
    } catch (error) {
        console.error(`Error loading file: ${filePath}`, error.message);
        return "Code not available.";
    }
}

    // Function to load questions for a pattern
    async function loadQuestions(pattern) {
        const questions = questionsData[pattern] || [];
        questionsList.innerHTML = ""; // Clear previous questions
        patternTitle.textContent = pattern.replace(/-/g, " ").toUpperCase();

        // Update pattern description in the right pane
        patternDescription.innerHTML = `<p>${patternDescriptions[pattern] || "No description available."}</p>`;

        for (const question of questions) {
            const li = document.createElement("li");
            li.innerHTML = `
      <div class="question-header">
        <span>${question.name}</span>
        <div>
          <a href="${question.link}" target="_blank">Try Yourself</a>
          <select class="language-dropdown">
            <option value="python">Python</option>
            <option value="cpp">C++</option>
          </select>
          <span class="difficulty-marker ${question.difficulty}"></span>
		  <span class="companies-tooltip" data-companies="${question.companies.join(', ')}">💼</span>
        </div>
      </div>
      <div class="solution">
        <h4>Problem Statement</h4>
        <p>${question.problemStatement}</p>
        
        <h4>Example</h4>
        <pre><strong>Input:</strong> ${question.exampleInput || "N/A"}</pre>
        <pre><strong>Output:</strong> ${question.exampleOutput || "N/A"}</pre>
        <p><strong>Explanation:</strong> ${question.explanation || "N/A"}</p>

        <h4>Optimal Solution</h4>
        <pre class="language-javascript"><code>Loading code...</code></pre>
        
        <h4>Time Complexity</h4>
        <p>${question.complexity}</p>
      </div>
    `;
            questionsList.appendChild(li);

            // Add click event to toggle solution visibility
            li.querySelector(".question-header").addEventListener("click", () => {
                const solution = li.querySelector(".solution");
                solution.style.display = solution.style.display === "block" ? "none" : "block";
            });

            // Add change event listener to language dropdown
            const dropdown = li.querySelector(".language-dropdown");
            const solutionPre = li.querySelector(".solution pre");
            const solutionCode = li.querySelector(".solution code"); // Add <code> tag for Prism.js
            dropdown.addEventListener("change", async() => {
                const language = dropdown.value;
                const filePath = question.files[language];
                const code = await loadCode(filePath);
                solutionCode.textContent = code;
                solutionPre.className = `language-${language}`; // Update language class
                Prism.highlightElement(solutionCode); // Re-highlight the code
            });

            // Load default language (Python) code
            const defaultLanguage = "python";
            const defaultFilePath = question.files[defaultLanguage];
            const defaultCode = await loadCode(defaultFilePath);
            solutionCode.textContent = defaultCode;
            Prism.highlightElement(solutionCode); // Highlight the default code
        }
    }

    // Add click event listeners to sidebar links
    sidebarLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const pattern = link.getAttribute("data-pattern");
            loadQuestions(pattern);
        });
    });

    // Load default pattern (Two Pointers) on page load
    loadQuestions("two-pointers");
});
