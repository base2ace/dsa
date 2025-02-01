#include <iostream>
#include <vector>
using namespace std;

int maxArea(vector<int>& height) {
    int left = 0, right = height.size() - 1;  // Two-pointer approach
    int max_water = 0;

    while (left < right) {
        // Calculate the area formed by height[left] and height[right]
        int area = min(height[left], height[right]) * (right - left);
        max_water = max(max_water, area);

        // Move the pointer with the smaller height to try and find a larger area
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max_water;
}

int main() {
    vector<int> height = {1,8,6,2,5,4,8,3,7};
    cout << maxArea(height) << endl;  // Output: 49
    return 0;
}
