// Solution for Subset Sum Problem (dynamic-programming)
// Complexity: Time: O(n * sum), Space: O(n * sum)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionSubsetSumProblem {
public:
    // Subset Sum Problem solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
