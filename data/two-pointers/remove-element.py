def removeElement(nums, val):
    # Pointer for where to place the next element that is not equal to val
    i = 0
    
    # Iterate through the array
    for j in range(len(nums)):
        # If the current element is not the value to be removed
        if nums[j] != val:
            # Place the element at the next available position
            nums[i] = nums[j]
            i += 1
    
    # The new length of the array is 'i' (as 'i' will have moved past the valid elements)
    return i

# Example 
nums = [3, 2, 2, 3, 4]
val = 3
new_length = removeElement(nums, val)
print(nums[:new_length])  # Output will be [2, 2, 4]
