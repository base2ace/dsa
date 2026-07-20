def combinationSum2(candidates: list[int], target: int) -> list[list[int]]:
    candidates.sort()
    res = []

    def backtrack(pos, cur, target):
        if target == 0:
            res.append(cur[:])
            return
        if target <= 0:
            return

        prev = -1
        for i in range(pos, len(candidates)):
            if candidates[i] == prev:
                continue
            cur.append(candidates[i])
            backtrack(i + 1, cur, target - candidates[i])
            cur.pop()
            prev = candidates[i]

    backtrack(0, [], target)
    return res
