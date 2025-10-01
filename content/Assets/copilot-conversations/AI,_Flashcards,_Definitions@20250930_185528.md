---
epoch: 1759272928769
modelKey: gemini-2.5-flash|google
topic: "AI, Flashcards, Definitions"


tags:
  - copilot-conversation
---

**user**: [[Logic]] [[Numbers]] [[Functional Programming]] [[Computational Thinking]] [[Recursion]] [[discussion 4c]] [[discussion 4a]] [[discussion 3c]] [[discussion 3b]] [[discussion 3a]] [[discussion 2c]] [[discussion 2b]] [[discussion 2a]] [[Discussion Session 01b day1-p2]]

could you generate anki flashcards in the form of neurcache flashcards
In Neuracache style, to make a flashcard you do 

question #flashcard 
answer
__whitspace__
question #flashcard 
answer
__whitspace__

[Timestamp: 2025/09/30 18:55:28]

**ai**: Here are Anki flashcards in the Neuracache style, generated from the provided notes:

What is another definition for computational thinking? #flashcard
Using the right computational tools in the right way for the problem at hand, and understanding the limits and pitfalls of computational tools.

What is logic? #flashcard
The study of the principles underlying sound reasoning; a branch of math underlying mathematical reasoning and computing.

What are the three main components of a reasoning system (a logic)? #flashcard
1. A language with a formal syntax and precise semantics.
2. Concepts of truth and logical consequence.
3. A proof system for establishing that statements in the language are true.

Name some theoretical use-cases of logic. #flashcard
Studying computation, programming languages, and software design.

Name some practical use-cases of logic. #flashcard
Precise documentation about software artifacts, reasoning about software artifacts with math software (proof assistants), implementing electronic circuits, and reasoning facilities in programming languages.

What does first-order logic deal with and what does it add to propositional logic? #flashcard
It deals with breaking statements into objects and properties/relations. It adds predicates (e.g., $Human(x)$) and quantifiers (Universal $\forall$, Existential $\exists$).

What is a Boolean? #flashcard
A standard truth value (True or False), named after George Boole.

What is a Boolean expression? #flashcard
Any expression that denotes the values True or False, used to make decisions.

What is a Boolean function? #flashcard
A function of the type $\text{Bool} \to \dots \to\text{Bool}\to\text{Bool}$, whose meaning is given by truth tables.

Explain the concept of "vacuous truth" in logical implication ($b1 \implies b2$). #flashcard
If the condition $b1$ doesn't happen (i.e., $b1$ is False), the implication makes no promise, so it's considered true by default.

Apply De Morgan's laws to `not (b1 and (not b2))`. #flashcard
`(not b1) or (not (not b2))` which simplifies to `(not b1) or b2`.

What is a predicate? #flashcard
A function that returns a boolean, of the type $t_{1} \to \dots\to t_{n}\to Bool$. A boolean function is a special kind of predicate.

How is a conditional expression written in Haskell and what is its purpose? #flashcard
`if c then e1 else e2`, where `c` is a boolean expression. Its value depends on `c`, and it's important for selective code evaluation.

What are guarded functions in Haskell? #flashcard
A convenient alternative to defining a function using conditionals, where multiple boolean expressions (guards) determine which expression is evaluated.

What is a case expression in Haskell? #flashcard
A generalization of a conditional expression that enables a value to be chosen from a set of options by matching an expression's value against patterns.

What happens in Haskell if a case expression is evaluated with a value that does not have a matching pattern? #flashcard
The result is `undefined`.

Who was Alonzo Church and what were his key contributions? #flashcard
He first showed there were unsolvable decision problems (Church's Theorem) using Lambda Calculus and developed Lambda Calculus as a computational model.

What does Church's Theorem state about first-order logic? #flashcard
First-order logic is undecidable, meaning there is no algorithm to determine if a given first-order formula is always true.

Explain lambda notation $\lambda x: \alpha . B$. #flashcard
It denotes a function $f : \alpha \to \beta$ such that $f(a) = B[x \mapsto a]$, where $x$ is the input variable of type $\alpha$, and $B$ is the expression of type $\beta$ that defines the function's body.

List the main families of number systems. #flashcard
Natural numbers ($\mathbb{N}$), Integers ($\mathbb{Z}$), Rational numbers ($\mathbb{Q}$), Real numbers ($\mathbb{R}$), Complex numbers ($\mathbb{C}$), and Modular integers ($\mathbb{Z}_{n}$).

Describe the subset relationship between the main number systems. #flashcard
$\mathbb{Z}_{n} \subseteq \mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}$.

What are numeral systems? #flashcard
A writing system for expressing numbers (e.g., Roman numerals, Hindu-Arabic numerals).

Who was Mohammad Al-Khwarizmi and what were his contributions? #flashcard
He introduced arithmetic based on the Hindu-Arabic numeral system to the Middle East and Europe (giving us the word "algorithm") and showed how to solve linear and quadratic equations algebraically (giving us the word "algebra").

How is a number $(a_n a_{n-1} \dots a_1 a_0)_b$ represented in base $b$? #flashcard
$(a_n a_{n-1} \dots a_1 a_0)_b = \sum_{k=0}^{n} a_k b^k$.

How do computers represent members of infinite number systems using a fixed number of bits? #flashcard
Each member is represented using a fixed number of bits (e.g., 64-bit numbers), which is efficient but can only represent a finite subset of the numbers.

How do computers represent members of infinite number systems using an unbounded number of bits? #flashcard
Every member can be represented, but it has very bad space and time complexity.

How are integers represented in computers using a fixed number of bits? #flashcard
Using two's complement with a fixed number of bits (e.g., $2^n$ bits). This system has one 0, $2^{n-1}-1$ positives, and $2^{n-1}$ negatives.

How do you negate a number in two's complement? #flashcard
Invert all its bits and then add 1.

For a 4-bit two's complement system, what is the highest positive number and what is the lowest negative number? #flashcard
Highest positive: 0111 (7). Lowest negative: 1000 (-8).

What is a potential issue when performing arithmetic operations on machine integers? #flashcard
Arithmetic operations on machine integers can cause **overflow**, where the result exceeds the maximum representable value for the fixed number of bits.

