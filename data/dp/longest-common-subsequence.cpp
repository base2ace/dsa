// Solution for Longest Common Subsequence (dynamic-programming)
// Complexity: Time: O(mn), Space: O(mn)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionLongestCommonSubsequence {
public:
    // Longest Common Subsequence solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
