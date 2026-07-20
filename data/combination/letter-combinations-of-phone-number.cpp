#include <vector>
#include <string>
#include <unordered_map>

using namespace std;

class SolutionLetterCombinations {
    vector<string> res;
    unordered_map<char, string> digitToChar = {
        {'2', "abc"}, {'3', "def"}, {'4', "ghi"}, {'5', "jkl"},
        {'6', "mno"}, {'7', "qprs"}, {'8', "tuv"}, {'9', "wxyz"}
    };

    void backtrack(const string& digits, int i, string curStr) {
        if (curStr.length() == digits.length()) {
            res.push_back(curStr);
            return;
        }
        for (char c : digitToChar[digits[i]]) {
            backtrack(digits, i + 1, curStr + c);
        }
    }
public:
    vector<string> letterCombinations(string digits) {
        if (digits.empty()) return {};
        backtrack(digits, 0, "");
        return res;
    }
};
