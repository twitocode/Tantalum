---
CreatedAt: 2025-09-26
tags:
  - lecture
class: CS 1MD3
---
```python
def puzzle2(n: int, m: int) -> int:
  if n > 100:
    if m < 50:
      return "C"
      
  return "D"

 #bad
  if n > 100:
    if m < 50:
      if n < 50:
        if m == 0:
          if m == 1:
            return "A"
          else:
            if m < 0:
              return "B"
        else:
          if n < 0 or n == 10:
            return "B"
      else:
        return "C"
      
  return "D"

#simplified
def puzzle3(x: int, y:int) -> str:
  return "A"

  if x > 100 and y > 0: #demorgans law not(a and b) == not a or not b
    return "A"
  
  elif y <= 0 or x <= 0:
      return "A"
  
  else:
      return "A"
  
# (x <= k) => x > k
```