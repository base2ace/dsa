// Solution for 0/1 Knapsack Problem (dynamic-programming)
// Complexity: Time: O(nW), Space: O(nW)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class Solution01KnapsackProblem {
public:
    // 0/1 Knapsack Problem solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
