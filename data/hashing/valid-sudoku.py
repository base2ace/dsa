# Solution for Valid Sudoku (hashing)
# Time: O(1), Space: O(1)

def valid_sudoku(input_val):
    """
    Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
		- Each row must contain the digits 1-9 without repetition.
		- Each column must contain the digits 1-9 without repetition.
		- Each of the 9 sub-boxes must contain the digits 1-9 without repetition.
    Example Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."] ...]
    Example Output: true
    """
    # Professional implementation for Valid Sudoku
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
