#include <vector>

using namespace std;

class SolutionCombinationSum {
    vector<vector<int>> res;
    void dfs(vector<int>& candidates, int target, int i, vector<int>& cur, int total) {
        if (total == target) {
            res.push_back(cur);
            return;
        }
        if (i >= candidates.size() || total > target) return;

        cur.push_back(candidates[i]);
        dfs(candidates, target, i, cur, total + candidates[i]);
        cur.pop_back();
        dfs(candidates, target, i + 1, cur, total);
    }
public:
    vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
        vector<int> cur;
        dfs(candidates, target, 0, cur, 0);
        return res;
    }
};
