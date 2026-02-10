---
CreatedAt: 2025-12-04
tags:
  - lecture
class: CS 1JC3
---
you can make your induction hypothesis stronger

TCP/IP Layering model
theres other protocols but tcp and ip are the most important

![[Drawing 2025-12-04 08.43.04.excalidraw]]
1. hardware
	1. physical addresses (MAC)
2. network interface 
3. internet layer (IP)
	1. IP Addresses
4. transport layer (TCP), (UDP)
	1. TCP/UDP Port numbers
5. application layer
	1. web services
	2. email
	3. **client-server model**

Database
Relations in math are a subset of a Cartesian product
$R \subseteq A_{1} \times \dots \times A_{n}$
$(a_{1}, \dots, a_{n})$ - this says that these n things are related
$a_{1} \in A_{1}$
$a_{2} \in A_{2}$

so if $a, b \in R$ then a is related to b by R

Algebraic data types (in haskell)
inductive types (generally)
- they dont have to be recursive

```haskell
data T = 
	c1 s u 
  | c2
  | c3 T --recursive constructor
  
c1 :: s -> u -> T
c2 :: T
c3 :: T -> T
```

every algebraic data types produces a structural induction principle
- if the property holds  for c1, c2, c3 then it holds for everything


in this case gotta verify 3 things
1. $\forall x \in S, y \in U \ . \ P(C_{1} \ x \  y)$
2. $P(C_{2})$
3. $\forall t \in T \ . \ P(t) \implies P(C_{3} \ t)$
all of these $\implies $\forall x \in T. P(x)$$

meta languages is a language to talk about a language. think of metadata
- many languages are meta languages like english
	- Ex "cat" contains 3 letters

enumeration type
```haskell
data Bool = 
	  False
	| True
	
```

a set of values defined by a finite set of constructors
the induction principle for this would be

a *degenerate induction principle*
show it holds for false and it holds for True, then it must hold for all inputs
$P(False) \land P(True) \implies \forall x \in Bool \ . P(x)$


sum types have more than 1 consturctor
product types have constructors with more than 1 argument

$(\lambda y . y) N$
$(M,N)$
$$\begin{align}
M &= (\lambda x.x)(\lambda y.y) \ \\
&= (\lambda y.y)
\end{align}
$$

it could be redex if it reduces but it does not always reduce to redex

modularity is a special case of separation of concerns
RSA is a public key encryption algorithm

public key - $a \times b$
private key = $(a, b)$

to get private key  you need to factor public key, but that is mathematically infeasible
