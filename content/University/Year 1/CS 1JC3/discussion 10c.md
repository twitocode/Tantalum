---
CreatedAt: 2025-11-14
tags:
  - lecture
class: CS 1JC3
---
little language

its better to solve a group of related problems than 1 problem
- make a set of tools so that you can solve many related problems
	- this creates a "language"
- a very different problem?
	- take some tools/components out then rearragne the language so that it works again

### software modules
A T
A' T'

you need to have agreed upon interfaces between the the modules

![[discussion 10c 2025-11-14 08.58.58.excalidraw]]

CMCG
- monoids - identity elements

the issue with monoids in haskell is that these are not guarannteed

e is the idnetity element of the monoid
$$
\begin{align}
(x \cdot y) \cdot z = x \cdot ( y \cdot z) \\

e \cdot x = x  = x \cdot e
\end{align}
$$