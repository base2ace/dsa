#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

int maxArea(vector<int>& height) {
    int left = 0, right = height.size() - 1; // Two pointers
    int max_area = 0;

    while (left < right) {
        // Compute area between left and right lines
        int area = min(height[left], height[right]) * (right - left);
        max_area = max(max_area, area);  // Update max area if necessary

        // Move the pointer pointing to the shorter line
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max_area;
}

// Example usage
int main() {
    vector<int> height = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    cout << "Maximum water that can be contained: " << maxArea(height) << endl;
    return 0;
}
