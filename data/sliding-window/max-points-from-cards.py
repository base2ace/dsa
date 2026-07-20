def maxScore(cardPoints: list[int], k: int) -> int:
    n = len(cardPoints)
    window_size = n - k
    current_sum = sum(cardPoints[:window_size])
    min_sum = current_sum
    total_sum = sum(cardPoints)
    
    for i in range(window_size, n):
        current_sum += cardPoints[i] - cardPoints[i - window_size]
        min_sum = min(min_sum, current_sum)
        
    return total_sum - min_sum
