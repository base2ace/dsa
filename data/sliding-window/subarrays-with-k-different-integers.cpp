#include <vector>
#include <unordered_map>

using namespace std;

int atMostDistinct(vector<int>& nums, int kDistinct) {
    unordered_map<int, int> count;
    int left = 0, res = 0;
    for (int right = 0; right < nums.size(); ++right) {
        if (count[nums[right]] == 0) {
            kDistinct--;
        }
        count[nums[right]]++;
        
        while (kDistinct < 0) {
            count[nums[left]]--;
            if (count[nums[left]] == 0) {
                kDistinct++;
            }
            left++;
        }
        
        res += right - left + 1;
    }
    return res;
}

int subarraysWithKDistinct(vector<int>& nums, int k) {
    return atMostDistinct(nums, k) - atMostDistinct(nums, k - 1);
}
