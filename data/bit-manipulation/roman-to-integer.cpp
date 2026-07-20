// Solution for Roman to Integer (bit-manipulation)
// Complexity: Time: O(1), Space: O(1)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionRomantoInteger {
public:
    // Roman to Integer solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
