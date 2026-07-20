def canPartition(nums: list[int]) -> bool:
    if sum(nums) % 2 != 0:
        return False
    target = sum(nums) // 2
    dp = set([0])
    for num in nums:
        nextDP = set()
        for t in dp:
            if t + num == target:
                return True
            nextDP.add(t + num)
            nextDP.add(t)
        dp = nextDP
    return target in dp
