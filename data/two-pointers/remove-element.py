def removeElement(nums, val):
    """
    Removes all instances of 'val' from the array 'nums' in-place.
    
    :param nums: List[int] - List of integers
    :param val: int - The value to be removed from the array
    :return: int - The new length of the array after removal
    """
    k = 0  # Pointer to keep track of where to place the next valid element
    
    for i in range(len(nums)):  # Iterate through the array
        if nums[i] != val:  # If current element is not 'val'
            nums[k] = nums[i]  # Place it at the correct position
            k += 1  # Increment k for the next valid position
    
    return k  # Return the length of the modified array

# Example Usage
nums = [3, 2, 2, 3, 4, 3, 5]
val = 3
new_length = removeElement(nums, val)
print(nums[:new_length])  # Output: [2, 2, 4, 5]
