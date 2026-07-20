from collections import Counter

def findAnagrams(s: str, p: str) -> list[int]:
    if len(p) > len(s): return []
    
    p_count = Counter(p)
    s_count = Counter(s[:len(p)])
    
    res = []
    if p_count == s_count:
        res.append(0)
        
    for i in range(len(p), len(s)):
        s_count[s[i]] += 1
        s_count[s[i - len(p)]] -= 1
        if s_count[s[i - len(p)]] == 0:
            del s_count[s[i - len(p)]]
            
        if p_count == s_count:
            res.append(i - len(p) + 1)
            
    return res
