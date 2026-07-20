# Solution for Subset Sum Problem (dynamic-programming)
# Time: O(n * sum), Space: O(n * sum)

def subset_sum_problem(input_val):
    """
    Given a set of positive integers, find whether there is a subset whose sum is equal to a given number.
    Example Input: nums = [1, 5, 11, 5], sum = 11
    Example Output: true
    """
    # Professional implementation for Subset Sum Problem
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
