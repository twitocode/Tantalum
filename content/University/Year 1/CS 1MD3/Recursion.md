---
CreatedAt: 2025-11-25
tags:
  - lecture
class: CS 1MD3
---
```python
def fact(n):
    if n <= 1:
        return 1
    return n * fact(n - 1)


# print(fact(5))


def fib(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1

    return fib(n - 1) + fib(n - 2)


def fib_tail(n, a=0, b=1):
    if n == 0:
        return a
    if n == 1:
        return b
    return fib_tail(n - 1, b, a + b)


def get_length(str):
    if str == "":
        return 0
    return 1 + get_length(str[1:])


def get_length_tail(str, length=0) -> int:
    if str == "":
        return length
    return get_length_tail(str[1:], length + 1)


print(get_length("1234567890"))


def count_char(str, char):
    head = str[0]
    tail = str[1:]

    if str == "":
        return 0
    elif head == char:
        return 1 + count_char(tail, char)
    return count_char(tail, char)


# it is so much easier to do tail recursion in python
def count_char_tail(str, char, length=0):
    if str == "":
        return length
    elif str[0] == char:
        length += 1
    return count_char_tail(str[1:], char, length)


print(count_char_tail("the quick brown fox jumps over the lazy fox", "x"))


def reverse_tail(str, reversed=""):
    if str == "":
        return reversed
    return reverse_tail(str[:-1], reversed + str[-1])


def reverse(str):
    if str == "":
        return ""
    last = str[-1]
    return last + reverse(str[:-1])


def is_palindrome(s):
    if s == "":
        return True
    n = s
    return s[0] == n[-1] and is_palindrome(s[1:-1])


def remove_first(s, char, i=0):
    if s == "":
        return ""
    elif char not in s:
        return s
    elif s[i] == char:
        return s[0:i] + s[i + 1 :]

    return remove_first(s, char, i + 1)


def replace_all(s, old, new):
    if s == "":
        return ""
    elif s[0] == old:
        return new + replace_all(s[1:], old, new)
    return s[0] + replace_all(s[1:], old, new)


def replace_at(s, i, char):
    if s == "":
        return ""
    elif i > len(s):
        return s
    elif i == 0:
        return char + s[1:]
    return s[0] + replace_at(s[1:], i - 1, char)


def delete_at(s, i):
    if s == "":
        return ""
    elif i > len(s):
        return s
    elif i == 0:
        return s[1:]
    return s[0] + delete_at(s[1:], i - 1)


def delete_chunk():
    pass


def is_near_palindrome(s: str):
    if len(s) <= 2:
        return True
    first = s[0]
    last = s[:1]
    mid = s[1:-1]
    if first == last:
        return is_near_palindrome(mid)
    return is_palindrome(first + mid) or is_palindrome(mid + last)


def is_k_near_palindrome(s, k):
    if k == 0:
        return is_palindrome(s)
    if len(s) <= k + 1:
        return True
    if s[0] == s[-1]:
        return is_k_near_palindrome(s[1:-1], k)
    return (
        is_k_near_palindrome(s[1:], k - 1)
        or is_k_near_palindrome(s[:-1], k - 1)
    )


print(reverse_tail("anna"))
print(reverse("banana"))
print(is_palindrome("anna"))
print(is_palindrome("anbna"))
print(is_palindrome("anbnab"))
print(is_palindrome("b"))
print(is_palindrome(""))
print(remove_first("hey", "e"))
print(remove_first("hy", "e"))
print(remove_first("heey", "e"))
print(replace_all("hey there", "e", "I"))
print(replace_at("Hey there", 4, "_"))
print(delete_at("heeey", 1))
print(delete_at("heeey", 1) == replace_at("heeey", 1, ""))
print(is_near_palindrome("tacocat"))
print(is_k_near_palindrome("aaa22aa2a1", 2))

S = [1,2,3]
PS123 = [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
PS12 =  [[], [1], [2], [1,2]]
[[3], [1,3], ]

def power_set(L):
    if L == []:
        return [[]]
    
    return power_set(L[:-1]) + add_to_each(power_set(L[:-1]), L[-1])
    
    
def add_to_each(sets, x):
    a = sets.copy()
    for L in a:
        L.append(x)
    return a

power_set([1,2,3]) == power_set([1,2]) + add_to_each(power_set([1,2]), 3)
print(power_set([1,2,3]))
print(power_set([1,2,3,4,5,6,6,7,7,88,89,])) #the length of a power set should be a power of 2
```