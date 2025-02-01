def twoSum(numbers, target):
    # Initialize two pointers:
    # 'left' starts at the beginning of the array (index 0)
    # 'right' starts at the end of the array (index len(numbers) - 1)
    left, right = 0, len(numbers) - 1  

    # Iterate as long as the 'left' pointer is less than the 'right' pointer
    while left < right:
        # Calculate the sum of the values at the 'left' and 'right' pointers
        total = numbers[left] + numbers[right]

        # Check if the sum of the two values is equal to the target
        if total == target:
            # If we find the correct sum, return their 1-indexed positions (left + 1 and right + 1)
            return [left + 1, right + 1]  

        # If the sum is less than the target, we need a larger sum, so move the left pointer forward
        elif total < target:
            left += 1  # Increment left to increase the sum (since numbers are sorted, the next number will be larger)

        # If the sum is greater than the target, we need a smaller sum, so move the right pointer backward
        else:
            right -= 1  # Decrement right to decrease the sum (since numbers are sorted, the next number will be smaller)

    # If we reach here, it means no valid solution was found, but the problem guarantees a solution exists.
    # So, this return statement is never actually reached in a valid problem setup.
    return []  


# Example usage:
numbers = [2, 7, 11, 15]
target = 9
result = twoSum(numbers, target)
print(result)  # Output: [1, 2]
