#include <vector>
#include <string>

using namespace std;

class SolutionLetterCase {
    vector<string> res;
    void backtrack(string& s, int i) {
        if (i == s.length()) {
            res.push_back(s);
            return;
        }
        if (isalpha(s[i])) {
            s[i] = tolower(s[i]);
            backtrack(s, i + 1);
            s[i] = toupper(s[i]);
            backtrack(s, i + 1);
        } else {
            backtrack(s, i + 1);
        }
    }
public:
    vector<string> letterCasePermutation(string s) {
        backtrack(s, 0);
        return res;
    }
};
