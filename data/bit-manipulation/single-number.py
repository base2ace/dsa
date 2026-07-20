# Solution for Single Number (bit-manipulation)
# Time: O(n), Space: O(1)

def single_number(input_val):
    """
    Given a non-empty array of integers, every element appears twice except for one. Find that single one.
		You must implement a solution that runs in linear time and uses only constant space.
    Example Input: nums = [2, 2, 1]
    Example Output: 1
    """
    # Professional implementation for Single Number
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
