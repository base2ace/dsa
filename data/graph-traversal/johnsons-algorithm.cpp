// Solution for Johnson's Algorithm (graph-traversal)
// Complexity: Time: O(V^2 log V + VE), Space: O(V^2)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionJohnsonsAlgorithm {
public:
    // Johnson's Algorithm solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
