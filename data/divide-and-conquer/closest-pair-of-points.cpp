#include <vector>
#include <cmath>
#include <algorithm>
#include <cfloat>

using namespace std;

struct Point {
    int x, y;
};

class SolutionClosestPair {
    double dist(Point p1, Point p2) {
        return sqrt((p1.x - p2.x)*(p1.x - p2.x) + (p1.y - p2.y)*(p1.y - p2.y));
    }
public:
    double closestPair(vector<Point>& points) {
        double minD = DBL_MAX;
        int n = points.size();
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                minD = min(minD, dist(points[i], points[j]));
            }
        }
        return minD;
    }
};
