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

**Curry Paradox**
- Consider the sentence:
    **“If this sentence is true, then 2 + 2 = 5.”**
    Call this statement $x$.
- If $x$ is true, then by its own words it says:
    → _2 + 2 = 5._
- But notice: by accepting $x$ as true, we are automatically forced to accept the conclusion (_2 + 2 = 5_).
- **This is a problem because it means that in logic and math, we can prove anything we want even when things are false, then the entire system we created becomes useless**

**Liar Paradox** says that if $A\equiv \neg A$ which means "A is true if and only if A is false", then if A is true, then it must be false, and if A is false, then it must be true. 
- This is a contradiction, *it is stuck in a loop*

## What do computers do?
They store and manipulate information. 

## How do you control computers?
A sequence of statements called *programs*

## why are computers so useful?
1. *Hardware* enables a large amount of data to be store and manipulated fast
2. *Software* provides the ability to controls hardware with a lot of control and flexibility. 

## Declarative and Imperative

**Imperative Statements** express an action to be performed
**Declarative Statements** express a property to be employed
- say what should be true, not how to make it true.

**Imperative Programs** are a sequence of imperative statements that express *how* a program will work
- Do this, then this, then this, then tell me the result
  
**Declarative Programs** are a sequence of declarative statements that express *what* the program will achieve
- I want you to get this result for me, I don't care how you do it. Just get it 

## Programming Paradigms
**Programming paradigm**: a well-developed style of programming. 

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

# The math-y side of Functional Programming
**Everything is all about sets**

## Syntax vs Semantics
1. **Syntax**: The raw symbols you type — their structure and placement.  
2. **Semantics**: The meaning of each symbol — what each represents.  
### Example: `2 + 3`
- Symbols: `2`, `+`, `3`, and even the whitespace are all **syntax**.
- Each symbol has **semantics**:
  - `2` → a numeral symbol (syntax) that represents the number two (semantics/value) 
  - `3` → a numeral symbol (syntax) that represents the number three (semantics/value)  
  - `+` → a symbol (syntax) that denotes addition (semantics)

This shows how the expression `2 + 3` is **more than just symbols**:  
- Syntax gives **form**,  
- Semantics gives **meaning**,  
## Values
information (data) stored and manipulated by computer programs
- booleans, machine integers (small integers), floating point numbers (scientific notation rational numbers), strings, types, lists, functions

## Expressions
A syntactic entity that *denotes a value*, they are not the value itself but specifies how to get a value
```haskell
(x * 2) + 7
"abc"
True && y
```
**Atomic Expressions** are an identifier - $x$ or $rotateHorse$. 
**Literals** are an expression in which its form literally tells you its value -  2.3, "cat", True

**Compound expressions** are formed by applying a *function* or *operator* to other expressions. 
- ex. abs 10 
- ex. 1 + 2
	- applying the addition operator to 1 and 2 but infixing it

## Types
A syntactic entity that denotes a collection values of a similar form

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

## Functions
there are different definitions for functions

### n-ary function
As a Rule
- $f : I \to O$ that associates members of I (inputs) with members of O (outputs)
	- ex - $f : \mathbb{Z} \to \mathbb{Q}$ where $x \mapsto 1/x$
- A function is a rule that takes an input and produces at most one output, *but it does not have to produce and output*
	- in the function earlier, 1/0 is undefined so there is no output
As a Value
- A function is a set of ordered pairs of inputs and outputs
- **u-nary function** is a set $f \subseteq I \times O$ such that if $(x, y) \in f$ and $(x, y') \in f$ then $y=y'$. 
	- Each function $f$ has a **domain** $D \subseteq I$ and a **range** $R \subseteq O$.
	- 
	- *$x \subseteq y$ means x is a subset of y 