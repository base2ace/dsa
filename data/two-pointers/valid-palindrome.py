import re

def isPalindrome(s):
    # Convert to lowercase and filter only alphanumeric characters
    s = re.sub(r'[^a-zA-Z0-9]', '', s).lower()
    
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1

    return True

# Example Usage
s = "A man, a plan, a canal: Panama"
print(isPalindrome(s))  # Output: True
