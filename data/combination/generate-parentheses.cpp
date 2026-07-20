#include <vector>
#include <string>

using namespace std;

class SolutionGenerateParentheses {
    vector<string> res;
    void backtrack(int n, int openN, int closedN, string str) {
        if (openN == n && closedN == n) {
            res.push_back(str);
            return;
        }
        if (openN < n) backtrack(n, openN + 1, closedN, str + "(");
        if (closedN < openN) backtrack(n, openN, closedN + 1, str + ")");
    }
public:
    vector<string> generateParenthesis(int n) {
        backtrack(n, 0, 0, "");
        return res;
    }
};
