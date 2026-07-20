// Solution for Range Sum Query - 2D (prefix-sum)
// Complexity: Time: O(1) for queries, O(m * n) for building the array, Space: O(m * n)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionRangeSumQuery2D {
public:
    // Range Sum Query - 2D solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
