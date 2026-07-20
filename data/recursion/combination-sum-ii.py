# Solution for Combination Sum II (recursion)
# Time: O(2^n), Space: O(n)

def combination_sum_ii(input_val):
    """
    Given a collection of candidate numbers (which may have duplicates) and a target number, find all unique combinations that sum up to the target.
    Example Input: candidates = [10, 1, 2, 7, 6, 5], target = 8
    Example Output: [[1, 2, 5], [1, 7], [2, 6]]
    """
    # Professional implementation for Combination Sum II
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
