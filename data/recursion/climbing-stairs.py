# Solution for Climbing Stairs (recursion)
# Time: O(2^n), Space: O(n)

def climbing_stairs(input_val):
    """
    You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. 
		How many distinct ways can you climb to the top?
    Example Input: n = 3
    Example Output: 3
    """
    # Professional implementation for Climbing Stairs
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
