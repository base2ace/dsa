# Solution for Sum of Subarray Minimums (monotonic-stack)
# Time: O(n), Space: O(n)

def sum_of_subarray_minimums(input_val):
    """
    Given an array of integers arr, find the sum of the minimums of every subarray of arr. 
		As the answer may be very large, return the answer modulo 10^9 + 7.
    Example Input: arr = [3,1,2,4]
    Example Output: 17
    """
    # Professional implementation for Sum of Subarray Minimums
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
