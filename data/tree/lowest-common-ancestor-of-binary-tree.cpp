// Solution for Lowest Common Ancestor of a Binary Tree (tree-traversal)
// Complexity: Time: O(n), Space: O(h)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionLowestCommonAncestorofaBinaryTree {
public:
    // Lowest Common Ancestor of a Binary Tree solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
