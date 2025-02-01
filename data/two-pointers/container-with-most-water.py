def maxArea(height):
    left, right = 0, len(height) - 1  # Two-pointer approach
    max_water = 0

    while left < right:
        # Calculate the area formed by height[left] and height[right]
        area = min(height[left], height[right]) * (right - left)
        max_water = max(max_water, area)

        # Move the pointer with the smaller height to try and find a larger area
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return max_water

# Example Usage
height = [1,8,6,2,5,4,8,3,7]
print(maxArea(height))  # Output: 49
