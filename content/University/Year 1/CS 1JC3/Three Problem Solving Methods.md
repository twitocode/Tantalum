---
CreatedAt: 2025-11-06
class: CS 1JC3
tags:
  - "#classnote"
banner: University/Year 1/ECON 1BB3/Chapter 12 Economics/Attachments/10604BE5-725B-4EC2-A0DB-EB23AA3737E0.png
---
How do we solve problems?
1. Recursion & Induction
2. Little Languages
3. Copy, modify, compare, and generalize (CMCG)


# Recursion & Induction
**Recursion** is a method of definition in which an object is defined in terms of itself.
- One of the most fundamental ideas of computing.
- Can make specifications, descriptions, and programs easier to express, understand, and *prove correct*

**Induction** is a method of proof based on a *inductive set*, *well-ordered set*, or *well-founded relation*.
- The proof method is specified by an **induction principle**.
- Induction can be used to prove properties about inductive sets, well-ordered sets, and well-founded relations as well as the functions defined on them

## The 3 kinds of Recursion & Induction
1. Structural
	- Based on an inductive set (e.g *algebraic data type*)
2. Ordinal (aka *well-ordered* or *transfinite*)
	- Based on a well-ordered set (e.g *natural numbers*)
3. Well-Founded
	- Based on a well-founded relation
	- Structural and ordinal recursion and induction are special cases of well-founded recursion and induction

**Well-founded**: it has a good reason to be true or to happen. **It’s based on good evidence or solid logic,** *making it believable or understandable.*
- Ex. *Well-founded*: Like a house built on a strong, solid foundation. It’s sturdy and not likely to fall over.
	- *Not well-founded*: Like a house built on sand. It’s shaky and could easily collapse.

## Well-Orders
**Well-order**: A total order $(S, <)$ that is *Noetherian*,  meaning that there are no infinite descending sequences of members of $S$ of the form
$$\dots < x_{n} < \dots < x_{1} <x_{0}$$
### Examples
1. $(\mathbb{N}, <)$ where $<$ is the usual order on $\mathbb{N}$, is a well order
2. $(\mathbb{Z}, <)$ where $<$ is the usual order on $\mathbb{Z}$, is a *not* well order
3. $(S, <)$ where $S$ is 
   $\left\{  0, \frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \dots, 1, 1 \frac{1}{2}, 1 \frac{2}{3}, 1 \frac{3}{4}, \dots \right\}$
   and $<$ is the usual order on $\mathbb{Q}$, is a well order
4. $(S, <)$, where S is the set of strings over a finite alphabet and $<$ is a lexicographic order on $S$, is a well order

```haskell
data Nat
	= Zero
	| Suc Nat
deriving ( Show )

natPlus :: Nat -> Nat -> Nat
x ‘natPlus ‘ Zero = x
x ‘natPlus‘ ( Suc y ) = Suc ( x ‘natPlus‘ y )

natTimes :: Nat -> Nat -> Nat
x ‘natTimes‘ Zero = Zero
x ‘natTimes‘ ( Suc y ) = x ‘natPlus‘ ( x ‘natTimes‘ y )
```

**Weak Induction (Mathematical Induction)** is the structural induction principle for Nat:
- For any property $P$. if 
	- $P \\\ Zero$ holds and
	- $P \\\ (Suc \\\ x)$ holds whenever $P \\\ x$ holds
- then $P \\\ x$ holds for all values $x$ of type Nat
Can be used to prove theorems about Nat and recursively defined functions on Nat such as natPlus and natTimes

Ex
$\forall x . \ P(x)$
$(P(0) \land (\forall y . \ P (y) \implies P(y + 1)) \implies \forall x . \ P(x))$

**Commutativity of natPlus:**
`x ‘natPlus‘ y == y ‘natPlus‘ x.`
**Commutativity of natTimes:**
`x ‘natTimes‘ y == y ‘natTimes‘ nd strx.`

**Strong Induction (complete induction/course of values induction)**: (ordinal induction principle for ($\mathbb{N}, <)$)
- For any property $P$, if
	- $P(x)$ holds whenever $P(0), \dots, P(x-1)$ hold
- then $P(x)$ holds for all $x \in \mathbb{N}$

$P'(x) = P(0) \land \dots \land P(x)$

> [!NOTE] Theorem
> Weak and strong induction are equivalent to each other
> ___
> **Strong induction provides a stronger induction hypothesis than weak induction**

# Little Langugages
aka *method of domain-specific languages (DSLs)*

What happens if you solve a problem but later the problem requirements change?
- Your solution becomes a solution for the wrong problem.
- You may need to start the problem solving process over.
**A better approach is to create a little language that can be used to solve a family of related problems.**
- The components of the language are designed to work together to solve a wide range of problems.
- The family includes the problem at hand.
- **If the problem requirements change, the language can be used to construct a solution to the new problem**

## Derivatives Example
### The Derivative

* The **derivative** of a function $f: \mathbb{R} \to \mathbb{R}$ at $a \in \mathbb{R}$ is defined as:
    $$
    \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}
    $$
* Computing derivatives directly from the definition is tedious, while it is much easier to compute derivatives using **symbolic differentiation**.
* The rules for symbolic differentiation are a **little language for computing derivatives**.
#### Symbolic Differentiation Rules
Rules include:
1.  **Variable rule.**
2.  **Constant rule.**
3.  **Sum rule.**
4.  **Product rule.**
5.  **Quotient rule.**
6.  **Chain rule.**

## Software Modules
A software module has two components:  
1. An **interface** that is a set of services offered by the module to other modules.  
2. An **implementation** that is the software that provides the services in the interface.  
The interface is a little language of services.

