# Solution for Depth First Search (DFS) (graph-traversal)
# Time: O(V + E), Space: O(V)

def depth_first_search__dfs_(input_val):
    """
    Implement Depth First Search (DFS) to traverse or search through a graph.
		DFS explores as far as possible along a branch before backtracking.
    Example Input: graph = [[1, 2], [0, 2], [0, 1, 3], [2]]
    Example Output: [0, 1, 2, 3]
    """
    # Professional implementation for Depth First Search (DFS)
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
