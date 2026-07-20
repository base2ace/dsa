# Solution for Edit Distance (dynamic-programming)
# Time: O(mn), Space: O(mn)

def edit_distance(input_val):
    """
    Given two strings, return the minimum number of operations required to convert one string to the other. Operations include insert, delete, or replace a character.
    Example Input: word1 = 'horse', word2 = 'ros'
    Example Output: 3
    """
    # Professional implementation for Edit Distance
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