## Type Classes Example
A **type class** is a family of types with a common set of functions possibly with some default implementations.
A type class is defined in Haskell by a **class declaration**:
    ```haskell
    class C a where
      f₁ :: t₁
      ⋮
      fₙ :: tₙ
      fᵢ x₁ ⋯ xₘ = e
    ```
    $f_1, \dots, f_n$ are the **methods** of the type class.
* An **instance** of a type class is a type with implementations for the type of the methods of the type class.
* The methods of a type class are a **little language for utilizing the instances of the type class**.

## Axiomatic Theories Example
* An **axiomatic theory** is a pair $T = (\mathcal{L}, \Gamma)$ where:
    1.  $\mathcal{L}$ is a **language** in some underlying logic.
    2.  $\Gamma$ is a set of formulas of $\mathcal{L}$ called the **axioms** of $T$.
* A **model** of $T$ is an interpretation of $\mathcal{L}$ in which all the axioms in $\Gamma$ are true.
* **Example:** $T_M = (\mathcal{L}_M, \Gamma_M)$ is a theory of **monoids** where:
    1.  $\mathcal{L}_M$ includes the symbols $\mathbf{e}$ (identity element) and $\mathbf{mul}$ (binary operation).
    2.  $\Gamma_M$ contains the following formulas (the monoid axioms):
        a.  $\forall x . \forall y . \forall z . (x \text{ mul } y) \text{ mul } z = x \text{ mul } (y \text{ mul } z)$. (Associativity)
        b.  $\forall x . (x \text{ mul } \mathbf{e}) = x$. (Right Identity)
        c.  $\forall x . (\mathbf{e} \text{ mul } x) = x$. (Left Identity)

A theory is a **little language with a set of assumptions** that can be viewed as a specification of its models.
A **type class** is an **axiomatic theory with implicit axioms**.
-  *Note: In Haskell, the methods of the type class define the "language" ($\mathcal{L}$), and the implicit laws (like associativity for the `Monoid` type class) define the "axioms" ($\Gamma$).*

# Copy, Modify, Compare, and Generalize
It is a four-step design process to solve a problem $P$:
1.  **Copy** the solution $\mathbf{S'}$ to a related problem $\mathbf{P'}$.
2.  **Modify** $\mathbf{S'}$ to make it a solution $\mathbf{S}$ for $\mathbf{P}$.
3.  **Compare** $\mathbf{S}$ with $\mathbf{S'}$ to find mistakes in $\mathbf{S'}$ and to see if $\mathbf{S'}$ can be improved.
4.  **Generalize** $\mathbf{S}$ and $\mathbf{S'}$ to obtain a solution $\mathbf{S}^*$ that solves a family of problems that includes $\mathbf{P}$ and $\mathbf{P'}$.
CMCG trades short-term cost for long-term gain.

## Big Sum and Prod
```haskell
bigSum :: Num a = > Integer -> Integer -> ( Integer -> a ) -> a
bigSum m n f
	| m > n = 0
	| m <= n = ( bigSum m ( n - 1) f ) + f n
	
bigProd :: Num a = > Integer -> Integer -> ( Integer -> a ) -> a
bigProd m n f
	| m > n = 0/ 1
	| m <= n = ( bigProd m ( n - 1) f ) +/ * f n	
	
bigAppend :: Integer -> Integer -> ( Integer -> String) -> String
bigAppend m n f
	| m > n = ""
	| m <= n = ( bigAppend m ( n - 1) f ) +/ ++ f n
```
these two functions are almost the same, the only difference is multiply and addition, and 0 and 1. **How do i generealize it?**
- These things have identity elements (Monoids)
	- addition = 0
	- multiplication = 0
	- concatenation with strings = ""

Monoid: 
$$
(m, \cdot{}, e)
$$
$\cdot$ is the binary associative
$e$ is the identity element
You no longer need multiple functions

A monoid is a semigroup with some addition stuff
## Monoid Type Class and Generalized SuperSum Function
```haskell
-- Monoid Type Class Definition (Page 25/29)
class Semigroup m where
  (<>) :: m -> m -> m

class Semigroup m => Monoid m where
  mempty :: m
  mappend :: m -> m -> m
  mappend = (<>)
  mconcat :: [m] -> m
  mconcat = foldr mappend mempty

-- The Generalized SuperSum Function (Page 24/29)
import Data.Monoid

superSum :: Monoid a => Integer -> Integer -> (Integer -> a) -> a
superSum m n f
    | m > n = mempty
    | m <= n = superSum m (n - 1) f `mappend` f n
```

how do we tell the difference between addition and multiplication?
```haskell
newtype Additive a = Additive a
	deriving Show
fromAdditive :: Additive a -> a
fromAdditive ( Additive a ) = a

funToAdditive :: ( Integer -> a ) -> ( Integer -> Additive a )
funToAdditive f = let g n = Additive ( f n ) in g

instance Num a = > Monoid ( Additive a ) where
	mempty = Additive 0
	Additive x ‘ mappend ‘ Additive y = Additive ( x + y )
	
b1 = fromAdditive ( superSum 1 100 Additive )
-- = 5050
square :: Integer -> Integer
square x = x ^2

b2 = fromAdditive ( superSum 1 3 ( funToAdditive square ) )
-- = 14


newtype Multiplicative a = Mu ltiplica tive a
	deriving Show
fromMultplicative :: Multiplicative a -> a
fromMultplicative ( Multiplicative a ) = a
instance Num a = > Monoid ( Multiplicativ e a ) where
	mempty = Multipl icative 1
	Multiplicative x ‘ mappend ‘ Multiplicative y
		= Multiplicative ( x * y )
c = fromMultplicative ( superSum 1 4 Multiplicative )
-- = 24
```