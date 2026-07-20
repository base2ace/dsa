def solveNQueens(n: int) -> list[list[str]]:
    """
    N-Queens Backtracking Algorithm
    Time Complexity: O(N!)
    Space Complexity: O(N^2)
    """
    res = []
    cols = set()
    posDiag = set() # r + c
    negDiag = set() # r - c
    board = [["."] * n for _ in range(n)]

    def backtrack(r):
        if r == n:
            res.append(["".join(row) for row in board])
            return

        for c in range(n):
            if c in cols or (r + c) in posDiag or (r - c) in negDiag:
                continue

            cols.add(c)
            posDiag.add(r + c)
            negDiag.add(r - c)
            board[r][c] = "Q"

            backtrack(r + 1)

            cols.remove(c)
            posDiag.remove(r + c)
            negDiag.remove(r - c)
            board[r][c] = "."

    backtrack(0)
    return res
