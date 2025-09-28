---
CreatedAt: 2025-09-22
class: CS 1JC3
tags:
  - "#classnote"
---
Another definition for **computational thinking** is
- using the right computational tools in the right way for the problem at hand
- understanding the limits and pitfalls of computational tools

# Logic
The study of the principles underlying sound reasoning
- branch of math underlying mathematical reasing
- branch of math underlying computing
- *What is not sound reasoning*
	- if i break wood i get 2  wood
	-  So If i break a person, i get two persons
  
A logic is a reasoning system with:  
1. A language with a **formal syntax** and **precise semantics.**  
2. Concepts of **truth** and **logical consequence**.  
3. A **proof system** for establishing that statements in the language are true
	1. to establish what are the logical consequences
	
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
- Bool, a type of truth values (booleans)
- boolean functions
- predicates
- conditional expressions
- guarded functions
- case expressions

### First-order logic
- **What it deals with:** Breaks statements into **objects** and **properties/relations**.
- **Adds:**
    - **Predicates:** like $Human(x), Mortal(x)$.
    - **Quantifiers:**
        - Universal: $\forall$ (“for all”)
        - Existential: $\exists$ (“there exists”).
            
- **Example:**
    - $\forall x (Human(x)→Mortal(x))$
	    - ("For every xxx, if xxx is human, then xxx is mortal.")
    - $\exists x \; Human(x)$
	    - ("There exists at least one human.")
    
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
All can be represented as
- *not* and *and*
- *not* and *or*
- *nand* (Sheffere stroke) or *nor* (Peirce arrow)

There is also the implies function that is an implication
> [!NOTE]
> There is the confusing case of b1 being False in an **implication**
> - If the condition b1 **happens**, then b2 must follow.
> - If b1 **doesn’t happen**, the implication makes no promise — so it’s considered **true by default** (this is called _vacuous truth_).

  
**Truth Tables**
![[Pasted image 20250922232243.png]]
![[Pasted image 20250922232233.png]]
![[Pasted image 20250922232601.png]]

DeMorgan laws
- not (b1 and (not b2)) -> 
- (not b1) and (not (not b2)) -> 
- (not b1) or (not (not b2)) -> 
- (not b1) or b2
- if there is an and make it an or, vice versa

## Predicates
a function that returns a boolean. 
$t_{1} \to \dots\to t_{n}\to Bool$
A boolean function is a special kind of predicate
Ex. 1 == 2
### In Haskell
- predefined binary predicates
	- ==
	- /=
	- <
	- <=
	- >
	- >=

# Conditional Statements
## Conditional Expressions
An expression whose value depends on the value of a boolean expression 
*Haskell:* $\text{if } c\text{ then }e_{1}\text{ else }e_{2}$
**The condition c is a boolean expression**
- important because you may not want to evaluate all your code
```haskell
absInteger :: Integer -> Integer
absInteger n = if n < 0 then -n else n
```
## Guarded Functions
A convient alternative to defining a function using conditionals
![[Pasted image 20250922234037.png]]
$g_{1},\dots g_{n}$ are boolean expressions
```haskell
absInteger :: Integer -> Integer
absInteger n = 
	| n < 0  = -n
	| n >= 0 = n
```

## Case Expressions (switch statement bruh)
enables a value to be chosen from a set of options, is a generalization of a conditional expression
![[Pasted image 20250922234350.png]]

The value of the expression $e$ is matched against the **patterns** $p_{1}\dots p_{n}$
```haskell
boolToInt :: Bool -> Int
boolToInt b =
	case b of
		False -> 0
		True -> 1
```

# Alonzo Church
The person who first showed that there were unsolvable decision problems (**Church's Theorem**) using **Lambda Calculus** (proved Leibniz wrong)
- Turning used the Turning machine to prove this as well
	- Church-Turing thesis - **What we consider to be an intuitive computation is captured by Church's or Turing theorem**	  
Developed Lambda Calculus Computational model based  on function application and abstraction

## Church's Theorem
First-order logic is undecidable
There is lambda expression that will allow them 
if you have a first order formula, can you allows show that the formula is always True

## Lambda Notation
if $B$ is an expression of type $\beta$
$$\lambda x: \alpha . B$$
denotes a function $f : \alpha \to \beta$ such that $f(a) = B[x \mapsto a]$
$\beta$ is the output, $\alpha$ is the input

Example: let $f = \lambda x : \mathbb{R} . x*x$
$f(2) = (\lambda x : \mathbb{R} . x *x)(2) = 2*2$
- Sub 2 into the function for x

f denotes squaring a function
### In Haskell
```haskell
\x1 ... xn -> e

--squaring a function
\x -> x * x
```