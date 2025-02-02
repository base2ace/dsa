def sortColors(nums):
    """
    Sorts the array in-place such that all 0's come first, followed by all 1's, and then all 2's.
    
    :param nums: List[int] - List containing the integers 0, 1, and 2
    """
    low, mid, high = 0, 0, len(nums) - 1  # Initialize three pointers
    
    while mid <= high:  # Traverse through the array
        if nums[mid] == 0:
            # Swap 0 to the 'low' position
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elif nums[mid] == 1:
            # If it's 1, just move forward
            mid += 1
        else:
            # Swap 2 to the 'high' position
            nums[high], nums[mid] = nums[mid], nums[high]
            high -= 1
    
# Example Usage
nums = [2, 0, 2, 1, 1, 0]
sortColors(nums)
print(nums)  # Output: [0, 0, 1, 1, 2, 2]