How are floating point numbers represented? #flashcard
As rational numbers in base 2 scientific notation ($\pm 1.m *2^e$) with a fixed number of bits, where $m$ is the mantissa and $e$ is the exponent.

Name some special numbers that floating point representation can handle. #flashcard
-0.0, 0.0, Infinity, -Infinity, NaN (Not a Number).

What are the potential issues with arithmetic operations on floating point numbers? #flashcard
They return the best approximation, can result in underflow (-0.0 or 0.0), positive overflow (Infinity), negative overflow (-Infinity), or NaN (if undefined).

Why should one be careful when comparing floating point numbers for equality (e.g., `x == y`)? #flashcard
Due to lack of precision, `x == y` is very unlikely to be true even if they are mathematically equal. Instead, use `abs (f x) < epsilon`.

List the main numeric types in Haskell. #flashcard
`Int` (32/64-bit machine integers), `Integer` (all integers), `Float` (32-bit floating point), `Double` (64-bit floating point), `Rational` (all rational numbers).

What is the difference between `Int` and `Integer` types in Haskell? #flashcard
`Int` represents machine integers (fixed size, typically 32-bit or 64-bit), with a limited range. `Integer` represents all integers, growing until memory runs out, but is generally slower.

Who was Haskell B. Curry and what was his main contribution? #flashcard
An American Mathematician who developed Combinatory Logic, a system for defining and using functions without variables.

What is the Curry-Howard Correspondence? #flashcard
A way of merging logic and programming, stating that proofs and programs are equivalent to each other.

What is function currying? #flashcard
The process of transforming a function that takes multiple arguments at once into a chain of functions, each taking a single argument.

Explain the Curry Paradox. #flashcard
It's a paradox that shows that in certain logical systems, if you can refer to a statement's own truth, you can prove anything (e.g., "If this sentence is true, then 2 + 2 = 5").

Explain the Liar Paradox. #flashcard
The statement "This sentence is false." If it's true, it's false; if it's false, it's true, leading to a contradiction. ($A \equiv \neg A$).

Explain Russell's Paradox. #flashcard
It concerns the set $R = \{x \mid x \text{ is a set, } x \notin x\}$ (the set of all sets that do not contain themselves). It leads to a contradiction whether $R$ contains itself or not.

What did the paradoxes (Liar, Curry, Russell) lead to in mathematics? #flashcard
They revealed fundamental flaws in early naive set theory and logic, leading to a "crisis in math" that spurred the development of more rigorous axiomatic systems and laid foundations for computing.

What is the difference between declarative and imperative statements? #flashcard
**Imperative statements** express an action to be performed ("how"). **Declarative statements** express a property to be employed ("what").

Differentiate between imperative and declarative programming paradigms. #flashcard
**Imperative programs** are sequences of imperative statements that express *how* a program will work. **Declarative programs** are sequences of declarative statements that express *what* the program will achieve.

Describe the Functional programming paradigm. #flashcard
Programs are *declarative* and a collection of *side-effect free function definitions*.

What is the difference between syntax and semantics in programming? #flashcard
**Syntax** refers to the raw symbols, their structure, and placement. **Semantics** refers to the meaning or value of each symbol.

What are "values" in programming? #flashcard
Information (data) stored and manipulated by computer programs (e.g., booleans, integers, floats, strings, types, lists, functions).

What is an "expression" in programming? #flashcard
A syntactic entity that *denotes a value*. It specifies how to get a value, but is not the value itself.

What is a "type" in programming? #flashcard
A syntactic entity that denotes a collection of values of a similar form (e.g., `Bool`, `Int`, `Integer -> Integer`).

What are the three steps to prove a statement $P(n)$ is true for all $n \geq n_0$ using mathematical induction? #flashcard
1. **Base Case:** Show $P(n_0)$ is true.
2. **Induction Hypothesis:** Assume $P(k)$ is true for some arbitrary $k \geq n_0$.
3. **Induction Step:** Show that if $P(k)$ is true, then $P(k+1)$ must also be true.

Define a unary function as a rule. #flashcard
A rule $f : I \to O$ that associates members of $I$ (inputs) with at most one member of $O$ (outputs).

