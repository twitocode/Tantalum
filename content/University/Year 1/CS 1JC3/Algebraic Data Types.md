---
CreatedAt: 2025-10-06
class: CS 1JC3
tags:
  - "#classnote"
---
# Solving problems via Recursion
`f :: Integer -> [Integer] -> Bool`
`f x L`
1. What are the simplest cases?
2. How is a nonsimplest case reduced to simpler cases?
3. What assignment of the nautral numbers to (x, L) input pairs show that the definition is well defined?

Linear search vs Binary Search

# Types
Making new types
1. type alias
2.  data types (like structs,, classes)

## Synonym Type (type-alias)
```haskell
type Vector = (Double, Double, Double)
--can have paramters
type Vector a b c = (a, b, c) --polymorphism

point :: Vector Int Double Float
point = (1, 1.0, 1.0)
```
Uses `type` instead of `data`
## Algebraic Types (Inductive types)
They are a new type of new values formed as a *sum* of *products*.
![[Pasted image 20251006115947.png]]

$C_{i}$ are **value constructors** that create new values
$t_{j}^i$ are types that may include $t$ itself
The type of of $C_i$ is $t^i_{1} \to \dots \to t^i_{m_{i}} \to t$

every member of t is constructed and constructed in the same way as each other
**pattern matching can be used to match each member of $t$**


> [!NOTE] Title
> No junk and No confusion

The definition of the algebraic type t induces an **induction principle** that can be used to prove that a property holds for all members of $t$
- Proof by induction is the most useful proof tecniqutechniqe because in computing most types are inductive. 

## Sum and Product Types
**Sum Types**: algebraic types that have more than one constructor
```haskell
data Bool = False | True
```
**Product Types**: algebraic types that have one constructor and the same structure as a tupel type
```haskell
data Point = MakePoint Float Float
--MakePoint is the constructor (we can name it)
--the same thing as
type Point = (Float, Float)
```

## Enumeration Types
An algebraic type that enumerates a finite set of new values.
defined by constructors that take no arguments
```haskell
data t = C1 | C2 | ... | Cn
-- C1...Cn are the new values of the new type t
data Bool = False | True 

-- making our own Bool
data Bool = False | True deriving (Show)

implies :: Bool -> Bool -> Bool
True `implies` False = False
_ `implies` _ = True

data WeekDay = Sunday
				| Monday
				| Tuesday
				| Wednesday
				| Thursday
				| Friday
				| Saturday
				deriving (Show)
				
meaning :: WeekDay -> String
meaing Sunday = "sun's day"
meaing Monday = "moon's day"
meaning Thursday = "Thor's day"
meaning Saturday = "saturn's day"
```

## Recursive Type
an algebraic type whose defined type is include in the constructor's types
the set of values of a recursive type is **countably infinite** (0 - Zero, 1 - Suc Zero, 2 - Suc $ Suc Zero)
- another example is the natural numbers (the first natural number 1, then 2)
- *Uncountably infinite* would be the real numbers
```haskell
data Nat
 = Zero
 | Suc Nat
-- every value is constructed uniquely 
-- 0 - Zero
-- 1 - Suc Zero
-- 2 - Suc $ Suc Zero

(shea 3) x -> shea x 3

data ListInteger
 = Nil
 | Cons Integer ListInteger
-- essentially a linked list

data BinTreeFloat
 = Leaf Float
 | Branch BinTreeFloat Float BinTreeFloat
 
-- The branch has a left node which could be another branch of a leaf, the actual node itself, and the right node which is the same as the left node
-- leafs are the end points
```

 The example for Natural Numbers
 ```haskell
data Nat
 = Zero
 | Suc Nat
 deriving (Show)
 
 natPlus :: Nat -> Nat -> Nat
 x `natPlus` Zero = x -- x + 0 =x
 x `natPlus` (Suc y) = Suc (x `natPlus' y) -- x + (x + 1) = (x + y) + 1
 ```
### Standard Induction Principle for Nat
$$(P \ Zero \land (\forall x: Nat. P\ x \implies P (Suc \ x)$$
$$\implies \forall x: Nat . P \ x$$
the property needs to hold at Zero and the successor of Nat
$\land$ - logical and
This is **mathematical induction** (weak induction)

#### Prove $\forall x: Nat. 0 + x = x$
1. Let $P\ x\equiv 0 + x = x$
2. Base Case: Show $P \ 0$
	1. $P \ 0 \equiv 0 + 0 = 0$ by the definition of P
	2. $0 + 0 + 0$ is an instance of $x + 0 = x$
	3. So $P 0$ holds
3. Induction Step: Assume $P \ x$ holds. show $P (S \ x)$
	1. $P(S \ x) \equiv 0 + S \ x = S \ x$ by definition of P
	2. $0 = S(x) = S(0 +x)$ is an instance of $x + S \ y = S(x + y)$
	3. $0 + x = x$ by the induction hypothesis $P(x)$
	4. Hence $P (S \ x)$ holds

> [!NOTE]
> I wont lie, this was complete gibberish to me

## Algebraic Types with Parameters
An algebraic type can define a type constructor that has types as parameters
```haskell
data List a
	= Nil
	| Cons a (List a)

data BinaryTree a
	= Leaf a
	Branch (BinaryTree a) a (BinaryTree a)

data Maybe a
	= Just a
	| Nothing --kinda like NaN
	
	
head2 :: List a -> Maybe a
head2 Nil = Nothing --empty list does not have a head
head2 (Cons x y) = Just x --x is the current, y is the next

--not going to add the binarytree example

```

## Algebraic Types as Languages
An algebraic type `A` defines a new language **`L` of expressions**
- *`L` is infinite when A is recursive*
The *expressions* of `L` are in a one-to-one correspondence with the *values* of `A`
- The expressions of `L` serve as *literals* for the values of `A`
Functions on A can be defined using pattern matching on the different forms of expressions of L

## New Type Declaration
only used during compile time for type checking
*old types run during runtime*
```haskell
```newtype declaration = construtor oldtype
newtype Natural = Natural Integer
```
