#include <iostream>
#include <vector>
using namespace std;

void moveZeroes(vector<int>& nums) {
    int non_zero_index = 0;  // Pointer for placing non-zero elements

    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] != 0) {
            swap(nums[non_zero_index], nums[i]);
            non_zero_index++;
        }
    }
}

int main() {
    vector<int> nums = {0, 1, 0, 3, 12};
    moveZeroes(nums);

    for (int num : nums) {
        cout << num << " ";
    }
    cout << endl;  // Output: 1 3 12 0 0

    return 0;
}
