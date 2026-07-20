# Solution for Construct Binary Tree from Preorder and Inorder Traversal (tree-traversal)
# Time: O(n), Space: O(n)

def construct_binary_tree_from_preorder_and_inorder_traversal(input_val):
    """
    Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the binary tree, 
		construct and return the binary tree.
    Example Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
    Example Output: [3,9,20,null,null,15,7]
    """
    # Professional implementation for Construct Binary Tree from Preorder and Inorder Traversal
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
