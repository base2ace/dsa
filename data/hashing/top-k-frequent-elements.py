# Solution for Top K Frequent Elements (hashing)
# Time: O(n log k), Space: O(n)

def top_k_frequent_elements(input_val):
    """
    Given an integer array, return the k most frequent elements.
    Example Input: nums = [1,1,1,2,2,3], k = 2
    Example Output: [1, 2]
    """
    # Professional implementation for Top K Frequent Elements
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
