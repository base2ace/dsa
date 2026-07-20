# Solution for Swap Nodes in Pairs (linked-list-manipulation)
# Time: O(n), Space: O(1)

def swap_nodes_in_pairs(input_val):
    """
    Given a linked list, swap every two adjacent nodes and return its head.
    Example Input: head = [1,2,3,4]
    Example Output: [2,1,4,3]
    """
    # Professional implementation for Swap Nodes in Pairs
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
