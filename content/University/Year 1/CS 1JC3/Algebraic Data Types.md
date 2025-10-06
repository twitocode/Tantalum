---
CreatedAt: 2025-10-06
class: CS 1JC3
tags:
  - "#classnote"
---
# Solving problems via Recursion
`f :: Integer -> [Integer] -> Bool`
`f x L`
1. What are the simplest cases?
2. How is a nonsimplest case reduced to simpler cases?
3. What assignment of the nautral numbers to (x, L) input pairs show that the definition is well defined?

Linear search vs Binary Search

# Types
Making new types
1. type alias
2.  data types (like structs,, classes)

## Synonym Type (type-alias)
```haskell
type Vector = (Double, Double, Double)
--can have paramters
type Vector a b c = (a, b, c) --polymorphism

point :: Vector Int Double Float
point = (1, 1.0, 1.0)
```

## Algebraic Types
They are a new type of new values formed as a *sum* of *products*.
![[Pasted image 20251006115947.png]]

$C_{i}$ are **value constructors** that create new values
$t_{j}^i$ are types that may include $t$ itself
The type of of $C_i$ is $t^i_{1} \to \dots \to t^i_{m_{i}} \to t$

