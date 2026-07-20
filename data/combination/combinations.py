def combine(n: int, k: int) -> list[list[int]]:
    """
    Given two integers n and k, return all possible combinations of k numbers chosen from [1, n].
    Time Complexity: O(C(n, k))
    Space Complexity: O(k)
    """
    res = []
    def backtrack(start, comb):
        if len(comb) == k:
            res.append(comb[:])
            return
        for i in range(start, n + 1):
            comb.append(i)
            backtrack(i + 1, comb)
            comb.pop()

    backtrack(1, [])
    return res
