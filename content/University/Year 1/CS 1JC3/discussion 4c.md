---
CreatedAt: 2025-09-26
tags:
  - lecture
class: CS 1JC3
---
conditional expressions
- most basic is if A then B 
```haskell
if A then B else C
A - boolean
B, C - Expression

--type of the expression is alpha (generic)
--not bool -> alpha, it is not a function
--the difference between this in other programming langauges, this is an conditioal expression (denotes a value), other languages have condition statements (commands)

case A of
	True -> B
	False -> C --exhausts all possible patterns for bool
```

case expressions
if we evaluate it with a value that does not have a matching pattern
- we get undefined

nested if statements look disgusting in haskell
- use a case statement
- or use a table