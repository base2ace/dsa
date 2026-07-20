// Solution for Coin Change Problem (dynamic-programming)
// Complexity: Time: O(n * amount), Space: O(amount)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionCoinChangeProblem {
public:
    // Coin Change Problem solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
