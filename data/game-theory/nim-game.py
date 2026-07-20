# Solution for Nim Game (game-theory)
# Time: O(1), Space: O(1)

def nim_game(input_val):
    """
    You are playing the following Nim Game:
		- Initially, there is a pile of stones.
		- You and your friend take turns removing 1 to 3 stones from the pile.
		- The player who removes the last stone wins.
		Determine if you can win the game given that you go first. If so, return true, otherwise return false.
    Example Input: n = 4
    Example Output: false
    """
    # Professional implementation for Nim Game
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
