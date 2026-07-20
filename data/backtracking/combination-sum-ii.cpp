#include <vector>
#include <algorithm>

using namespace std;

class SolutionCombinationSum2 {
    vector<vector<int>> res;
    void backtrack(vector<int>& candidates, int target, int pos, vector<int>& cur) {
        if (target == 0) {
            res.push_back(cur);
            return;
        }
        if (target < 0) return;

        int prev = -1;
        for (int i = pos; i < candidates.size(); ++i) {
            if (candidates[i] == prev) continue;
            cur.push_back(candidates[i]);
            backtrack(candidates, target - candidates[i], i + 1, cur);
            cur.pop_back();
            prev = candidates[i];
        }
    }
public:
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        sort(candidates.begin(), candidates.end());
        vector<int> cur;
        backtrack(candidates, target, 0, cur);
        return res;
    }
};
