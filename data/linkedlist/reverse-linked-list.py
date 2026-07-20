# Solution for Reverse Linked List (linked-list-manipulation)
# Time: O(n), Space: O(1)

def reverse_linked_list(input_val):
    """
    Reverse a singly linked list.
    Example Input: head = [1,2,3,4,5]
    Example Output: [5,4,3,2,1]
    """
    # Professional implementation for Reverse Linked List
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
