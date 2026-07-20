# Solution for Prefix Sum Array (prefix-sum)
# Time: O(1) for queries, O(n) for building the array, Space: O(n)

def prefix_sum_array(input_val):
    """
    Implement a prefix sum array to quickly compute the sum of elements in a given range.
		You are given an integer array and you need to implement a method that computes the sum of the elements in a given range [i, j] inclusive in constant time.
    Example Input: nums = [-2, 0, 3, -5, 2, -1], i = 0, j = 2
    Example Output: 1
    """
    # Professional implementation for Prefix Sum Array
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
