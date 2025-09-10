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

#and has a higher priority than or
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

def veryLongFunction() -> bool:
	pass
	
veryLongFunction() or 10 > 4 #this will take forever to run
10 > 4 or veryLongFunction() #this will take 1.0ns to run
-> ""

"""
priority of boolean operations
()
not
and
or
"""
a = True

a or True = True
a or False = True
a and True= True
a and False = False
a or (not a) = True
a and (not a) = False

#complete order of operations
a and (not b) or (not a) or b

#for what values or "a" and "b" is the following False/True
def get(a, b):
  return not((a or b) and not (b or not a or not b))

print(get(True, True))
print(get(True, False))
print(get(False, True))
print(get(False, False))

#ignore everything above this
not((a or b) and not ((b or (not a)) or (not b)))
not((a or b) and not (True))
not((a or b) and False)
not(False)
True

#no matter it will always be true
#tautaology always evaluates to true, contradictions always evaluate to false
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