Define a unary function as a value. #flashcard
A set $f \subseteq I \times O$ such that if $(x, y) \in f$ and $(x, y') \in f$ then $y=y'$. Each function has a domain $D \subseteq I$ and a range $R \subseteq O$.

Define an n-ary function as a rule. #flashcard
For $n \geq 0$, $f : I_1, \dots, I_n \to O$ is a rule that associates a list of inputs from $I_1, \dots, I_n$ with a member of $O$. Some input lists may not be associated with an output.

Define an n-ary function as a value. #flashcard
A set $f \subseteq I_1 \times \dots \times I_n \times O$ such that if $(x_1, \dots, x_n, y) \in f$ and $(x_1, \dots, x_n, y') \in f$, then $y=y'$. The condition ensures any given list of inputs maps to only one output.

What is the Cartesian Product of sets $A$ and $B$? #flashcard
$A \times B = \{(a, b) \mid a \in A, b \in B\}$, which is the set of all ordered pairs where the first element comes from $A$ and the second from $B$.

What is an ordered pair or tuple? #flashcard
A finite sequence of elements, where the order matters. Tuples can have elements of different types, unlike lists which typically have elements of the same type.

What is the cardinality of a set $A$? #flashcard
The size of set $A$, denoted $|A|$.

What is a "total" function? #flashcard
A function where its domain $D$ is equal to the entire set of possible inputs $I$ ($D=I$), meaning the function is defined for every input.

What is a "partial" function? #flashcard
A function that is not defined for every input in its theoretical input set $I$.

What is a "surjective" function? #flashcard
A function where its range $R$ is equal to the entire set of possible outputs $O$ ($R=O$), meaning every output can be reached by some input.

What is an "injective" function? #flashcard
A one-to-one function where different inputs map to different outputs ($f(a) = f(b) \implies a = b$).

What is a "bijective" function? #flashcard
A function that is both injective and surjective. If a bijection exists between two sets A and B, then $|A| = |B|$.

How is an infinite set defined in terms of cardinality? #flashcard
A set $A$ is infinite if there exists a proper subset $A' \subset A$ such that $|A'| = |A|$.

State some key theorems about cardinality comparing infinite sets. #flashcard
$|\text{even } \mathbb{N}| = |\mathbb{N}|$, $|\mathbb{N}| = |\mathbb{Q}|$, and $|\mathbb{N}| < |\mathbb{R}|$.

What is the cardinality of the set of all programs in any "normal" programming language? #flashcard
It is equal to the cardinality of the natural numbers ($|\mathbb{N}|$).

What is a power set $\mathcal{P}(A)$? #flashcard
The power set of a set $A$ is the set of all subsets of $A$, including the empty set and $A$ itself.

What is the cardinality of the set of decision problems over $\mathbb{N}$? #flashcard
It is equal to the cardinality of the power set of natural numbers, $|\mathcal{P}(\mathbb{N})|$.

What does Gödel’s First Incompleteness Theorem state? #flashcard
For any consistent axiomatic system powerful enough to describe arithmetic, there will always be true statements about natural numbers that cannot be proven within that system.

What does Gödel’s Second Incompleteness Theorem state? #flashcard
Such a system cannot prove its own consistency (that it never leads to contradictions) from inside itself.

How can an n-ary function $f: I_{1}, \dots, I_{n} \to O$ be represented as a unary function using tuples? #flashcard
As $f' : I_{1} \times \dots \times I_{n} \to O$, where $f(x_{1},\dots,x_{n}) = f'((x_{1},\dots, x_{n}))$.

How can an n-ary function $f: I_{1}, \dots, I_{n} \to O$ be represented as a unary function using currying? #flashcard
As $f" : I_{1} \to (I_{2} \to (\cdots (I_{n} \to O) \cdots))$, where $f(x_{1}, \dots, x_{n}) = f"(x_{1})\cdots (x_{n})$.

In Haskell, how are functions typically structured regarding arguments? #flashcard
Every function in Haskell is fundamentally unary (takes one argument) due to currying. Functions that appear to take multiple arguments are actually a chain of unary functions.

Show an example of a curried function and a tuple-based function definition in Haskell for $f(x,y) = x^2 + y^2$. #flashcard
```haskell
-- Curried:
f1 :: Integer -> Integer -> Integer
f1 x y = x^2 + y^2

-- Tuple-based:
f2 :: (Integer, Integer) -> Integer
f2 (x, y) = x^2 + y^2
```

What are the core principles of functional programming? #flashcard
Declarative programs that are side-effect free, results produced by evaluating expressions built from functions, functions defined as first-class values, recursion, avoidance of state change and data mutation, and a focus on "what" instead of "how".

What is mathematical thinking? #flashcard
A process for understanding mathematical aspects of the world (time, space, pattern, measure, logical consequence) based on mathematical models (objects, facts, concepts).

What is scientific thinking? #flashcard
The systematic study of the world through observation and experiment, centered on the scientific method (hypothesis formation and experimentation).

What is engineering thinking? #flashcard
The systematic and rational application of knowledge to serve society, concerned with best practices, understanding problems in terms of systems, using requirements, and maintaining public safety and security.

What is artistic thinking? #flashcard
Fosters the creation of art, concerned with finding inspiration, looking for new ideas, and imposing restrictions to focus creativity.

What does computational thinking include? #flashcard
It includes mathematical, scientific, engineering, and artistic thinking.

Who was Gottfried Leibniz and what were his key contributions to computing? #flashcard
A German polymath who developed calculus, created the binary number system, and designed the Staffelwalze calculator.

What was Leibniz's concept of *characteristica universalis*? #flashcard
A postulated universal language in which all scientific ideas could be expressed.

What was Leibniz's concept of *calculus ratiocinator*? #flashcard
A postulated computing device that could determine the truth or falsity of statements expressed in *characteristica universalis*.

What did Alonzo Church and Alan Turing prove in 1936 regarding Leibniz's dream? #flashcard
They proved that there were undecidable decision problems, meaning it's theoretically impossible to create a computer to solve every problem (like Leibniz's *calculus ratiocinator*).

What is a decision problem? #flashcard
A computational problem that can be posed as a yes–no question on a set of input values.

Give an example of an undecidable decision problem. #flashcard
The Halting Problem.

What is the Church-Turing Thesis? #flashcard
The belief that what is computable is precisely what a Turing machine (or lambda calculus) can compute.

How did Kurt Gödel influence the understanding of computational limits? #flashcard
His First and Second Incompleteness Theorems showed fundamental limitations of formal systems, implying that not all true statements can be proven within a system, and a system cannot prove its own consistency.

Name some key figures who helped lay the groundwork for logic and computing in the 20th century. #flashcard
Alonzo Church (Lambda Calculus), Alan Turing (Turing Machine), Haskell Curry (Combinatory Logic).

What is recursion? #flashcard
A method of defining something (usually a function) in terms of itself, often used as an alternative to loops and proved correct by mathematical induction.

What strategy does recursion typically use? #flashcard
A divide and conquer strategy.

How does the "Noetherian" property relate to recursion? #flashcard
For a recursive function $f(x) = E(f(a_{1}(x)), \dots, f(a_{n}(x)))$, each input $i$ is assigned a natural number $n(i)$ such that $n(a_{m}(i)) < n(i)$. This ensures the natural numbers get smaller and smaller, guaranteeing termination (no infinite strict descending sequences).

Who was Amalie Emmy Noether? #flashcard
A German mathematician known for her research in abstract algebra, particularly ring theory, and for Noether's Theorem in physics.

Compare recursion and iteration in terms of declarative vs. procedural programming. #flashcard
Recursion is **declarative** (language implementation handles evaluation), while iteration is **procedural** (programmer handles evaluation).

Compare recursion and iteration in terms of showing correctness. #flashcard
Recursion is generally **easier to show correctness** (often via induction) than iteration.

Compare recursion and iteration in terms of space efficiency. #flashcard
Loops (iteration) are generally **more space-efficient** than recursion in languages that *do not* implement tail recursion properly. Tail recursion can simulate loops space-efficiently (O(1) space complexity).

What is tail recursion? #flashcard
When a function's computation is performed *before* a recursive call, allowing for O(1) space complexity if the language optimizes it.

Who was Stephen C. Kleene and what were his contributions? #flashcard
A student of Alonzo Church, a founder of computability theory (recursion theory), and known for his contributions to constructive logic and the invention of regular expressions (Regex).

What is logical consequence in logic? #flashcard
If a set of assumptions ($a_1, \dots, a_n$) are true, then the logical consequence $B$ must also be true.

Provide the truth table for $A \implies B$. #flashcard
| A | B | $A \implies B$ |
|---|---|----------------|
| T | T | T              |
| T | F | F              |
| F | T | T              |
| F | F | T              |

What is an ALU? #flashcard
An Arithmetic Logic Unit (ALU) is a digital circuit within the CPU that performs arithmetic and bitwise logical operations.

Why is self-reference dangerous in logic? #flashcard
It can lead to paradoxes (like the Liar's Paradox or Russell's Paradox), which can break the consistency of a logical system.

What is the difference between a "number" and a "numeral"? #flashcard
A **numeral** is the expression or symbol (syntax) used to write a number. A **number** is the value or meaning (semantics) that the numeral represents.

How can pattern matching be used with lists in Haskell? #flashcard
`(x:xs)` matches a list with at least one element, where `x` is the head and `xs` is the tail. `[]` matches an empty list.

What is Boolean algebra? #flashcard
The algebra of truth values, underlying propositional logic.

How do variables behave in functional programming compared to imperative programming? #flashcard
In functional programming, variables are more like mathematical variables; they denote a value and that value does not change (no side effects). They can denote literals or functions.

What is the relationship between testing and software correctness? #flashcard
Testing can show the *incorrectness* of software (by finding bugs), but it cannot prove the software's *correctness* (that it works perfectly in all cases).

State the formula for the sum of the first $n$ natural numbers. #flashcard
$\sum_{i=0}^{n} i = \frac{n(n+1)}{2}$.
[Timestamp: 2025/09/30 18:56:57]

**user**: can you get a definition for computational thinking
[Timestamp: 2025/09/30 23:16:13]

**ai**: Based on your notes, here are a few definitions for computational thinking:

1.  Computational thinking includes **mathematical, scientific, engineering, and artistic thinking**.
2.  Another definition for computational thinking is:
    *   Using the right computational tools in the right way for the problem at hand.
    *   Understanding the limits and pitfalls of computational tools.
[Timestamp: 2025/09/30 23:16:18]

**user**: hey what is your name
[Timestamp: 2025/10/01 12:01:21]

**ai**: I am Obsidian Copilot.
[Timestamp: 2025/10/01 12:01:23]

**user**: could you explain mathematical reasioning some more?
[Timestamp: 2025/10/01 12:17:52]

**ai**: Based on your notes, **Mathematical Thinking** is defined as:

Mathematics is a process for understanding the mathematical aspects of the world we live in. These aspects can include:
*   Time
*   Space
*   Pattern
*   Measure
*   Logical consequence

This process is built upon **mathematical models**, which are composed of:
*   **Objects:** The fundamental entities within the model.
*   **Facts:** Established truths or properties about these objects.
*   **Concepts:** Abstract ideas or relationships that define how the objects and facts interact.

For example, consider the **Counting Model**:
*   **Objects:** Natural numbers (1, 2, 3, ...).
*   **Concepts:** Every number has a successor (you can always count one more).
*   **Facts:** When counting backwards, you eventually stop (at 0 or 1, depending on the definition of natural numbers).

By studying and expanding on such models (like adding operations such as addition and subtraction to the counting model), we gain a deeper understanding of what the model describes and, by extension, the mathematical aspects of the world.
[Timestamp: 2025/10/01 12:17:57]

**user**: can you give examples of more models
[Timestamp: 2025/10/01 12:18:19]

**ai**: Certainly! Building on the idea of mathematical models consisting of objects, facts, and concepts, here are a few more examples:

1.  **Euclidean Geometry Model:**
    *   **Objects:** Points, lines, planes, angles, shapes (e.g., triangles, circles).
    *   **Concepts:** Distance, parallelism, perpendicularity, congruence, similarity, area, volume.
    *   **Facts:** The sum of angles in a triangle is 180 degrees; through any two distinct points, there is exactly one line; parallel lines never intersect.

2.  **Set Theory Model:**
    *   **Objects:** Sets (collections of elements), individual elements.
    *   **Concepts:** Membership ($\in$), subset ($\subseteq$), union ($\cup$), intersection ($\cap$), complement, cardinality (size of a set).
    *   **Facts:** The empty set is a subset of every set; De Morgan's laws apply to set operations; if $A \subseteq B$ and $B \subseteq A$, then $A = B$.

3.  **Real Number System Model ($\mathbb{R}$):**
    *   **Objects:** Real numbers (including integers, rationals, irrationals).
    *   **Concepts:** Addition, subtraction, multiplication, division, ordering ($<, >$), limits, continuity.
    *   **Facts:** Commutative and associative properties of addition and multiplication; existence of additive and multiplicative inverses; the density of rational numbers within real numbers (between any two real numbers, there's a rational number).

Each of these models provides a structured way to reason about a specific aspect of mathematics, allowing for deeper understanding and the derivation of new truths within that system.
[Timestamp: 2025/10/01 12:18:29]

**user**: hey
[Timestamp: 2025/10/01 12:20:31]

**ai**: 402 Insufficient Balance
[Timestamp: 2025/10/01 12:20:33]

**user**: [[Logic]] [[Numbers]] [[Functional Programming]] [[Computational Thinking]] [[Recursion]] [[discussion 4c]] [[discussion 4a]] [[discussion 3c]] [[discussion 3b]] [[discussion 3a]] [[discussion 2c]] [[discussion 2b]] [[discussion 2a]] [[Discussion Session 01b day1-p2]]

could you make a practice test for my midterm
[Timestamp: 2025/10/01 12:22:53]

**ai**: Here is a practice test for your midterm, covering the topics from your notes: Logic, Numbers, Functional Programming, Computational Thinking, and Recursion.

---

## Midterm Practice Test

**Instructions:** Answer all questions to the best of your ability. Show your work where applicable.

---

### Part 1: Definitions and Short Answer (2 points each)

1.  Define "Computational Thinking" in your own words, including its two main aspects.
2.  What are the three core components that define a "logic" as a reasoning system?
3.  Explain the concept of "vacuous truth" in the context of logical implication ($A \implies B$).
4.  What is the primary difference between a "number" and a "numeral"?
5.  Briefly explain the purpose of "two's complement" in representing integers on computers.
6.  What is "function currying"? Provide a simple mathematical example.
7.  Distinguish between "declarative" and "imperative" programming paradigms.
8.  What is the difference between "syntax" and "semantics" in programming languages?
9.  Define "recursion." What mathematical concept is used to prove its correctness?
10. What is "tail recursion" and why is it important for efficiency?

### Part 2: True/False (1 point each)

State whether the following statements are True or False. If False, briefly explain why.

1.  The set of natural numbers ($\mathbb{N}$) is a subset of the modular integers ($\mathbb{Z}_n$).
2.  Arithmetic operations on machine integers can never cause overflow if the numbers are within the initial range.
3.  Floating point numbers can perfectly represent all rational numbers.
4.  In Haskell, `Int` is generally slower but can represent a larger range of integers than `Integer`.
5.  The Liar Paradox and Russell's Paradox highlighted fundamental flaws in early naive set theory.
6.  A "total" function is one where its range is equal to the entire set of possible outputs.
7.  The cardinality of the set of all natural numbers ($|\mathbb{N}|$) is equal to the cardinality of the set of all real numbers ($|\mathbb{R}|$).
8.  The Church-Turing Thesis states that all decision problems are solvable computationally.
9.  In Haskell, `if c then e1 else e2` is a conditional *statement*.
10. Recursion is generally easier to show correctness for than iteration.

### Part 3: Application and Problem Solving (Varies)

1.  **Logic & Truth Tables (4 points)**
    Construct a truth table for the Boolean expression `(A && B) || (not A)`.

2.  **De Morgan's Laws (3 points)**
    Apply De Morgan's laws to simplify the expression `not (b1 || (not b2))`. Show your steps.

3.  **Number Representation (4 points)**
    Represent the decimal number -5 in 4-bit two's complement. Show your steps. What is the range of numbers representable in 4-bit two's complement?

4.  **Haskell Conditionals (5 points)**
    Write a Haskell function `classifyNumber :: Integer -> String` that returns:
    *   "Positive" if the number is greater than 0
    *   "Negative" if the number is less than 0
    *   "Zero" if the number is 0
    Use **guarded functions**.

5.  **Haskell Functions & Types (6 points)**
    Consider the following Haskell function definitions:
    ```haskell
    f :: (Integer, Integer) -> Integer
    f (x, y) = x * x + y * y

    g :: Integer -> Integer -> Integer
    g x y = x * x + y * y
    ```
    a. Explain how `f` and `g` differ in terms of how they take arguments, relating it to n-ary vs. unary functions and currying.
    b. What is the type of `g 5`? Explain your answer.

6.  **Recursion (6 points)**
    You are given the `bigSum` function from your notes:
    ```haskell
    bigSum :: Num a => Integer -> Integer -> (Integer -> a) -> a
    bigSum m n f
        | m > n  = 0
        | m <= n = bigSum m (n - 1) f + f n
    ```
    Trace the evaluation of `bigSum 1 3 (\x -> x * 2)`. Show the recursive calls and their results.

### Part 4: Conceptual Explanation (Varies)

1.  **Limits of Computing (5 points)**
    Explain Gottfried Leibniz's vision of *characteristica universalis* and *calculus ratiocinator*. How did Alonzo Church and Alan Turing prove this vision to be "not theoretically possible"?

2.  **Floating Point Precision (5 points)**
    Discuss two significant issues that arise from the fixed-bit representation and arithmetic of floating-point numbers. Provide a practical example for one of these issues.

3.  **Proof by Induction (5 points)**
    Outline the three essential steps of a proof by mathematical induction. Use the "dominoes falling" analogy to illustrate these steps.

---
Good luck with your midterm!
[Timestamp: 2025/10/01 12:23:18]

**user**: could you make it multiple choice
[Timestamp: 2025/10/01 12:26:50]

**ai**: Okay, here is a multiple-choice practice test for your midterm, based on the provided notes.

---

## Midterm Practice Test (Multiple Choice)

**Instructions:** Choose the best answer for each question.

---

### Part 1: Computational Thinking & Logic

1.  Which of the following is NOT one of the two main aspects of computational thinking as defined in your notes?
    a) Using the right computational tools for the problem at hand.
    b) Understanding the limits and pitfalls of computational tools.
    c) Developing new computational algorithms for every problem.
    d) Integrating mathematical, scientific, engineering, and artistic thinking.

