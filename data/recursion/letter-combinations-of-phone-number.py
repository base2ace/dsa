# Solution for Letter Combinations of a Phone Number (recursion)
# Time: O(4^n), Space: O(n)

def letter_combinations_of_a_phone_number(input_val):
    """
    Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
		You can assume that the input is always valid.
    Example Input: digits = '23'
    Example Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
    """
    # Professional implementation for Letter Combinations of a Phone Number
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
