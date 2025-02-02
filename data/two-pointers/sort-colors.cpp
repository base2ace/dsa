#include <iostream>
#include <vector>
using namespace std;

void sortColors(vector<int>& nums) {
    int low = 0, mid = 0, high = nums.size() - 1;  // Initialize three pointers
    
    while (mid <= high) {  // Traverse the array
        if (nums[mid] == 0) {
            // Swap 0 to the 'low' position
            swap(nums[low], nums[mid]);
            low++;
            mid++;
        } else if (nums[mid] == 1) {
            // If it's 1, just move forward
            mid++;
        } else {
            // Swap 2 to the 'high' position
            swap(nums[mid], nums[high]);
            high--;
        }
    }
}

// Example Usage
int main() {
    vector<int> nums = {2, 0, 2, 1, 1, 0};
    sortColors(nums);
    
    // Output sorted array
    for (int num : nums) {
        cout << num << " ";  // Output: 0 0 1 1 2 2
    }
    cout << endl;
    
    return 0;
}
