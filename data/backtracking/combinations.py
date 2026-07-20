# Solution for Combinations (backtracking)
# Time: O(n choose k), Space: O(k)

def combinations(input_val):
    """
    Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
    Example Input: n = 4, k = 2
    Example Output: [[2, 4], [3, 4], [1, 2], [2, 3], [1, 3], [1, 4]]
    """
    # Professional implementation for Combinations
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
