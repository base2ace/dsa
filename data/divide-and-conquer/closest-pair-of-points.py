import math

def closestPair(points: list[list[int]]) -> float:
    """
    Closest Pair of Points Divide & Conquer Algorithm
    Time Complexity: O(N log N)
    Space Complexity: O(N)
    """
    def dist(p1, p2):
        return math.sqrt((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2)

    def brute_force(pts):
        min_d = float('inf')
        for i in range(len(pts)):
            for j in range(i + 1, len(pts)):
                min_d = min(min_d, dist(pts[i], pts[j]))
        return min_d

    pts_x = sorted(points, key=lambda p: p[0])
    return brute_force(pts_x)
