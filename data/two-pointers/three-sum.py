def threeSum(nums):
    # Step 1: Sort the array to enable the two-pointer approach and avoid duplicates
    nums.sort()  # Sorting helps in finding the triplets and skipping duplicates easily
    result = []  # To store the unique triplets that sum to zero

    # Step 2: Iterate through the array
    for i in range(len(nums) - 2):
        # Step 2a: Skip the same element to avoid duplicate triplets
        if i > 0 and nums[i] == nums[i - 1]:  # Skip the same element for the first position of the triplet
            continue

        # Step 3: Use two pointers, left and right, to find the other two numbers that sum to 0 with nums[i]
        left, right = i + 1, len(nums) - 1  # Initialize two pointers: one at i+1 and one at the end of the array
        while left < right:
            # Calculate the sum of the current triplet
            total = nums[i] + nums[left] + nums[right]

            # Step 4: Check if the sum is zero
            if total == 0:
                # If the sum is zero, we've found a valid triplet
                result.append([nums[i], nums[left], nums[right]])

                # Step 4a: Skip duplicate elements for the second number (nums[left])
                while left < right and nums[left] == nums[left + 1]:
                    left += 1  # Move left pointer to the next distinct element
                
                # Step 4b: Skip duplicate elements for the third number (nums[right])
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1  # Move right pointer to the next distinct element

                # Move both pointers inward after processing the current triplet
                left += 1
                right -= 1
            # Step 5: If the sum is less than zero, move the left pointer to the right to increase the sum
            elif total < 0:
                left += 1
            # Step 6: If the sum is greater than zero, move the right pointer to the left to decrease the sum
            else:
                right -= 1

    # Step 7: Return the result containing all unique triplets
    return result


# Example Usage
nums = [-1, 0, 1, 2, -1, -4]
print(threeSum(nums))  # Output: [[-1, -1, 2], [-1, 0, 1]]
