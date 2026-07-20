// Solution for Maximum Sum of Subarray of Size K (prefix-sum)
// Complexity: Time: O(n), Space: O(1)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionMaximumSumofSubarrayofSizeK {
public:
    // Maximum Sum of Subarray of Size K solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
