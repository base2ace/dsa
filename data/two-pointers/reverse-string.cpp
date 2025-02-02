#include <iostream>
#include <vector>
using namespace std;

void reverseString(vector<char>& s) {
    int left = 0, right = s.size() - 1;  // Initialize two pointers
    
    while (left < right) {
        // Swap the characters at left and right
        swap(s[left], s[right]);
        
        // Move the pointers towards each other
        left++;
        right--;
    }
}

// Example Usage
int main() {
    vector<char> s = {'h', 'e', 'l', 'l', 'o'};
    reverseString(s);
    
    // Print reversed string
    for (char c : s) {
        cout << c;  // Output: olleh
    }
    cout << endl;
    
    return 0;
}
