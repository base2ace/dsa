// Solution for Longest Increasing Subsequence (dynamic-programming)
// Complexity: Time: O(n^2), Space: O(n)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionLongestIncreasingSubsequence {
public:
    // Longest Increasing Subsequence solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
