def twoSum(numbers, target):
    # Initialize two pointers: left at the beginning, right at the end
    left, right = 0, len(numbers) - 1
    
    while left < right:
        current_sum = numbers[left] + numbers[right]
        
        if current_sum == target:
            # Since the array is 1-indexed, return indices left + 1 and right + 1
            return [left + 1, right + 1]
        elif current_sum < target:
            # If sum is less than the target, move the left pointer to the right
            left += 1
        else:
            # If sum is greater than the target, move the right pointer to the left
            right -= 1
    
    # If no solution is found
    return []

