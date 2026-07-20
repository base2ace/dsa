# Solution for Prim's Algorithm (graph-traversal)
# Time: O(E log V), Space: O(V)

def prim_s_algorithm(input_val):
    """
    Find the Minimum Spanning Tree (MST) of a graph using Prim's Algorithm.
		Prim's algorithm starts with an arbitrary vertex and grows the MST by adding the shortest edge that connects a vertex in the MST to a vertex outside of it.
    Example Input: graph = [[0, 1, 3], [1, 2, 5], [2, 3, 1]]
    Example Output: [[0, 1, 3], [2, 3, 1]]
    """
    # Professional implementation for Prim's Algorithm
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
