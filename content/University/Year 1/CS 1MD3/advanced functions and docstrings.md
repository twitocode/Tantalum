---
CreatedAt: 2025-09-17
tags:
  - lecture
class: CS 1MD3
---
## Overview
- Topic:
- Main objectives:

## Notes
```python
x = 2
def f(x, y):
  z = x + y
  return g(z, x)

def g(y, z):
  return x + y - z

#what is >> f(1, 2)
# global x = 2, f.x = 1, f.y = 2, z = 3
# answer : g(3, 1)

# g(3, 1)
#global x = 2, g.y = 3, g.z = 1
# retrun: 2 + 3 -1 = 4
#check local variable first then check for global variable of the same name

def f(x, y):
  z = x + y
  return g(z, y)

def g(y , z):
  x = 2*z - y
  return h(x - 3, z, y) + h(z, y, y)

def h(x, y, z):
  return x + 3*y - z

print(f(1, 2))
# -> g(3, 2)
# -> h(-2, 2, 3) + h(2, 3, 3)
# -> -2 + 3(2) - 3 + 2 +3(3) - 3
# -> 4 - 3 + 2 + 6
# -> 9

def pizzas_to_order(adults: int, children: int) -> int:
  """Returns the number of pizzas required for a part. It is assumed adults each 3 slices, and children each eat. Each pizza contains exactly 8 slices.

  Args:
      adults (int): indicates the number of adults at the party
      children (int): indicates the number of children at the party.

  Returns:
      int: the amount of pizzas to order

  >>> pizzas_to_order(3, 3)
  2

  >>> pizzas_to_order(2, 2)
  1

  >>> pizzas_to_order(2, 3)
  2

  >>> pizza_to_order(0, 0)
  0
  """
  total_slices = 3*adults + children
  return total_slices // 8  + min(1, total_slices % 8)


name = "toheeb"
name = ['t', 'o', 'h', 'e', 'e', 'b', '\0']


help(pizzas_to_order) -> pirnts the docstring
```

## Key Terms
- Term 1: Definition
- Term 2: Definition

## Questions
- 

## Summary
- 
