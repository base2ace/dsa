#include <vector>
#include <string>

using namespace std;

class SolutionPalindromePartitioning {
    vector<vector<string>> res;
    vector<string> part;

    bool isPali(const string& s, int l, int r) {
        while (l < r) {
            if (s[l++] != s[r--]) return false;
        }
        return true;
    }

    void dfs(const string& s, int i) {
        if (i >= s.length()) {
            res.push_back(part);
            return;
        }
        for (int j = i; j < s.length(); ++j) {
            if (isPali(s, i, j)) {
                part.push_back(s.substr(i, j - i + 1));
                dfs(s, j + 1);
                part.pop_back();
            }
        }
    }
public:
    vector<vector<string>> partition(string s) {
        dfs(s, 0);
        return res;
    }
};
