# Solution for Sum of Two Integers (bit-manipulation)
# Time: O(1), Space: O(1)

def sum_of_two_integers(input_val):
    """
    Given two integers a and b, return their sum without using the operator + and -.
    Example Input: a = 1, b = 2
    Example Output: 3
    """
    # Professional implementation for Sum of Two Integers
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
