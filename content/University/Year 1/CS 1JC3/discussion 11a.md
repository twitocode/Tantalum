---
CreatedAt: 2025-11-18
tags:
  - lecture
class: CS 1JC3
---
Weak induction (THE induction)
strong induction (the little but strong induction)

used to prove a universal statement for natural numbers.
cant use it to prove things that are not true for all natural numbers

weak - a **structural** induction principle
strong - all natural numbers $x$ and for all natural numbers $y <x$, prove that if it holds for y, then it must hold for x.
strong - an **ordinal** induction princple

strong and weak induction are equiaveln
$$
\begin{align}
P(x) \\
P'(x) = (\forall y < x . P(y) )\implies P(x)\\
\end{align}

$$

if you prove $(\forall y < x . P(y) )$ then technically you dont need week induction


weak induction
- $P(y)  \ \  y < x$ is a lot stronger than $P(x)$


Ex. strong induction
Theorem, if $n \in \mathbb{N}$ with $n \geq 2$ then $n$ is a prime number or a product of prime numbers
cant use an induction hypothesis - so find P(2) instead of P(n + 1)

# General form of proof by induction
1. The definition of the relevant **property** P.
2. The **thorem**A of the form $\forall x \in S . \ P(x)$ that is to be proved
3. **induction principle** $I$ to be used iThe inn the proof 
4. Verification of the **cases** for the induction principle $I$ to be applied ( The cases include one or more **base cases** and one or more **induction steps**)
5. A **concluding statement** that the theorem $A$ has been proved by the induction principle $I$

type classes are software modules without the implemnetation
- when you make an instance of the type class then you have the implementation
- software modules have the interface (type class) and the implementation ()