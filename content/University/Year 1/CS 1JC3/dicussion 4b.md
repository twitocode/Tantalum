---
CreatedAt: 2025-09-25
tags:
  - lecture
class: CS 1JC3
---
## Overview
- Topic:
- Main objectives:

## Notes
$\cap$ = and/conjunction

| A B | $A \cap B$ |
| --- | ---------- |
| F F | F          |
| F T | F          |
| T F | F          |
| T T | T          |

$(A \implies B) \iff \neg B \implies \neg A$ : A contrapositive. This is a valid statement, it is true everywhere
$\neg$ means the negative


| A B | $A \implies B$ | $\neg B$ | $\neg A$ | $\neg B \implies \neg A$ | $(A \implies B) \iff \neg B \implies \neg A$ |
| --- | -------------- | -------- | -------- | ------------------------ | -------------------------------------------- |
| F F | T              | T        | T        | T                        | **T**                                        |
| F T | T              | F        | T        | T                        | **T**                                        |
| T F | F              | T        | F        | F                        | **T**                                        |
| T T | T              | F        | F        | T                        | **T**                                        |
This means that it is a **valid** statement the contrapositive will always have the same value as the original implication

| A B | $b(A,B$)        |
| --- | --------------- |
| F F | 2 possibilities |
| F T | 2               |
| T F | 2               |
| T T | 2               |
2^4 possibilities = 16 ways to fill it out
**A Complete set of boolean functions can define every possible boolean function with that function**
Example: { and, not }
- $\{ \cap, \neg \}$
- $A  \vee B = \neg (\neg A \cap \neg B)$

> [!NOTE]
> Example { nand } *Sheffer's stroke*
> - nand is a universal gate, a logical gate is how you implement a boolean function. if you have a nand gate you can define every boolean function. You can use nand alone
> - example
> 	- *not* $\neg A = nand(A, A)$ 
> 	- *and* $A \cap B = \neg \neg(A \cap B)$ - this works the same as $20 = -(-20)$
> 		- $=\neg nand(A, B)$
> 		- $= nand(nand(A, B), nand(A, B))$

Why bother using and n or when nand does everything? **because why tf would i want to read nand everytime, ITS COMPLICATED**
- nand is very good for machines but horrible for humans
*nor is also just like nand, a complete function*