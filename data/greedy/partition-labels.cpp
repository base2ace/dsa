#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

vector<int> partitionLabels(string s) {
    unordered_map<char, int> lastIdx;
    for (int i = 0; i < s.length(); ++i) {
        lastIdx[s[i]] = i;
    }
    
    int start = 0, end = 0;
    vector<int> res;
    for (int i = 0; i < s.length(); ++i) {
        end = max(end, lastIdx[s[i]]);
        if (i == end) {
            res.push_back(end - start + 1);
            start = i + 1;
        }
    }
    
    return res;
}
