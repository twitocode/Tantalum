---
CreatedAt: 2025-11-11
class: Notes
tags:
  - "#classnote"
---
Types of elementary matrices
1. Exchange rows in $I_{n}$
2. Multiply by a non-zero scalar on a row
3. Adding a multiple of one row to another row

inverse algorithm:
$$
[AI] \xrightarrow{rref} [IA^{-1}]
$$
$$
\begin{bmatrix}
1 & 2 & 3 & 1 & 0 & 0  \\
0 & 1 & 3 & 0 & 1 & 0 \\
1 & 3 & 6 & 0 & 0 & 1
\end{bmatrix}

$$
$$
\downarrow
$$
$$
\begin{bmatrix}
1 & 0 & 0 & 0 & -3 & 1  \\
0 & 1 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 & 1 & 1
\end{bmatrix}
$$
$rref(A) \neq I_{3}$ so it has no inverse $\implies$ A is not invertible

Why does this work?
If we row reduce A to the identity, then there is a series of elementary matrices $E_{1}\dots E_{k}$ such that $E_{k}\dots E_{3}E_{2}E_{1}A = I$

$$
\begin{align}
E_{k}^{-1}E_{k}\dots E_{1}A&=E^{-1}_{k} \\

E_{k-1}\dots E_{1}A&=E^{-1}_{k}

\end{align}
$$
so 
$$
A = E^{-1}_{1}E_{2}^{-1}\dots Ek^{-1} \in \text{product of invertible matrices and so A is inventible}
$$
so
$$
A^{-1} = E_{k}E_{k-1}\dots E_{2}E_{1}
$$

# The Invertible Matrix Theorem

(a) $A$ is invertible.
(b) $A$ can be row reduced to the identity matrix.
(c) $A$ has $n$ pivot positions.
(d) $Ax = 0$ has only the trivial solution.
(e) The columns of $A$ form a linearly independent set.
(f) The linear transformation $x \mapsto Ax$ is one-to-one.
(g) The columns of $A$ span $\mathbb{R}^n$.
(h) The linear transformation $x \mapsto Ax$ is onto.
(i) There is an $n \times n$ matrix $C$ such that $CA = I$.
(j) There is an $n \times n$ matrix $D$ such that $AD = I$.
(k) $A^T$ is invertible.

## Proving this Theorem
if $A^{T}$ is invertible, then $A^{T}$ is invertible.
**Proof**: suppose $B$ is such that $AB = BA = I$
so $(AB)^{T} = BA^{T} = A^{T}B^{T}=I$
So $A^{T}$ is invertible and $(A^{T})^{-1} = (A^{-1})^{T}$

## Invertible Linear Transformations:
$T: R^n \to R^n$
$S: R^n \to R^n$
$S(T(x))=x$ and $T(S(x))= x$


> [!NOTE] Theorem
> $T: R^n \to R^n$ is invertible iff the standard matrix of T is invertible
