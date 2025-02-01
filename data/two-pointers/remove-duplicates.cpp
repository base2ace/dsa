#include <iostream>
#include <vector>
using namespace std;

int removeDuplicates(vector<int>& nums) {
    if (nums.empty()) return 0;

    int unique_index = 0;  // Pointer for the position of the next unique element

    for (int i = 1; i < nums.size(); i++) {
        if (nums[i] != nums[unique_index]) {  // Found a new unique element
            unique_index++;
            nums[unique_index] = nums[i];
        }
    }

    return unique_index + 1;  // Length of the unique elements
}

int main() {
    vector<int> nums = {1, 1, 2};
    int length = removeDuplicates(nums);
    
    cout << length << ", [";
    for (int i = 0; i < length; i++) {
        cout << nums[i] << (i < length - 1 ? ", " : "");
    }
    cout << "]" << endl;  // Output: 2, [1, 2]

    return 0;
}
