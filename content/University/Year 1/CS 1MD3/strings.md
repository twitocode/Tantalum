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

```

## Key Terms
- Term 1: Definition
- Term 2: Definition

## Questions
- 

## Summary
- 
