---
CreatedAt: 2025-10-07
tags:
  - lecture
class: CS 1JC3
---
what are polynomials
expression $x^2 +3x+2$ and  $(x+2)(x+1)$ and $(x+3)x+2$ (Horner's method) have different expressions but the same function:
-  $\lambda x\ . x ^2 +3x +2$


```haskell
data Poly a =
	  x
	| Coef a
	| Sum (Poly a) (Poly a)
	| Prod (Poly a) (Poly a)
	
x     :: Poly a
Coeff :: a      -> Poly a
Sum   :: Poly a -> Poly a -> Poly a

Sum x (Sum x x) - x + (x + x)
Sum Sum(x + x) x - (x + x) + x
--these things have different expressions but denote the same function
--just like the polynomial examplep1 p2

val :: Num a => Poly a -> a -> a
val p v = 
	case p of 
		x
		Coeff y
		Sum p1 p2
		Prod 
```

the constructors are x, Coef, Sum, and Prod
*the values are the expressions (makes no sense right?)*
a constructor is a function with a type
constructors construct members of the algebraic data type

**No junk and no confusion**
no confusion - theres no way of using the constructors in different ways to denote the same kind of value (you can only construct each thing one way)
- x cannot be Coef 2
no junk
- every one of the values in the the data type can be reached with a constructor