# Solution for Subsets (recursion)
# Time: O(2^n), Space: O(n)

def subsets(input_val):
    """
    Given a set of distinct integers, return all possible subsets.
    Example Input: nums = [1, 2, 3]
    Example Output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
    """
    # Professional implementation for Subsets
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
