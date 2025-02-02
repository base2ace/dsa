def moveZeroes(nums):
    """
    Moves all zeros in nums to the end while maintaining the relative order of non-zero elements.

    :param nums: List[int] - Input array
    :return: None - Modifies nums in-place
    """
    slow = 0  # Pointer for placing non-zero elements

    # Move non-zero elements forward
    for fast in range(len(nums)):
        if nums[fast] != 0:
            nums[slow], nums[fast] = nums[fast], nums[slow]  # Swap
            slow += 1  # Move slow pointer forward

# Example Usage
nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
print(nums)  # Output: [1, 3, 12, 0, 0]
