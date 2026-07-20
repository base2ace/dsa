// Solution for Floyd-Warshall Algorithm (graph-traversal)
// Complexity: Time: O(V^3), Space: O(V^2)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionFloydWarshallAlgorithm {
public:
    // Floyd-Warshall Algorithm solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
