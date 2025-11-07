---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---


## Basis - Quick Recap

A set $B \subseteq V$ is a **basis** for vector space $V$ if:
1. $B$ is **linearly independent**
2. $B$ **spans** $V$

### Important Facts
1. **Every vector space has a basis**
2. If $V = \text{span}\{v_1, \ldots, v_n\}$, then there exists a basis among $\{v_1, \ldots, v_n\}$
3. If $v_1, \ldots, v_k$ are linearly independent in $V$, there exists a basis containing them

---

## Example: Matrix Spaces

### $m \times n$ Matrices

Let $V$ = set of all $m \times n$ matrices with usual addition and scalar multiplication.

**Basis:** $\{e_{ij} : 1 \leq i \leq m, 1 \leq j \leq n\}$

where $e_{ij}$ is the matrix with a 1 in position $(i,j)$ and 0 everywhere else.

**Example for $2 \times 3$ matrices:**
$$e_{11} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad e_{12} = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad e_{13} = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$$
$$e_{21} = \begin{pmatrix} 0 & 0 & 0 \\ 1 & 0 & 0 \end{pmatrix}, \quad e_{22} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}, \quad e_{23} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

Any matrix can be written as:
$$\begin{pmatrix} a & b & c \\ d & e & f \end{pmatrix} = ae_{11} + be_{12} + ce_{13} + de_{21} + ee_{22} + fe_{23}$$

**Size of basis:** $m \times n$ (this will be the dimension!)

---

## Example: Symmetric Matrices

Let $W$ = all $n \times n$ symmetric matrices (where $A^T = A$, i.e., $a_{ij} = a_{ji}$).

**Basis elements:**
- Diagonal matrices: $e_{ii}$ for $1 \leq i \leq n$
- Off-diagonal symmetric pairs: $e_{ij} + e_{ji}$ for $i < j$

**For $3 \times 3$ symmetric matrices:**

$$\begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

$$\begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}$$

**Size of basis:** $n + \binom{n}{2} = n + \frac{n(n-1)}{2} = \frac{n(n+1)}{2}$

For $n=3$: $\frac{3 \cdot 4}{2} = 6$ ✓

---

## Example: Trigonometric Functions

$$W = \text{span}\{\sin(x), \cos(x)\} \subseteq \text{(all real-valued functions)}$$

**Question:** Is $\{\sin(x), \cos(x)\}$ linearly independent?

Is $\sin(x) = c \cdot \cos(x)$ for some scalar $c$? **No!**
- At $x = 0$: $\sin(0) = 0$ but $\cos(0) = 1$
- At $x = \pi/2$: $\sin(\pi/2) = 1$ but $\cos(\pi/2) = 0$

Therefore $\{\sin(x), \cos(x)\}$ is a **basis** for $W$ ✓

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
    % Axes
    \draw[->] (-0.5,0) -- (7,0) node[right] {$x$};
    \draw[->] (0,-1.5) -- (0,1.5) node[above] {$y$};
    
    % Grid
    \draw[gray!30] (0,-1) grid[step=0.5] (6.5,1);
    
    % Mark pi values
    \draw (1.571,0.1) -- (1.571,-0.1) node[below] {$\frac{\pi}{2}$};
    \draw (3.142,0.1) -- (3.142,-0.1) node[below] {$\pi$};
    \draw (4.712,0.1) -- (4.712,-0.1) node[below] {$\frac{3\pi}{2}$};
    \draw (6.283,0.1) -- (6.283,-0.1) node[below] {$2\pi$};
    
    % Sin curve
    \draw[red, thick, domain=0:6.5, samples=100] plot (\x, {sin(\x r)});
    \node[red] at (6.8,0.8) {$\sin(x)$};
    
    % Cos curve
    \draw[blue, thick, domain=0:6.5, samples=100] plot (\x, {cos(\x r)});
    \node[blue] at (6.8,-0.8) {$\cos(x)$};
    
    \node at (3,-2) {These functions are linearly independent!};
