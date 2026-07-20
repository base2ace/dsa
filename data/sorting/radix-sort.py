def countingSortForRadix(nums: list[int], exp: int):
    n = len(nums)
    output = [0] * n
    count = [0] * 10

    for i in range(n):
        index = nums[i] // exp
        count[index % 10] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    i = n - 1
    while i >= 0:
        index = nums[i] // exp
        output[count[index % 10] - 1] = nums[i]
        count[index % 10] -= 1
        i -= 1

    for i in range(n):
        nums[i] = output[i]

def radixSort(nums: list[int]) -> list[int]:
    """
    Radix Sort Algorithm
    Time Complexity: O(n * d)
    Space Complexity: O(n + k)
    """
    if not nums:
        return nums
    max_val = max(nums)
    exp = 1
    while max_val // exp > 0:
        countingSortForRadix(nums, exp)
        exp *= 10
    return nums
