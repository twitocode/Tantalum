---
CreatedAt: 2025-11-18
class: CS 1JC3
tags:
  - "#classnote"
---
# Therac-25
A radiation therapy machine for treating cancer
6 seperate incidents where it delivered overdoses of radiation causing death.
1. Software failed to
	1. detect that the target was not in place
	2. detect that the patient was receiving radiation
	3. prevent the patient from receiving an overdose of radiation
![[Pasted image 20251122220345.png]]
## What were the causes of failure?
1. bad software design
2. bad dev process
	1. coding and test done by 1 person
	2. no code review
	3. bad docs for error codes
	4. bad testing procedures (missed race conditions, arithmetic overflow)
	5. bad U- design
3. software was ignored during reliability modelling
4. no hardware interlocks to prevent the delivery of high-energy electron beams when the target was not in place.
# Software Development Process
A **rational development** process is needed to produce quality software
Any proposed rational process is necessarily an **idealization**
- humans make errors
- tech has limitations
- requirements change
- bad communcation
- bad understanding

## David Parnas
Professor Emeritus at McMaster
- Made ideas of **modular design** and **information hiding**
- advocate of precise documentation including **Parnas tables**
- advocate of software development as an engineering discipline
**created software engineering program at mac**

## Software Development Phases
1. **Problem Identification**: What needs to be solved?  
2. **Requirements** (Problem Definition): *What* are the product requirements? What  objectives, functions, and constraints are relevant?  
3. **Design**: How will the problem be solved? *How* will the product requirements be satisfied?  
4. **Implementation**: What is a solution to the problem? What is an executable implementation of the design?  
5. **Verification**: How will the product be analyzed and tested? What behaviour does the product exhibit? Is the behaviour correct?  
6. **Deployment**: How will the product be delivered and maintained?

## Software Development Models
1. **Waterfall**: Development follows the logical order of the phases given above in a linear fashion.  
	- This model is an idealization of the software development process that is rarely realized.  
2. **Spiral**: The steps of the waterfall model are repeatedly applied until a suitable product is obtained.  
3. **Refinement** (Top-Down): The product requirements are step-wise refined through a series of designs until an implementation of the product is reached.  
4. **Prototyping**: A prototype of the product is developed first and then thrown away.  
5. **Incremental**: A partial product is developed and then incrementally extended until a full product is obtained.  
6. **Agile**: A product evolves through a dialectic between the client and developers. *this one is the devil*

# Software Engineering
An area of engineering that deals with the development of  
software products that:  
- Are large or complex.  
- Exist in multiple versions.  
- Exist for large periods of time.  
- Are continuously being modified.  
- Are built by team

> Software engineering is the “application of a systematic, disciplined, quantifiable approach to the development, operation, and maintenance of software” (IEEE 1990)

Relies heavily on mathematical techniques (especially logic and discrete mathematics).

## Software Engineering Principles
1. **Rigor**: Reasoning should be precise.  
2. **Separation of concerns**: Different concerns should be isolated and considered separately.  
3. **Modularity**: Complex systems should be divided into smaller parts, called modules.  
4. **Least Privilege**: Each subject should be given the fewest privileges needed for it to perform its task.  
5. **Formality**: Reasoning should be done using a language with a formal syntax and a precise semantics.  
6. **Abstraction**: What is important should be separated out from what is irrelevant.  
7. **Anticipation of change**: Future change should be anticipated and planned for.  
8. **Generality**: Whenever possible, a more general problem should be solved instead of the problem at hand.  
9. **Incrementality**: A problem should be attacked by producing successively closer approximations to a solution
## Separation of Concerns
The principle that different concerns should be isolated and considered separately
- **Enables parallelization of effort.**
Concerns can be separated various ways.  
- Different concerns are considered at different times.  
- Software qualities are considered separately.  
- A software system is considered from different views.  
- Parts of a software system are considered separately
There are some dangers with this
- Opportunities for global optimizations may be lost
- **Some issues cannot be safely isolated (e.g security)**


## Modularity
**Modular System**: a complex system that is divided into smaller parts called **modules**
Enables the principle of separation of concerns to be applied in two ways:  
1. Different parts of the system are considered separately.  
2. The parts of the system are considered separately from their composition.

**Modular decomposition:** is the top-down process of dividing a system into modules.  
- “divide and conquer” approach.  
**Modular composition:** is the bottom-up process of building a system out of modules.  
- “interchangeable parts”  approach

## Abstraction
The process of focusing on what is important while ignoring what is irrelevant
- a special case of separation of concerns.
- produces a model of an entity in which the irrelevant details of the entity are left out
	- Many different models of the same entity can be  produced by abstraction. 
	- Abstraction models differ from each other by what is considered important and what is considered irrelevant.  
	- Repeated application of abstraction produces a hierarchy of models
Refinement is the opposite of abstraction

> [!NOTE]
> Over abstraction produces models that are difficult to understand because they are missing too many details

## Anticipation of Change
The principle that future change should be anticipated and planned for
- aka design for change

Techniques for dealing with change:  
1. **Configuration management**: Manage the configuration of the software so that it can be easily modified as the software evolves.  
2. **Information hiding**: Hide the things that are likely to change inside of modules.  
3. **Little languages**: Create little languages that can be used to solve families of related problems.

# Software Testing
What can be done with testing is limited:  
- It is usually impossible to test every possible input and environmental configuration.  
- Testing can show **instances of incorrectness**, but it is usually not practical for demonstrating *correctness*.  
- Positive testing results are not, by themselves, an indication of software quality. 
- The theory of testing leads to many undecidable problems.  
**Testing can be used to assess reliability and robustness.**

## Kinds of Test Case Selection
1. **Blackbox**: Test cases selected to cover the behaviour of the code based on only the specification of the code.  
2. **Whitebox**: Test cases selected to cover the behaviour of the code based on the code itself.  
3. **Statistical random**: Test cases selected to measure reliability using an operational profile.  
4. **Wild random**: Test cases selected to measure robustness using a uniform random distribution.

## Testing Recommendations
1. Test the smallest components first (**unit testing**).  
2. Test all possible paths through and statements in the  program (**path coverage and statement coverage**).  
3. Test all types of data combinations including:  
- Cases along the boundaries.  
	- At the boundary.  
	- Far from the boundary on either side.  
	- Close to the boundary on either side.  
- Extreme cases (like very small and very large numbers).  
- Degenerate cases (such as an empty file).  
- Erroneous cases (such as a name of a non-existing file).

# FINALLY, what is Computational Thinking?
It is...
1.  using the right computational tools in the right way for the problem at hand.  
2.  understanding the limits and pitfalls of computational tools.  
3.  solving problems by recursion.  
4.  proving properties by induction.  
5.  balancing clarity with efficiency.  
6.  removing redundancy in specifications, code, and other documentation.  
7.  defining data using algebraic types.  
8.  defining functions over algebraic types using recursion and pattern matching.
9.  identifying threats to information security and devising the means to protect against them.  
10.  using encryption of various kinds to protect information security.  
11.  being able to employ a collection of computing-based problem solving methods.  
12.  using little languages to solve families of problems.  
13.  using a rational development process to produce quality software.  
14.  utilizing virtual systems.  
15.  employing models with several layers of abstraction.