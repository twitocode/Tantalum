---
CreatedAt: 2025-09-29
class: CS 1JC3
tags:
  - "#classnote"
---
**Recursion**: a method of defining something (usually a function) in terms of itself.
- alternative to loops
- correctness is proved by (mathematical) *induction*
- functions can be defined by recursion in all programming languages but not all can implement them efficiently.
- uses a *divide and conquer* strategy.

$F : I \mapsto O$ is defined by recursion:
- $f(x) = E(f(a_{1}(x)), \dots, f(a_{n}(x)))$
	- E is some expression
- Each $i \in I$ is assigned a natural number $n(i)$ 
	- every input is assigned a natural number
- For all $i \in I$  and $m \in \mathbb N$ with $1 \leq m \leq n$
	- $n(a_{m}(i)) < n(i)$
	- The natural numbers will get smaller and smaller
	- Natural numbers with their standard ordering is a well-order (*noetherian*)
		- **Noetherian:** there are not strict descending infinite sequences (it must stop at 0 in this case)
	- nonsensical when $i$ is equal to another $i$

# Amalie Emmy Noether
[The Biggest Misconception in Physics - YouTube](https://youtu.be/lcjdwSY2AzM?si=lq4s2iZg6y17xzNk)
energy is not conserved
- Great German mathematician of Jewish heritage
- research in abstract algebra, mainly in ring theory.
- joined math department at University of Göttingen (same place as Curry) after invitation of D. Hilbert and F. Klein
	- guys thought she was a guy because "only men can do math"


| Recursion                                                                       | Iteration                                                                                   |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Declarative                                                                     | Procedural                                                                                  |
| The language implementation is responsible for how evaluation is preformed      | The programmer is responsible for how evaluation is peformed                                |
| Easier to show correctness                                                      | Harder to show correctness                                                                  |
| Loops can be simulated space-efficiently by functions defined by tail recursion | Loops are more space-efficient than recursion in languages that do implement tail recursion |
**Tail Recursion**: when a function's computation is performed before a recursive call