2.  A logic, as a reasoning system, must include all of the following EXCEPT:
    a) A language with a formal syntax and precise semantics.
    b) Concepts of truth and logical consequence.
    c) A proof system for establishing statements.
    d) A guarantee that all statements within the language are decidable.

3.  In first-order logic, what do quantifiers like $\forall$ and $\exists$ primarily deal with?
    a) The truth values of simple propositions.
    b) Breaking statements into objects and properties/relations.
    c) The structure of proof systems.
    d) The formal syntax of the language.

4.  Consider the implication $b1 \implies b2$. If $b1$ is False, what is the truth value of the implication, and what is this concept called?
    a) False, known as a contradiction.
    b) True, known as vacuous truth.
    c) True, known as logical consequence.
    d) Undefined, as the condition did not occur.

5.  Which of the following correctly applies De Morgan's laws to `not (A and (not B))`?
    a) `(not A) and B`
    b) `(not A) or B`
    c) `(not A) and (not B)`
    d) `A or (not B)`

6.  In Haskell, what is the primary characteristic of a "conditional expression" like `if c then e1 else e2`?
    a) It is a command that performs an action.
    b) Its value depends on a boolean expression `c`.
    c) It must always evaluate both `e1` and `e2`.
    d) It is a type of predicate.

7.  Who first demonstrated that there were unsolvable decision problems using Lambda Calculus?
    a) Alan Turing
    b) Gottfried Leibniz
    c) Alonzo Church
    d) Kurt Gödel

