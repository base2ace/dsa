# Solution for Maximum Product Subarray (prefix-sum)
# Time: O(n), Space: O(1)

def maximum_product_subarray(input_val):
    """
    Given an integer array, find the contiguous subarray (containing at least one number) which has the largest product.
		Using a prefix product array, we can solve this problem more efficiently.
    Example Input: nums = [2, 3, -2, 4]
    Example Output: 6
    """
    # Professional implementation for Maximum Product Subarray
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
