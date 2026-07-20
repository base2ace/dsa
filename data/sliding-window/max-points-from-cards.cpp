#include <vector>
#include <numeric>
#include <algorithm>

using namespace std;

int maxScore(vector<int>& cardPoints, int k) {
    int n = cardPoints.size();
    int windowSize = n - k;
    int currentSum = 0;
    
    for (int i = 0; i < windowSize; ++i) {
        currentSum += cardPoints[i];
    }
    
    int minSum = currentSum;
    int totalSum = accumulate(cardPoints.begin(), cardPoints.end(), 0);
    
    for (int i = windowSize; i < n; ++i) {
        currentSum += cardPoints[i] - cardPoints[i - windowSize];
        minSum = min(minSum, currentSum);
    }
    
    return totalSum - minSum;
}
