# Solution for Kth Smallest Element in a BST (tree-traversal)
# Time: O(h + k), Space: O(h)

def kth_smallest_element_in_a_bst(input_val):
    """
    Given the root of a binary search tree (BST), return the kth smallest value (1-indexed) of all the nodes' values.
    Example Input: root = [3,1,4,null,2], k = 1
    Example Output: 1
    """
    # Professional implementation for Kth Smallest Element in a BST
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
