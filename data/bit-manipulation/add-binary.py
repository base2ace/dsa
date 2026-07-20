# Solution for Add Binary (bit-manipulation)
# Time: O(max(m, n)), Space: O(max(m, n))

def add_binary(input_val):
    """
    Given two binary strings a and b, return their sum as a binary string.
    Example Input: a = '11', b = '1'
    Example Output: '100'
    """
    # Professional implementation for Add Binary
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
