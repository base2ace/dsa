from collections import defaultdict

def subarraysWithKDistinct(nums: list[int], k: int) -> int:
    def atMost(k_distinct):
        count = defaultdict(int)
        left = 0
        res = 0
        for right in range(len(nums)):
            if count[nums[right]] == 0:
                k_distinct -= 1
            count[nums[right]] += 1
            
            while k_distinct < 0:
                count[nums[left]] -= 1
                if count[nums[left]] == 0:
                    k_distinct += 1
                left += 1
                
            res += right - left + 1
        return res

    return atMost(k) - atMost(k - 1)
