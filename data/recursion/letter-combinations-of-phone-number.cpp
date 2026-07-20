// Solution for Letter Combinations of a Phone Number (recursion)
// Complexity: Time: O(4^n), Space: O(n)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionLetterCombinationsofaPhoneNumber {
public:
    // Letter Combinations of a Phone Number solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
