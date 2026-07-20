def permute(nums: list[int]) -> list[list[int]]:
    """
    Permutations Backtracking Algorithm
    Time Complexity: O(N * N!)
    Space Complexity: O(N!)
    """
    res = []
    def backtrack(first=0):
        if first == len(nums):
            res.append(nums[:])
            return
        for i in range(first, len(nums)):
            nums[first], nums[i] = nums[i], nums[first]
            backtrack(first + 1)
            nums[first], nums[i] = nums[i], nums[first]

    backtrack()
    return res
