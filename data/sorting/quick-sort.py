def quickSort(nums: list[int]) -> list[int]:
    """
    Quick Sort Algorithm (In-Place Partitioning)
    Time Complexity: O(n log n) average, O(n^2) worst
    Space Complexity: O(log n) stack space
    """
    def partition(low, high):
        pivot = nums[high]
        i = low - 1
        for j in range(low, high):
            if nums[j] < pivot:
                i += 1
                nums[i], nums[j] = nums[j], nums[i]
        nums[i + 1], nums[high] = nums[high], nums[i + 1]
        return i + 1

    def _quickSort(low, high):
        if low < high:
            pi = partition(low, high)
            _quickSort(low, pi - 1)
            _quickSort(pi + 1, high)

    _quickSort(0, len(nums) - 1)
    return nums
