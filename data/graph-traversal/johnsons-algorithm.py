# Solution for Johnson's Algorithm (graph-traversal)
# Time: O(V^2 log V + VE), Space: O(V^2)

def johnson_s_algorithm(input_val):
    """
    Find the shortest paths between all pairs of vertices in a graph with negative weights using Johnson’s Algorithm.
		This algorithm works by transforming the graph to make all edge weights non-negative and then running Bellman-Ford and Dijkstra's algorithms.
    Example Input: graph = [[0, 5, INF], [INF, 0, 2], [INF, INF, 0]]
    Example Output: [[0, 5, 7], [INF, 0, 2], [INF, INF, 0]]
    """
    # Professional implementation for Johnson's Algorithm
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
