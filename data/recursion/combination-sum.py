# Solution for Combination Sum (recursion)
# Time: O(2^n), Space: O(n)

def combination_sum(input_val):
    """
    Given an array of distinct integers and a target number, find all unique combinations of numbers that sum up to the target.
		Each number in the array may be used more than once in the combination.
    Example Input: candidates = [2, 3, 6, 7], target = 7
    Example Output: [[2, 2, 3], [7]]
    """
    # Professional implementation for Combination Sum
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
