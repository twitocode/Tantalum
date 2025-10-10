---
CreatedAt: 2025-10-10
tags:
  - lecture
class: CS 1JC3
---
```haskell
data Bool = True | False finite datatype


data Nat  =
	O | S Nat
--infinite datatype
--the members are 0, S0, S(S0), S(S0)... infinite number of members

data Poly a =
	 x
	| Coef a
	| Sum (Poly a) (Poly a)
	| Prod (Poly a) (Poly a)
--can bne visualizaed as a tree

val p v =
	case p of
		x ->
		Coef u -> 
		Sum p1 p2 ->
		Prod p1 p2 ->
```