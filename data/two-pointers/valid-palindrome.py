def isPalindrome(s):
    """
    Check if a given string is a palindrome, considering only alphanumeric characters and ignoring cases.

    :param s: str - Input string
    :return: bool - True if palindrome, False otherwise
    """
    left, right = 0, len(s) - 1  # Initialize two pointers

    while left < right:
        while left < right and not s[left].isalnum():  # Ignore non-alphanumeric characters
            left += 1
        while left < right and not s[right].isalnum():  # Ignore non-alphanumeric characters
            right -= 1
        
        if s[left].lower() != s[right].lower():  # Case-insensitive comparison
            return False
        
        left += 1  # Move left pointer forward
        right -= 1  # Move right pointer backward

    return True  # If no mismatches, it's a palindrome

# Example Usage
print(isPalindrome("A man, a plan, a canal: Panama"))  # Output: True
print(isPalindrome("race a car"))  # Output: False
print(isPalindrome(" "))  # Output: True (An empty string is a palindrome)
