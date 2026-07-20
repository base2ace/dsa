def partitionLabels(s: str) -> list[int]:
    last_idx = {char: i for i, char in enumerate(s)}
    start = 0
    end = 0
    res = []
    
    for i, char in enumerate(s):
        end = max(end, last_idx[char])
        if i == end:
            res.append(end - start + 1)
            start = i + 1
            
    return res
