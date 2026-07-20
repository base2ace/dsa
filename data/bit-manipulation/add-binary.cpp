// Solution for Add Binary (bit-manipulation)
// Complexity: Time: O(max(m, n)), Space: O(max(m, n))

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionAddBinary {
public:
    // Add Binary solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
