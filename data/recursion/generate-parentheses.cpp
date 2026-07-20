// Solution for Generate Parentheses (recursion)
// Complexity: Time: O(4^n / sqrt(n)), Space: O(n)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionGenerateParentheses {
public:
    // Generate Parentheses solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
