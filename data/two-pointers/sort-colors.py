def sortColors(nums):
    left, mid, right = 0, 0, len(nums) - 1  # Three pointers

    while mid <= right:
        if nums[mid] == 0:  # Swap 0 to the left
            nums[left], nums[mid] = nums[mid], nums[left]
            left += 1
            mid += 1
        elif nums[mid] == 1:  # Keep 1 in the middle
            mid += 1
        else:  # Swap 2 to the right
            nums[mid], nums[right] = nums[right], nums[mid]
            right -= 1

# Example Usage
nums = [2, 0, 2, 1, 1, 0]
sortColors(nums)
print(nums)  # Output: [0, 0, 1, 1, 2, 2]


# This Dutch National Flag Algorithm efficiently sorts the array in just one pass.