### Part 2: Numbers

8.  Which of the following correctly represents the subset relationship between number systems?
    a) $\mathbb{N} \subseteq \mathbb{Z}_n \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}$
    b) $\mathbb{Z}_n \subseteq \mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}$
    c) $\mathbb{C} \subseteq \mathbb{R} \subseteq \mathbb{Q} \subseteq \mathbb{Z} \subseteq \mathbb{N} \subseteq \mathbb{Z}_n$
    d) $\mathbb{N} \subseteq \mathbb{Q} \subseteq \mathbb{Z} \subseteq \mathbb{R} \subseteq \mathbb{C} \subseteq \mathbb{Z}_n$

9.  What is the decimal value of the binary number $(101.11)_2$?
    a) 5.375
    b) 5.75
    c) 6.25
    d) 6.75

10. To negate a number in two's complement, you should:
    a) Invert its bits.
    b) Add 1 to the number.
    c) Invert its bits and then add 1.
    d) Subtract 1 from the number and then invert its bits.

11. Which of the following is a common issue when performing arithmetic operations on machine integers?
    a) Underflow
    b) NaN (Not a Number)
    c) Overflow
    d) Loss of precision

12. Why is comparing two floating-point numbers for exact equality (`x == y`) generally discouraged?
    a) Floating-point numbers are always integers.
    b) Floating-point arithmetic is non-associative.
    c) Only a small number of real numbers are exactly represented, leading to precision issues.
    d) It can cause a stack overflow.

