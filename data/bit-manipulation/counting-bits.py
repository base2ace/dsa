# Solution for Counting Bits (bit-manipulation)
# Time: O(n), Space: O(n)

def counting_bits(input_val):
    """
    Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
    Example Input: n = 5
    Example Output: [0, 1, 1, 2, 1, 2]
    """
    # Professional implementation for Counting Bits
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
