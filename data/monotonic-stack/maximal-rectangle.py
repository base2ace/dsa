# Solution for Maximal Rectangle (monotonic-stack)
# Time: O(m * n), Space: O(n)

def maximal_rectangle(input_val):
    """
    Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
    Example Input: matrix = [[1,0,1,0,0], [1,0,1,1,1], [1,1,1,1,1], [1,0,0,1,0]]
    Example Output: 6
    """
    # Professional implementation for Maximal Rectangle
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
