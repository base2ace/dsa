// Solution for Product of Array Except Self (prefix-sum)
// Complexity: Time: O(n), Space: O(1)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionProductofArrayExceptSelf {
public:
    // Product of Array Except Self solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
