#include <vector>

using namespace std;

class SolutionPermutations {
    vector<vector<int>> res;
    void backtrack(vector<int>& nums, int first) {
        if (first == nums.size()) {
            res.push_back(nums);
            return;
        }
        for (int i = first; i < nums.size(); ++i) {
            swap(nums[first], nums[i]);
            backtrack(nums, first + 1);
            swap(nums[first], nums[i]);
        }
    }
public:
    vector<vector<int>> permute(vector<int>& nums) {
        backtrack(nums, 0);
        return res;
    }
};
