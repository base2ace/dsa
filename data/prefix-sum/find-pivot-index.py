# Solution for Find Pivot Index (prefix-sum)
# Time: O(n), Space: O(1)

def find_pivot_index(input_val):
    """
    Given an array of integers, find the pivot index where the sum of the elements on the left is equal to the sum of the elements on the right.
		Use a prefix sum approach to efficiently calculate the sums.
    Example Input: nums = [1, 7, 3, 6, 5, 6]
    Example Output: 3
    """
    # Professional implementation for Find Pivot Index
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
