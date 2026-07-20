def isSubsetSum(nums: list[int], target: int) -> bool:
    def backtrack(i, current_sum):
        if current_sum == target: return True
        if i >= len(nums) or current_sum > target: return False
        return backtrack(i + 1, current_sum + nums[i]) or backtrack(i + 1, current_sum)

    return backtrack(0, 0)
