def combinationSum(candidates: list[int], target: int) -> list[list[int]]:
    """
    Given an array of distinct integers candidates and a target integer target, 
    return a list of all unique combinations where the chosen numbers sum to target.
    """
    res = []
    def dfs(i, cur, total):
        if total == target:
            res.append(cur[:])
            return
        if i >= len(candidates) or total > target:
            return
        cur.append(candidates[i])
        dfs(i, cur, total + candidates[i])
        cur.pop()
        dfs(i + 1, cur, total)

    dfs(0, [], 0)
    return res
