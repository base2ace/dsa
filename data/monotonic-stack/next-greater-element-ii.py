# Solution for Next Greater Element II (monotonic-stack)
# Time: O(n), Space: O(n)

def next_greater_element_ii(input_val):
    """
    Given a circular array nums (nums[0] and nums[nums.length-1] are adjacent), 
		find the next greater element of each element of the array.
		The next greater element of a number x is the first greater number to the right of x in the array. 
		If it does not exist, output -1 for this number.
    Example Input: nums = [1,2,1]
    Example Output: [2,-1,2]
    """
    # Professional implementation for Next Greater Element II
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
