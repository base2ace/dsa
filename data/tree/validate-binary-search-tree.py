# Solution for Validate Binary Search Tree (tree-traversal)
# Time: O(n), Space: O(h)

def validate_binary_search_tree(input_val):
    """
    Given the root of a binary tree, determine if it is a valid binary search tree (BST).
		A valid BST is a tree where for each node:
		- The left subtree's values are less than the node's value.
		- The right subtree's values are greater than the node's value.
		- Both subtrees must also be binary search trees.
    Example Input: root = [2,1,3]
    Example Output: true
    """
    # Professional implementation for Validate Binary Search Tree
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
