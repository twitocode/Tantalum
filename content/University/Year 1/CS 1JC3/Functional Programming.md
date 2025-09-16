---
CreatedAt: 2025-09-13
class: CS 1JC3
tags:
  - "#classnote"
---
## Haskell B Curry
American Mathematician
Developed **Combinatory Logic** which is a system for defining and using functions, you can define a function and use them without variables
- normally we would do this $f(x) = x^2$ but this function requires variables
<!--ID: 1757893915577-->


**Curry-Howard Correspondence** was a way of merging logic and programming together so that proofs and programs are equivalent to each other.

**Function Currying**: the process of turning a function that takes multiple arguments a once into a chain of functions that each take one argument at a time
- Ex. $f(x, y) = x + y$, normally you would do $f(3, 6) = 9$. 
- With currying you would do $f(x)(y) = x + y$
	- *The first function call returns a function to the next function call*
		- $f(3) = (y \mapsto 3 + y)$
		- $f(3)(6) = 9$
- Haskell example
```haskell
  -- Normal-looking function
add :: Int -> Int -> Int
add x y = x + y

-- Usage
add 2 3    -- gives 5

-- But actually, this is shorthand for:
(add 2) 3
-- (add 2) returns a new function: \y -> 2 + y
  ```

## Important Paradoxes

**Curry Paradox**
- Consider the sentence:
    **“If this sentence is true, then 2 + 2 = 5.”**
    Call this statement $x$.
- If $x$ is true, then by its own words it says:
    → _2 + 2 = 5._
- But notice: by accepting $x$ as true, we are automatically forced to accept the conclusion (_2 + 2 = 5_).
- **This is a problem because it means that in logic and math, we can prove anything we want even when things are false, then the entire system we created becomes useless**
<!--ID: 1757893915579-->


**Liar Paradox** says that if $A\equiv \neg A$ which means "A is true if and only if A is false", then if A is true, then it must be false, and if A is false, then it must be true. 
- This is a contradiction, *it is stuck in a loop*

**Russel's Paradox** says that R = {x | x is a set, x ∉ x}. "The set of all sets that do not contain themselves."
- If R ∈ R (R contains itself), then by its definition, R ∉ R (R does not contain itself) – *a contradiction.*
- If R ∉ R (R does not contain itself), then by its definition, R should be in R – *also a contradiction.*
- This paradox revealed fundamental flaws in early naive set theory and led to more rigorous axiomatic set theories.
## What do computers do?
They store and manipulate information. 
<!--ID: 1757893915582-->


## How do you control computers?
A sequence of statements called *programs*
<!--ID: 1757893915584-->


## why are computers so useful?
1. *Hardware* enables a large amount of data to be store and manipulated fast
2. *Software* provides the ability to controls hardware with a lot of control and flexibility. 
<!--ID: 1757893915586-->


## Declarative and Imperative

**Imperative Statements** express an action to be performed
**Declarative Statements** express a property to be employed
- say what should be true, not how to make it true.
<!--ID: 1757893915589-->


**Imperative Programs** are a sequence of imperative statements that express *how* a program will work
- Do this, then this, then this, then tell me the result
  
**Declarative Programs** are a sequence of declarative statements that express *what* the program will achieve
- I want you to get this result for me, I don't care how you do it. Just get it 

## Programming Paradigms
**Programming paradigm**: a well-developed style of programming. 
<!--ID: 1757893915592-->


**Procedural**: Programs are *imperative*; a program is a collection of procedures that could have *side-effects*

**Object Oriented**: Programs are *imperative*; a program behaves as a collection of interacting objects

**Functional**: Programs are *declarative*; a program is collection of *side-effect free function definitions*

**Logical**: programs are *declarative*; a program is a collection of logical statements. **not as important**

