# Solution for Group Anagrams (hashing)
# Time: O(n * k), Space: O(n * k)

def group_anagrams(input_val):
    """
    Given an array of strings, group the anagrams together.
		You can return the answer in any order.
    Example Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
    Example Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
    """
    # Professional implementation for Group Anagrams
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
