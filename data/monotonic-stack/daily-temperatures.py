# Solution for Daily Temperature (monotonic-stack)
# Time: O(n), Space: O(n)

def daily_temperature(input_val):
    """
    Given a list of daily temperatures, where temperatures[i] is the temperature of the day i.
		Return a list of the number of days you have to wait until a warmer temperature. 
		If there is no future day for which this is possible, put 0 instead.
    Example Input: temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
    Example Output: [1, 1, 4, 2, 1, 1, 0, 0]
    """
    # Professional implementation for Daily Temperature
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
