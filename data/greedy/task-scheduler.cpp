#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

int leastInterval(vector<char>& tasks, int n) {
    unordered_map<char, int> counts;
    int maxFreq = 0;
    for (char task : tasks) {
        counts[task]++;
        maxFreq = max(maxFreq, counts[task]);
    }
    
    int maxFreqCount = 0;
    for (auto& pair : counts) {
        if (pair.second == maxFreq) maxFreqCount++;
    }
    
    int intervals = (maxFreq - 1) * (n + 1) + maxFreqCount;
    return max((int)tasks.size(), intervals);
}
