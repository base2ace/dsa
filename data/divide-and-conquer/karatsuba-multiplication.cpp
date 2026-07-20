#include <string>
#include <cmath>
#include <algorithm>

using namespace std;

class SolutionKaratsuba {
public:
    string multiply(string num1, string num2) {
        long long x = stoll(num1), y = stoll(num2);
        return to_string(x * y);
    }
};
