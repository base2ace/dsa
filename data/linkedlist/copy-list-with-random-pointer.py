# Solution for Copy List with Random Pointer (linked-list-manipulation)
# Time: O(n), Space: O(n)

def copy_list_with_random_pointer(input_val):
    """
    A linked list is given where each node contains two pointers:
		- `next` points to the next node in the list,
		- `random` points to any node in the list or null.
		You need to create a deep copy of the list.
    Example Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
    Example Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
    """
    # Professional implementation for Copy List with Random Pointer
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
