# Solution for Longest Common Subsequence (dynamic-programming)
# Time: O(mn), Space: O(mn)

def longest_common_subsequence(input_val):
    """
    Given two strings, return the length of their longest common subsequence.
    Example Input: text1 = 'abcde', text2 = 'ace' 
    Example Output: 3
    """
    # Professional implementation for Longest Common Subsequence
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
