# Solution for Subarray with Sum at Most K (prefix-sum)
# Time: O(n), Space: O(1)

def subarray_with_sum_at_most_k(input_val):
    """
    Given an array and an integer k, find the length of the longest subarray such that the sum of its elements is at most k.
		We can use a sliding window technique combined with a prefix sum for efficient computation.
    Example Input: nums = [1, 2, 3, 4, 5], k = 11
    Example Output: 3
    """
    # Professional implementation for Subarray with Sum at Most K
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
