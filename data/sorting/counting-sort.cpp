#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> countingSort(vector<int>& nums) {
    if (nums.empty()) return nums;

    int minVal = *min_element(nums.begin(), nums.end());
    int maxVal = *max_element(nums.begin(), nums.end());
    vector<int> count(maxVal - minVal + 1, 0);

    for (int num : nums) {
        count[num - minVal]++;
    }

    int idx = 0;
    for (int i = 0; i < count.size(); ++i) {
        while (count[i] > 0) {
            nums[idx++] = i + minVal;
            count[i]--;
        }
    }
    return nums;
}
