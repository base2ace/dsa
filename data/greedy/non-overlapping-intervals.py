def eraseOverlapIntervals(intervals: list[list[int]]) -> int:
    if not intervals: return 0
    intervals.sort(key=lambda x: x[1])
    count = 0
    end = intervals[0][1]
    
    for interval in intervals[1:]:
        if interval[0] < end:
            count += 1
        else:
            end = interval[1]
            
    return count
