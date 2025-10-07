---
CreatedAt: 2025-10-07
tags:
  - lecture
class: CS 1MD3
---
```python
str = "hello i am the best"

for char in str:
  if char in "aeiou": 
    print(char)


def encrypt_letter(letter: str, key: int) -> str:
  return chr(ord(letter) + key)

def encrypt_message(message: str, key: int):
    """Return the given message encrypted using encrypt_letter on each alphabetic character in the word.

    Args:
        letter (str): _description_
        key (int): _description_

    Returns:
        str: encrypted
    """

    new_message = ""
    for char in message:
       new_message += encrypt_letter(char, key)

    return char

"""
encryp_message("hey", 40000) - chinese character
encryp_message("hey", 40000000000000000) - not in range. largest number is 0x110000 or 69,632 (UTF-8 encoding)
"""


def decrypt_letter(letter: str, key: int) -> str:
  return chr(ord(letter) - key)

def decrypt_message(message: str, key: int):
    new_message = ""
    for char in message:
       new_message += decrypt_letter(cha, keyr)

    return char

def get_most_common(s: str) -> str:
  """Returns the character that occurs the most in s. If there is a tie, it will return the tie will be broken by which caracter occured first

  Args:
      s (str): string

  Returns:
      str: most common
  """

  most_common = ""
  highest_count = 0

  for char in s:
     if s.count(char) > highest_count:
        highest_count = s.count(char)
        most_common = char

  return most_common

def guess_key(common, guess):
   return ord(common) - ord(guess)

secret = "I am crossing the Rubicon."
message = encrypt_message(secret, 2222)

c = get_most_common(message)

print(guess_key(c, "a"))
print(guess_key(c, "e"))
print(guess_key(c, "i"))
print(guess_key(c, "i"))
print(guess_key(c, "o"))
print(guess_key(c, "u"))

def remove_spaces():
  """removes whitspaces

  >>> remmove_spaces("hello world")
  "helloworld"

  >>> remove_spaces("\ta \n\t \tb\n c\t")
  "abc"
  """
  removed_spaces = ""
  for c in s:
     if c not in " \n\t":
        removed_spaces += c

'a' < 'z' == ord('a') < ord('z')


#test question
def in_alphaorder(s: str) -> bool:
  alphabet = "abcdefghjijklmnopqrstuvwxyz"

  prev = s[0]
  for char in s[1:]:
     if prev > char:
        return False
     prev = char

  return True

def remove_nth_occurrence(s: str, c: str, n: int) -> str:
  """Returns a veresion of s, but with the n'th occurrence of c removed
  """
  new_s = ""
  count = 0
  for char in s:
    if not char == c:
        new_s += char
    else:
      count += 1
      if not count == n:
         new_s += char

  return new_s

def has_n_occurrences(s: str, c: str, n: int) -> bool:
  count = 0
  for char in s:
    if char == c:
      count += 1

    if count == n:
        return True

  return False

print(has_n_occurrences("ababab", "a", 1))
print(has_n_occurrences("ababab", "a", 3))
print(has_n_occurrences("ababab", "a", 4))
print(has_n_occurrences("ababab", "c", 1))

def is_good_password(s: str) -> bool:
  """ 
  1) ast least one special character
  2) at least 8 characters
  3) most entropy possible
  4) at least one uppercase and lowercase
  5) no increasing number/alphaabet: 123456789 qwerty
  6) at least one number
  7) less than a certain number of characters --NOT REALLY IMPORTANT BECAUSE OF HASHING
  8) no previous passwords
  """

def special_char(s):
  special = "!@#$%^&*()"
  for char in s:
    if char in special:
        return True
  return False
  



```