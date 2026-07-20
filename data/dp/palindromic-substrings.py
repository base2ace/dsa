def countSubstrings(s: str) -> int:
    """
    Palindromic Substrings Expand-Around-Center Algorithm
    Time Complexity: O(N^2)
    Space Complexity: O(1)
    """
    count = 0
    n = len(s)
    for i in range(n):
        # Odd-length palindromes (center at i)
        l, r = i, i
        while l >= 0 and r < n and s[l] == s[r]:
            count += 1
            l -= 1
            r += 1
        # Even-length palindromes (center between i and i+1)
        l, r = i, i + 1
        while l >= 0 and r < n and s[l] == s[r]:
            count += 1
            l -= 1
            r += 1
    return count