13. In Haskell, which numeric type is designed to represent all integers without a fixed memory limit (until system memory runs out)?
    a) `Int`
    b) `Float`
    c) `Double`
    d) `Integer`

### Part 3: Functional Programming & Recursion

14. What is the core idea behind Haskell B. Curry's "Combinatory Logic"?
    a) Proving the undecidability of first-order logic.
    b) Defining and using functions without variables.
    c) Developing the binary number system.
    d) Creating the first mechanical calculator.

15. Which paradox revealed fundamental flaws in early naive set theory by considering "the set of all sets that do not contain themselves"?
    a) Liar Paradox
    b) Curry Paradox
    c) Russell's Paradox
    d) Halting Problem

16. A program that is a collection of "side-effect free function definitions" and focuses on "what" the program will achieve rather than "how" is characteristic of which programming paradigm?
    a) Procedural
    b) Object-Oriented
    c) Functional
    d) Imperative

17. What is the difference between an "expression" and a "value" in programming?
    a) An expression is a syntactic entity that denotes a value, while a value is the information itself.
    b) An expression is always a literal, while a value is always a function.
    c) A value is a sequence of symbols, while an expression is its meaning.
    d) There is no practical difference; the terms are interchangeable.

18. To prove a statement $P(n)$ is true for all natural numbers $n \geq n_0$ using mathematical induction, which of the following is NOT a required step?
    a) Show that $P(n_0)$ is true (Base Case).
    b) Assume $P(k)$ is true for some arbitrary $k \geq n_0$ (Induction Hypothesis).
    c) Show that $P(k+1)$ is true (Induction Step).
    d) Show that $P(n)$ is false for at least one $n < n_0$.

19. An n-ary function $f: I_1, \dots, I_n \to O$ can be represented as a unary function by:
    a) Only using the first input $I_1$.
    b) Converting the multiple inputs into a single tuple input.
    c) Making the function recursive.
    d) Defining it as a predicate.

20. Which of the following statements about recursion and iteration is TRUE, according to your notes?
    a) Iteration is generally easier to show correctness for than recursion.
    b) Recursion is a procedural approach, while iteration is declarative.
    c) Loops are more space-efficient than recursion in languages that do not implement tail recursion properly.
    d) Tail recursion always has O(N) space complexity.

21. What is the primary purpose of the "Noetherian" property in the context of recursion?
    a) To ensure that functions are always total.
    b) To guarantee that recursive calls eventually terminate.
    c) To optimize the space complexity of recursive functions.
    d) To prove the undecidability of certain problems.

22. Gödel's First Incompleteness Theorem states that for any consistent axiomatic system powerful enough to describe arithmetic:
    a) All true statements about natural numbers can be proven within that system.
    b) There will always be true statements about natural numbers that cannot be proven within that system.
    c) The system can always prove its own consistency.
    d) The system must be incomplete if it is inconsistent.

---
**Answer Key:**

1.  c)
2.  d)
3.  b)
4.  b)
5.  b)
6.  b)
7.  c)
8.  b)
9.  b)
10. c)
11. c)
12. c)
13. d)
14. b)
15. c)
16. c)
17. a)
18. d)
19. b)
20. c)
21. b)
22. b)
[Timestamp: 2025/10/01 12:27:16]

**user**: could you make another one
[Timestamp: 2025/10/01 12:44:01]

**ai**: Here is another multiple-choice practice test for your midterm!

---

## Midterm Practice Test 2 (Multiple Choice)

**Instructions:** Choose the best answer for each question.

---

### Part 1: Computational Thinking & Logic

1.  According to your notes, what is the fundamental question that computational thinking addresses regarding computing?
    a) How can we make computers faster and more efficient?
    b) What are the theoretical and practical limits of computing?
    c) How can we integrate artistic thinking into software development?
    d) What is the best programming language for solving complex problems?

2.  Gottfried Leibniz's vision of a *calculus ratiocinator* was ultimately proven impossible by Church and Turing because:
    a) The technology to build such a device did not exist.
    b) It was discovered that not every problem can be solved computationally.
    c) Leibniz's *characteristica universalis* was too complex.
    d) The binary number system was not yet fully developed.

3.  Which of the following is an example of a "predicate" in first-order logic, as described in your notes?
    a) `True`
    b) `&&` (conjunction)
    c) `Human(x)`
    d) `if x then y else z`

4.  In Haskell, which of the following is NOT explicitly mentioned as a form of quantifier first-order logic embedded in the language?
    a) Boolean functions
    b) Predicates
    c) Loops (for/while)
    d) Conditional expressions

5.  What is the result of applying De Morgan's laws to `not (A or B)`?
    a) `(not A) or (not B)`
    b) `(not A) and (not B)`
    c) `A and B`
    d) `A or (not B)`

