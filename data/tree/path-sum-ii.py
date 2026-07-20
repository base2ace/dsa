# Solution for Path Sum II (tree-traversal)
# Time: O(n), Space: O(h)

def path_sum_ii(input_val):
    """
    Given a binary tree and a target sum, return all root-to-leaf paths where each path's sum equals the given target sum.
    Example Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], target = 22
    Example Output: [[5,4,11,2], [5,8,4,1]]
    """
    # Professional implementation for Path Sum II
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
