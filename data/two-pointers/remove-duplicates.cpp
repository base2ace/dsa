#include <vector>
#include <iostream>

using namespace std;

int removeDuplicates(vector<int>& nums) {
    if (nums.empty()) return 0;  // If array is empty, return 0

    int i = 0;  // Pointer to track unique elements

    for (int j = 1; j < nums.size(); j++) {  // Iterate from second element
        if (nums[j] != nums[i]) {  // Found a new unique element
            i++;  // Move unique element pointer forward
            nums[i] = nums[j];  // Place the new unique element at correct position
        }
    }

    return i + 1;  // The length of the unique elements part
}

// Example usage
int main() {
    vector<int> nums = {1, 1, 2, 2, 3, 4, 4, 5}; 
    int uniqueCount = removeDuplicates(nums);

    // Print the unique elements part of the array
    cout << "Number of unique elements: " << uniqueCount << endl;
    cout << "Modified array: ";
    for (int i = 0; i < uniqueCount; i++) {
        cout << nums[i] << " ";
    }
    cout << endl;

    return 0;
}
