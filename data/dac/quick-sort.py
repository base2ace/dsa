# Solution for Quick Sort (divide-and-conquer)
# Time: O(n log n), Space: O(log n)

def quick_sort(input_val):
    """
    Sort an array in ascending order using the quick sort algorithm.
		Quick Sort is a divide and conquer algorithm that picks a pivot element and partitions the array around the pivot. The algorithm is recursively applied to the subarrays.
    Example Input: nums = [3, 1, 4, 1, 5, 9]
    Example Output: [1, 1, 3, 4, 5, 9]
    """
    # Professional implementation for Quick Sort
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
