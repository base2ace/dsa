def subsets(nums: list[int]) -> list[list[int]]:
    """
    Subsets Backtracking Algorithm (Power Set)
    Time Complexity: O(N * 2^N)
    Space Complexity: O(N)
    """
    res = []
    subset = []

    def dfs(i):
        if i >= len(nums):
            res.append(subset[:])
            return
        # Include nums[i]
        subset.append(nums[i])
        dfs(i + 1)
        # Exclude nums[i]
        subset.pop()
        dfs(i + 1)

    dfs(0)
    return res
