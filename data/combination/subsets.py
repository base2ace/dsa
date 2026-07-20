def subsets(nums: list[int]) -> list[list[int]]:
    """
    Given an integer array nums of unique elements, return all possible subsets (the power set).
    Time Complexity: O(N * 2^N)
    Space Complexity: O(N)
    """
    res = []
    subset = []
    def dfs(i):
        if i >= len(nums):
            res.append(subset[:])
            return
        subset.append(nums[i])
        dfs(i + 1)
        subset.pop()
        dfs(i + 1)

    dfs(0)
    return res
