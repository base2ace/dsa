def letterCasePermutation(s: str) -> list[str]:
    res = []
    def backtrack(sub, i):
        if i == len(s):
            res.append(sub)
            return
        if s[i].isalpha():
            backtrack(sub + s[i].lower(), i + 1)
            backtrack(sub + s[i].upper(), i + 1)
        else:
            backtrack(sub + s[i], i + 1)

    backtrack("", 0)
    return res
