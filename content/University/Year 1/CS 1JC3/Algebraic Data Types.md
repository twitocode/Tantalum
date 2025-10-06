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
Uses `type` instead of `data`
## Algebraic Types (Inductive types)
They are a new type of new values formed as a *sum* of *products*.
![[Pasted image 20251006115947.png]]

$C_{i}$ are **value constructors** that create new values
$t_{j}^i$ are types that may include $t$ itself
The type of of $C_i$ is $t^i_{1} \to \dots \to t^i_{m_{i}} \to t$

every member of t is constructed and constructed in the same way as each other
**pattern matching can be used to match each member of $t$**

The definition of the algebraic type t induces an **induction principle** that can be used to prove that a property holds for all members of $t$
- Proof by induction is the most useful proof tecniqutechniqe because in computing most types are inductive.


## Sum and Product Types
**Sum Types**: algebraic types that have more than one constructor
```haskell
data Bool = False | True
```
**Product Types**: algebraic types that have one constructor and the same structure as a tupel type
```haskell
data Point = MakePoint Float Float
--MakePoint is the constructor (we can name it)
--the same thing as
type Point = (Float, Float)
```

## Enumeration Types
An algebraic type that enumerates a finite set of new values.
defined by constructors that take no arguments
```haskell
data t = C1 | C2 | ... | Cn
-- C1...Cn are the new values of the new type t
data Bool = False | True 

-- making our own Bool
data Bool = False | True deriving (Show)

implies :: Bool -> Bool -> Bool
True `implies` False = False
_ `implies` _ = True

data WeekDay = Sunday
				| Monday
				| Tuesday
				| Wednesday
				| Thursday
				| Friday
				| Saturday
				deriving (Show)
				
meaning :: WeekDay -> String
meaing Sunday = "sun's day"
meaing Monday = "moon's day"
meaning Thursday = "Thor's day"
meaning Saturday = "saturn's day"
```

## Recursive Type
