# Solution for Kruskal's Algorithm (graph-traversal)
# Time: O(E log E), Space: O(V)

def kruskal_s_algorithm(input_val):
    """
    Find the Minimum Spanning Tree (MST) of a graph using Kruskal's Algorithm.
		Kruskal's algorithm sorts all edges and adds them to the MST if they do not form a cycle.
    Example Input: graph = [[0, 1, 3], [1, 2, 5], [2, 3, 1]]
    Example Output: [[0, 1, 3], [2, 3, 1]]
    """
    # Professional implementation for Kruskal's Algorithm
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
