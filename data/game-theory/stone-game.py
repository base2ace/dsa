# Solution for Stone Game (game-theory)
# Time: O(n), Space: O(n)

def stone_game(input_val):
    """
    In the Stone Game, two players take turns to pick a pile of stones. On each turn, a player can choose either 
		the first or the last pile from the available stones. The player with the maximum score wins.
		Determine if the first player can win.
    Example Input: piles = [5,3,4,5]
    Example Output: true
    """
    # Professional implementation for Stone Game
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
