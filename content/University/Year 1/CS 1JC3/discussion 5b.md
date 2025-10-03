---
CreatedAt: 2025-10-03
tags:
  - lecture
class: CS 1JC3
---
an infinite set is a set who's subset has the same cardinality as the infinite set.

```haskell
fib1 :: Integer -> Integer
fib1 n
  | n == 0 = 0
  | n == 1 = 1
  | n > 1  = fib1 (n - 2) + fib1 (n - 1)


fib2 :: Integer -> Integer
fib2 n =
  let
    fib2Aux :: Integer -> Integer -> Integer -> Integer
    fib2Aux a b n
      | n == 0 = a
      | n == 1 = b
      | n > 1  = fib2Aux b (a + b) (n - 1)
  in fib2Aux 0 1 n
```

tail recursion - the function is called as the last thing, its not called everytime
- you can store information in the inputs of the recursive funcction
- them memory you use before and after should be the same

```haskell
add :: Integer -> Integer -> Integer
add x y =
	| y == 0 = x
	| y > 0 = add x (y - 1) + 1
	```

x![[Pasted image 20251003091243.png]]

```haskell
add :: Integer -> Integer -> Integer -> Integer
add x y a = --a is the accumulator
	| y == 0 = x
	| y > 0 = add x (y - 1) + (a + 1) 
	
add x + y = add x y 0
	```
![[Pasted image 20251003092126.png]]
