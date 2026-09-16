---
CreatedAt: 2025-11-11
tags:
  - lecture
class: CS 1JC3
---
CMCG and little languages are very useful

what is the purpose of a hash?
Big string -> hash function -> little string (x)

a list, hashtable or data structure. Put (X) at a point inside it.
COmpute the hash again to see if that hash is within the list or datastructure or hashtable
- used to very quickly locate data

![[Drawing 2025-11-07 09.17.26.excalidraw]]

it is not enough for a set to have a minimum element for it to be noetherian
it needs to have **all** subsets to have a minimum element
![[Pasted image 20251111090817.png]]

structural - naturally found from inductive sets
ordinal (or transfinite induction - but this excludes strong induction)
- proving a loop terminates at some point - better used for structural induction
  how to prove
	$\forall x.p(x)$
	$\forall x.( \forall y. \ y < x \ p(y)) \implies \forall x. \ p(x)$
	everything holds up to x but not including x. then i know it hodls for all p of x
well-founded
- the general notation, every structural and ordinal principles are well-founded
- not all wellfounded are structural or ordinal

$R \subseteq A \times A$
$Rb \leftarrow bRa$

weak induction - structural on the $\mathbb{N}$
$p(0) \land \forall x. \ p(suc \ x) \implies \forall x. p(x)$
$(\forall x. \ p(x) \implies p(suc \ x))$\
something like that

strong induction
ordinal induction in the $\mathbb{N}$
$(\forall x. \ p(0) \land p(1) \land \dots \land p(x-1) \implies p(x)) \implies \forall x. \ p(x)$
$\forall x (\forall y < x. \ (p(x) )\implies p(x)$