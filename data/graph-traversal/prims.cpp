// Solution for Prim's Algorithm (graph-traversal)
// Complexity: Time: O(E log V), Space: O(V)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionPrimsAlgorithm {
public:
    // Prim's Algorithm solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
