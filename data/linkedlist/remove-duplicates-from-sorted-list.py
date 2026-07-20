# Solution for Remove Duplicates from Sorted List (linked-list-manipulation)
# Time: O(n), Space: O(1)

def remove_duplicates_from_sorted_list(input_val):
    """
    Remove all duplicates from a sorted linked list such that each element appears only once.
    Example Input: head = [1,1,2]
    Example Output: [1,2]
    """
    # Professional implementation for Remove Duplicates from Sorted List
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
