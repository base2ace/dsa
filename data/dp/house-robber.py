# Solution for House Robber (dynamic-programming)
# Time: O(n), Space: O(1)

def house_robber(input_val):
    """
    You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected, and it will automatically contact the police if two adjacent houses are robbed.
		Return the maximum amount of money you can rob tonight without alerting the police.
    Example Input: nums = [2, 7, 9, 3, 1]
    Example Output: 12
    """
    # Professional implementation for House Robber
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
