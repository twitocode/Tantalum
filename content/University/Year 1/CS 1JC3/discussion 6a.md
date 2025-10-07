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
```

the constructors are x, Coef, Sum, and Prod