def solveSudoku(board: list[list[str]]) -> None:
    """
    Sudoku Solver Backtracking Algorithm
    Time Complexity: O(9^(9x9))
    Space Complexity: O(1)
    """
    def isValid(r, c, char):
        for i in range(9):
            if board[r][i] == char or board[i][c] == char:
                return False
            if board[3 * (r // 3) + i // 3][3 * (c // 3) + i % 3] == char:
                return False
        return True

    def solve():
        for r in range(9):
            for c in range(9):
                if board[r][c] == ".":
                    for ch in "123456789":
                        if isValid(r, c, ch):
                            board[r][c] = ch
                            if solve():
                                return True
                            board[r][c] = "."
                    return False
        return True

    solve()
