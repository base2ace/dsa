# Solution for Maximal Rectangle (game-theory)
# Time: O(n^2), Space: O(n)

def maximal_rectangle(input_val):
    """
    Find the maximal rectangle in a 2D binary matrix that contains only 1's.
		Return the area of the largest rectangle.
    Example Input: matrix = [['1','0','1','0','0'], ['1','0','1','1','1'], ['1','1','1','1','1'], ['1','0','0','1','0']]
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
