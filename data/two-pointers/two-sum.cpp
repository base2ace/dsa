#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& numbers, int target) {
    int left = 0, right = numbers.size() - 1;
    
    while (left < right) {
        int current_sum = numbers[left] + numbers[right];
        
        if (current_sum == target) {
            // Return the 1-indexed positions
            return {left + 1, right + 1};
        } else if (current_sum < target) {
            // If sum is less than the target, move the left pointer to the right
            left++;
        } else {
            // If sum is greater than the target, move the right pointer to the left
            right--;
        }
    }
    
    // In case there is no solution, though the problem guarantees a solution
    return {};
}

int main() {
    vector<int> numbers = {2, 7, 11, 15};
    int target = 9;
    
    vector<int> result = twoSum(numbers, target);
    
    // Output the result
    if (!result.empty()) {
        cout << "Indices: " << result[0] << ", " << result[1] << endl;
    } else {
        cout << "No solution found!" << endl;
    }
    
    return 0;
}
