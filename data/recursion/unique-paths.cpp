// Solution for Unique Paths (recursion)
// Complexity: Time: O(m * n), Space: O(m * n)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionUniquePaths {
public:
    // Unique Paths solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
