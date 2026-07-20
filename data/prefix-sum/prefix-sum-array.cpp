// Solution for Prefix Sum Array (prefix-sum)
// Complexity: Time: O(1) for queries, O(n) for building the array, Space: O(n)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionPrefixSumArray {
public:
    // Prefix Sum Array solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
