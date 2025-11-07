---
CreatedAt: 2025-11-07
tags:
  - lecture
class: CS 1JC3
---

church and curry had the issue with self reference when trying to make their own turning complete _____. 

**Lambda Term** is a string  of symbols defined inductively by following formation rules
1. if $x \in V$ then $x$ is a lambda term for **variables**
2. If $m,n$ are lambda terms, then ($mn$) for **function application**
3. If $b \in V$ $m$ is a lambda term, then ($\lambda  x . m$) is a lambda term for **function abstractions**
	-  ($\lambda  x . m$) is a binder
	- $\int^b_{a} x^2 dx$ is also a binder
		- $\int^b_{a} y^2 dy$ is also a binder
		- church says that these are mathematical equivalent, x and y are dummy variables
	- $\{ x \in S | P(x)\}$ is a binder 	
		- $\{ y \in S | P(y)\}$ is a binder
		- This is set abstraction
	- $\forall x. A$
		- each x.A
	- $\{ (x,m(x) ) | x \in S\}$
		- not sure what this one is

**Binders**
($\lambda  x . m$) is a binder
$\lambda$ - name of binder
$x$  - variable
$m$ - expression

**bound variable**
$$\begin{align}
(\lambda x.x)x
\end{align}
$$
x.x is bound but the outside x is free. 

$$\begin{align}
(\lambda x . x^2 + 2x) 3 \\ \\
3^2 + 2 \cdot 3  = 15
\end{align}$$
this is beta reduction

> [!NOTE] Title
> Theres no multiplicaiton, exponents, addition in lambda calculus But you can define them as lambda terms

self reference issue
$(xx)$ - expression
$(\lambda x. y)x$
$$\begin{align}
\lambda x. (\lambda y. x) M\\
= \lambda y .M
\end{align}$$
- constant function generator - no problem with this
$$
\begin{align}
\lambda x. (\lambda y. x) y\\
= \lambda y .y
\end{align}
$$
- not a constant function. takes $y$ and gives back $y$
	- this is called a **variable capture** 
	- when the $y$ got put into the function. it became bound by the binder

$$
\begin{align}
\lambda x. (\lambda z. x) y\\
= \lambda z .y
\end{align}
$$

- in this case, at the bottom expression, we replace the free variables iwth **I HAVE NO IDEA WHAT I AM SAYING**
- must do a variable change to avoid variable captures
- NASA had variable captures issues
asd
	$$
	\begin{align}
(\lambda x.(xx))(\lambda x.(xx)) \\
(\lambda x.xx)(\lambda x.xx) \\
(\lambda x.xx)(\lambda x.xx)
\end{align}
	$$

	does this forever
	
> [!NOTE] Title
>$(xx)$ is not multiplication. its applying the function to itself

$$
\begin{align}
(\lambda y.Z)((\lambda x.xx)(\lambda x.xx)) \\
=Z
\end{align}
$$
that is because y does appear on the other side of the dot
- normal order reduction


# SSH
