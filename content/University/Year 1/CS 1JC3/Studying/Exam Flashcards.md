---
TARGET DECK: Year 1::CS 1JC3::Exam
---
Okay, this is a comprehensive request! I will go through each of your provided notes, organize them by the course week/topic as outlined in your [[CS 1JC3]] note, and generate as many flashcards as possible for each.

This will be a very long response, so please be aware of that.

***

## Week 01: What is Computational Thinking?

What is Mathematical Thinking? #flashcard
Mathematical Thinking is a process for understanding the mathematical aspects of the world (time, space, pattern, measure, logical consequence) based on mathematical models consisting of objects, facts, and concepts.
<!--ID: 1764527725412-->



What is Scientific Thinking? #flashcard
Scientific Thinking is the systematic study of the world through observation and experiment, centered on the scientific method of hypothesis formation and experimentation.
<!--ID: 1764527725414-->



What is Engineering Thinking? #flashcard
Engineering Thinking is the systematic and rational application of knowledge to serve society, concerned with best practices, understanding problems in terms of systems, using requirements to drive development, and maintaining public safety and security.
<!--ID: 1764527725415-->



What is Artistic Thinking? #flashcard
Artistic Thinking fosters the creation of art, concerned with finding inspiration and imposing restrictions to focus creativity.
<!--ID: 1764527725416-->



What is Computational Thinking? #flashcard
Computational Thinking includes mathematical, scientific, engineering, and artistic thinking. It involves using the right computational tools in the right way, understanding their limits, solving problems by recursion, proving properties by induction, balancing clarity with efficiency, removing redundancy, defining data using algebraic types, identifying security threats, using encryption, employing problem-solving methods, utilizing virtual systems, and employing multi-layered abstraction models.
<!--ID: 1764527725417-->



What are the theoretical limits of computing? #flashcard
Not every problem can be solved computationally; there are undecidable decision problems.
<!--ID: 1764527725418-->



Who was Gottfried Leibniz and what were his key contributions to computing? #flashcard
Gottfried Leibniz was a German polymath who developed calculus, created the binary number system, and designed the Staffelwalze calculator. He also postulated *characteristica universalis* and *calculus ratiocinator*.
<!--ID: 1764527725419-->


What were Leibniz's *characteristica universalis* and *calculus ratiocinator*? #flashcard
*Characteristica universalis* was a postulated language to express all scientific ideas. *Calculus ratiocinator* was a computing device meant to determine the truth or falsity of statements made in *characteristica universalis*.
<!--ID: 1764527725420-->



Why was Leibniz's dream of *calculus ratiocinator* proven impossible? #flashcard
Alonzo Church and Alan Turing proved in 1936 that there are undecidable decision problems, meaning no computer can solve every problem, thus making Leibniz's dream impossible.
<!--ID: 1764527725421-->



