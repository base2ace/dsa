def kruskalsMST(edges: list[list[int]], n: int) -> list[list[int]]:
    """
    Kruskal's Algorithm for Minimum Spanning Tree (MST)
    Time Complexity: O(E log E)
    Space Complexity: O(V)
    """
    edges.sort(key=lambda x: x[2])
    parent = list(range(n))

    def find(i):
        if parent[i] == i:
            return i
        parent[i] = find(parent[i])
        return parent[i]

    def union(i, j):
        root_i = find(i)
        root_j = find(j)
        if root_i != root_j:
            parent[root_i] = root_j
            return True
        return False

    mst = []
    for u, v, w in edges:
        if union(u, v):
            mst.append([u, v, w])
    return mst
