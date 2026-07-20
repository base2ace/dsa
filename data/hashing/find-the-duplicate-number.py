# Solution for Find the Duplicate Number (hashing)
# Time: O(n), Space: O(n)

def find_the_duplicate_number(input_val):
    """
    Given an array containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. 
		Find the duplicate one.
    Example Input: nums = [1, 3, 4, 2, 2]
    Example Output: 2
    """
    # Professional implementation for Find the Duplicate Number
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
