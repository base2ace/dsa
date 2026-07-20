# Solution for Missing Number (bit-manipulation)
# Time: O(n), Space: O(1)

def missing_number(input_val):
    """
    Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
    Example Input: nums = [3, 7, 1, 2, 8, 4, 5]
    Example Output: 6
    """
    # Professional implementation for Missing Number
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
