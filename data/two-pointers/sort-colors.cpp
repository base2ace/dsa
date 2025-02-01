#include <iostream>
#include <vector>
using namespace std;

void sortColors(vector<int>& nums) {
    int left = 0, mid = 0, right = nums.size() - 1;

    while (mid <= right) {
        if (nums[mid] == 0) {  // Swap 0 to the left
            swap(nums[left], nums[mid]);
            left++;
            mid++;
        } else if (nums[mid] == 1) {  // Keep 1 in the middle
            mid++;
        } else {  // Swap 2 to the right
            swap(nums[mid], nums[right]);
            right--;
        }
    }
}

int main() {
    vector<int> nums = {2, 0, 2, 1, 1, 0};
    sortColors(nums);

    for (int num : nums) {
        cout << num << " ";
    }
    cout << endl;  // Output: 0 0 1 1 2 2

    return 0;
}

// This Dutch National Flag Algorithm efficiently sorts the array in just one pass.