\end{tikzpicture}
\end{document}
```

---

## Coordinates

Let $B = \{v_1, \ldots, v_n\}$ be a basis for vector space $V$.

**Theorem:** Any $v \in V$ can be written **uniquely** as:
$$v = c_1v_1 + c_2v_2 + \cdots + c_nv_n$$

**Definition:** The **coordinates of $v$ with respect to basis $B$** are:
$$[v]_B = \begin{pmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{pmatrix} \in \mathbb{R}^n$$

### Proof of Uniqueness

Suppose also $v = d_1v_1 + d_2v_2 + \cdots + d_nv_n$.

Subtracting:
$$\mathbf{0} = (c_1 - d_1)v_1 + (c_2 - d_2)v_2 + \cdots + (c_n - d_n)v_n$$

Since $v_1, \ldots, v_n$ are linearly independent:
$$c_1 - d_1 = 0, \quad c_2 - d_2 = 0, \quad \ldots, \quad c_n - d_n = 0$$

Therefore $c_i = d_i$ for all $i$ ✓

---

## Examples of Coordinates

### Example 1: Standard Basis for $\mathbb{R}^n$

With $B = \{e_1, e_2, \ldots, e_n\}$:

$$v = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix} = v_1e_1 + v_2e_2 + \cdots + v_ne_n$$

So $[v]_B = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}$ (coordinates are the usual ones!)

### Example 2: Non-standard Basis

$$B = \left\{\begin{pmatrix} 1 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix}\right\} \text{ for } \mathbb{R}^2$$

**Find coordinates of $v = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$ with respect to $B$.**

We need $c_1, c_2, c_3$ such that:
$$c_1\begin{pmatrix} 1 \\ 1 \end{pmatrix} + c_2\begin{pmatrix} 1 \\ 0 \end{pmatrix} + c_3\begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$$

This gives:
$$\begin{cases} c_1 + c_2 = 2 \\ c_1 + c_3 = 3 \end{cases}$$

From second equation: $c_1 = 3 - c_3$

Substituting: $(3 - c_3) + c_2 = 2$, so $c_2 = -1 + c_3$

Choose $c_3 = 3$: then $c_1 = 0, c_2 = 2, c_3 = 3$... wait, let me recalculate.

Actually solving: $c_1 = -1, c_2 = 3, c_3 = 4$ (check with original system)

Wait, actually: Let's solve properly:
- $c_1 + c_2 + 0 = 2$
- $c_1 + 0 + c_3 = 3$

So $c_3 = 3 - c_1$ and $c_2 = 2 - c_1$. Hmm, we have one free variable... 

Actually, this $B$ is NOT a basis because it has 3 vectors in $\mathbb{R}^2$! Let me use the correct one:

$$B = \left\{\begin{pmatrix} 1 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ 0 \end{pmatrix}\right\}$$

Then:
$$c_1\begin{pmatrix} 1 \\ 1 \end{pmatrix} + c_2\begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$$

$$\begin{cases} c_1 + c_2 = 2 \\ c_1 = 3 \end{cases}$$

So $c_1 = 3, c_2 = -1$.

$$[v]_B = \begin{pmatrix} 3 \\ -1 \end{pmatrix}$$

---

## Coordinates as Linear Transformation

**Theorem:** If $B = \{v_1, \ldots, v_n\}$ is a basis for $V$, then the map
$$T: V \to \mathbb{R}^n, \quad T(v) = [v]_B$$
is a linear transformation that is **one-to-one** and **onto**.

Such transformations are called **isomorphisms**.

> 💡 This means $V$ and $\mathbb{R}^n$ are "essentially the same" as vector spaces!

---

## Dimension

**Definition:** Suppose $V$ has a finite spanning set. Then:
- Every basis of $V$ is **finite**
- Every basis has the **same size**

The **dimension** of $V$ is:
$$\dim(V) = \text{size of any basis}$$

If $V$ has no finite spanning set, we say $V$ is **infinite dimensional**.

### Examples

1. $\dim(\mathbb{R}^n) = n$ (basis: $\{e_1, \ldots, e_n\}$)
2. $\dim(P_n) = n+1$ (basis: $\{1, x, x^2, \ldots, x^n\}$)
3. $P$ is infinite dimensional (basis: $\{1, x, x^2, \ldots\}$)
4. $\dim(m \times n \text{ matrices}) = mn$
5. $\dim(n \times n \text{ symmetric matrices}) = \frac{n(n+1)}{2}$

```tikz
\begin{document}
\begin{tikzpicture}
    % Dimension hierarchy
    \node[draw, circle, fill=blue!20] (r1) at (0,4) {$\mathbb{R}^1$};
    \node[right of=r1, node distance=1cm] {dim = 1};
    
    \node[draw, circle, fill=blue!30] (r2) at (0,3) {$\mathbb{R}^2$};
    \node[right of=r2, node distance=1cm] {dim = 2};
    
    \node[draw, circle, fill=blue!40] (r3) at (0,2) {$\mathbb{R}^3$};
    \node[right of=r3, node distance=1cm] {dim = 3};
    
    \node (dots) at (0,1.3) {$\vdots$};
    
    \node[draw, circle, fill=blue!60] (rn) at (0,0.5) {$\mathbb{R}^n$};
    \node[right of=rn, node distance=1cm] {dim = $n$};
    
    \node (dots2) at (0,-0.2) {$\vdots$};
    
    \node[draw, ellipse, fill=red!20] (p) at (0,-1.2) {$P$};
    \node[right of=p, node distance=1.5cm] {dim = $\infty$};
    
    \draw[->] (r1) -- (r2);
    \draw[->] (r2) -- (r3);
    \draw[->] (rn) -- (dots2);
    \draw[->] (dots2) -- (p);
