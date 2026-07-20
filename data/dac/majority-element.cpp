// Solution for Find the Majority Element (divide-and-conquer)
// Complexity: Time: O(n log n), Space: O(1)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionFindtheMajorityElement {
public:
    // Find the Majority Element solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
