#include <iostream>
#include <vector>
using namespace std;

int removeElement(vector<int>& nums, int val) {
    int k = 0;  // Pointer to keep track of where to place the next valid element
    
    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] != val) {  // If current element is not 'val'
            nums[k] = nums[i];  // Place it at the correct position
            k++;  // Increment k for the next valid position
        }
    }
    
    return k;  // Return the length of the modified array
}

int main() {
    vector<int> nums = {3, 2, 2, 3, 4, 3, 5};
    int val = 3;
    int new_length = removeElement(nums, val);
    
    // Output the array after removing the elements equal to val
    for (int i = 0; i < new_length; i++) {
        cout << nums[i] << " ";  // Output: 2 2 4 5
    }
    cout << endl;

    return 0;
}
