#include <iostream>
#include <cctype>  // For isalnum() and tolower()
using namespace std;

bool isPalindrome(string s) {
    int left = 0, right = s.length() - 1;  // Initialize two pointers

    while (left < right) {
        while (left < right && !isalnum(s[left])) left++;  // Ignore non-alphanumeric characters
        while (left < right && !isalnum(s[right])) right--;  // Ignore non-alphanumeric characters

        if (tolower(s[left]) != tolower(s[right])) return false;  // Case-insensitive comparison

        left++;
        right--;
    }

    return true;  // If no mismatches, it's a palindrome
}

// Example Usage
int main() {
    cout << boolalpha;  // Print boolean values as true/false
    cout << isPalindrome("A man, a plan, a canal: Panama") << endl;  // Output: true
    cout << isPalindrome("race a car") << endl;  // Output: false
    cout << isPalindrome(" ") << endl;  // Output: true
    return 0;
}
