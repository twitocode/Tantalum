---
TARGET DECK: Year 1::CS 1JC3::Midterm 1
---

What is another definition for computational thinking? #flashcard
Using the right computational tools in the right way for the problem at hand, and understanding the limits and pitfalls of computational tools.
<!--ID: 1759275611786-->


What is logic? #flashcard
The study of the principles underlying sound reasoning; a branch of math underlying mathematical reasoning and computing.
<!--ID: 1759275611788-->


What are the three main components of a reasoning system (a logic)? #flashcard
1. A language with a **formal syntax** and **precise semantics**.
2. Concepts of truth and logical consequence.
3. A proof system for establishing that statements in the language are true.
<!--ID: 1759275611789-->


Name some theoretical use-cases of logic. #flashcard
Studying computation, programming languages, and software design.
<!--ID: 1759275611790-->


Name some practical use-cases of logic. #flashcard
Precise documentation about software artifacts, reasoning about software artifacts with math software (proof assistants), implementing electronic circuits, and reasoning facilities in programming languages.
<!--ID: 1759275611791-->


What does first-order logic deal with and what does it add to propositional logic? #flashcard
It deals with breaking statements into objects and properties/relations. It adds predicates (e.g., $Human(x)$) and quantifiers (Universal $\forall$, Existential $\exists$).
<!--ID: 1759275611792-->


What is a Boolean? #flashcard
A standard truth value (True or False), named after George Boole.
<!--ID: 1759275611793-->


What is a Boolean expression? #flashcard
Any expression that denotes the values True or False, used to make decisions.
<!--ID: 1759275611794-->


What is a Boolean function? #flashcard
A function of the type $\text{Bool} \to \dots \to\text{Bool}\to\text{Bool}$, whose meaning is given by truth tables.
<!--ID: 1759275611795-->


Explain the concept of "vacuous truth" in logical implication ($b1 \implies b2$). #flashcard
If the condition $b1$ doesn't happen (i.e., $b1$ is False), the implication makes no promise, so it's considered true by default.
<!--ID: 1759275611796-->


Apply De Morgan's laws to `not (b1 and (not b2))`. #flashcard
`(not b1) or (not (not b2))` which simplifies to `(not b1) or b2`.
<!--ID: 1759275611797-->


What is a predicate? #flashcard
A function that returns a boolean, of the type $t_{1} \to \dots\to t_{n}\to Bool$. A boolean function is a special kind of predicate.
<!--ID: 1759275611798-->


How is a conditional expression written in Haskell and what is its purpose? #flashcard
`if c then e1 else e2`, where `c` is a boolean expression. Its value depends on `c`, and it's important for selective code evaluation.
<!--ID: 1759275611799-->


What are guarded functions in Haskell? #flashcard
A convenient alternative to defining a function using conditionals, where multiple boolean expressions (guards) determine which expression is evaluated.
<!--ID: 1759275611800-->


What is a case expression in Haskell? #flashcard
A generalization of a conditional expression that enables a value to be chosen from a set of options by matching an expression's value against patterns.
<!--ID: 1759275611801-->


What happens in Haskell if a case expression is evaluated with a value that does not have a matching pattern? #flashcard
The result is `undefined`.
<!--ID: 1759275611802-->


Who was Alonzo Church and what were his key contributions? #flashcard
He first showed there were unsolvable decision problems (Church's Theorem) using Lambda Calculus and developed Lambda Calculus as a computational model.
<!--ID: 1759275611803-->


What does Church's Theorem state about first-order logic? #flashcard
First-order logic is undecidable, meaning there is no algorithm to determine if a given first-order formula is always true.
<!--ID: 1759275611804-->


Explain lambda notation $\lambda x: \alpha . B$. #flashcard
It denotes a function $f : \alpha \to \beta$ such that $f(a) = B[x \mapsto a]$, where $x$ is the input variable of type $\alpha$, and $B$ is the expression of type $\beta$ that defines the function's body.
<!--ID: 1759275611805-->


List the main families of number systems. #flashcard
Natural numbers ($\mathbb{N}$), Integers ($\mathbb{Z}$), Rational numbers ($\mathbb{Q}$), Real numbers ($\mathbb{R}$), Complex numbers ($\mathbb{C}$), and Modular integers ($\mathbb{Z}_{n}$).
<!--ID: 1759275611806-->


Describe the subset relationship between the main number systems. #flashcard
$\mathbb{Z}_{n} \subseteq \mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}$.
<!--ID: 1759275611807-->


