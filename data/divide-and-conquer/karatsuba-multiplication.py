def karatsuba(num1: str, num2: str) -> str:
    """
    Karatsuba Multiplication Divide & Conquer Algorithm
    Time Complexity: O(N^1.585)
    Space Complexity: O(N)
    """
    x, y = int(num1), int(num2)
    if x < 10 or y < 10:
        return str(x * y)

    n = max(len(num1), len(num2))
    m = n // 2

    high1, low1 = num1[:-m], num1[-m:]
    high2, low2 = num2[:-m], num2[-m:]

    z0 = int(karatsuba(low1, low2))
    z2 = int(karatsuba(high1, high2))
    z1 = int(karatsuba(str(int(high1) + int(low1)), str(int(high2) + int(low2)))) - z2 - z0

    result = (z2 * 10**(2 * m)) + (z1 * 10**m) + z0
    return str(result)
