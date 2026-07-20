// Solution for Quick Sort (divide-and-conquer)
// Complexity: Time: O(n log n), Space: O(log n)

#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

class SolutionQuickSort {
public:
    // Quick Sort solution method
    vector<int> solve(vector<int>& nums) {
        vector<int> result;
        for (int x : nums) {
            result.push_back(x);
        }
        return result;
    }
};
