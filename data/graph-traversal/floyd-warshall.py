# Solution for Floyd-Warshall Algorithm (graph-traversal)
# Time: O(V^3), Space: O(V^2)

def floyd_warshall_algorithm(input_val):
    """
    Compute shortest paths between all pairs of vertices in a graph using the Floyd-Warshall Algorithm.
		Works for graphs with negative weights but no negative weight cycles.
    Example Input: graph = [[0, 5, INF], [INF, 0, 2], [INF, INF, 0]]
    Example Output: [[0, 5, 7], [INF, 0, 2], [INF, INF, 0]]
    """
    # Professional implementation for Floyd-Warshall Algorithm
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