What are numeral systems? #flashcard
A writing system for expressing numbers (e.g., Roman numerals, Hindu-Arabic numerals).
<!--ID: 1759275611808-->


Who was Mohammad Al-Khwarizmi and what were his contributions? #flashcard
He introduced arithmetic based on the Hindu-Arabic numeral system to the Middle East and Europe (giving us the word "algorithm") and showed how to solve linear and quadratic equations algebraically (giving us the word "algebra").
<!--ID: 1759275611809-->


How is a number $(a_n a_{n-1} \dots a_1 a_0)_b$ represented in base $b$? #flashcard
$(a_n a_{n-1} \dots a_1 a_0)_b = \sum_{k=0}^{n} a_k b^k$.
<!--ID: 1759275611810-->


How do computers represent members of infinite number systems using a fixed number of bits? #flashcard
Each member is represented using a fixed number of bits (e.g., 64-bit numbers), which is efficient but can only represent a finite subset of the numbers.
<!--ID: 1759275611811-->


How do computers represent members of infinite number systems using an unbounded number of bits? #flashcard
Every member can be represented, but it has very bad space and time complexity.
<!--ID: 1759275611812-->


How are integers represented in computers using a fixed number of bits? #flashcard
Using two's complement with a fixed number of bits (e.g., $2^n$ bits). This system has one 0, $2^{n-1}-1$ positives, and $2^{n-1}$ negatives.
<!--ID: 1759275611813-->


How do you negate a number in two's complement? #flashcard
Invert all its bits and then add 1.
<!--ID: 1759275611814-->


For a 4-bit two's complement system, what is the highest positive number and what is the lowest negative number? #flashcard
Highest positive: 0111 (7). Lowest negative: 1000 (-8).
<!--ID: 1759275611815-->


What is a potential issue when performing arithmetic operations on machine integers? #flashcard
Arithmetic operations on machine integers can cause **overflow**, where the result exceeds the maximum representable value for the fixed number of bits.
<!--ID: 1759275611816-->


How are floating point numbers represented? #flashcard
As rational numbers in base 2 scientific notation ($\pm 1.m *2^e$) with a fixed number of bits, where $m$ is the mantissa and $e$ is the exponent.
<!--ID: 1759275611817-->


Name some special numbers that floating point representation can handle. #flashcard
-0.0, 0.0, Infinity, -Infinity, NaN (Not a Number).
<!--ID: 1759275611818-->


What are the potential issues with arithmetic operations on floating point numbers? #flashcard
They return the best approximation, can result in underflow (-0.0 or 0.0), positive overflow (Infinity), negative overflow (-Infinity), or NaN (if undefined).
<!--ID: 1759275611819-->


Why should one be careful when comparing floating point numbers for equality (e.g., `x == y`)? #flashcard
Due to lack of precision, `x == y` is very unlikely to be true even if they are mathematically equal. Instead, use `abs (f x) < epsilon`.
<!--ID: 1759275611820-->


List the main numeric types in Haskell. #flashcard
`Int` (32/64-bit machine integers), `Integer` (all integers), `Float` (32-bit floating point), `Double` (64-bit floating point), `Rational` (all rational numbers).
<!--ID: 1759275611821-->


What is the difference between `Int` and `Integer` types in Haskell? #flashcard
`Int` represents machine integers (fixed size, typically 32-bit or 64-bit), with a limited range. `Integer` represents all integers, growing until memory runs out, but is generally slower.
<!--ID: 1759275611822-->


