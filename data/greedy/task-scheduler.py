from collections import Counter

def leastInterval(tasks: list[str], n: int) -> int:
    counts = Counter(tasks)
    max_freq = max(counts.values())
    max_freq_count = sum(1 for v in counts.values() if v == max_freq)
    
    return max(len(tasks), (max_freq - 1) * (n + 1) + max_freq_count)
