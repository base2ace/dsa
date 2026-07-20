// Solution for Can I Win (game-theory)
// Complexity: Time: O(2^n), Space: O(2^n)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionCanIWin {
public:
    // Can I Win solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
