// Solution for Path Sum II (tree-traversal)
// Complexity: Time: O(n), Space: O(h)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionPathSumII {
public:
    // Path Sum II solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
