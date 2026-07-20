#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

void countingSortForRadix(vector<int>& nums, int exp) {
    int n = nums.size();
    vector<int> output(n);
    vector<int> count(10, 0);

    for (int i = 0; i < n; ++i) {
        count[(nums[i] / exp) % 10]++;
    }
    for (int i = 1; i < 10; ++i) {
        count[i] += count[i - 1];
    }
    for (int i = n - 1; i >= 0; --i) {
        output[count[(nums[i] / exp) % 10] - 1] = nums[i];
        count[(nums[i] / exp) % 10]--;
    }
    for (int i = 0; i < n; ++i) {
        nums[i] = output[i];
    }
}

vector<int> radixSort(vector<int>& nums) {
    if (nums.empty()) return nums;
    int maxVal = *max_element(nums.begin(), nums.end());
    for (int exp = 1; maxVal / exp > 0; exp *= 10) {
        countingSortForRadix(nums, exp);
    }
    return nums;
}
