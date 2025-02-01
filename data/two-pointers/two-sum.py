def twoSum(numbers, target):
    left, right = 0, len(numbers) - 1  # Initialize two pointers

    while left < right:
        total = numbers[left] + numbers[right]

        if total == target:
            return [left + 1, right + 1]  # Return 1-indexed positions
        elif total < target:
            left += 1  # Move left pointer forward
        else:
            right -= 1  # Move right pointer backward

    return []  # Should never reach here if there's always a valid solution


# Example usage:
numbers = [2, 7, 11, 15]
target = 9
result = twoSum(numbers, target)
print(result)  # Output: [1, 2]
