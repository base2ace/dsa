def removeDuplicates(nums):
    """
    Removes duplicates in a sorted array in-place and returns the count of unique elements.

    :param nums: List[int] - A sorted list of integers.
    :return: int - The number of unique elements.
    """
    if not nums:
        return 0  # If array is empty, return 0

    i = 0  # Pointer to track unique elements

    for j in range(1, len(nums)):  # Iterate from second element
        if nums[j] != nums[i]:  # Found a new unique element
            i += 1  # Move unique element pointer forward
            nums[i] = nums[j]  # Place the new unique element at correct position

    return i + 1  # The length of the unique elements part

# Example usage:
nums = [1, 1, 2, 2, 3, 4, 4, 5]
unique_count = removeDuplicates(nums)
print(f"Number of unique elements: {unique_count}")
print(f"Modified array: {nums[:unique_count]}")
