def sortColors(nums):
    # Step 1: Initialize three pointers
    left, mid, right = 0, 0, len(nums) - 1  # 'left' points to the next position for 0, 'mid' is the current element, 'right' points to the next position for 2
    
    # Step 2: Process elements using the 'mid' pointer
    while mid <= right:
        if nums[mid] == 0:  # If the current element is 0
            # Swap the current element (nums[mid]) with nums[left], and move both 'left' and 'mid' pointers forward
            nums[left], nums[mid] = nums[mid], nums[left]
            left += 1  # Increment 'left' as it now points to the next available position for 0
            mid += 1   # Increment 'mid' as we move past the 0 we just swapped
        elif nums[mid] == 1:  # If the current element is 1
            # No swap needed for 1, just move 'mid' pointer forward to continue sorting
            mid += 1
        else:  # If the current element is 2
            # Swap the current element (nums[mid]) with nums[right], and move 'right' pointer backward
            nums[mid], nums[right] = nums[right], nums[mid]
            right -= 1  # Decrement 'right' as it now points to the next available position for 2
            # We don't move 'mid' here because we need to check the element we swapped to 'mid'
    
    # No need to return anything since the list is modified in place.


# Example Usage
nums = [2, 0, 2, 1, 1, 0]
sortColors(nums)
print(nums)  # Output: [0, 0, 1, 1, 2, 2]


# This Dutch National Flag Algorithm efficiently sorts the array in just one pass.