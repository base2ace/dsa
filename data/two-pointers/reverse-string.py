def reverseString(s):
    """
    Reverses a string in-place given as an array of characters.
    
    :param s: List[str] - List representing the string (array of characters)
    """
    left, right = 0, len(s) - 1  # Initialize two pointers
    
    while left < right:
        # Swap the characters at the left and right pointers
        s[left], s[right] = s[right], s[left]
        
        # Move the pointers towards each other
        left += 1
        right -= 1

# Example Usage
s = ['h', 'e', 'l', 'l', 'o']
reverseString(s)
print(s)  # Output: ['o', 'l', 'l', 'e', 'h']
