---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---
## Linear Independence

### Definition

Vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_m$ in $\mathbb{R}^n$ are **linearly independent** if:

$$\text{Whenever } \lambda_1\mathbf{v}_1 + \lambda_2\mathbf{v}_2 + \cdots + \lambda_m\mathbf{v}_m = \mathbf{0}$$

$$\text{then } \lambda_1 = \lambda_2 = \cdots = \lambda_m = 0$$

**In words**: The **only** way to make a linear combination equal $\mathbf{0}$ is to use all zero coefficients.

### Equivalent Definition (Matrix Form)

Let $A = \begin{bmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_m \end{bmatrix}$

The vectors are linearly independent if and only if:

$$A\mathbf{x} = \mathbf{0} \text{ has only the trivial solution } \mathbf{x} = \mathbf{0}$$

---

## Linear Dependence

### Definition

Vectors are **linearly dependent** if they are **not** linearly independent, i.e., if there exist scalars $\lambda_1, \ldots, \lambda_m$ (not all zero) such that:

$$\lambda_1\mathbf{v}_1 + \cdots + \lambda_m\mathbf{v}_m = \mathbf{0}$$

Equivalently: $A\mathbf{x} = \mathbf{0}$ has a **non-trivial solution**.

---

## Examples

### Example 1: Independent Vectors

$$\mathbf{v}_1 = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}, \quad \mathbf{v}_2 = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}, \quad \mathbf{v}_3 = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}$$

Solve $A\mathbf{x} = \mathbf{0}$:

$$\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}$$

Only solution: $\mathbf{x} = \mathbf{0}$

**Conclusion**: $\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3$ are **linearly independent** ✓

### Example 2: Dependent Vectors

$$\mathbf{v}_1 = \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \quad \mathbf{v}_2 = \begin{bmatrix} 2 \\ 4 \end{bmatrix}$$

Notice: $\mathbf{v}_2 = 2\mathbf{v}_1$

So: $2\mathbf{v}_1 - \mathbf{v}_2 = \mathbf{0}$ with coefficients $(2, -1) \neq (0, 0)$

**Conclusion**: $\mathbf{v}_1, \mathbf{v}_2$ are **linearly dependent** ✗

### Example 3: Three Collinear Vectors

$$\mathbf{v}_1 = \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \quad \mathbf{v}_2 = \begin{bmatrix} 2 \\ 4 \end{bmatrix}, \quad \mathbf{v}_3 = \begin{bmatrix} 3 \\ 6 \end{bmatrix}$$

We can write: $\mathbf{v}_1 + \mathbf{v}_3 - 2\mathbf{v}_2 = \mathbf{0}$

**Linearly dependent** (any vector can be written in terms of the others)

---

## Key Observations

### Observation 1: The Zero Vector

> If $\mathbf{0}$ is in the set, the vectors are **automatically linearly dependent**.

**Why?** We can write: $1 \cdot \mathbf{0} + 0 \cdot \mathbf{v}_1 + \cdots + 0 \cdot \mathbf{v}_m = \mathbf{0}$

### Observation 2: Subsets

> If $\{\mathbf{v}_1, \ldots, \mathbf{v}_m\}$ are linearly independent, then any **subset** is also linearly independent.

### Observation 3: Single Non-Zero Vector

> Any single non-zero vector $\mathbf{v} \neq \mathbf{0}$ is linearly independent (by itself).

**Why?** The only solution to $\lambda \mathbf{v} = \mathbf{0}$ is $\lambda = 0$ (since $\mathbf{v} \neq \mathbf{0}$).

---

## Geometric Intuition

### In $\mathbb{R}^2$

```tikz
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[scale=1.2]
  % Left: Dependent (collinear)
  \begin{scope}
    \draw[->, thick] (-1,0) -- (3,0) node[right] {$x$};
    \draw[->, thick] (0,-0.5) -- (0,3) node[above] {$y$};
    \draw[->, red, ultra thick] (0,0) -- (1,1) node[midway, left] {$\mathbf{v}_1$};
    \draw[->, blue, ultra thick] (0,0) -- (2,2) node[midway, right] {$\mathbf{v}_2$};
    \draw[dashed, gray] (-0.5,-0.5) -- (2.5,2.5);
    \node at (1,-1) {\textbf{Dependent}};
    \node at (1,-1.4) {(collinear)};
  \end{scope}
  
  % Right: Independent
  \begin{scope}[xshift=5cm]
    \draw[->, thick] (-1,0) -- (3,0) node[right] {$x$};
    \draw[->, thick] (0,-0.5) -- (0,3) node[above] {$y$};
    \draw[->, red, ultra thick] (0,0) -- (2,0.5) node[midway, below] {$\mathbf{v}_1$};
    \draw[->, blue, ultra thick] (0,0) -- (0.5,2) node[midway, left] {$\mathbf{v}_2$};
    \node at (1,-1) {\textbf{Independent}};
    \node at (1,-1.4) {(not collinear)};
  \end{scope}
\end{tikzpicture}
\end{document}
```

