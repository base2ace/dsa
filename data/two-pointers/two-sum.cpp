#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& numbers, int target) {
    int left = 0, right = numbers.size() - 1;  // Initialize two pointers

    while (left < right) {
        int total = numbers[left] + numbers[right];

        if (total == target)
            return {left + 1, right + 1};  // Return 1-indexed positions
        else if (total < target)
            left++;  // Move left pointer forward
        else
            right--;  // Move right pointer backward
    }

    return {};  // Should never reach here if there's always a valid solution
}

int main() {
    vector<int> numbers = {2, 7, 11, 15};
    int target = 9;

    vector<int> result = twoSum(numbers, target);
    cout << "[" << result[0] << ", " << result[1] << "]" << endl;  // Output: [1, 2]

    return 0;
}
