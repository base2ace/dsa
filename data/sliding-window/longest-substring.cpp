#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

int lengthOfLongestSubstring(string s) {
    unordered_map<char, int> charMap;
    int left = 0, maxLen = 0;
    
    for (int right = 0; right < s.length(); ++right) {
        if (charMap.find(s[right]) != charMap.end() && charMap[s[right]] >= left) {
            left = charMap[s[right]] + 1;
        }
        charMap[s[right]] = right;
        maxLen = max(maxLen, right - left + 1);
    }
    
    return maxLen;
}
