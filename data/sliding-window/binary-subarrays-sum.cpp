#include <vector>

using namespace std;

int atMost(vector<int>& nums, int k) {
    if (k < 0) return 0;
    int left = 0, currentSum = 0, count = 0;
    for (int right = 0; right < nums.size(); ++right) {
        currentSum += nums[right];
        while (currentSum > k) {
            currentSum -= nums[left++];
        }
        count += right - left + 1;
    }
    return count;
}

int numSubarraysWithSum(vector<int>& nums, int goal) {
    return atMost(nums, goal) - atMost(nums, goal - 1);
}
