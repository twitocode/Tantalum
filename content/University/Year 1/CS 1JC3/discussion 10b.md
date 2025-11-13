---
CreatedAt: 2025-11-13
tags:
  - lecture
class: CS 1JC3
---
only 1 way to do beta reduction

$(\lambda x. \ m) n$
$m [x \mapsto n]$

beta reduction uses redexes
computation is done using repeated beta reduction

normal form is when there are no redexes (nothing to reduce)

$(\lambda x .xx)(\lambda x.xx) \to (\lambda x .xx)(\lambda x.xx)$
- this has no normal form
- kinda like an infinite looop (so this model of computation works)

$(mn)$
beta reduce $m$ or $n$
- if $(\lambda x .xx)$ was in $n$ then it would be non terminating
- but if it was $(\lambda x.y)((\lambda x .xx)(\lambda x.xx))$
	- then this thing would be a redex that reduces to $y$
			- **this is normal order reduction**
$(mn)[x \mapsto o]$
$= (m[x \mapsto o] n [x \mapsto o])$
$((xy)(zy)[x \mapsto o]$
= $(oy)(zy)$

is free in - **assignment**
- is a var free in the expression. does not matter if there are bound occurences

$\lambda y.(\lambda x.y)$
$\lambda y.\lambda y.y$ - double bounding

$(\lambda z.-------)z$ the outside z is free



CMCG
- begging grandma
- make a template (generalization)
	- whenever we have an issue again
	- we do it again
		- after 100s of letters we get the perfect letter

# Ackerman function
$$
A : \mathbb{N} \times \mathbb{N} \to \mathbb{N}
$$

```haskell
ackerman :: Integer -> Integer -> Integer
ackermann m n
	| m == 0          = n + 1
	| m > 0 && n == 0 = ackermann (m-1) 1
	| m > 0 && n > 0  = ackermann (m-1) (ackermann m (m-1))
```

Ackermann was an associate with David Hilbert

- the function grows extremely fast
The function is **total**

![[discussion 10b 2025-11-13 08.57.51.excalidraw]]

$(\mathbb{N} \times \mathbb{N}, <_{lex})$
$(m,n) <_{lex} (m',n')$

lexigraphical ordering
- can use it to order strings (strings of length 2 with 2 nautral numbers)
- in a dictionary
	- strings are ordered by romal yapa yapa forgot