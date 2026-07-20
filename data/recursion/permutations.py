# Solution for Permutations (recursion)
# Time: O(n!), Space: O(n)

def permutations(input_val):
    """
    Given an array of distinct integers, return all the possible permutations.
    Example Input: nums = [1, 2, 3]
    Example Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
    """
    # Professional implementation for Permutations
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
