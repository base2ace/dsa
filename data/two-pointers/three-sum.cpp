#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Function to find all unique triplets that sum to zero
vector<vector<int>> threeSum(vector<int>& nums) {
    vector<vector<int>> result;
    // Sort the array
    sort(nums.begin(), nums.end());
    
    // Iterate through the array
    for (int i = 0; i < nums.size() - 2; ++i) {
        // Skip duplicates for the first element
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        
        // Set up two pointers: left and right
        int left = i + 1, right = nums.size() - 1;
        
        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];
            
            if (total == 0) {
                result.push_back({nums[i], nums[left], nums[right]});
                // Skip duplicates for the second element
                while (left < right && nums[left] == nums[left + 1]) ++left;
                // Skip duplicates for the third element
                while (left < right && nums[right] == nums[right - 1]) --right;
                ++left;
                --right;
            } else if (total < 0) {
                ++left;
            } else {
                --right;
            }
        }
    }
    return result;
}

int main() {
    // Example input
    vector<int> nums = {-1, 0, 1, 2, -1, -4};
    
    // Call function to find the triplets
    vector<vector<int>> result = threeSum(nums);
    
    // Print the result
    cout << "[";
    for (int i = 0; i < result.size(); ++i) {
        cout << "[";
        for (int j = 0; j < result[i].size(); ++j) {
            cout << result[i][j];
            if (j < result[i].size() - 1) cout << ", ";
        }
        cout << "]";
        if (i < result.size() - 1) cout << ", ";
    }
    cout << "]" << endl;
    
    return 0;
}

/*
Example:
Input: [-1, 0, 1, 2, -1, -4]
Output: [[-1, -1, 2], [-1, 0, 1]]

Time Complexity:
- Sorting the array takes O(n log n).
- The two-pointer search runs in O(n^2) because for each element, we perform a linear scan with two pointers.
Overall time complexity: O(n^2), where n is the length of the input array 'nums'.

Space Complexity:
- The space complexity is O(1) for the pointers, and O(k) for storing the result, where k is the number of triplets found.
Thus, the space complexity is O(k), where k is the number of triplets.
*/
