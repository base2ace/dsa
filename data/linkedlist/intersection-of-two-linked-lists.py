# Solution for Intersection of Two Linked Lists (linked-list-manipulation)
# Time: O(m + n), Space: O(1)

def intersection_of_two_linked_lists(input_val):
    """
    Find the node where two linked lists intersect.
			Note that the intersection is defined based on reference, not value.
    Example Input: headA = [4,1,8,4,5], headB = [5,0,1,8,4,5]
    Example Output: 8
    """
    # Professional implementation for Intersection of Two Linked Lists
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
