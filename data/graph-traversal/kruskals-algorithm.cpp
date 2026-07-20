#include <vector>
#include <algorithm>

using namespace std;

class SolutionKruskal {
    struct Edge {
        int u, v, w;
        bool operator<(const Edge& other) const {
            return w < other.w;
        }
    };

    vector<int> parent;

    int find(int i) {
        if (parent[i] == i) return i;
        return parent[i] = find(parent[i]);
    }

    bool unionSets(int i, int j) {
        int rootI = find(i), rootJ = find(j);
        if (rootI != rootJ) {
            parent[rootI] = rootJ;
            return true;
        }
        return false;
    }

public:
    vector<vector<int>> kruskalsMST(int n, vector<vector<int>>& edgeList) {
        vector<Edge> edges;
        for (auto& e : edgeList) {
            edges.push_back({e[0], e[1], e[2]});
        }
        sort(edges.begin(), edges.end());

        parent.resize(n);
        for (int i = 0; i < n; ++i) parent[i] = i;

        vector<vector<int>> mst;
        for (auto& edge : edges) {
            if (unionSets(edge.u, edge.v)) {
                mst.push_back({edge.u, edge.v, edge.w});
            }
        }
        return mst;
    }
};
