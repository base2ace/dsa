#include <iostream>
#include <vector>

using namespace std;

vector<int> bubbleSort(vector<int>& nums) {
    int n = nums.size();
    for (int i = 0; i < n; ++i) {
        bool swapped = false;
        for (int j = 0; j < n - i - 1; ++j) {
            if (nums[j] > nums[j + 1]) {
                swap(nums[j], nums[j + 1]);
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return nums;
}
