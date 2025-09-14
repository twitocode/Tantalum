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
		- $f(3) = (y \to 3 + y)$
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

## Values
