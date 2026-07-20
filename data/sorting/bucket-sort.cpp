#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<float> bucketSort(vector<float>& nums) {
    int n = nums.size();
    if (n <= 0) return nums;

    vector<vector<float>> buckets(n);

    for (int i = 0; i < n; ++i) {
        int bucketIdx = n * nums[i];
        if (bucketIdx >= n) bucketIdx = n - 1;
        buckets[bucketIdx].push_back(nums[i]);
    }

    for (int i = 0; i < n; ++i) {
        sort(buckets[i].begin(), buckets[i].end());
    }

    int idx = 0;
    for (int i = 0; i < n; ++i) {
        for (float val : buckets[i]) {
            nums[idx++] = val;
        }
    }
    return nums;
}
