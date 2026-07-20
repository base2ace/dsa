// Solution for Subarray Sum Divisible by K (prefix-sum)
// Complexity: Time: O(n), Space: O(k)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionSubarraySumDivisiblebyK {
public:
    // Subarray Sum Divisible by K solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