6.  Consider the Haskell code:
    ```haskell
    boolToInt :: Bool -> Int
    boolToInt b =
        case b of
            False -> 0
            True -> 1
    ```
    This is an example of a:
    a) Guarded function
    b) Conditional expression
    c) Case expression
    d) Predicate definition

7.  What is the significance of Alonzo Church's work with Lambda Calculus in the history of computing?
    a) It led to the development of the first electronic computer.
    b) It provided a computational model based on function application and abstraction.
    c) It proved that all mathematical problems are solvable.
    d) It was the first programming language.

### Part 2: Numbers

8.  Who is credited with introducing arithmetic based on the Hindu-Arabic numeral system to the Middle East and Europe, and from whom the word "algorithm" is derived?
    a) Leonardo of Pisa (Fibonacci)
    b) George Boole
    c) Gottfried Leibniz
    d) Mohammad Al-Khwarizmi

9.  How do computers typically represent rational numbers in base 2 scientific notation with a fixed number of bits?
    a) As machine integers.
    b) As modular integers.
    c) As floating point numbers.
    d) As complex numbers.

10. If you are working with 8-bit two's complement, what is the binary representation of -28?
    a) 00011100
    b) 11100011
    c) 11100100
    d) 10011100

11. Which of the following is a special floating-point number returned when a result is too large to be represented (positive overflow)?
    a) -0.0
    b) NaN
    c) Infinity
    d) Underflow

12. What is a key characteristic of `Integer` type in Haskell compared to `Int`?
    a) `Integer` is faster for most operations.
    b) `Integer` has a fixed size (e.g., 32-bit or 64-bit).
    c) `Integer` can represent all integers, limited only by available memory.
    d) `Integer` is primarily used for floating-point arithmetic.

13. Why might `(a + b) + c` not always equal `a + (b + c)` when `a`, `b`, and `c` are floating-point numbers?
    a) Floating-point addition is not commutative.
    b) Floating-point numbers cannot be negative.
    c) Floating-point addition is not associative due to precision limitations.
    d) This only happens with `Int` types, not `Float` or `Double`.

### Part 3: Functional Programming & Recursion

14. The "Curry-Howard Correspondence" suggests a deep connection between:
    a) Hardware and software.
    b) Imperative and declarative programming.
    c) Proofs and programs.
    d) Syntax and semantics.

15. What is the main issue highlighted by the Curry Paradox?
    a) The inability to define functions without variables.
    b) The contradiction arising from self-referential statements leading to false conclusions.
    c) The problem of representing infinite sets.
    d) The difficulty in proving software correctness.

16. Which of the following best describes "values" in the context of programming?
    a) The raw symbols typed by a programmer.
    b) Syntactic entities that denote other expressions.
    c) Information (data) stored and manipulated by computer programs.
    d) The rules for combining symbols into valid programs.

17. What is a "literal" expression?
    a) An expression formed by applying a function to other expressions.
    b) An expression whose form directly tells you its value (e.g., `2.3`, `"cat"`).
    c) An identifier like `x` or `rotateHorse`.
    d) An expression that always evaluates to `True` or `False`.

18. A function $f: I \to O$ is considered "injective" if:
    a) Its domain is the entire set of possible inputs.
    b) Its range is the entire set of possible outputs.
    c) Different inputs always map to different outputs.
    d) It is defined in terms of itself.

19. The theorem that states $|\mathbb{N}| < |\mathbb{R}|$ (there are "more" real numbers than natural numbers) is typically proved using:
    a) Mathematical induction.
    b) The pigeonhole principle.
    c) A diagonalization argument.
    d) Modular arithmetic.

20. What is the primary characteristic of a function defined by recursion?
    a) It uses loops to repeat operations.
    b) It defines something in terms of itself.
    c) It avoids side-effects by mutating data.
    d) It always has O(1) space complexity.

21. Which of the following is a key difference between recursion and iteration, as noted in your materials?
    a) Recursion is procedural, iteration is declarative.
    b) Recursion is harder to show correctness for than iteration.
    c) Recursion relies on the programmer for evaluation, iteration relies on the language implementation.
    d) Recursion is declarative, iteration is procedural.

22. Stephen C. Kleene is recognized as one of the founders of which subfield of logic?
    a) Set theory.
    b) Computability theory (recursion theory).
    c) Boolean algebra.
    d) Infinitesimal calculus.

---
**Answer Key:**

1.  b)
2.  b)
3.  c)
4.  c)
5.  b)
6.  c)
7.  b)
8.  d)
9.  c)
10. c)
11. c)
12. c)
13. c)
14. c)
15. b)
16. c)
17. b)
18. c)
19. c)
20. b)
21. d)
22. b)
[Timestamp: 2025/10/01 12:44:20]

**user**: could you explain injective, surjective, bijective, total, partial, and what does A and A' mean
[Timestamp: 2025/10/01 12:58:57]

**ai**: These terms are fundamental in mathematics and computer science, especially when discussing functions and sets. Let's break them down based on your notes:

### Functions: Injective, Surjective, Bijective, Total, Partial

These terms describe different properties of functions, particularly how inputs map to outputs.

To understand these, let's consider a function $f: I \to O$, where $I$ is the set of all *possible* inputs (the domain) and $O$ is the set of all *possible* outputs (the codomain). The function $f$ itself has a *domain* $D \subseteq I$ (the set of *valid* inputs for which it produces an output) and a *range* $R \subseteq O$ (the set of *actual* outputs it produces).

1.  **Total Function**
    *   **Definition (from notes):** "D = I, the domain is the whole set of inputs, the function is defined in every input."
    *   **Explanation:** A function is **total** if it produces an output for *every single possible input* in its theoretical domain ($I$). There are no inputs for which the function is undefined or "crashes."
    *   **Example:** The function $f(x) = x^2$ for $x \in \mathbb{Z}$ (integers) is total because every integer can be squared to produce another integer.
    *   **Note from your notes:** "in computing we don't assume that all functions are total."

2.  **Partial Function**
    *   **Definition (from notes):** "is the same as total but it is not defined in every input."
    *   **Explanation:** A function is **partial** if there are some inputs in its theoretical domain ($I$) for which it does *not* produce an output.
    *   **Example:** The function $f(x) = 1/x$ for $x \in \mathbb{R}$ (real numbers) is partial because it is undefined when $x=0$.
    *   **Note from your notes:** "in haskell, functions are partial for the most part."

