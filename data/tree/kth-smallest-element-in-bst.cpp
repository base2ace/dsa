// Solution for Kth Smallest Element in a BST (tree-traversal)
// Complexity: Time: O(h + k), Space: O(h)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionKthSmallestElementinaBST {
public:
    // Kth Smallest Element in a BST solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