\end{tikzpicture}
\end{document}
```

---

## Theorems About Dimension

**Theorem:** Suppose $n = \dim(V)$. Then:

1. Every set of **more than $n$** vectors is **linearly dependent**
2. No set of **fewer than $n$** vectors can **span** $V$
3. Every **linearly independent** set of **exactly $n$** vectors is a **basis**
4. Every **spanning** set of **exactly $n$** vectors is a **basis**
5. If $H$ is a subspace of $V$, then $\dim(H) \leq n$

---

## Rank and Nullity

**Definition:** For $m \times n$ matrix $A$:
- **Rank of $A$**: $\text{rank}(A) = \dim(\text{Col}(A))$
- **Nullity of $A$**: $\text{nullity}(A) = \dim(\text{Nul}(A))$

### The Rank-Nullity Theorem

**Theorem:** For $m \times n$ matrix $A$:
$$\boxed{\text{rank}(A) + \text{nullity}(A) = n}$$

**Moreover:** $\text{rank}(A) = \dim(\text{Row}(A))$

> The rank equals the number of pivot columns (and pivot rows)!

### Example

$$A = \begin{pmatrix} 1 & 3 & 5 & 0 \\ 0 & 1 & 4 & -2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

- Number of pivots = 2
- $\text{rank}(A) = 2$ (dimension of column space)
- Number of free variables = $4 - 2 = 2$
- $\text{nullity}(A) = 2$ (dimension of nullspace)
- Check: $2 + 2 = 4 = n$ ✓

---

## Summary

✅ Coordinates $[v]_B$ express $v$ uniquely in terms of basis $B$
✅ Dimension = size of any basis (all bases have same size!)
✅ $\dim(\mathbb{R}^n) = n$, $\dim(P_n) = n+1$, $\dim(P) = \infty$
✅ Rank = dimension of column space = dimension of row space
✅ Nullity = dimension of nullspace
✅ **Rank-Nullity Theorem:** rank$(A)$ + nullity$(A) = n$