3.  **Injective Function (One-to-One)**
    *   **Definition (from notes):** "different inputs map to different outputs" or "$f(a) = f(b) \implies a = b$."
    *   **Explanation:** An **injective** function ensures that every distinct input maps to a distinct output. You will never have two different inputs producing the exact same output.
    *   **Analogy:** Imagine assigning seats to students. If the function is injective, each student gets their *own unique* seat; no two students share the same seat.
    *   **Example:** $f(x) = x + 1$ for $x \in \mathbb{Z}$. If $x_1 + 1 = x_2 + 1$, then $x_1 = x_2$.

4.  **Surjective Function (Onto)**
    *   **Definition (from notes):** "The range is the entire set of outputs."
    *   **Explanation:** A **surjective** function means that every element in the *codomain* (the set of all *possible* outputs, $O$) is actually reached by at least one input from the domain. Nothing in the output set is "left out" or "unmapped."
    *   **Analogy:** Every seat in a classroom is filled by at least one student.
    *   **Example:** $f(x) = x \pmod 2$ (remainder when divided by 2) for $x \in \mathbb{Z}$ to $O = \{0, 1\}$. Both 0 and 1 in the output set are reached (e.g., $f(2)=0$, $f(3)=1$).

5.  **Bijective Function**
    *   **Definition (from notes):** "both injective and bijective" (meaning injective and surjective). Also, "bijective = total + injective + surjective" and "Every element of A maps to a unique element of B (injective) AND Every element of B is mapped by some element of A (surjective)."
    *   **Explanation:** A **bijective** function is both injective (one-to-one) and surjective (onto). This means there's a perfect one-to-one correspondence between the elements of the domain and the elements of the codomain. Each input maps to exactly one unique output, and every possible output is mapped by exactly one unique input.
    *   **Analogy:** A perfectly matched dance where every person has exactly one partner, and no one is left out.
    *   **Significance (from notes):** "If a bijection exists between two sets A and B, then $|A| = |B|$." This is crucial for comparing the sizes (cardinality) of infinite sets.
    *   **Example:** $f(x) = x + 1$ for $x \in \mathbb{Z}$ to $O = \mathbb{Z}$. It's injective (as shown above) and surjective (for any $y \in \mathbb{Z}$, $y-1$ is an integer that maps to $y$).

### Sets: A and A'

These symbols are used in your notes to define an **infinite set**.

*   **A:** This represents the original set being considered. It's typically the larger set, which we are trying to determine if it's infinite.
*   **A':** This represents a **proper subset** of A.
    *   A "proper subset" means that $A'$ contains some, but not all, elements of $A$. Crucially, $A'$ is not equal to $A$. For example, if $A = \{1, 2, 3\}$, then $A' = \{1, 2\}$ is a proper subset.

The definition of an infinite set from your notes is:
"A set $A$ is infinite if there exists a proper subset $A' \subset A \text{ such that } |A'| = |A|$."

**In simpler terms:** A set is infinite if you can take some elements out of it (forming a proper subset $A'$), and yet the "size" (cardinality) of that smaller subset $A'$ is still the same as the original set $A$. This is a counter-intuitive property that only infinite sets possess.

**Example from your notes:**
*   $A = \mathbb{N}$ (the set of all natural numbers: $\{0, 1, 2, 3, \dots\}$)
*   $A' = \text{even } \mathbb{N}$ (the set of all even natural numbers: $\{0, 2, 4, 6, \dots\}$)

Here, $A'$ is clearly a proper subset of $A$ (it's missing all the odd numbers). However, your notes state that $|\text{even } \mathbb{N}| = |\mathbb{N}|$. This means that even though $A'$ is "smaller" in the sense of being a proper subset, it has the same cardinality as $A$, which is why $\mathbb{N}$ is an infinite set.
[Timestamp: 2025/10/01 12:59:22]

**user**: can you explain what f : i -> o means
[Timestamp: 2025/10/01 19:19:17]

**ai**: The notation `f : I -> O` is a fundamental way to describe a function in mathematics and computer science. Let's break down each part:

*   **`f`**: This is the **name of the function**. It's the identifier you use to refer to and call the function.
*   **`:`**: This symbol means "has type" or "is a function from...to...". It separates the function's name from its type signature.
*   **`I`**: This represents the **domain** of the function, or the **type of its input**. It's the set of all possible values that you can give to the function as an argument.
*   **`->`**: This arrow indicates that the function "maps to" or "produces an output of type/from set...".
*   **`O`**: This represents the **codomain** of the function, or the **type of its output**. It's the set of all possible values that the function *could* produce.

**In simple terms:**

`f : I -> O` means "f is a function that takes an input from the set (or of the type) `I`, and produces an output that belongs to the set (or is of the type) `O`."

**Examples from your notes:**

1.  **`f : Z -> Q`** (from [[Functional Programming]]):
    *   `f` is the function name.
    *   `Z` (Integers) is the input type/set.
    *   `Q` (Rational Numbers) is the output type/set.
    *   This means `f` is a function that takes an integer as input and produces a rational number as output. (e.g., $x \mapsto 1/x$)

2.  **`t1^i -> ... -> tn^i -> t^o`** (from [[Functional Programming]] for Haskell functions):
    *   This shows a curried function type.
    *   `t1^i` is the type of the first input.
    *   `tn^i` is the type of the last input.
    *   `t^o` is the type of the final output.
    *   The arrows indicate a chain of functions, each taking one input and returning another function until the final output is produced.

This notation is crucial for understanding what kind of data a function expects and what kind of data it will return, which is fundamental for type checking and reasoning about program correctness.
[Timestamp: 2025/10/01 19:19:26]

**user**: what is this notation called in math
[Timestamp: 2025/10/01 19:19:44]

**ai**: This notation, `f : I -> O`, is generally called **function notation** or **function signature notation** in mathematics.

More specifically:
*   It's a way to declare the **domain** (`I`) and **codomain** (`O`) of a function `f`.
*   It's also referred to as specifying the **type** of the function, especially in computer science contexts (like Haskell, where `I` and `O` would be types).
[Timestamp: 2025/10/01 19:19:49]