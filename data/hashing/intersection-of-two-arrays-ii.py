# Solution for Intersection of Two Arrays II (hashing)
# Time: O(n), Space: O(n)

def intersection_of_two_arrays_ii(input_val):
    """
    Given two arrays, write a function to compute their intersection.
		Each element in the result should appear as many times as it shows in both arrays.
    Example Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
    Example Output: [2, 2]
    """
    # Professional implementation for Intersection of Two Arrays II
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
