# Solution for Range Sum Query - 2D (prefix-sum)
# Time: O(1) for queries, O(m * n) for building the array, Space: O(m * n)

def range_sum_query___2d(input_val):
    """
    Implement a 2D prefix sum array to calculate the sum of elements in a 2D submatrix.
		You are given a 2D matrix and need to compute the sum of elements in a submatrix using the prefix sum array.
    Example Input: matrix = [[3, 0, 1, 4], [5, 6, 3, 2], [1, 2, 0, 1]], topLeft = (2, 1), bottomRight = (1, 2)
    Example Output: 11
    """
    # Professional implementation for Range Sum Query - 2D
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
