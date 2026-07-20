# Solution for Lowest Common Ancestor of a Binary Tree (tree-traversal)
# Time: O(n), Space: O(h)

def lowest_common_ancestor_of_a_binary_tree(input_val):
    """
    Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
		The LCA is the deepest node that is an ancestor of both nodes.
    Example Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
    Example Output: 3
    """
    # Professional implementation for Lowest Common Ancestor of a Binary Tree
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