Who was Haskell B. Curry and what was his main contribution? #flashcard
An American Mathematician who developed Combinatory Logic, a system for defining and using functions without variables.
<!--ID: 1759275611823-->


What is the Curry-Howard Correspondence? #flashcard
A way of merging logic and programming, stating that proofs and programs are equivalent to each other.
<!--ID: 1759275611824-->


What is function currying? #flashcard
The process of transforming a function that takes multiple arguments at once into a chain of functions, each taking a single argument.
<!--ID: 1759275611825-->


Explain the Curry Paradox. #flashcard
It's a paradox that shows that in certain logical systems, if you can refer to a statement's own truth, you can prove anything (e.g., "If this sentence is true, then 2 + 2 = 5").
<!--ID: 1759275611826-->


Explain the Liar Paradox. #flashcard
The statement "This sentence is false." If it's true, it's false; if it's false, it's true, leading to a contradiction. ($A \equiv \neg A$).
<!--ID: 1759275611827-->


Explain Russell's Paradox. #flashcard
It concerns the set $R = \{x \mid x \text{ is a set, } x \notin x\}$ (the set of all sets that do not contain themselves). It leads to a contradiction whether $R$ contains itself or not.
<!--ID: 1759275611828-->


What did the paradoxes (Liar, Curry, Russell) lead to in mathematics? #flashcard
They revealed fundamental flaws in early naive set theory and logic, leading to a "crisis in math" that spurred the development of more rigorous axiomatic systems and laid foundations for computing.
<!--ID: 1759275611829-->


What is the difference between declarative and imperative statements? #flashcard
**Imperative statements** express an action to be performed ("how"). **Declarative statements** express a property to be employed ("what").
<!--ID: 1759275611830-->


Differentiate between imperative and declarative programming paradigms. #flashcard
**Imperative programs** are sequences of imperative statements that express *how* a program will work. **Declarative programs** are sequences of declarative statements that express *what* the program will achieve.
<!--ID: 1759275611831-->


Describe the Functional programming paradigm. #flashcard
Programs are *declarative* and a collection of *side-effect free function definitions*.
<!--ID: 1759275611832-->


What is the difference between syntax and semantics in programming? #flashcard
**Syntax** refers to the raw symbols, their structure, and placement. **Semantics** refers to the meaning or value of each symbol.
<!--ID: 1759275611833-->


What are "values" in programming? #flashcard
Information (data) stored and manipulated by computer programs (e.g., booleans, integers, floats, strings, types, lists, functions).
<!--ID: 1759275611834-->


What is an "expression" in programming? #flashcard
A syntactic entity that *denotes a value*. It specifies how to get a value, but is not the value itself.
<!--ID: 1759275611835-->


What is a "type" in programming? #flashcard
A syntactic entity that denotes a collection of values of a similar form (e.g., `Bool`, `Int`, `Integer -> Integer`).
<!--ID: 1759275611836-->


What are the three steps to prove a statement $P(n)$ is true for all $n \geq n_0$ using mathematical induction? #flashcard
1. **Base Case:** Show $P(n_0)$ is true.
2. **Induction Hypothesis:** Assume $P(k)$ is true for some arbitrary $k \geq n_0$.
3. **Induction Step:** Show that if $P(k)$ is true, then $P(k+1)$ must also be true.
<!--ID: 1759275611837-->


Define a unary function as a rule. #flashcard
A rule $f : I \to O$ that associates members of $I$ (inputs) with at most one member of $O$ (outputs).
<!--ID: 1759275611838-->


