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


**Curry Paradox** example
- if this sentence is true then Donald Trump is awful. call this statement $x$
- $x \implies H \equiv x$
	- if $x$ is true, then that means Donald Trump is awful
	- But if the $x$ is true, then that already guarantees the conclusion that Donald Trump is awful
	- Just by accepting $x$, i am forced to accept that Donald Trump is awful.
- **This is a problem because it means that in logic and math, we can prove anything we want even when things are false, then the entire system we created becomes useless**