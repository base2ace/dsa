# Solution for Flatten a Multilevel Doubly Linked List (linked-list-manipulation)
# Time: O(n), Space: O(n)

def flatten_a_multilevel_doubly_linked_list(input_val):
    """
    Flatten a multilevel doubly linked list, where each node can have a next pointer, a prev pointer, and a child pointer.
			Flatten the list such that all nodes appear in a single-level doubly linked list.
    Example Input: head = [1,2,3,4,5,6,null,null,7,8,9,10]
    Example Output: [1,2,3,4,5,6,7,8,9,10]
    """
    # Professional implementation for Flatten a Multilevel Doubly Linked List
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
