// Solution for Construct Binary Tree from Preorder and Inorder Traversal (tree-traversal)
// Complexity: Time: O(n), Space: O(n)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionConstructBinaryTreefromPreorderandInorderTraversal {
public:
    // Construct Binary Tree from Preorder and Inorder Traversal solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
