def maxArea(height):
    """
    Finds the maximum water that can be stored using two lines in the height array.

    :param height: List[int] - Heights of vertical lines.
    :return: int - Maximum water container area.
    """
    left, right = 0, len(height) - 1  # Two-pointer approach
    max_area = 0  

    while left < right:
        # Calculate area based on current left and right lines
        area = min(height[left], height[right]) * (right - left)
        max_area = max(max_area, area)  # Update max area if needed

        # Move the pointer pointing to the shorter line to try to find a taller one
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return max_area

# Example usage:
height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
print(maxArea(height))  # Output: 49
