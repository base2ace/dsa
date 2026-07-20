#include <vector>
#include <string>

using namespace std;

vector<int> findAnagrams(string s, string p) {
    if (p.length() > s.length()) return {};
    
    vector<int> p_count(26, 0), s_count(26, 0), res;
    for (int i = 0; i < p.length(); ++i) {
        p_count[p[i] - 'a']++;
        s_count[s[i] - 'a']++;
    }
    
    if (p_count == s_count) res.push_back(0);
    
    for (int i = p.length(); i < s.length(); ++i) {
        s_count[s[i] - 'a']++;
        s_count[s[i - p.length()] - 'a']--;
        if (p_count == s_count) res.push_back(i - p.length() + 1);
    }
    
    return res;
}
