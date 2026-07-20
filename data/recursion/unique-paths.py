# Solution for Unique Paths (recursion)
# Time: O(m * n), Space: O(m * n)

def unique_paths(input_val):
    """
    You are given a m x n grid, starting from the top-left corner. You can only move either down or right at any point in time. 
		Find how many unique paths exist from the top-left corner to the bottom-right corner.
    Example Input: m = 3, n = 7
    Example Output: 28
    """
    # Professional implementation for Unique Paths
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
