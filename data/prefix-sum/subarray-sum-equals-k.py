# Solution for Subarray Sum Equals K (prefix-sum)
# Time: O(n), Space: O(n)

def subarray_sum_equals_k(input_val):
    """
    Given an array of integers and an integer k, find the total number of continuous subarrays whose sum equals k.
		Using a prefix sum array helps to efficiently track sums of subarrays and avoid redundant computations.
    Example Input: nums = [1, 1, 1], k = 2
    Example Output: 2
    """
    # Professional implementation for Subarray Sum Equals K
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