What are Gödel’s Incompleteness Theorems? #flashcard
1.  **First Theorem**: Any mathematical system powerful enough to describe basic arithmetic will always have true statements that cannot be proven within that system.
2.  **Second Theorem**: Such a system cannot prove its own consistency (that it won't lead to contradictions) from inside itself.
<!--ID: 1764527725422-->



What is the essence of computation? #flashcard
Taking hardware that allows you to manipulate data and writing software that controls how you manipulate that data.
<!--ID: 1764527725423-->



What is the difference between a "number" and a "numeral"? #flashcard
A **numeral** is the expression or symbol (syntax), while a **number** is the value or meaning it denotes (semantics).
<!--ID: 1764527725424-->


What is the significance of "getting the answer is not enough, you need to understand how you got that answer"? #flashcard
This emphasizes the importance of deep understanding in computational thinking, rather than just relying on tools to produce results without comprehending the underlying process or principles.
<!--ID: 1764527725425-->



What is Proof by Induction? #flashcard
Proof by induction is a method to prove that a statement $P(n)$ is true for all natural numbers $n \geq n_0$. It involves a base case ($P(n_0)$ is true) and an induction step (if $P(k)$ is true for some $k \geq n_0$, then $P(k+1)$ is also true).
<!--ID: 1764527725426-->



What does testing show about software? #flashcard
Testing can show **instances of incorrectness**, but it is usually not practical for demonstrating **correctness**.
<!--ID: 1764527725427-->



## Week 02: What is Functional Programming?

Who was Haskell B. Curry and what were his key contributions? #flashcard
Haskell B. Curry was an American mathematician who developed **Combinatory Logic** (a system for defining functions without variables) and contributed to the **Curry-Howard Correspondence**, which links proofs and programs.
<!--ID: 1764527725428-->



What is the Curry-Howard Correspondence? #flashcard
A way of merging logic and programming, stating that proofs and programs are equivalent to each other.
<!--ID: 1764527725429-->


What is the Curry Paradox? #flashcard
A paradox that arises from self-reference: "If this sentence is true, then 2 + 2 = 5." If the sentence is assumed true, it implies 2 + 2 = 5, which is false, leading to a contradiction. It demonstrates how self-reference can lead to proving anything in a logical system.
<!--ID: 1764527725430-->



What is the Liar Paradox? #flashcard
The statement "This sentence is false." If it's true, it must be false, and if it's false, it must be true, leading to a contradiction and an infinite loop.
<!--ID: 1764527725431-->



What is Russel's Paradox? #flashcard
The set R = {x | x is a set, x ∉ x}. If R ∈ R, then by definition R ∉ R. If R ∉ R, then by definition R ∈ R. This contradiction exposed fundamental flaws in early naive set theory.
<!--ID: 1764527725432-->



What are the two main reasons computers are so useful? #flashcard
1.  **Hardware** enables large amounts of data to be stored and manipulated very quickly.
2.  **Software** provides the ability to control hardware with great flexibility and precision.
<!--ID: 1764527725433-->



What is a programming paradigm? #flashcard
A well-developed style of programming.
<!--ID: 1764527725434-->



Name four programming paradigms. #flashcard
1.  **Procedural**: Imperative, collection of procedures with side-effects.
2.  **Object-Oriented**: Imperative, collection of interacting objects.
3.  **Functional**: Declarative, collection of side-effect-free function definitions.
4.  **Logical**: Declarative, collection of logical statements.
<!--ID: 1764527725435-->



What are the three modes of program execution? #flashcard
1.  **Interpreted**: Line-by-line execution by an interpreter, good for interactive development, slower.
2.  **Compiled**: Programs translated into machine code, highly optimized, faster, harder to debug.
3.  **Byte Code**: Uses a virtual machine, portable, slower than machine code but faster than pure interpretation.
<!--ID: 1764527725436-->



What is a "value" in computing? #flashcard
Information (data) stored and manipulated by computer programs, such as booleans, integers, floating-point numbers, strings, lists, and functions.
<!--ID: 1764527725437-->



What is an "expression" in computing? #flashcard
A syntactic entity that *denotes a value*. It is not the value itself but specifies how to obtain a value. Examples: `(x * 2) + 7`, `"abc"`, `True && y`.
<!--ID: 1764527725438-->



What is an "atomic expression" and a "literal"? #flashcard
An **atomic expression** is an identifier (e.g., `x`, `rotateHorse`). A **literal** is an expression whose form directly tells you its value (e.g., `2.3`, `"cat"`, `True`).
<!--ID: 1764527725439-->



What is a "type" in computing? #flashcard
A syntactic entity that denotes a collection of values of a similar form. Examples: `Bool`, `Int`, `Integer -> Integer`.
<!--ID: 1764527725440-->



What is the difference between `Int` and `Integer` in Haskell? #flashcard
`Int` represents machine integers with a fixed bit size (e.g., 32-bit or 64-bit), having a limited range. `Integer` represents all integers, growing until memory runs out, and is generally slower.
<!--ID: 1764527725441-->



What is a unary function? #flashcard
A function $f: I \to O$ that takes a single input from set $I$ and produces at most one output in set $O$. As a value, it's a set of ordered pairs $(x, y)$ where each $x$ maps to at most one $y$.
<!--ID: 1764527725442-->



What is an n-ary function? #flashcard
For $n \geq 0$, an n-ary function $f: I_1, \dots, I_n \to O$ takes a list of $n$ inputs and produces at most one output. If $n=0$, it's a constant. As a value, it's a set of ordered tuples $(x_1, \dots, x_n, y)$ where each input tuple maps to at most one output.
<!--ID: 1764527725443-->



What is a Cartesian Product of sets? #flashcard
The Cartesian Product of sets $A_1, \dots, A_n$ is the set of all possible ordered tuples $(a_1, \dots, a_n)$ where each $a_i$ comes from set $A_i$. For example, $A \times B = \{(a,b) | a \in A, b \in B\}$.
<!--ID: 1764527725444-->



What is "cardinality" of a set? #flashcard
The size of a set, denoted $|A|$. Cardinal numbers are used to represent these sizes.
<!--ID: 1764527725445-->



What does it mean for a function to be "total" or "partial"? #flashcard
A function is **total** if its domain $D$ is equal to the entire set of possible inputs $I$ ($D=I$), meaning it is defined for every input. A function is **partial** if it is not defined for every input (i.e., $D \subset I$). Haskell functions are mostly partial.
<!--ID: 1764527725446-->



What does it mean for a function to be "surjective"? #flashcard
A function is surjective if its range $R$ is equal to the entire set of possible outputs $O$ ($R=O$), meaning every possible output can be achieved by some input.
<!--ID: 1764527725447-->



What does it mean for a function to be "injective"? #flashcard
A function is injective (one-to-one) if different inputs always map to different outputs. Formally, $f(a) = f(b) \implies a = b$.
<!--ID: 1764527725448-->



What does it mean for a function to be "bijective"? #flashcard
A function is bijective if it is both injective and surjective. If a bijection exists between two sets, they have the same cardinality.
<!--ID: 1764527725449-->



How can an n-ary function be represented as a unary function using tuples? #flashcard
An n-ary function $f: I_1, \dots, I_n \to O$ can be represented as a unary function $f': I_1 \times \dots \times I_n \to O$, where $f(x_1, \dots, x_n) = f'((x_1, \dots, x_n))$. The multiple inputs are grouped into a single tuple.
<!--ID: 1764527725450-->



How can an n-ary function be represented as a unary function using currying? #flashcard
An n-ary function $f: I_1, \dots, I_n \to O$ can be represented as a curried function $f'': I_1 \to (I_2 \to (\cdots (I_n \to O) \cdots))$, where $f(x_1, \dots, x_n) = f''(x_1)\cdots(x_n)$. Each input is taken one at a time, with each call returning a new function.
<!--ID: 1764527725451-->



What are the key characteristics of Functional Programming? #flashcard
- Programs are declarative and side-effect free.
- Results are produced by evaluating expressions built from functions.
- Functions are first-class values and used as rules.
- Recursion is used extensively.
- State change and data mutation are avoided.
- Focus is on "what" to achieve, not "how."
<!--ID: 1764527725452-->



## Week 03: Numbers

What are the six families of number systems discussed? #flashcard
1.  Natural Numbers ($\mathbb{N}$)
2.  Integers ($\mathbb{Z}$)
3.  Rational Numbers ($\mathbb{Q}$)
4.  Real Numbers ($\mathbb{R}$)
5.  Complex Numbers ($\mathbb{C}$)
6.  Modular Integers ($\mathbb{Z}_n$)
<!--ID: 1764527725453-->



How are these number systems related as subsets? #flashcard
$\mathbb{Z}_n \subseteq \mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}$
<!--ID: 1764527725454-->



Who was Mohammad Al-Khwarizmi and what were his contributions? #flashcard
A Persian polymath from the House of Wisdom in Baghdad. He introduced arithmetic based on the Hindu-Arabic numeral system to the Middle East and Europe (giving us the word "algorithm" from "Algoritmi"). He also showed how to solve linear and quadratic equations algebraically.
<!--ID: 1764527725455-->


What are the bases commonly used in computing for numeral systems? #flashcard
Binary (base 2), Decimal (base 10), and Hexadecimal (base 16).
<!--ID: 1764527725456-->



