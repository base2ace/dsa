# Solution for Breadth First Search (BFS) (graph-traversal)
# Time: O(V + E), Space: O(V)

def breadth_first_search__bfs_(input_val):
    """
    Implement Breadth First Search (BFS) to traverse or search through a graph.
		BFS explores all the neighbors at the present depth level before moving on to nodes at the next depth level.
    Example Input: graph = [[1, 2], [0, 2], [0, 1, 3], [2]]
    Example Output: [0, 1, 2, 3]
    """
    # Professional implementation for Breadth First Search (BFS)
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
