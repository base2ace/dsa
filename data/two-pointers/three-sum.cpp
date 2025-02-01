#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<vector<int>> threeSum(vector<int>& nums) {
    sort(nums.begin(), nums.end());  // Sorting helps avoid duplicates and optimize search
    vector<vector<int>> result;

    for (int i = 0; i < nums.size() - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1])  // Skip duplicates for the first element
            continue;

        int left = i + 1, right = nums.size() - 1;

        while (left < right) {
            int total = nums[i] + nums[left] + nums[right];

            if (total == 0) {
                result.push_back({nums[i], nums[left], nums[right]});

                // Skip duplicates for the second element
                while (left < right && nums[left] == nums[left + 1])
                    left++;
                // Skip duplicates for the third element
                while (left < right && nums[right] == nums[right - 1])
                    right--;

                left++;
                right--;
            } else if (total < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

int main() {
    vector<int> nums = {-1, 0, 1, 2, -1, -4};
    vector<vector<int>> result = threeSum(nums);

    cout << "[";
    for (size_t i = 0; i < result.size(); i++) {
        cout << "[";
        for (size_t j = 0; j < result[i].size(); j++) {
            cout << result[i][j];
            if (j < result[i].size() - 1) cout << ", ";
        }
        cout << "]";
        if (i < result.size() - 1) cout << ", ";
    }
    cout << "]" << endl;

    return 0;
}
