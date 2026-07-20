#include <vector>

using namespace std;

class SolutionSudoku {
    bool isValid(vector<vector<char>>& board, int r, int c, char ch) {
        for (int i = 0; i < 9; ++i) {
            if (board[r][i] == ch || board[i][c] == ch) return false;
            if (board[3 * (r / 3) + i / 3][3 * (c / 3) + i % 3] == ch) return false;
        }
        return true;
    }

public:
    bool solveSudoku(vector<vector<char>>& board) {
        for (int r = 0; r < 9; ++r) {
            for (int c = 0; c < 9; ++c) {
                if (board[r][c] == '.') {
                    for (char ch = '1'; ch <= '9'; ++ch) {
                        if (isValid(board, r, c, ch)) {
                            board[r][c] = ch;
                            if (solveSudoku(board)) return true;
                            board[r][c] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
};
