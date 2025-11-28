---
CreatedAt: 2025-11-28
tags:
  - lecture
class: CS 1JC3
---
modular composition 
- you can build software out of modules
module decomposition
- take your project and break it down into smaller modules then develop them independently 
![[discussion 12c 2025-11-28 08.46.35.excalidraw]]
prelude is a module
a function is a module
a type class is also a module

anticipation of change
- best way to implement is with secrets

sometimes when abstracting
- you have to change the language you are using to better fit the abstraction

Monoid example
$(m, \cdot, e)$
$\cdot$ binary association operator
$e$ is an identity element

$(m, \cdot, e)$ is abstract, could be anything
$(\mathbb{R}, +, 0)$ is concrete. 
$(\mathbb{R}, *, 1)$ is also concrete
$(\text{Strings}, \text{concat}, \text{""})$ is also concrete
try not to do over-abstraction

usually it is impossible to check for every possible cases in testing which is why it cannot show correctness.

**reliablility** testing means that when using it everyday use, it does not fail. 
- come up with model in how it is going to be used, then make test cases to test the model
- then you get a relability score 0-100%

**robustness** - if it does not fail in situations that are unexpected. 
- cat runs across keyboard and hits keys in a weird way
- do completely random testing to test for robustness
	- not good for checking for reliability. 

whitebox testing - testing the implementaiton
blackbox testing -testing the interface only
 - this is testing the software against the requirmeents
 - the testing team could be separate from the software and they cannot be biased as they didn't personally make the software. 

