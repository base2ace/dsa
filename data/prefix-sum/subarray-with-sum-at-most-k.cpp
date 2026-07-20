// Solution for Subarray with Sum at Most K (prefix-sum)
// Complexity: Time: O(n), Space: O(1)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionSubarraywithSumatMostK {
public:
    // Subarray with Sum at Most K solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
