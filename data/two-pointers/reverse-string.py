def reverseString(s):
    left, right = 0, len(s) - 1

    while left < right:
        s[left], s[right] = s[right], s[left]  # Swap characters
        left += 1
        right -= 1

# Example Usage
s = ["h", "e", "l", "l", "o"]
reverseString(s)
print(s)  # Output: ['o', 'l', 'l', 'e', 'h']
