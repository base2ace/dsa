def countingSort(nums: list[int]) -> list[int]:
    """
    Counting Sort Algorithm
    Time Complexity: O(n + k)
    Space Complexity: O(n + k)
    """
    if not nums:
        return nums

    min_val, max_val = min(nums), max(nums)
    count = [0] * (max_val - min_val + 1)

    for num in nums:
        count[num - min_val] += 1

    sorted_idx = 0
    for i, freq in enumerate(count):
        val = i + min_val
        for _ in range(freq):
            nums[sorted_idx] = val
            sorted_idx += 1

    return nums
