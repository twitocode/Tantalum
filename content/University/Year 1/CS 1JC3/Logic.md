---
CreatedAt: 2025-09-22
class: CS 1JC3
tags:
  - "#classnote"
---
Another defini tion for **computational thinking** is
- using the right computational tools in the right way for the problem at hand
- understanding the limits and pitfalls of computational tools

# Logic
The study of the principles underlying sound reasoning
- branch of math underlying mathematical reasing
- branch of math underlying computing
  
A logic is a reasoning system with:  
1. A language with a **formal syntax** and **precise semantics.**  
2. Concepts of **truth** and **logical consequence**.  
3. A **proof system** for establishing that statements in the language are true
Ex
- Higher-order logic
- First-order-Log
- Propositional Logic

 ## Use-cases
1. Theoretical (studying)
	1. Computation
	2. Programming languages
	3. Software design
2. Practical
	1. precise documentation about software artifacts (by products of the software dev process), can be stored an manipulated by computers
	2. To reason about software artifacts with math software like proof assitants
	3. implement electronic circuits
	4. reasoning facilities in programming languages

## In Haskell
A form of quantifier first-order logic is embedded in the language

### First-order logic
- **What it deals with:** Breaks statements into **objects** and **properties/relations**.
- **Adds:**
    - **Predicates:** like $Human(x), Mortal(x)$.
    - **Quantifiers:**
        - Universal: $\forall$ (“for all”)
        - Existential: $\exists$ (“there exists”).
            
- **Example:**
    $\forall x (Human(x)→Mortal(x))$
    ("For every xxx, if xxx is human, then xxx is mortal.")
    
    $\exists x \; Human(x)$
    ("There exists at least one human.")
    
- Bool, a type of truth values (booleans)
- boolean functions
- predicates
- conditional expressions
- guarded functions
- case expressions
  
quantifiers - universal - for all natural numbers some property holds
extistenial - there exists a natural number that quantifies a state


## Booleans
A standard truth value (true or false)
Named after George and Boole
- discovered that there is an algebra of truth values like there are with numbers

**Boolean expressions**: any expression that denotes the values True or False. *used to make decisions*
True == False
1 == 2

**Boolean function**: a function of a type of the following, the meaning of these functions are given by *truth tables*
- $\text{Bool} \to \dots \to\text{Bool}\to\text{Bool}$
- *In Haskell*
	- Negation (not)
	- Conjunction (&&)
	- Disjunction (||)

**Truth Tables**
![[Pasted image 20250922232243.png]]



![[Pasted image 20250922232233.png]]