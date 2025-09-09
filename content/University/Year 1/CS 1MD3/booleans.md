---
CreatedAt: 2025-09-09
tags:
  - lecture
class: CS 1MD3
---
## Overview
- Topic: boolean logic

## Notes
```python
1 < 4 < 5 < 9 = True
4 <= 3 = False
and or not

not False = True
not True = False

not not not not not True = False

True and True = True
False and True = False
False and False = False
False and True = False

True or True = True
True or False = True
False or True = True
False or False = False

#XOR in python != behaves the exact same way
True != True = False
True != False = True
False != True = True
False != False = False

a = True
b = not a  = False
b = b and a = False

a or True
-> True

a or False
-> a

a and True
-> a

a and False 
-> False

a or (not a)
-> True

a and (not a)
-> False

12/0
-> error

3 + 4 > 6 or 3 -2 > 10
-> True or False
-> True

5 < 5 or 12 / 0 > 1
-> error

6 > 5 or 12 / 0 > 1
-> True #if the first condition is true then python does not waste time evaluating the second one in an or statement.

#this is known as short circuit evaluation

0 and 1293123
-> 0

"asdas" or "asdasdasdsd"
-> "asdas"

"" and "asdasd"
-> ""
```
And is always false unless both are true
Or is always true unless both are false

xor - if one of the inputs is true then its good but if both are true then its false

a
## Key Terms
- Term 1: Definition
- Term 2: Definition

## Questions
- 

## Summary
- 
