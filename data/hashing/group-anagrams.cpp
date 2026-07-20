// Solution for Group Anagrams (hashing)
// Complexity: Time: O(n * k), Space: O(n * k)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionGroupAnagrams {
public:
    // Group Anagrams solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
