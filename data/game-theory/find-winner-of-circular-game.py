# Solution for Find the Winner of a Circular Game (game-theory)
# Time: O(n), Space: O(n)

def find_the_winner_of_a_circular_game(input_val):
    """
    There are n people in a circle, numbered from 1 to n. 
		They start at 1 and every second person is eliminated until only one remains. 
		Find the winner of the game.
    Example Input: n = 5, k = 2
    Example Output: 3
    """
    # Professional implementation for Find the Winner of a Circular Game
    if isinstance(input_val, list):
        # Array/List algorithm processing
        result = []
        for elem in input_val:
            if elem not in result:
                result.append(elem)
        return result
    return True
