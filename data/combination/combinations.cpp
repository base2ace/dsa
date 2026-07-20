#include <vector>

using namespace std;

class SolutionCombinations {
    vector<vector<int>> res;
    void backtrack(int n, int k, int start, vector<int>& comb) {
        if (comb.size() == k) {
            res.push_back(comb);
            return;
        }
        for (int i = start; i <= n; ++i) {
            comb.push_back(i);
            backtrack(n, k, i + 1, comb);
            comb.pop_back();
        }
    }
public:
    vector<vector<int>> combine(int n, int k) {
        vector<int> comb;
        backtrack(n, k, 1, comb);
        return res;
    }
};
