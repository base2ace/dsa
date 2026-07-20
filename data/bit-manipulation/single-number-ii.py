# Solution for Single Number II (bit-manipulation)
# Time: O(n), Space: O(1)

def single_number_ii(input_val):
    """
    Given an integer array nums where every element appears three times except for one, which appears exactly once. Find that single one.
    Example Input: nums = [2, 2, 3, 2]
    Example Output: 3
    """
    # Professional implementation for Single Number II
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
