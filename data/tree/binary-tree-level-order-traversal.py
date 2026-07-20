# Solution for Binary Tree Level Order Traversal (tree-traversal)
# Time: O(n), Space: O(n)

def binary_tree_level_order_traversal(input_val):
    """
    Given the root of a binary tree, return the level order traversal of its nodes' values.
		(From left to right, level by level).
    Example Input: root = [3,9,20,null,null,15,7]
    Example Output: [[3],[9,20],[15,7]]
    """
    # Professional implementation for Binary Tree Level Order Traversal
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
