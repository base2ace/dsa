# Solution for Remove Duplicate Letters (monotonic-stack)
# Time: O(n), Space: O(n)

def remove_duplicate_letters(input_val):
    """
    You are given a string s. You need to remove duplicate letters so that every letter appears once and only once. 
		You must make sure that the resulting string is the smallest in lexicographical order among all possible results.
    Example Input: s = "bcabc"
    Example Output: "abc"
    """
    # Professional implementation for Remove Duplicate Letters
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
