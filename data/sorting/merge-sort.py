def mergeSort(nums: list[int]) -> list[int]:
    """
    Merge Sort Algorithm (Divide and Conquer)
    Time Complexity: O(n log n)
    Space Complexity: O(n)
    """
    if len(nums) <= 1:
        return nums

    mid = len(nums) // 2
    left = mergeSort(nums[:mid])
    right = mergeSort(nums[mid:])

    return merge(left, right)

def merge(left: list[int], right: list[int]) -> list[int]:
    merged = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[j])
            j += 1

    merged.extend(left[i:])
    merged.extend(right[j:])
    return merged
