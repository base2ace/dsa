def removeDuplicates(nums):
    if not nums:
        return 0

    unique_index = 0  # Pointer for the position of the next unique element

    for i in range(1, len(nums)):
        if nums[i] != nums[unique_index]:  # Found a new unique element
            unique_index += 1
            nums[unique_index] = nums[i]

    return unique_index + 1  # Length of the unique elements

# Example Usage
nums = [1, 1, 2]
length = removeDuplicates(nums)
print(length, nums[:length])  # Output: 2, [1, 2]
