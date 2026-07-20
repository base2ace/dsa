// Solution for Sum of Subarray Minimums (monotonic-stack)
// Complexity: Time: O(n), Space: O(n)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionSumofSubarrayMinimums {
public:
    // Sum of Subarray Minimums solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
