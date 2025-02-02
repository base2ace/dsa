#include <iostream>
#include <vector>
using namespace std;

void moveZeroes(vector<int>& nums) {
    int slow = 0;  // Pointer for placing non-zero elements

    // Iterate through the array
    for (int fast = 0; fast < nums.size(); fast++) {
        if (nums[fast] != 0) {
            swap(nums[slow], nums[fast]);  // Swap non-zero element to correct position
            slow++;  // Move slow pointer forward
        }
    }
}

// Example Usage
int main() {
    vector<int> nums = {0, 1, 0, 3, 12};
    moveZeroes(nums);
    
    // Print result
    for (int num : nums) {
        cout << num << " ";
    }
    return 0;
}
