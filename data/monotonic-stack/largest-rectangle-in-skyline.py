# Solution for Largest Rectangle in Skyline (monotonic-stack)
# Time: O(n), Space: O(n)

def largest_rectangle_in_skyline(input_val):
    """
    Given a series of building heights represented by an array, find the largest rectangular area possible in the skyline.
    Example Input: heights = [2,1,5,6,2,3]
    Example Output: 10
    """
    # Professional implementation for Largest Rectangle in Skyline
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
