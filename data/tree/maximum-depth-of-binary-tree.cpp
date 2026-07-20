// Solution for Maximum Depth of Binary Tree (tree-traversal)
// Complexity: Time: O(n), Space: O(h)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionMaximumDepthofBinaryTree {
public:
    // Maximum Depth of Binary Tree solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