Define a unary function as a value. #flashcard
A set $f \subseteq I \times O$ such that if $(x, y) \in f$ and $(x, y') \in f$ then $y=y'$. Each function has a domain $D \subseteq I$ and a range $R \subseteq O$.
<!--ID: 1759275611839-->


Define an n-ary function as a rule. #flashcard
For $n \geq 0$, $f : I_1, \dots, I_n \to O$ is a rule that associates a list of inputs from $I_1, \dots, I_n$ with a member of $O$. Some input lists may not be associated with an output.
<!--ID: 1759275611840-->


Define an n-ary function as a value. #flashcard
A set $f \subseteq I_1 \times \dots \times I_n \times O$ such that if $(x_1, \dots, x_n, y) \in f$ and $(x_1, \dots, x_n, y') \in f$, then $y=y'$. The condition ensures any given list of inputs maps to only one output.
<!--ID: 1759275611841-->


What is the Cartesian Product of sets $A$ and $B$? #flashcard
$A \times B = \{(a, b) \mid a \in A, b \in B\}$, which is the set of all ordered pairs where the first element comes from $A$ and the second from $B$.
<!--ID: 1759275611842-->


What is an ordered pair or tuple? #flashcard
A finite sequence of elements, where the order matters. Tuples can have elements of different types, unlike lists which typically have elements of the same type.
<!--ID: 1759275611843-->


What is the cardinality of a set $A$? #flashcard
The size of set $A$, denoted $|A|$.
<!--ID: 1759275611844-->


What is a "total" function? #flashcard
A function where its domain $D$ is equal to the entire set of possible inputs $I$ ($D=I$), meaning the function is defined for every input.
<!--ID: 1759275611845-->


What is a "partial" function? #flashcard
A function that is not defined for every input in its theoretical input set $I$.
<!--ID: 1759275611846-->


What is a "surjective" function? #flashcard
A function where its range $R$ is equal to the entire set of possible outputs $O$ ($R=O$), meaning every output can be reached by some input.
<!--ID: 1759275611847-->


What is an "injective" function? #flashcard
A one-to-one function where different inputs map to different outputs ($f(a) = f(b) \implies a = b$).
<!--ID: 1759275611848-->


What is a "bijective" function? #flashcard
A function that is both injective and surjective. If a bijection exists between two sets A and B, then $|A| = |B|$.
<!--ID: 1759275611849-->


How is an infinite set defined in terms of cardinality? #flashcard
A set $A$ is infinite if there exists a proper subset $A' \subset A$ such that $|A'| = |A|$.
<!--ID: 1759275611850-->


State some key theorems about cardinality comparing infinite sets. #flashcard
$|\text{even } \mathbb{N}| = |\mathbb{N}|$, $|\mathbb{N}| = |\mathbb{Q}|$, and $|\mathbb{N}| < |\mathbb{R}|$.
<!--ID: 1759275611851-->


What is the cardinality of the set of all programs in any "normal" programming language? #flashcard
It is equal to the cardinality of the natural numbers ($|\mathbb{N}|$).
<!--ID: 1759275611852-->


What is a power set $\mathcal{P}(A)$? #flashcard
The power set of a set $A$ is the set of all subsets of $A$, including the empty set and $A$ itself.
<!--ID: 1759275611853-->


What is the cardinality of the set of decision problems over $\mathbb{N}$? #flashcard
It is equal to the cardinality of the power set of natural numbers, $|\mathcal{P}(\mathbb{N})|$.
<!--ID: 1759275611854-->


What does Gödel’s First Incompleteness Theorem state? #flashcard
For any consistent axiomatic system powerful enough to describe arithmetic, there will always be true statements about natural numbers that cannot be proven within that system.
<!--ID: 1759275611855-->


What does Gödel’s Second Incompleteness Theorem state? #flashcard
Such a system cannot prove its own consistency (that it never leads to contradictions) from inside itself.
<!--ID: 1759275611856-->


How can an n-ary function $f: I_{1}, \dots, I_{n} \to O$ be represented as a unary function using tuples? #flashcard
As $f' : I_{1} \times \dots \times I_{n} \to O$, where $f(x_{1},\dots,x_{n}) = f'((x_{1},\dots, x_{n}))$.
<!--ID: 1759275611857-->


How can an n-ary function $f: I_{1}, \dots, I_{n} \to O$ be represented as a unary function using currying? #flashcard
As $f" : I_{1} \to (I_{2} \to (\cdots (I_{n} \to O) \cdots))$, where $f(x_{1}, \dots, x_{n}) = f"(x_{1})\cdots (x_{n})$.
<!--ID: 1759275611858-->


In Haskell, how are functions typically structured regarding arguments? #flashcard
Every function in Haskell is fundamentally unary (takes one argument) due to currying. Functions that appear to take multiple arguments are actually a chain of unary functions.
<!--ID: 1759275611859-->


Show an example of a curried function and a tuple-based function definition in Haskell for $f(x,y) = x^2 + y^2$. #flashcard
```haskell
-- Curried:
f1 :: Integer -> Integer -> Integer
f1 x y = x^2 + y^2
<!--ID: 1759275611860-->


-- Tuple-based:
f2 :: (Integer, Integer) -> Integer
f2 (x, y) = x^2 + y^2
```

What are the core principles of functional programming? #flashcard
Declarative programs that are side-effect free, results produced by evaluating expressions built from functions, functions defined as first-class values, recursion, avoidance of state change and data mutation, and a focus on "what" instead of "how".
<!--ID: 1759275611861-->


What is mathematical thinking? #flashcard
A process for understanding mathematical aspects of the world (time, space, pattern, measure, logical consequence) based on mathematical models (objects, facts, concepts).
<!--ID: 1759275611862-->


What is scientific thinking? #flashcard
The systematic study of the world through observation and experiment, centered on the scientific method (hypothesis formation and experimentation).
<!--ID: 1759275611863-->


What is engineering thinking? #flashcard
The systematic and rational application of knowledge to serve society, concerned with best practices, understanding problems in terms of systems, using requirements, and maintaining public safety and security.
<!--ID: 1759275611864-->


What is artistic thinking? #flashcard
Fosters the creation of art, concerned with finding inspiration, looking for new ideas, and imposing restrictions to focus creativity.
<!--ID: 1759275611865-->


What does computational thinking include? #flashcard
It includes mathematical, scientific, engineering, and artistic thinking.
<!--ID: 1759275611866-->


Who was Gottfried Leibniz and what were his key contributions to computing? #flashcard
A German polymath who developed calculus, created the binary number system, and designed the Staffelwalze calculator.
<!--ID: 1759275611867-->


What was Leibniz's concept of *characteristica universalis*? #flashcard
A postulated universal language in which all scientific ideas could be expressed.
<!--ID: 1759275611868-->


What was Leibniz's concept of *calculus ratiocinator*? #flashcard
A postulated computing device that could determine the truth or falsity of statements expressed in *characteristica universalis*.
<!--ID: 1759275611869-->


What did Alonzo Church and Alan Turing prove in 1936 regarding Leibniz's dream? #flashcard
They proved that there were undecidable decision problems, meaning it's theoretically impossible to create a computer to solve every problem (like Leibniz's *calculus ratiocinator*).
<!--ID: 1759275611870-->


What is a decision problem? #flashcard
A computational problem that can be posed as a yes–no question on a set of input values.
<!--ID: 1759275611871-->


Give an example of an undecidable decision problem. #flashcard
The Halting Problem.
<!--ID: 1759275611872-->


What is the Church-Turing Thesis? #flashcard
The belief that what is computable is precisely what a Turing machine (or lambda calculus) can compute.
<!--ID: 1759275611873-->


How did Kurt Gödel influence the understanding of computational limits? #flashcard
His First and Second Incompleteness Theorems showed fundamental limitations of formal systems, implying that not all true statements can be proven within a system, and a system cannot prove its own consistency.
<!--ID: 1759275611874-->


Name some key figures who helped lay the groundwork for logic and computing in the 20th century. #flashcard
Alonzo Church (Lambda Calculus), Alan Turing (Turing Machine), Haskell Curry (Combinatory Logic).
<!--ID: 1759275611875-->


What is recursion? #flashcard
A method of defining something (usually a function) in terms of itself, often used as an alternative to loops and proved correct by mathematical induction.
<!--ID: 1759275611876-->


What strategy does recursion typically use? #flashcard
A divide and conquer strategy.
<!--ID: 1759275611877-->


How does the "Noetherian" property relate to recursion? #flashcard
For a recursive function $f(x) = E(f(a_{1}(x)), \dots, f(a_{n}(x)))$, each input $i$ is assigned a natural number $n(i)$ such that $n(a_{m}(i)) < n(i)$. This ensures the natural numbers get smaller and smaller, guaranteeing termination (no infinite strict descending sequences).
<!--ID: 1759275611878-->


Who was Amalie Emmy Noether? #flashcard
A German mathematician known for her research in abstract algebra, particularly ring theory, and for Noether's Theorem in physics.
<!--ID: 1759275611879-->


Compare recursion and iteration in terms of declarative vs. procedural programming. #flashcard
Recursion is **declarative** (language implementation handles evaluation), while iteration is **procedural** (programmer handles evaluation).
<!--ID: 1759275611880-->


Compare recursion and iteration in terms of showing correctness. #flashcard
Recursion is generally **easier to show correctness** (often via induction) than iteration.
<!--ID: 1759275611881-->


Compare recursion and iteration in terms of space efficiency. #flashcard
Loops (iteration) are generally **more space-efficient** than recursion in languages that *do not* implement tail recursion properly. Tail recursion can simulate loops space-efficiently (O(1) space complexity).
<!--ID: 1759275611882-->


What is tail recursion? #flashcard
When a function's computation is performed *before* a recursive call, allowing for O(1) space complexity if the language optimizes it.
<!--ID: 1759275611883-->


Who was Stephen C. Kleene and what were his contributions? #flashcard
A student of Alonzo Church, a founder of computability theory (recursion theory), and known for his contributions to constructive logic and the invention of regular expressions (Regex).
<!--ID: 1759275611884-->


What is logical consequence in logic? #flashcard
If a set of assumptions ($a_1, \dots, a_n$) are true, then the logical consequence $B$ must also be true.
<!--ID: 1759275611885-->


Provide the truth table for $A \implies B$. #flashcard
| A | B | $A \implies B$ |
|---|---|----------------|
| T | T | T              |
| T | F | F              |
| F | T | T              |
| F | F | T              |
<!--ID: 1759275611886-->


What is an ALU? #flashcard
An Arithmetic Logic Unit (ALU) is a digital circuit within the CPU that performs arithmetic and bitwise logical operations.
<!--ID: 1759275611887-->


Why is self-reference dangerous in logic? #flashcard
It can lead to paradoxes (like the Liar's Paradox or Russell's Paradox), which can break the consistency of a logical system.
<!--ID: 1759275611888-->


What is the difference between a "number" and a "numeral"? #flashcard
A **numeral** is the expression or symbol (syntax) used to write a number. A **number** is the value or meaning (semantics) that the numeral represents.
<!--ID: 1759275611889-->


How can pattern matching be used with lists in Haskell? #flashcard
`(x:xs)` matches a list with at least one element, where `x` is the head and `xs` is the tail. `[]` matches an empty list.
<!--ID: 1759275611890-->


What is Boolean algebra? #flashcard
The algebra of truth values, underlying propositional logic.
<!--ID: 1759275611891-->


How do variables behave in functional programming compared to imperative programming? #flashcard
In functional programming, variables are more like mathematical variables; they denote a value and that value does not change (no side effects). They can denote literals or functions.
<!--ID: 1759275611892-->


What is the relationship between testing and software correctness? #flashcard
Testing can show the *incorrectness* of software (by finding bugs), but it cannot prove the software's *correctness* (that it works perfectly in all cases).
<!--ID: 1759275611893-->


State the formula for the sum of the first $n$ natural numbers. #flashcard
$$\sum_{i=0}^{n} i = \frac{n(n+1)}{2}$$
<!--ID: 1759275611894-->