## Modes of Program Execution
**Interpreted**: line by line execution by and interpreter. 
- Supports interactive development and debugging. Something goes wrong? the interpreter is stops and tells you. 
- *Way slower than compiled code*
**Compiled**: programs are compiled into machine code
- Very optimized
- Development hell
**Byte Code (C#, Java, Haskell)**
- uses a virtual machine that can be interpreted or compiled
- programs are portable
- byte code is slower than machine code.
<!--ID: 1757893915595-->


## Syntax vs Semantics
1. **Syntax**: The raw symbols you type — their structure and placement.  
2. **Semantics**: The meaning of each symbol — what each represents.  
<!--ID: 1757893915598-->

### Example: `2 + 3`
- Symbols: `2`, `+`, `3`, and even the whitespace are all **syntax**.
- Each symbol has **semantics**:
  - `2` → a numeral symbol (syntax) that represents the number two (semantics/value) 
  - `3` → a numeral symbol (syntax) that represents the number three (semantics/value)  
  - `+` → a symbol (syntax) that denotes addition (semantics)
<!--ID: 1757893915600-->


This shows how the expression `2 + 3` is **more than just symbols**:  
- Syntax gives **form**,  
- Semantics gives **meaning**,  
## Values
information (data) stored and manipulated by computer programs
- booleans, machine integers (small integers), floating point numbers (scientific notation rational numbers), strings, types, lists, functions
<!--ID: 1757893915602-->


## Expressions
A syntactic entity that *denotes a value*, they are not the value itself but specifies how to get a value
```haskell
(x * 2) + 7
"abc"
True && y
```
**Atomic Expressions** are an identifier - $x$ or $rotateHorse$. 
**Literals** are an expression in which its form literally tells you its value -  2.3, "cat", True
<!--ID: 1757893915605-->


**Compound expressions** are formed by applying a *function* or *operator* to other expressions. 
- ex. abs 10 
- ex. 1 + 2
	- applying the addition operator to 1 and 2 but infixing it

## Types
A syntactic entity that denotes a collection values of a similar form
<!--ID: 1757893915607-->


| Type              | Denotion                                 |
| ----------------- | ---------------------------------------- |
| Bool              | True and False                           |
| Int               | set of machine integer                   |
| Float             | set of floating point numbers            |
| Integer           | set of all integers                      |
| Integer ->Integer | set of functions from Integer to Integer |
**Type error** - cant do addition between 1 and False
Expressions in Haskell are *type checked*
```haskell
:type e --find the type of something in haskell ghci
```

### Integer vs Int
Integers grow until memory runs out and are much slower, Int has a domain of $-2^{31}  \leq x \leq 2^{31}$
<!--ID: 1757893915608-->


# The math-y side of Functional Programming
**Everything is all about sets**
<!--ID: 1757893915610-->


## A side-tangent, What is Proof by Induction?
It’s a method to prove that a statement is true for **all natural numbers** (1, 2, 3, …).
<!--ID: 1757893915613-->


Think of it like **dominoes falling**
- If the first domino falls (base case), and
- If whenever one domino falls it knocks over the next (induction step),
- Then all dominoes will fall (the statement is true for all numbers).

To prove a statement $P(n)$ is true for all $n \geq n_0$:
1. **Base Case**
    Show that $P(n_0)$ is true.
    (Start the domino chain by knocking over the first one.)
    
2. **Induction Hypothesis**
    Assume $P(k)$ is true for some arbitrary $k \geq n_0$.
    (Pretend one domino in the middle has fallen.)
    
3. **Induction Step**
    Show that if $P(k)$ is true, then $P(k+1)$ must also be true.
    (If one domino falls, the next must fall.)

If both steps succeed, then $P(n)$ is true for all $n \geq n_0$.

## Functions
there are different definitions for functions
<!--ID: 1757893915614-->


### unary function
As a Rule
- $f : I \to O$ that associates members of I (inputs) with members of O (outputs)
	- ex - $f : \mathbb{Z} \to \mathbb{Q}$ where $x \mapsto 1/x$
- A function is a rule that takes an input and produces at most one output, *but it does not have to produce and output*
	- in the function earlier, 1/0 is undefined so there is no output
	  
As a Value
- A function is a set of ordered pairs of inputs and outputs
- **unary function** is a set $f \subseteq I \times O$ such that if $(x, y) \in f$ and $(x, y') \in f$ then $y=y'$. 
	- x = x, y = y' means that x will always have 1 output (or no output) but never > 1
	- Each function $f$ has a **domain** $D \subseteq I$ and a **range** $R \subseteq O$.
		- The set of valid inputs (**the Domain D**) is a subset of the set of all theoretically possible inputs
		- The set of actual outputs (**the Range R**) is a subset of the set of all theoretically possible outputs.
	- **$x \subseteq y$ *means x is a subset of y***
<!--ID: 1757893915616-->


### n-Ary Functions
As a Rule
 - For $n \geq 0$, $f : I_1, \dots, I_n \to O$ is a rule that associates a list of inputs from $I_1, \dots, I_n$ with a member of $O$ (the output). 
	- **$n \geq 0$ means that the function could take no inputs (this is the same as a constant)**
		- Values could be thought of as 0-ary functions
    - ex - Division can be a binary function (n=2): $div : \mathbb{R}, \mathbb{R} \to \mathbb{R}$ where the input list $(x, y)$ maps to the output $x/y$.
	- *Some lists of inputs may not be associated with an output.*
	- In the division example, the input list (5, 0) **is not associated with any output because division by zero is undefined.**
<!--ID: 1757893915619-->


As a Value
- An n-ary function is a set of ordered tuples. *Each tuple consists of $n$ inputs followed by one output.*
	- An n-ary function is a set $f \subseteq I_1 \times \dots \times I_n \times O$ such that if $(x_1, \dots, x_n, y) \in f$ and $(x_1, \dots, x_n, y') \in f$, then $y=y'$. 
		- $I_1 \times \dots \times I_n$ is the **Cartesian Product** of the input sets. It represents the *set of all possible lists of inputs*.
		- $O$ is the set of *all possible outputs*
		- The function $f$ is a *subset of all possible input-output combinations*
        **The condition ensures that any given list of inputs $(x_1, \dots, x_n)$ maps to only one output.**
	- Each function $f$ has a domain $D \subseteq I_1 \times \dots \times I_n$ and a range $R \subseteq O$.
        - The set of valid input lists (the Domain D) is a subset of the set of all theoretically *possible input lists*.
        - The set of actual outputs (the Range R) is a subset of the set of all theoretically possible outputs.
          
**Cartesian Product**: a fundamental concept in mathematics that combines sets to form a set of **ordered tuples**
- $A \times B \times C = \{(a, b, c) | a \in A, b \in B, c \in C\}$
- Each element of $A \times B$ is an *ordered pair* $(a, b)$, where the first element comes from $A$ and the second comes from $B$.
- **Order matters**: $(a, b) \neq (b, a)$ unless $a = b$.
- Example:
	- Sets $A = \{ 1, 2\} \text{ and }B = \{ x,y\}$
	- $A \times B = \{ (1,x), (1, y), (2,x), (2, y)\}$
	- There are $2 \cdot 2 = 4$ elements because each element of $A$ pairs with **every element** of $B$.
    
![[Pasted image 20250913222320.png]]

![[Pasted image 20250913221931.png]]

## Cardinality & Undecidability
**Cardinality $|A|$** is the size of set $A$
- **Cardinal Numbers:** Used to represent the cardinality of sets (essentially normal numbers)
<!--ID: 1757893915623-->

![[03-numbers.pdf]]
**Total** = D = I, the domain is the whole set of inputs, the function is defined in every input
- in computing we don't assume that all functions are total
**Partial** is the same as total but it is not defined in every input
- in haskell, functions are partial for the most part
**Surjective**: The range is the entire set of outputs
- tldr - you can get every output from some input

**Injective**: one-to-one functions
- different inputs map to different outputs
- $f(a) = f(b) \implies a = b$
	- in a function that is not injective, multiple inputs can go to one output

**Bijective**: both injective and bijective
- bijective = total + injective + surjective
- Every element of A maps to a unique element of B (injective)
- Every element of B is mapped by some element of A (surjective)
- *If a bijection exists between two sets A and B, then |A| = |B|*
- This allows comparing the sizes of *infinite sets.*

**Infinite Set:** A set $A$ is infinite if there exists a proper subset $A' ⊂ A \text{ such that } |A'| = |A|$.
- (e.g., there are as many even natural numbers as there are natural numbers).

**Key Theorems about Cardinality:** 
- $|\text{even } \mathbb{N}| = |\mathbb{N}|$.
- $|\mathbb{N}| = |\mathbb{Q}|$ (proved using a **diagonalization argument**).
- $|\mathbb{N}| < |\mathbb{R}|$ (proved using a **diagonalization argument**). 
	- This means there are "more" real numbers than natural numbers, a foundational insight into different sizes of infinity.
	- But they're both infinite sets?, just something to ponder
- The cardinality of the set of all programs in any "normal" programming language is equal to the cardinality of the natural numbers ($|ℕ|$). *This implies that programs can be mapped to natural numbers.*

### Gödel’s Incompleteness Theorems
States that for any consistent axiomatic system powerful enough to describe arithmetic (natural numbers), there will always be true statements about natural numbers that cannot be proven (derived) within that system. This is another fundamental limitation of formal systems and, by extension, computation
- **tldr** heres a simple example
	1. Imagine you build a perfect rulebook (a formal system) to do math with whole numbers.
	2. You’d expect this rulebook to be able to prove **every true statement** about numbers.
- Gödel showed:
	- **No matter how good your rulebook is**, there will always be some statements that are true but **cannot be proven** using the rules inside the book.
	- And the rulebook **cannot prove its own consistency** (that it never leads to contradictions).
<!--ID: 1757893915626-->

## Representing n-ary functions as unary functions
1. As a function of tuples $f: I_{1}, \dots, I_{n} \to O$ is represented as
	- $f' : I_{1} \times \dots \times I_{n} \to O$
	- where  $f(x_{1},\dots,x_{n}) = f'(\textcolor{red}{(}x_{1},\dots, x_{n}\textcolor{red}{)})$
		- it went from multiple inputs, to one input as a tuple
		
2. As a *Curryed function* $f: I_{1}, \dots, I_{n} \to O$ is represented as
	- $f" : I_{1} \to (I_{2} \to (\cdots (I_{n} \to O) \cdots))$
		- function returns a function 
			- that returns a function
				- that returns a function
					- that returns an output
	- where $f({x_{1}, \dots, x_{n}) = f"(x_{1})\cdots (x_{n })}$
		- it went from multiple inputs to a chain of one input
		- "$\cdots$" is the chain of function calls
	- **GO TO THE DEFINITON FROM BEFORE**
<!--ID: 1757893915629-->


# Haskell-ing
Functions in Haskell are usually in the curry-ed form
$$
\begin{align*}
f &:: t_{1}^{i} \to \dots \to t_{n}^{i} \to t^{o} \\
f & \ p_{1} \dots p_{n} = e
\end{align*}
$$
$i$ is input
$t$ is the type (string, bool, int, etc)
$p$ is format parameter of the definition that represents the inputs to the function $f$
$e$ is an expression that is result, defined in terms of the formal parameteres.
<!--ID: 1757893915632-->



But they can also be defined as tuples
$$
\begin{align*}
f &:: (t_{1}^{i}, \dots, t_{n}^{i}) \to t^{o} \\
f & (\textcolor{red}{(}p_{1}, \dots, p_{n}\textcolor{red}{)}) = e
\end{align*}
$$


where $n \geq 0$.
In this case, the function takes in **1** singular input (a tuple of size n) instead of n inputs

Example:
- represent $f(x,y) = x^2 + y^2$ as a unary function
	- curryed: $f1 \text{ }x\text{ } y = x^2 + y^2$
	- tuples:  $f2 \text{ }(x,y) = x^2 + y^2$

# What Exactly is Functional Programming?
- *Declarative* programs that are *side-effect free*
- Results are produced by *evaluating expressions built from functions*
- Functions are defined as *first-class values* and used as *rules*
	- they can be used just like any other value (string, int, bool, etc)
- *Recursion* eww
- *State change* and *data mutation* are avoided as much as possible
- **The focus is on what instead of how**
	- The implementation takes care of the how
<!--ID: 1757893915634-->