How are infinite number systems represented on computers? #flashcard
1.  Using a **fixed number of bits** (e.g., 64-bit integers), which limits the range of representable numbers but is efficient.
2.  Using an **unbounded number of bits** (e.g., Haskell's `Integer`), which can represent any number but has higher space and time complexity.
<!--ID: 1764527725457-->



How are machine integers represented in computers? #flashcard
With a fixed number of bits, typically using **two's complement** notation. This allows for one zero, $2^{n-1}-1$ positive numbers, and $2^{n-1}$ negative numbers for an $n$-bit system.
<!--ID: 1764527725458-->



What is a potential issue with arithmetic operations on machine integers? #flashcard
They can cause **overflow** (results exceeding the maximum representable value) or **underflow** (results too small to be represented).
<!--ID: 1764527725459-->



How are floating-point numbers represented? #flashcard
Rational numbers are represented in base 2 scientific notation ($\pm 1.m \times 2^e$) with a fixed number of bits. This includes a sign bit, a mantissa (fractional part), and an exponent.
<!--ID: 1764527725460-->



What are some special values that floating-point numbers can represent? #flashcard
-   -0.0, 0.0
-   Infinity, -Infinity
-   NaN (Not a Number)
<!--ID: 1764527725461-->



Why can floating-point arithmetic produce inaccurate results? #flashcard
Because only a small number of real numbers can be represented exactly. Operations return the best approximation, leading to potential precision loss. Also, addition and multiplication are not always associative for floating-point numbers.
<!--ID: 1764527725462-->



How should you compare two floating-point numbers for equality in programming? #flashcard
Instead of `x == y`, which is often false due to precision issues, use `abs (x - y) < epsilon`, where `epsilon` is a very small, non-zero number appropriate for the context.
<!--ID: 1764527725463-->



What are the five numeric types in Haskell? #flashcard
1.  `Int` (machine integers, fixed size)
2.  `Integer` (all integers, unbounded size)
3.  `Float` (32-bit floating-point numbers)
4.  `Double` (64-bit floating-point numbers)
5.  `Rational` (all rational numbers)
<!--ID: 1764527725464-->



## Week 04: Logic

What is Logic? #flashcard
Logic is the study of the principles underlying sound reasoning. It is a reasoning system with a formal language (syntax and semantics), concepts of truth and logical consequence, and a proof system.
<!--ID: 1764527725465-->



What are some practical use-cases for logic in computing? #flashcard
-   Precise documentation of software artifacts.
-   Reasoning about software artifacts with mathematical software (e.g., proof assistants).
-   Implementing electronic circuits.
-   Providing reasoning facilities in programming languages.
<!--ID: 1764527725466-->



What is "quantifier-free first-order logic" in Haskell? #flashcard
Haskell embeds a form of quantifier-free first-order logic, meaning it deals with objects and properties/relations but does not include universal ($\forall$) or existential ($\exists$) quantifiers, as these are generally not computable.
<!--ID: 1764527725467-->



What is a Boolean expression? #flashcard
Any expression that denotes the values `True` or `False`, used to make decisions in programs.
<!--ID: 1764527725468-->


What is a Boolean function? #flashcard
A function that takes one or more Boolean inputs and returns a Boolean output. Its meaning is defined by truth tables.
<!--ID: 1764527725469-->


Name the three basic Boolean functions in Haskell. #flashcard
1.  `not` (negation)
2.  `&&` (conjunction/and)
3.  `||` (disjunction/or)
<!--ID: 1764527725470-->



What is a "complete set of Boolean functions"? #flashcard
A set of Boolean functions from which all other Boolean functions can be constructed. Examples include `{&&, not}` or `{nand}`.
<!--ID: 1764527725471-->



Why is `nand` (Sheffer's stroke) a universal gate, and how can `not` and `and` be defined using it? #flashcard
`nand` is a universal gate because it alone can define all other Boolean functions.
-   `not A = nand(A, A)`
-   `A && B = not (nand(A, B)) = nand(nand(A, B), nand(A, B))`
<!--ID: 1764527725472-->



What is a predicate? #flashcard
A function that returns a Boolean value. Boolean functions are a special kind of predicate. In Haskell, comparison operators like `==`, `/=`, `<`, etc., are predefined binary predicates.
<!--ID: 1764527725473-->


What is a conditional expression in Haskell? #flashcard
An expression whose value depends on the value of a Boolean condition, using the syntax `if c then e1 else e2`. It denotes a value, unlike conditional statements in other languages.
<!--ID: 1764527725474-->



How do guarded functions work in Haskell? #flashcard
They provide a concise alternative to conditional expressions, using `|` followed by a Boolean guard and an expression. For example:
```haskell
absInteger n
  | n < 0  = -n
  | n >= 0 = n
```
<!--ID: 1764527725475-->



What is a case expression in Haskell? #flashcard
A generalization of a conditional expression that allows a value to be chosen based on pattern matching against different forms of an expression. If no pattern matches, the result is undefined.
<!--ID: 1764527725476-->


Who was Alonzo Church and what was his key contribution to computing? #flashcard
Alonzo Church was a mathematician who, along with Alan Turing, proved the existence of undecidable decision problems. He developed **Lambda Calculus** as a computational model based on function application and abstraction.
<!--ID: 1764527725477-->



What is Church's Theorem? #flashcard
First-order logic is undecidable, meaning there is no algorithm that can always determine if a given first-order formula is true.
<!--ID: 1764527725478-->



What is Lambda Notation? #flashcard
A way of defining functions without giving them names (function abstraction). The syntax $\lambda x: \alpha . B$ denotes a function $f: \alpha \to \beta$ where $f(a) = B[x \mapsto a]$. In Haskell, this is written `\x -> e`.
<!--ID: 1764527725479-->



What is a "binder" in lambda calculus? #flashcard
A construct that introduces and binds variables within an expression. Examples include `(\x. m)` in lambda calculus, $\int_a^b x^2 dx$ in mathematics, and `{x | P(x)}` in set theory.
<!--ID: 1764527725480-->



What is a "bound variable" versus a "free variable" in lambda calculus? #flashcard
In `(\lambda x.x)x`, the `x` inside `(\lambda x.x)` is a **bound variable**. The `x` outside is a **free variable**. A variable is bound if it falls within the scope of a lambda abstraction for that variable.
<!--ID: 1764527725481-->



What is beta reduction in lambda calculus? #flashcard
The process of applying a function abstraction to an argument, essentially substituting the argument for the bound variable in the function's body. For example, `(\lambda x. x*x) 3` reduces to `3*3`.
<!--ID: 1764527725482-->



What is a "variable capture" in lambda calculus? #flashcard
A situation where a free variable in an argument becomes bound by a lambda abstraction in the function's body during substitution, potentially changing the meaning of the expression. This is avoided by renaming bound variables.
<!--ID: 1764527725483-->



## Week 05: Recursion

What is recursion? #flashcard
Recursion is a method of defining something (usually a function) in terms of itself. It is an alternative to loops, often proved correct by induction, and uses a divide-and-conquer strategy.
<!--ID: 1764527725484-->


What are the three conditions for a function $F: I \mapsto O$ to be defined by recursion? #flashcard
1.  $f(x) = E(f(a_1(x)), \dots, f(a_n(x)))$, where $E$ is an expression.
2.  Each input $i \in I$ is assigned a natural number $n(i)$.
3.  For all $i \in I$ and $1 \leq m \leq n$, $n(a_m(i)) < n(i)$, meaning recursive calls are applied to "smaller" inputs.
<!--ID: 1764527725485-->



What is a well-order (Noetherian property)? #flashcard
A total order $(S, <)$ is Noetherian if there are no infinite descending sequences of members of $S$. For example, the natural numbers $(\mathbb{N}, <)$ are well-ordered because any descending sequence must eventually stop at 0.
<!--ID: 1764527725486-->



Compare recursion and iteration in terms of declarative/procedural nature. #flashcard
**Recursion** is declarative (focuses on "what"). **Iteration** is procedural (focuses on "how").
<!--ID: 1764527725487-->



Compare recursion and iteration in terms of correctness. #flashcard
**Recursion** is generally easier to show correctness for (often using induction). **Iteration** is harder to show correctness for.
<!--ID: 1764527725488-->



Compare recursion and iteration in terms of space efficiency. #flashcard
**Loops (iteration)** are generally more space-efficient than recursion in languages that don't properly implement tail recursion. However, loops can be simulated space-efficiently by functions defined by **tail recursion**.
<!--ID: 1764527725489-->


What is tail recursion? #flashcard
Tail recursion occurs when a function's recursive call is the very last operation performed in its body. This allows compilers to optimize the call, reusing the current stack frame and achieving O(1) space complexity, similar to a loop.
<!--ID: 1764527725490-->


Who was Amalie Emmy Noether? #flashcard
A German mathematician known for her work in abstract algebra (especially ring theory) and for Noether's Theorem in physics. She was a professor at the University of Göttingen.
<!--ID: 1764527725491-->


Who was Stephen C. Kleene? #flashcard
A student of Alonzo Church and a founder of computability theory (recursion theory). He invented regular expressions and contributed to constructive logic.
<!--ID: 1764527725492-->



What is the difference in efficiency between `fib1` (standard recursive Fibonacci) and `fib2` (tail-recursive Fibonacci with accumulator)? #flashcard
`fib1` is clear but very inefficient due to redundant calculations (exponential time complexity). `fib2` is more efficient because it uses tail recursion and an accumulator to avoid recomputing values, resulting in linear time complexity.
<!--ID: 1764527725493-->



## Week 06: Algebraic Data Types

What is a type alias in Haskell? #flashcard
A way to give an existing type a new name using the `type` keyword. It's a synonym for an existing type and doesn't create a new distinct type. Example: `type Vector = (Double, Double, Double)`.
<!--ID: 1764527725494-->



What are Algebraic Data Types (ADTs)? #flashcard
ADTs are a way to define new types whose values are formed as a *sum* of *products*. They are inductive types, meaning their definition induces an induction principle for proving properties about their members.
<!--ID: 1764527725495-->



What are "value constructors" in ADTs? #flashcard
$C_i$ are functions that create new values of the algebraic type. Their type is $t^i_1 \to \dots \to t^i_{m_i} \to t$, where $t$ is the new algebraic type.
<!--ID: 1764527725496-->



What does "No junk" mean in the context of ADTs? #flashcard
"No junk" means that every possible value of the algebraic type can be constructed using its defined constructors. There are no "unreachable" values.
<!--ID: 1764527725497-->



What does "No confusion" mean in the context of ADTs? #flashcard
"No confusion" means that each value of the algebraic type can be constructed in only one unique way. There's no ambiguity where different constructor expressions denote the same value.
<!--ID: 1764527725498-->



What is an Enumeration Type? #flashcard
An algebraic type that enumerates a finite set of new values, defined by constructors that take no arguments. Example: `data Bool = False | True`.
<!--ID: 1764527725499-->



What is a Recursive Type? #flashcard
An algebraic type whose own defined type is included in the types of its constructors. This allows for the creation of countably infinite sets of values. Examples: `data Nat = Zero | Suc Nat`, `data List a = Nil | Cons a (List a)`.
<!--ID: 1764527725500-->



What is the standard induction principle for the `Nat` type (defined as `Zero | Suc Nat`)? #flashcard
For any property $P$:
$(P \ Zero \land (\forall x: Nat. P\ x \implies P (Suc \ x)))$
$\implies \forall x: Nat . P \ x$
This means if the property holds for `Zero` and for `Suc x` whenever it holds for `x`, then it holds for all `Nat` values.
<!--ID: 1764527725501-->



How can algebraic types be defined with parameters? #flashcard
An algebraic type can define a type constructor that takes other types as parameters, allowing for polymorphic data structures. Example: `data List a = Nil | Cons a (List a)`.
<!--ID: 1764527725502-->



How can algebraic types be viewed as "languages"? #flashcard
An algebraic type `A` defines a new language `L` of expressions. The expressions of `L` are in a one-to-one correspondence with the values of `A`, serving as literals. Functions on `A` can then be defined using pattern matching on these expressions.
<!--ID: 1764527725503-->



What is a `newtype` declaration in Haskell? #flashcard
`newtype` is used to create a new type that is a wrapper around an existing type. Unlike `data` or `type`, it's a compile-time construct for type checking and is optimized away at runtime, incurring no overhead. Example: `newtype Natural = Natural Integer`.
<!--ID: 1764527725504-->



## Week 07: Operating Systems and the Internet

Who was Alan Turing and what were his key contributions? #flashcard
Alan Turing was a mathematician and computer scientist who created the **Turing machine**, proved the existence of **undecidable decision problems** (with Alonzo Church), broke the Enigma code in WWII, designed the ACE computer, and proposed the **Turing Test** for AI.
<!--ID: 1764527725505-->



What are "graphemes" and how are they represented in computers? #flashcard
Graphemes are the fundamental units of a writing system (e.g., letters, symbols). They are represented using character encoding standards like **ASCII** (for English characters) or **Unicode** (for most of the world's writing systems).
<!--ID: 1764527725506-->



What is an Operating System (OS)? #flashcard
Software that controls the operations of a computer and enables programs to be executed. It consists of a **kernel** (which manages hardware) and **system programs** (critical applications).
<!--ID: 1764527725507-->



What are the key functions provided by an OS kernel? #flashcard
-   I/O device management
-   Program execution
-   Memory management
-   File system management
<!--ID: 1764527725508-->



Compare Graphical User Interfaces (GUI) and Command-Line Interfaces (CLI). #flashcard
**GUI**: Easy to use, graphical display, event-driven (mouse/keyboard), resource-intensive.
**CLI**: Harder to use, text-oriented, uses a "read-execute-print loop" (shell), more powerful, can be scripted.
<!--ID: 1764527725509-->



What is a "file" in computing? #flashcard
A finite sequence of data (characters or bits) stored on a persistent data storage device. Files allow for data sharing and are efficient for program input/output.
<!--ID: 1764527725510-->



What is a "file system"? #flashcard
A recursive structure (file tree) consisting of files and folders/directories, with a top-level root directory. Files can be referenced by absolute or relative paths.
<!--ID: 1764527725511-->



What is a "process" in an operating system? #flashcard
An application program that is executing on the computer. Processes are managed by the OS, sharing CPU time, and can be in states like Executing, Blocked, Ready, or Finished.
<!--ID: 1764527725512-->



What is a "time slice" and a "process context switch"? #flashcard
A **time slice** is a short period a process is given control of the CPU. A **process context switch** occurs when a process is suspended at the end of its time slice, its context (state) is saved, and another process is given control.
<!--ID: 1764527725513-->



What is a "virtual address space" for a process? #flashcard
A dedicated memory space for a program's code and data. When the process runs, parts of its VAS are mapped to RAM; when not running, they are mapped to secondary storage. The entire VAS doesn't need to fit in RAM.
<!--ID: 1764527725514-->



What is a physical network? #flashcard
A set of computers that exchange digital information with each other via a physical medium (e.g., wired or wireless connections), connected via a network interface.
<!--ID: 1764527725515-->



What is a "bipartite graph" in the context of network architecture? #flashcard
A graph where nodes can be divided into two disjoint sets (e.g., hosts and physical networks) such that edges only connect nodes from different sets. Hosts connect to physical networks, and physical networks connect to hosts.
<!--ID: 1764527725516-->



What are the two layers of the Internet's structure? #flashcard
1.  A heterogeneous collection of underlying **physical networks** (with physical addresses).
2.  A homogeneous **virtual network** implemented using **TCP/IP** protocol software on top of the physical network (with uniform IP addresses).
<!--ID: 1764527725517-->



What is TCP/IP? #flashcard
A suite of communication protocols that implements a universal virtual network across interconnected physical networks. It is hardware-independent and provides end-to-end communication.
<!--ID: 1764527725518-->



What is the difference between connectionless and connection-oriented communication? #flashcard
**Connectionless** (like IP or UDP) sends packets without establishing a prior connection, hoping they reach the destination (like sending a message in a bottle). **Connection-oriented** (like TCP) establishes a virtual circuit, ensuring reliable, ordered delivery with acknowledgements and retransmissions.
<!--ID: 1764527725519-->



What is the Internet Protocol (IP)? #flashcard
IP provides a connectionless, best-effort, unreliable packet delivery service between Internet hosts. It defines **IP datagrams** and routing mechanisms using **IP addresses**.
<!--ID: 1764527725520-->



What is the Transmission Control Protocol (TCP)? #flashcard
TCP provides a reliable stream delivery service over IP. It divides data into **TCP segments**, establishes a **TCP connection** (virtual circuit) between host-port endpoints, and ensures reliability through acknowledgements and retransmissions.
<!--ID: 1764527725521-->



## Week 08: The World Wide Web

What is the Client-Server Model? #flashcard
A model where **servers** are processes that provide services over a network (often listening on reserved ports), and **clients** are processes that initiate connections to utilize those services (assigned ephemeral ports by the OS).
<!--ID: 1764527725522-->



What are the components of an application in the client-server model? #flashcard
1.  A **communication protocol** (e.g., HTTP).
2.  A **server program** running on a server.
3.  One or more **client programs** running on clients.
4.  **Communication channels** (e.g., TCP or UDP).
<!--ID: 1764527725523-->



What is Cloud Computing? #flashcard
The use of data storage and computation resources provided by servers on the Internet, typically fee-based and with infrastructure shared among many clients (e.g., AWS, GCP, Azure).
<!--ID: 1764527725524-->



What are the advantages of Cloud Computing? #flashcard
Reduced personnel and capital investment, reduced management costs, and a better range and quality of services.
<!--ID: 1764527725525-->



What are the disadvantages of Cloud Computing? #flashcard
Possible loss of privacy and security, loss of management control, and reduced computational speed.
<!--ID: 1764527725526-->



What are the purposes of the Domain Name System (DNS)? #flashcard
-   Provides a hierarchical naming scheme for hosts.
-   Maps host names to IP addresses.
-   Maps IP addresses to host names.
-   Stores information about hosts (e.g., mail exchange servers).
<!--ID: 1764527725527-->



How are DNS name lookups performed? #flashcard
They are done by recursive search, sometimes starting at a root server. Answers are cached by name servers to optimize future lookups.
<!--ID: 1764527725528-->



What are "domain names" and how are they structured? #flashcard
Domain names are sequences of labels separated by dots (e.g., `example.com`). Each suffix is also a domain name. The syntax does not directly reflect IP addresses or network structure.
<!--ID: 1764527725529-->



What are the three kinds of top-level domain names (TLDs) used by the Internet's DNS? #flashcard
1.  **Generic Top-Level Domains (gTLDs)**: `com`, `org`, `edu`, `gov`, `mil`, and many more.
2.  **Country Code Top-Level Domains (ccTLDs)**: `ca`, `de`, `uk`, `us`, etc.
3.  **Infrastructure Top-Level Domain**: `arpa`.
<!--ID: 1764527725530-->



Who was Tim Berners-Lee? #flashcard
The inventor of the World Wide Web. He created the first web client and server at CERN, developed HTTP and HTML, and created the first web browser (Nexus).
<!--ID: 1764527725531-->



What is the World Wide Web? #flashcard
A vast collection of interlinked documents and related services accessible via the Internet. Web resources are identified by URLs and obtained using HTTP.
<!--ID: 1764527725532-->



What is HTML? #flashcard
Hypertext Markup Language, used to write web pages. These documents contain links to other information units and can represent information statically (in files) or dynamically (via scripts).
<!--ID: 1764527725533-->



What is HTTP? #flashcard
Hypertext Transfer Protocol, which enables web browsers (clients) to request documents from web servers. It uses TCP for transport, is stateless (state is tracked using cookies), and transactions consist of a client request followed by a server response.
<!--ID: 1764527725534-->



What is the structure of a URL (Uniform Resource Locator)? #flashcard
`<protocol>://<host>[:<port>]/<path>[?<query>][#<fragment>]`
It specifies the protocol, host, optional port, path to the resource, optional query strings, and optional fragments.
<!--ID: 1764527725535-->



## Week 09: Information Security

What is Information Security concerned with protecting? #flashcard
-   Electronically stored and manipulated information (confidentiality, integrity, availability).
-   The systems used to store and manipulate information (system confidentiality, integrity, availability of services, resources, monitoring, security mechanisms).
-   Personal and organizational reputation.
<!--ID: 1764527725536-->



Why is information security difficult to engineer? #flashcard
It involves most components of an information system, requirements often clash with other system requirements, it cuts across component boundaries and abstraction levels, and it's hard to isolate from other concerns. A system is only as secure as its weakest component.
<!--ID: 1764527725537-->



What is "confidentiality" in information security? #flashcard
The state in which information or resources are concealed from unauthorized access. It applies to metadata and is achieved by following the "need to know" principle (part of least privilege).
<!--ID: 1764527725538-->



What is "integrity" in information security? #flashcard
The state in which data or resources have not been accidentally or maliciously modified or destroyed. Integrity violations reduce trustworthiness. It can be maintained by prevention of unauthorized modification and detection of violations.
<!--ID: 1764527725539-->



What is "availability" in information security? #flashcard
The state in which information or resources can be used as needed. It's an important aspect of reliability, and denial-of-service attacks are attempts to block availability.
<!--ID: 1764527725540-->



What are the three types of permissions on Unix systems and what do they relate to in information security? #flashcard
1.  **Read**: Relates to **confidentiality**.
2.  **Write**: Relates to **integrity**.
3.  **Execute**: Relates to **availability** (to some extent).
<!--ID: 1764527725541-->



What is a "threat" versus an "attack" in information security? #flashcard
A **threat** is a *potential violation* of confidentiality, integrity, or availability. An **attack** is *an attempt to violate* confidentiality, integrity, or availability.
<!--ID: 1764527725542-->



What is cryptography? #flashcard
The art and science of concealing meaning, and a collection of mathematical techniques for protecting data confidentiality, integrity, verifying identities, and producing random objects.
<!--ID: 1764527725543-->



What is "conventional encryption" (symmetric encryption)? #flashcard
A cryptographic technique where the same secret key is used for both encryption (plaintext, key $\xrightarrow{f}$ ciphertext) and decryption (ciphertext, key $\xrightarrow{f^{-1}}$ plaintext). Its security relies on keeping the key secret.
<!--ID: 1764527725544-->



What is "public key encryption" (asymmetric encryption)? #flashcard
A cryptographic technique using a pair of keys: a **public key** (shared, used for encryption or signature verification) and a **private key** (kept secret, used for decryption or signature creation). It's mathematically infeasible to derive the private key from the public key.
<!--ID: 1764527725545-->



What are the main motivations for public key encryption? #flashcard
1.  Difficulty of secret key distribution in conventional encryption.
2.  Need for digital signatures that can be verified by arbitrary parties.
<!--ID: 1764527725546-->



How does public key encryption provide confidentiality? #flashcard
The sender encrypts the plaintext message with the **receiver's public key**. Only the receiver can decrypt it using their **private key**.
<!--ID: 1764527725547-->



How does public key encryption provide integrity, digital signatures, and non-repudiation? #flashcard
The sender encrypts a message digest (hash) of the text with their **private key**. The receiver decrypts this with the **sender's public key** and compares it to a newly computed message digest of the received text. This verifies integrity, acts as a digital signature, and prevents the sender from denying they sent it (non-repudiation).
<!--ID: 1764527725548-->



Compare the efficiency and versatility of conventional vs. public key encryption. #flashcard
**Conventional encryption** is much more efficient but less versatile. **Public key encryption** is much less efficient (only practical for small pieces of text) but more versatile (can be used for digital signatures and secret key exchange).
<!--ID: 1764527725549-->



What is the RSA algorithm? #flashcard
A public key encryption algorithm whose security is based on the mathematical infeasibility of factoring the product of two large prime numbers.
<!--ID: 1764527725550-->



What are the three layers of the SSH protocol? #flashcard
1.  **Transport Layer**: Handles initial key exchange, server authentication, encryption, compression, and integrity verification.
2.  **User Authentication Layer**: Manages user authentication (e.g., password, public key).
3.  **Connection Layer**: Manages SSH communication channels.
<!--ID: 1764527725551-->



What is a "hash function" and its purpose? #flashcard
A hash function takes a large input (e.g., a string) and produces a small, fixed-size output (a hash value or "little string"). Its purpose is to quickly locate data in data structures (like hash tables) or to verify data integrity by comparing hash values.
<!--ID: 1764527725552-->



What is "mathematical unfeasibility" in cryptography? #flashcard
An algorithm is mathematically unfeasible if, while theoretically solvable, it would take an impractically long time (e.g., billions of years) to compute even with powerful computers, making it secure against brute-force attacks.
<!--ID: 1764527725553-->



## Week 10: Problem Solving

What are the three kinds of recursion and induction? #flashcard
1.  **Structural**: Based on an inductive set (e.g., algebraic data type).
2.  **Ordinal** (well-ordered or transfinite): Based on a well-ordered set (e.g., natural numbers).
3.  **Well-Founded**: A general category that includes structural and ordinal recursion/induction.
<!--ID: 1764527725554-->



What is a well-order? #flashcard
A total order $(S, <)$ that is Noetherian, meaning there are no infinite strictly descending sequences of members of $S$. Example: $(\mathbb{N}, <)$.
<!--ID: 1764527725555-->



Why is $(\mathbb{Z}, <)$ not a well-order? #flashcard
Because it allows for infinite descending sequences, such as $\dots < -3 < -2 < -1 < 0$.
<!--ID: 1764527725556-->



What is the Ackermann function? #flashcard
A rapidly growing recursive function $A: \mathbb{N} \times \mathbb{N} \to \mathbb{N}$. It is a total function (always terminates) but grows faster than any primitive recursive function.
<!--ID: 1764527725557-->



What is the lexicographical order on pairs of natural numbers $(\mathbb{N} \times \mathbb{N}, <_{lex})$? #flashcard
$(m,n) <_{lex} (m',n')$ if $(m = m' \land n < n') \lor m < m'$. This is a well-order, similar to how words are ordered in a dictionary.
<!--ID: 1764527725558-->



What is the "little languages" problem-solving method? #flashcard
Instead of solving a single problem, create a domain-specific language (DSL) or a set of tools designed to solve a *family of related problems*. If requirements change, the language can be used to construct a solution to the new problem.
<!--ID: 1764527725559-->



What are the two components of a software module? #flashcard
1.  An **interface**: A set of services offered by the module to other modules.
2.  An **implementation**: The software that provides those services.
The interface itself can be seen as a little language of services.
<!--ID: 1764527725560-->



What is a type class in Haskell, and how does it relate to little languages? #flashcard
A type class is a family of types with a common set of functions (methods) and possibly default implementations. The methods of a type class form a "little language" for interacting with instances of that type class.
<!--ID: 1764527725561-->



What is an axiomatic theory? #flashcard
A pair $T = (\mathcal{L}, \Gamma)$ where $\mathcal{L}$ is a language in some underlying logic, and $\Gamma$ is a set of formulas of $\mathcal{L}$ called the axioms. A model of $T$ is an interpretation where all axioms are true.
<!--ID: 1764527725562-->



How does a type class relate to an axiomatic theory? #flashcard
A type class can be viewed as an axiomatic theory with implicit axioms. The methods define the language, and implicit laws (like associativity for `Monoid`) define the axioms.
<!--ID: 1764527725563-->



What is the "Copy, Modify, Compare, and Generalize (CMCG)" problem-solving method? #flashcard
A four-step design process:
1.  **Copy** a solution $S'$ to a related problem $P'$.
2.  **Modify** $S'$ to become a solution $S$ for the current problem $P$.
3.  **Compare** $S$ with $S'$ to find mistakes and potential improvements.
4.  **Generalize** $S$ and $S'$ to obtain a solution $S^*$ that solves a family of problems including $P$ and $P'$.
<!--ID: 1764527725564-->



How can the `bigSum`, `bigProd`, and `bigAppend` functions be generalized using monoids? #flashcard
These functions share a common structure (iterating and combining elements with an identity). They can be generalized into a single `superSum` function by using a `Monoid` type class, which abstracts the binary associative operator (`mappend` or `<>`) and the identity element (`mempty`).
<!--ID: 1764527725565-->



What are the properties of a Monoid $(m, \cdot, e)$? #flashcard
1.  **Associativity**: $(x \cdot y) \cdot z = x \cdot (y \cdot z)$
2.  **Identity Element**: $e \cdot x = x = x \cdot e$
<!--ID: 1764527725566-->



## Week 11: Data

What are the four main things computers do with information? #flashcard
1.  Store information.
2.  Manipulate information.
3.  Represent information using various kinds of data.
4.  Control behavior with algorithms implemented as programs.
<!--ID: 1764527725567-->



What is "resolution" in digital images? #flashcard
The dimensions of the rectangular grid of pixels that make up a digital display or image. Higher resolution means a more detailed image.
<!--ID: 1764527725568-->



What is the difference between Raster Graphics and Vector Graphics? #flashcard
**Raster graphics** represent an image as a grid of pixels; resolution depends on grid fineness and bits per color. **Vector graphics** represent an image as geometric objects in a coordinate system, are usually smaller, and are scalable without loss of quality.
<!--ID: 1764527725569-->



How is color represented in the RGB model? #flashcard
The RGB model is an **additive model** for screens. A color is a sum of three 8-bit bytes (Red, Green, Blue), ranging from black (0,0,0) to white (255,255,255). Often represented in Base-16 (e.g., `#FFFFFF`).
<!--ID: 1764527725570-->



How is color represented in the CMYK model? #flashcard
The CMYK model is a **subtractive model** for printing. Colors are produced by absorbing light with four inks: Cyan (absorbs red), Magenta (absorbs green), Yellow (absorbs blue), and Black (absorbs all colors). Complete absorption is black, no absorption is white (like paper).
<!--ID: 1764527725571-->



How is digital audio produced? #flashcard
From a continuous sound wave by periodic **sampling** (taking measurements at intervals) and **discrete quantization** (representing those measurements with discrete values). Sounds outside human perception are eliminated, and files are compressed.
<!--ID: 1764527725572-->



What is a digital video? #flashcard
A sequence of digital images (frames). A frame rate of about 30 frames per second is needed for smooth motion. Video files consist of video, audio, and metadata tracks, all compressed.
<!--ID: 1764527725573-->



What is the difference between lossless and lossy data compression? #flashcard
**Lossless compression** is reversible, meaning the original data can be perfectly recovered after decompression. **Lossy compression** is irreversible, meaning some information is permanently lost during compression.
<!--ID: 1764527725574-->



How does Huffman Coding work? #flashcard
A lossless compression algorithm where symbols that appear more frequently are encoded using fewer bits. The codes are generated from a Huffman tree based on character-frequency pairs.
<!--ID: 1764527725575-->



How does the LZ77 algorithm work? #flashcard
A lossless compression algorithm that replaces repeated strings of data with references to earlier occurrences. A reference (n, d) means "n bytes that occurred d bytes back." It's the basis for many common compression algorithms like Zip.
<!--ID: 1764527725576-->



What is a data structure? #flashcard
A structured collection of values that is created and manipulated by a computer program. Examples include lists, arrays, trees, graphs, and hash tables.
<!--ID: 1764527725577-->



What is a database? #flashcard
An organized collection of data, usually relational (collections of relations), designed to be modified and queried. SQL (Structured Query Language) is the standard for interacting with databases.
<!--ID: 1764527725578-->



What is the general form of a proof by induction? #flashcard
1.  Define the relevant **property** $P$.
2.  State the **theorem** of the form $\forall x \in S . P(x)$ to be proved.
3.  Specify the **induction principle** $I$ to be used.
4.  Verify the **cases** for $I$ (one or more base cases and induction steps).
5.  Conclude that the theorem $A$ has been proved by induction principle $I$.
<!--ID: 1764527725579-->



## Week 12: Software Development

What was the Therac-25 incident? #flashcard
A series of six incidents where a radiation therapy machine delivered massive overdoses of radiation, causing death or severe injury, due to critical software and design flaws.
<!--ID: 1764527725580-->



What were the main causes of the Therac-25 failures? #flashcard
Bad software design, a poor development process (single developer, no code review, bad documentation, inadequate testing for race conditions/overflow), software being ignored in reliability modeling, and lack of hardware interlocks.
<!--ID: 1764527725581-->



Who is David Parnas and what are his key contributions to software engineering? #flashcard
Professor Emeritus at McMaster, known for ideas of **modular design** and **information hiding**, advocating for precise documentation (Parnas tables), and establishing software development as an engineering discipline.
<!--ID: 1764527725582-->



What are the six phases of the software development process? #flashcard
1.  **Problem Identification**
2.  **Requirements** (What the product must do)
3.  **Design** (How the problem will be solved)
4.  **Implementation** (Executable solution)
5.  **Verification** (Testing and analysis of behavior)
6.  **Deployment** (Delivery and maintenance)
<!--ID: 1764527725583-->



Name six software development models. #flashcard
1.  **Waterfall**: Linear, sequential phases.
2.  **Spiral**: Iterative application of waterfall steps.
3.  **Refinement** (Top-Down): Step-wise refinement of requirements and design.
4.  **Prototyping**: Building and discarding a preliminary version to learn requirements.
5.  **Incremental**: Developing a partial product and extending it.
6.  **Agile**: Evolving product through client-developer dialectic.
<!--ID: 1764527725584-->



What is "software engineering"? #flashcard
The application of a systematic, disciplined, quantifiable approach to the development, operation, and maintenance of large, complex, evolving software products built by teams.
<!--ID: 1764527725585-->



Name five software engineering principles. #flashcard
1.  **Rigor**: Precise reasoning.
2.  **Separation of concerns**: Isolating different concerns.
3.  **Modularity**: Dividing systems into smaller parts.
4.  **Least Privilege**: Granting minimum necessary privileges.
5.  **Formality**: Using formal languages for reasoning.
6.  **Abstraction**: Focusing on important details, ignoring irrelevant ones.
7.  **Anticipation of change**: Planning for future modifications.
8.  **Generality**: Solving broader problems.
9.  **Incrementality**: Approaching solutions through successive approximations.
<!--ID: 1764527725586-->



What is "separation of concerns" and what is a danger associated with it? #flashcard
The principle of isolating and considering different concerns separately to enable parallelization of effort. A danger is that opportunities for global optimizations may be lost, and some issues (like security) cannot be safely isolated.
<!--ID: 1764527725587-->



What is "modularity" in software engineering? #flashcard
The principle of dividing complex systems into smaller, manageable parts called modules. This enables separation of concerns through modular decomposition (top-down) and modular composition (bottom-up).
<!--ID: 1764527725588-->



What is "abstraction" in software engineering? #flashcard
The process of focusing on what is important while ignoring what is irrelevant, creating models that omit details. Refinement is its opposite. Over-abstraction can make models difficult to understand.
<!--ID: 1764527725589-->



What is "anticipation of change" and what are some techniques for it? #flashcard
The principle of planning for future changes. Techniques include **configuration management**, **information hiding** (hiding likely-to-change details within modules), and creating **little languages** (DSLs) for families of problems.
<!--ID: 1764527725590-->



What are the limitations of software testing? #flashcard
It's usually impossible to test every input/configuration. Testing can show *incorrectness* but rarely *correctness*. Positive results alone don't guarantee quality. Testing theory involves many undecidable problems.
<!--ID: 1764527725591-->



What are the four kinds of test case selection? #flashcard
1.  **Blackbox**: Based on specification only.
2.  **Whitebox**: Based on the code's internal structure.
3.  **Statistical random**: Measures reliability using an operational profile.
4.  **Wild random**: Measures robustness using a uniform random distribution.
<!--ID: 1764527725592-->



What are some recommendations for software testing? #flashcard
-   Test smallest components first (**unit testing**).
-   Test all possible paths and statements (**path/statement coverage**).
-   Test various data combinations: boundaries (at, far, close), extreme cases, degenerate cases (empty files), and erroneous cases.
<!--ID: 1764527725593-->



What is "reliability testing" versus "robustness testing"? #flashcard
**Reliability testing** assesses if the software performs as expected under normal, everyday use without failing. **Robustness testing** assesses if the software can handle unexpected or unusual situations (e.g., random inputs) without failing.
<!--ID: 1764527725594-->



What is "whitebox testing" versus "blackbox testing"? #flashcard
**Whitebox testing** involves testing the internal implementation of the code. **Blackbox testing** involves testing only the external interface against requirements, often by a separate, unbiased team.
<!--ID: 1764527725595-->

