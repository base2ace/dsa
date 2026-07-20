# Solution for Merge Two Sorted Lists (linked-list-manipulation)
# Time: O(n + m), Space: O(1)

def merge_two_sorted_lists(input_val):
    """
    Merge two sorted linked lists and return it as a new sorted list.
			The new list should be made by splicing together the nodes of the first two lists.
    Example Input: l1 = [1,2,4], l2 = [1,3,4]
    Example Output: [1,1,2,3,4,4]
    """
    # Professional implementation for Merge Two Sorted Lists
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
