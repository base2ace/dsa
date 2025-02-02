def merge(nums1, m, nums2, n):
    """
    Merges two sorted arrays in-place.

    :param nums1: List[int] - First sorted array with extra space at the end.
    :param m: int - Number of initialized elements in nums1.
    :param nums2: List[int] - Second sorted array.
    :param n: int - Number of elements in nums2.
    """
    p1, p2, p = m - 1, n - 1, m + n - 1  # Initialize pointers

    # Merge from the end of nums1
    while p1 >= 0 and p2 >= 0:
        if nums1[p1] > nums2[p2]:  # If nums1's element is larger, place it at the end
            nums1[p] = nums1[p1]
            p1 -= 1
        else:  # Otherwise, place nums2's element
            nums1[p] = nums2[p2]
            p2 -= 1
        p -= 1

    # If nums2 still has elements left, copy them
    while p2 >= 0:
        nums1[p] = nums2[p2]
        p2 -= 1
        p -= 1

# Example usage:
nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2, 5, 6]
n = 3
