def findMinArrowShots(points: list[list[int]]) -> int:
    if not points: return 0
    points.sort(key=lambda x: x[1])
    arrows = 1
    end = points[0][1]
    
    for balloon in points[1:]:
        if balloon[0] > end:
            arrows += 1
            end = balloon[1]
            
    return arrows
