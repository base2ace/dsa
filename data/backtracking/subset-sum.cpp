#include <vector>

using namespace std;

class SolutionSubsetSum {
    bool backtrack(vector<int>& nums, int target, int i, int currentSum) {
        if (currentSum == target) return true;
        if (i >= nums.size() || currentSum > target) return false;
        return backtrack(nums, target, i + 1, currentSum + nums[i]) || backtrack(nums, target, i + 1, currentSum);
    }
public:
    bool isSubsetSum(vector<int>& nums, int target) {
        return backtrack(nums, target, 0, 0);
    }
};
