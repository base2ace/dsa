// Solution for Combinations (backtracking)
// Complexity: Time: O(n choose k), Space: O(k)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionCombinations {
public:
    // Combinations solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
