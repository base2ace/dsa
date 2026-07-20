#include <vector>
#include <algorithm>
#include <climits>

using namespace std;

int minSubArrayLen(int target, vector<int>& nums) {
    int left = 0, currentSum = 0;
    int minLen = INT_MAX;
    
    for (int right = 0; right < nums.size(); ++right) {
        currentSum += nums[right];
        while (currentSum >= target) {
            minLen = min(minLen, right - left + 1);
            currentSum -= nums[left++];
        }
    }
    
    return minLen == INT_MAX ? 0 : minLen;
}
