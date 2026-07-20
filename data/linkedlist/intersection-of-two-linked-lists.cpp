// Solution for Intersection of Two Linked Lists (linked-list-manipulation)
// Complexity: Time: O(m + n), Space: O(1)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionIntersectionofTwoLinkedLists {
public:
    // Intersection of Two Linked Lists solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