**In $\mathbb{R}^2$**:
- 1 non-zero vector: always independent
- 2 non-collinear vectors: independent
- 2 collinear vectors: dependent
- 3 or more vectors: always dependent (see theorem below)

**In $\mathbb{R}^3$**:
- 1 non-zero vector: independent
- 2 non-collinear vectors: independent
- 3 non-coplanar vectors: independent
- 3 coplanar vectors: dependent
- 4 or more vectors: always dependent

---

## Important Theorems

### Theorem 1: Size Restriction

> If $\mathbf{v}_1, \ldots, \mathbf{v}_m$ are in $\mathbb{R}^n$ and $m > n$, then the vectors are **linearly dependent**.

**Proof**: Form $A = \begin{bmatrix} \mathbf{v}_1 & \cdots & \mathbf{v}_m \end{bmatrix}$ (size $n \times m$).

When we row reduce $A\mathbf{x} = \mathbf{0}$:
- At most $n$ pivots (one per row)
- Since $m > n$, there must be at least one free variable
- Therefore, non-trivial solutions exist
- So vectors are dependent $\square$

**Contrapositive**: If vectors in $\mathbb{R}^n$ are linearly independent, then $m \leq n$.

### Theorem 2: Dependence and Redundancy

> If $\mathbf{v}_1, \ldots, \mathbf{v}_m$ are linearly dependent, then at least one can be written as a linear combination of the others.

**Proof**: Since dependent, $\exists$ non-zero scalars $\lambda_i$ with:
$$\lambda_1\mathbf{v}_1 + \cdots + \lambda_m\mathbf{v}_m = \mathbf{0}$$

Say $\lambda_k \neq 0$. Then:
$$\mathbf{v}_k = -\frac{\lambda_1}{\lambda_k}\mathbf{v}_1 - \cdots - \frac{\lambda_{k-1}}{\lambda_k}\mathbf{v}_{k-1} - \frac{\lambda_{k+1}}{\lambda_k}\mathbf{v}_{k+1} - \cdots - \frac{\lambda_m}{\lambda_k}\mathbf{v}_m$$

So $\mathbf{v}_k$ is a linear combination of the others $\square$

---

## Testing for Linear Independence

### Procedure

To test if $\mathbf{v}_1, \ldots, \mathbf{v}_m$ are linearly independent:

1. Form matrix $A = \begin{bmatrix} \mathbf{v}_1 & \cdots & \mathbf{v}_m \end{bmatrix}$
2. Row reduce $A$ (or the augmented matrix $[A | \mathbf{0}]$)
3. Check if $A\mathbf{x} = \mathbf{0}$ has only trivial solution:
   - **Every column has a pivot** → Independent
   - **Free variable exists** → Dependent

### Example: Are These Independent?

$$\mathbf{v}_1 = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}, \quad \mathbf{v}_2 = \begin{bmatrix} 2 \\ 5 \\ 1 \end{bmatrix}, \quad \mathbf{v}_3 = \begin{bmatrix} 1 \\ 1 \\ 4 \end{bmatrix}$$

Form and row reduce:

$$\begin{bmatrix} 1 & 2 & 1 \\ 2 & 5 & 1 \\ 3 & 1 & 4 \end{bmatrix} \sim \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

Every column has a pivot → **Linearly independent!** ✓

---

## Standard Basis Vectors

The vectors:
$$\mathbf{e}_1 = \begin{bmatrix} 1 \\ 0 \\ \vdots \\ 0 \end{bmatrix}, \mathbf{e}_2 = \begin{bmatrix} 0 \\ 1 \\ \vdots \\ 0 \end{bmatrix}, \ldots, \mathbf{e}_n = \begin{bmatrix} 0 \\ 0 \\ \vdots \\ 1 \end{bmatrix}$$

are:
1. **Linearly independent** (identity matrix has all pivots)
2. **Span $\mathbb{R}^n$** (every vector is a linear combination of them)

These form the **standard basis** for $\mathbb{R}^n$.

---

## Summary

| Property | Means |
|----------|-------|
| Linearly Independent | No redundancy; each vector adds new "direction" |
| Linearly Dependent | At least one vector is redundant |
| $m > n$ in $\mathbb{R}^n$ | Must be dependent |
| All pivots | Independent |
| Free variable exists | Dependent |
