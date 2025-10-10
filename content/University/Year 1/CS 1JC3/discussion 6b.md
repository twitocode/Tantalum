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

--polynomial
data Poly a =
	 X
	| Coef a
	| Sum (Poly a) (Poly a)
	| Prod (Poly a) (Poly a)
--can bne visualizaed as a tree
-- Sum (Prod X (Coef 1)) (Coef 2)
-- (x * 1) + 2

val :: Num a => a -> Poly a -> a -> a
val p v =
	case p of
		x -> v
		Coef u -> Coef v
		Sum p1 p2 -> (val p1 v) + (val p2 v)
		Prod p1 p2 -> (val p1 v) * (val p2 v)

--polynomial	
data Poly a =
	 X | Y
	| Coef a
	| Sum (Poly a) (Poly a)
	| Prod (Poly a) (Poly a)
	
--polynomial with an infinite amount of indeterminates 
data Poly a =
	 X | Nat --even Integer works
	| Coef a
	| Sum (Poly a) (Poly a)
	| Prod (Poly a) (Poly a)

val :: Num a => a -> Poly a -> Nat a -> a```

induction principle for `Bool`
$$p(False) \land p(True) \implies \forall x: Bool \ . p(x)$$
$$P(0) \land (\forall y . p(y) \implies p(Suc \ y)) \implies \forall: Nat \ . p(x) $$