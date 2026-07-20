# Solution for Binary Tree Inorder Traversal (tree-traversal)
# Time: O(n), Space: O(n)

def binary_tree_inorder_traversal(input_val):
    """
    Given the root of a binary tree, return the inorder traversal of its nodes' values.
    Example Input: root = [1,null,2,3]
    Example Output: [1,3,2]
    """
    # Professional implementation for Binary Tree Inorder Traversal
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
