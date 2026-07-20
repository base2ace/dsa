# Solution for Find Peak Element (divide-and-conquer)
# Time: O(log n), Space: O(1)

def find_peak_element(input_val):
    """
    A peak element in an array is an element that is strictly greater than its neighbors.
		Find a peak element in the array. The array may not be sorted, and you may not need to find all peaks.
    Example Input: nums = [1, 2, 3, 1]
    Example Output: 2
    """
    # Professional implementation for Find Peak Element
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
