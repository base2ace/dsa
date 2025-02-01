#include <iostream>
#include <vector>
using namespace std;

int removeElement(vector<int>& nums, int val) {
    int i = 0;  // Pointer for where to place the next element that is not equal to val
    
    // Iterate through the array
    for (int j = 0; j < nums.size(); ++j) {
        // If the current element is not equal to the value to be removed
        if (nums[j] != val) {
            nums[i] = nums[j];  // Place it at the next available position
            ++i;
        }
    }
    
    // Return the new length of the array after removing 'val'
    return i;
}

int main() {
    vector<int> nums = {3, 2, 2, 3, 4};
    int val = 3;
    
    int newLength = removeElement(nums, val);
    
    // Print the modified array (up to the new length)
    for (int i = 0; i < newLength; ++i) {
        cout << nums[i] << " ";
    }
    cout << endl;  // Output: 2 2 4
    
    return 0;
}

