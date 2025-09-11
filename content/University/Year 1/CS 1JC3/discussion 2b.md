---
CreatedAt: 2025-09-11
tags:
  - lecture
class: CS 1JC3
---
## Overview
- Topic:
- Main objectives:

## Notes
- cartesian product
	- (a, b) ordered pair, its a finite sequence called a tuple, in this case its a 2-tuple
		- tuples can have different types
		- lists have only 1 type
	- set of pairs A x B = {(a, b) | a <- A, b <- B}
		- a comes from A
		- b comes from B
- n-nary to u-nary, take inputs and make a tuple of it. n arguments -> tuple of n arguments
	- the other method is to use the curry function. 
		- first function takes an argument and returns a function that takes in the second argument.
- decision problems
	- making a binary decision
		- yes or no
	- there are some that cannot be solved by computers
	- turning and church showed that they do exist and gave examples
- bifficus of the future
	- focused on getting the answer instead of the understanding
	- We need a deep understanding of computing and we need to be learning everyday.
	- theres entrepeneurship 
		- hey this thing is good show it to manager, then manager say you should lead team in making it and show it to all department heads in the company.
- Paradoxes
	- Liar's paradox
		- sentence has to be true or false
		- A is equal to not A $A\equiv \neg A$
	- Curry's paradox
		- $A \equiv A \implies B$
		- if this sentence is true, then B is true
			- suppose its true, then that means then $A \implies B$
				- this is an implication, which cant be true
				- huhhhh?????? 
			- conclusion -> the sentence can only be true
		- self reference
	- Russel's paradox
		- $R=\{ x \set \text{is a set} | x \notin x \}$re out what is wrong
			- a set that does not contain itself
			- if no set contains it self then its the set of all sets that does not contain itself
			- assume $R \in R \implies R \notin R$, then $R \notin R \implies R \in R$ but that makes no sense
		- MOST IMPORTANT
			- so siple but hard to figu
	- Crisis in math - lead to the foundations of computing
	- propositional logic
	- ![[Pasted image 20250911090608.png]]
		- boolean algebra is the algebra of propositional logic
- 

## Key Terms
- Term 1: Definition
- Term 2: Definition

## Questions
1. How can a decision problem be undecidable?
2. What are infinitesimals and why are they useful?
3. What is proof by induction?
4. What are G ̈odel’s incompleteness theorems?
	- there are some facts about natural numbers that we cannot derive
5. Where is art in computing?
6. How can an n-ary function be represented as a unary function?

## Summary
- 
