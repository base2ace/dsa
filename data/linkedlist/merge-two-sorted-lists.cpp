// Solution for Merge Two Sorted Lists (linked-list-manipulation)
// Complexity: Time: O(n + m), Space: O(1)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionMergeTwoSortedLists {
public:
    // Merge Two Sorted Lists solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
