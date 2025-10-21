---
CreatedAt: 2025-10-21
tags:
  - lecture
class: CS 1JC3
---
```haskell
--recursive that can take in other arguments
data Stack a = 
	Bottom
  | Push a Stack a 

Bottom :: Stack a
Push :: a -> Stack a -> Stack a

--recursive but only the same type
data Nat = 
	Zero
	| Suc Nat

type PolyList a = [a]             -- type alias
data PolyList a = Polylist [a]    -- simpliest algebraic type 
newtype PolyList a = Polylist [a] -- once the program is complied, this type is ignored by haskell. (still dont understand)

```