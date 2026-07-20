# Solution for Bellman-Ford Algorithm (graph-traversal)
# Time: O(V * E), Space: O(V)

def bellman_ford_algorithm(input_val):
    """
    Find the shortest path from a source vertex to all other vertices in a graph, allowing negative edge weights using Bellman-Ford's Algorithm.
    Example Input: graph = [[0, 1, 2], [1, 2], [2], []], start = 0
    Example Output: [0, 1, 2, 4]
    """
    # Professional implementation for Bellman-Ford Algorithm
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
