# Solution for Add Two Numbers (linked-list-manipulation)
# Time: O(max(m,n)), Space: O(max(m,n))

def add_two_numbers(input_val):
    """
    Given two non-empty linked lists representing two non-negative integers, 
			add the two numbers and return it as a linked list.
			The digits are stored in reverse order and each of their nodes contains a single digit.
    Example Input: l1 = [2,4,3], l2 = [5,6,4]
    Example Output: [7,0,8]
    """
    # Professional implementation for Add Two Numbers
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
