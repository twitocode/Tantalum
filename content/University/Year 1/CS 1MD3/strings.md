---
CreatedAt: 2025-09-23
tags:
  - lecture
class: CS 1MD3
---
## Overview
- Topic:
- Main objectives:

## Notes
 ```python
x = "hey"
type(x)
len(x)
t = "hey" + "there"

"a" + ("b" + "c") == ("a" +"b") + "c" == True

"b" + "a" == "a" + "b" == False
" " == "" == False
"a" * 10 == "aaaaaaaaaa" == True

len("\n") == 1 #not 0, n is still a a character \ is not 
len("\t") =="    " == 1
print("C\\2") #2 backslash for every blackshash i want
print("a\\\\\\\\\\\x")

"1".isascii()
ord("1") == 97
chr(97) == "1"

x = "123456"
x[3] = 4
x[-1] = 6
print(x[-len(x) + 1])

s = "1234567890"
s[4:8] #4 inclusive - 8 exclusive
s[4:-2] #4 - inclusive - (-2) or 7 exclusive
s[-8:-2]
s[4:2] == ""
s[:4] #first 4 characters
s[4:] #start at 4 and give the rest 
s[6:2:-1] #start at 6 and go backwards to 2
s[1:9:2] #start at 1 and go to 9 skipping 2 each step
s[2:130] #start at 2 go to 130 (more like 9)
s[1:-1:-1] # empty
s[::-3] #no idea what this is doing

"""
exercise
slicing
lmnop
efg
op
fjn
edcb
"""

s = "abcdefghijklmnop"

print(s[11:])
print(s[4:7])
print(s[-1:-3])
print(s[5:-2:4])

def change_at(s: str, char: str, i: int) -> str:
  """Creates an d returns a new string, such that the new string is equivalent to s, with the exception that at index i, the new string has the value char. It is assumed, 0 <= i < len(s), and len(char) == 1

  Args:
      s (str): _description_
      char (str): _description_
      i (int): _description_

  Returns:
      str: _description_
  """
  start = s[0:i]
  end = s[i + 1:]
  
  return start + char + end

print(change_at("abc", "z", 1))
print(change_at("test string", "_", 4))
print(change_at("test string", "_", 40))
print(change_at("a", "z", 0))


def slice_out(s: str, i: int, j: int) -> str:
  front = s[:i]
  back = s[j +1:]
  return front + back

print(slice_out("qwerty", 1, 4))
print(slice_out("test string", 0, 10))
print(slice_out("test string", 100, 10000))
print(slice_out("test string", 6, 3))  #uh oh


def get_shorter(s1: str, s2: str) -> str:
  # return min(s1, s2)
  return s1 if len(s1) > len(s2) else s2

print(get_shorter("cat", "dog"))
```

## Key Terms
- Term 1: Definition
- Term 2: Definition

## Questions
- 

## Summary
- 
