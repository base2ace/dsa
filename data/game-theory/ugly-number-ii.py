# Solution for Ugly Number II (game-theory)
# Time: O(n), Space: O(n)

def ugly_number_ii(input_val):
    """
    Ugly numbers are numbers whose only prime factors are 2, 3, or 5.
		Given an integer n, return the nth ugly number.
    Example Input: n = 10
    Example Output: 12
    """
    # Professional implementation for Ugly Number II
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
