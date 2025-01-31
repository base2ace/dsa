# Function to find all unique triplets that sum to zero
def threeSum(nums):
    # First, sort the array
    nums.sort()
    result = []
    
    # Iterate through the array
    for i in range(len(nums) - 2):
        # Skip duplicates for the first element
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        
        # Set up two pointers: left and right
        left, right = i + 1, len(nums) - 1
        
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            
            if total == 0:
                result.append([nums[i], nums[left], nums[right]])
                # Skip duplicates for the second element
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                # Skip duplicates for the third element
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                left += 1
                right -= 1
            elif total < 0:
                left += 1
            else:
                right -= 1
                
    return result

# Example
nums = [-1, 0, 1, 2, -1, -4]
print(threeSum(nums))

# Output:
# [[-1, -1, 2], [-1, 0, 1]]

# Time Complexity:
# Sorting the array takes O(n log n).
# The two-pointer search runs in O(n^2) because for each element, we perform a linear scan with two pointers.
# Overall time complexity: O(n^2), where n is the length of the input array 'nums'.

# Space Complexity:
# The space complexity is O(1) for the pointers and O(k) for storing the result, where k is the number of triplets found.
# Thus, the space complexity is O(k) because the result array stores all the triplets.
