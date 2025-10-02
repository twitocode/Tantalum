---
CreatedAt: 2025-10-02
tags:
  - lecture
class: CS 1JC3
---
cardinality of the decision problems of the natural numbers > cardinality of the natural numbers (diagonalization argument)
- the # of the programs = to the number of natural numbers < decision problems

```haskell
2 + 3.1 --what type are they
Floating a => a --they are Floating (a type class, type inference)
Num (a) => a -> a -> a -- + has this type, but a must be the same type, can't add int and float
--arrow means "a it is a member of x class" 
```

lambda notation
- $f(x)=x+2$
- $f(2) = 2 +2 =4$
- $f(y)$ is $f$ applied to y
- $f$ is the function $f$
or using lambda notation (a way of making functions without giving them names, function abstraction)
- $\lambda x.x+2$ 
- $\lambda x \in \mathbb{Z}.x+2$
- $\{ x \in \mathbb{Z} | x \text{ is odd}\}$, we don't give sets names, why do we give functions names? (set abstraction)

```haskell
\x -> x + 2
\(x :: Integer) -> x + 2
```


**Proving nand can be used for everything**
arbitrary boolean function

| A B C | g(A, B, C) |
| ----- | ---------- |
| F F F | T          |
| F F T | T          |
| F T F | F          |
| F T T | F          |
| T F F | F          |
| T F T | T          |
| T T F | F          |
| T T T | T          |
g(A, B, C) = ((not A) &&(not B) && (not C)) *disjunction*
= ((not A) && (not B) & C) *disjunction*
= A && B & C *disjunction*
**disjunctive normal form**
there is also **conjunction normal form**

