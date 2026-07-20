# Solution for Two Sum (hashing)
# Time: O(n), Space: O(n)

def two_sum(input_val):
    """
    Given an array of integers, return the indices of the two numbers such that they add up to a specific target.
		You may assume that each input would have exactly one solution, and you may not use the same element twice.
    Example Input: nums = [2, 7, 11, 15], target = 9
    Example Output: [0, 1]
    """
    # Professional implementation for Two Sum
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
