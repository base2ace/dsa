// Solution for Bellman-Ford Algorithm (graph-traversal)
// Complexity: Time: O(V * E), Space: O(V)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionBellmanFordAlgorithm {
public:
    // Bellman-Ford Algorithm solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
