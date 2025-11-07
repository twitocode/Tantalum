---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---
## Transformations

### Definition

A **transformation** (or **function**) $T: \mathbb{R}^n \to \mathbb{R}^m$ assigns to each vector in $\mathbb{R}^n$ a unique vector in $\mathbb{R}^m$.

**Terminology**:
- **Domain**: $\mathbb{R}^n$ (input space)
- **Codomain**: $\mathbb{R}^m$ (output space)
- **Range**: $\{\,T(\mathbf{x}) : \mathbf{x} \in \mathbb{R}^n\,\}$ (all possible outputs)

### Example 1: Projection onto xy-plane

$$T: \mathbb{R}^3 \to \mathbb{R}^3, \quad T\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} x \\ y \\ 0 \end{pmatrix}$$

- Domain: $\mathbb{R}^3$
- Codomain: $\mathbb{R}^3$
- Range: The $xy$-plane in $\mathbb{R}^3$

### Example 2: Non-linear Transformation

$$T: \mathbb{R}^3 \to \mathbb{R}, \quad T\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \sin(x + y + z)$$

- Domain: $\mathbb{R}^3$
- Codomain: $\mathbb{R}$
- Range: $[-1, 1]$

---

## Matrix Transformations

### Definition

Given an $m \times n$ matrix $A$, we can define a transformation:

$$T_A: \mathbb{R}^n \to \mathbb{R}^m, \quad T_A(\mathbf{x}) = A\mathbf{x}$$

This is called a **matrix transformation**.

### Example 1: $2 \times 2$ Matrix

$$A = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}, \quad T_A: \mathbb{R}^2 \to \mathbb{R}^2$$

$$T_A\begin{pmatrix} x \\ y \end{pmatrix} = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x + 2y \\ y \end{pmatrix}$$

### Example 2: Rotation by 90°

$$A = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$$

$$T_A\begin{pmatrix} x \\ y \end{pmatrix} = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} -y \\ x \end{pmatrix}$$

This rotates vectors 90° counterclockwise!

```tikz
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[scale=1.5]
  % Axes
  \draw[->, thick] (-2,0) -- (2,0) node[right] {$x$};
  \draw[->, thick] (0,-2) -- (0,2) node[above] {$y$};
  
  % Original vector
  \draw[->, red, ultra thick] (0,0) -- (1.5,0.5) node[midway, below] {$\mathbf{v}$};
  \node[red] at (1.5,0.3) {$(x,y)$};
  
  % Rotated vector
  \draw[->, blue, ultra thick] (0,0) -- (-0.5,1.5) node[midway, left] {$T(\mathbf{v})$};
  \node[blue] at (-0.7,1.5) {$(-y,x)$};
  
  % Rotation arc
  \draw[green!60!black, dashed, ->] (1.2,0.4) arc (18.4:108.4:1.265);
  \node[green!60!black] at (0.3,1) {$90°$};
\end{tikzpicture}
\end{document}
```

### Example 3: Range of a Matrix Transformation

$$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{bmatrix}, \quad T_A: \mathbb{R}^2 \to \mathbb{R}^3$$

**Question**: Is $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ in the range of $T_A$?

**Answer**: Solve $A\mathbf{x} = \mathbf{b}$:

$$\left[\begin{array}{cc|c} 1 & 2 & 1 \\ 3 & 4 & 2 \\ 5 & 6 & 3 \end{array}\right] \sim \left[\begin{array}{cc|c} 1 & 0 & -1 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{array}\right]$$

Yes! Solution: $\mathbf{x} = \begin{pmatrix} -1 \\ 1 \end{pmatrix}$

**Range of $T_A$**: The span of the columns of $A$ = a 2D plane in $\mathbb{R}^3$

---

## Linear Transformations

### Definition

A transformation $T: \mathbb{R}^n \to \mathbb{R}^m$ is **linear** if for all $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$ and all scalars $\lambda$:

1. **Additivity**: $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$

2. **Homogeneity**: $T(\lambda\mathbf{u}) = \lambda T(\mathbf{u})$

### Important Consequences

**Fact 1**: If $T$ is linear, then $T(\mathbf{0}) = \mathbf{0}$

**Proof**: $T(\mathbf{0}) = T(0 \cdot \mathbf{v}) = 0 \cdot T(\mathbf{v}) = \mathbf{0}$ $\square$

**Fact 2**: For any scalars $c, d$ and vectors $\mathbf{u}, \mathbf{v}$:

$$T(c\mathbf{u} + d\mathbf{v}) = cT(\mathbf{u}) + dT(\mathbf{v})$$

**General Principle**: If $T$ is linear, then:

$$T(\lambda_1\mathbf{v}_1 + \cdots + \lambda_k\mathbf{v}_k) = \lambda_1T(\mathbf{v}_1) + \cdots + \lambda_kT(\mathbf{v}_k)$$

Linear transformations **preserve linear combinations**!

---

## Standard Matrix of a Linear Transformation

### Key Theorem

> **Theorem**: Every linear transformation $T: \mathbb{R}^n \to \mathbb{R}^m$ is a matrix transformation.
>
> There exists a unique $m \times n$ matrix $A$ such that $T(\mathbf{x}) = A\mathbf{x}$ for all $\mathbf{x} \in \mathbb{R}^n$.

### Finding the Standard Matrix

Let $\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n$ be the standard basis vectors in $\mathbb{R}^n$.

The **standard matrix** is:

$$A = \begin{bmatrix} T(\mathbf{e}_1) & T(\mathbf{e}_2) & \cdots & T(\mathbf{e}_n) \end{bmatrix}$$

### Why This Works

Any $\mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix} = x_1\mathbf{e}_1 + x_2\mathbf{e}_2 + \cdots + x_n\mathbf{e}_n$

By linearity:
$$T(\mathbf{x}) = x_1T(\mathbf{e}_1) + x_2T(\mathbf{e}_2) + \cdots + x_nT(\mathbf{e}_n) = A\mathbf{x}$$

### Example: Rotation by $\theta$

$T: \mathbb{R}^2 \to \mathbb{R}^2$ rotates vectors counterclockwise by angle $\theta$.

Find $T(\mathbf{e}_1)$ and $T(\mathbf{e}_2)$:

$$T\begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} \cos\theta \\ \sin\theta \end{pmatrix}, \quad T\begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} -\sin\theta \\ \cos\theta \end{pmatrix}$$

**Standard matrix**:
$$A = \begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}$$

```tikz
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[scale=2]
  % Axes
  \draw[->, thick] (-0.2,0) -- (1.5,0) node[right] {$x$};
  \draw[->, thick] (0,-0.2) -- (0,1.5) node[above] {$y$};
  
  % e1 and T(e1)
  \draw[->, blue, ultra thick] (0,0) -- (1,0) node[below right] {$\mathbf{e}_1$};
  \draw[->, red, ultra thick] (0,0) -- ({cos(45)},{sin(45)}) node[above right] {$T(\mathbf{e}_1)$};
  
  % e2 and T(e2)
  \draw[->, blue!50, ultra thick] (0,0) -- (0,1) node[right] {$\mathbf{e}_2$};
  \draw[->, red!50, ultra thick] (0,0) -- ({-sin(45)},{cos(45)}) node[above left] {$T(\mathbf{e}_2)$};
  
  % Angle arc
  \draw[green!60!black, ->] (0.3,0) arc (0:45:0.3);
  \node[green!60!black] at (0.4,0.15) {$\theta$};
\end{tikzpicture}
\end{document}
```

### Example: Reflection Across $y = x$

$T: \mathbb{R}^2 \to \mathbb{R}^2$ reflects across the line $y = x$.

$$T\begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}, \quad T\begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$$

**Standard matrix**:
$$A = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$$

---

## One-to-One and Onto

### One-to-One (Injective)

A transformation $T: \mathbb{R}^n \to \mathbb{R}^m$ is **one-to-one** if:

$$\mathbf{u} \neq \mathbf{v} \implies T(\mathbf{u}) \neq T(\mathbf{v})$$

**Equivalently**: $T(\mathbf{u}) = T(\mathbf{v}) \implies \mathbf{u} = \mathbf{v}$

**For linear transformations**, this is equivalent to:

$$T(\mathbf{x}) = \mathbf{0} \implies \mathbf{x} = \mathbf{0}$$

**Proof**: If $T(\mathbf{u}) = T(\mathbf{v})$, then by linearity:
$$T(\mathbf{u} - \mathbf{v}) = T(\mathbf{u}) - T(\mathbf{v}) = \mathbf{0}$$

If $T$ is 1-1, then $\mathbf{u} - \mathbf{v} = \mathbf{0}$, so $\mathbf{u} = \mathbf{v}$ $\square$

### Onto (Surjective)

A transformation $T: \mathbb{R}^n \to \mathbb{R}^m$ is **onto** if the range of $T$ is all of $\mathbb{R}^m$.

**In other words**: For every $\mathbf{b} \in \mathbb{R}^m$, there exists $\mathbf{x} \in \mathbb{R}^n$ such that $T(\mathbf{x}) = \mathbf{b}$.

---

## Testing One-to-One and Onto

### Theorem

Let $T: \mathbb{R}^n \to \mathbb{R}^m$ be a linear transformation with standard matrix $A$.

1. **$T$ is one-to-one** ⟺ The columns of $A$ are **linearly independent**
   - ⟺ $A\mathbf{x} = \mathbf{0}$ has only trivial solution
   - ⟺ Every column of $A$ is a pivot column

2. **$T$ is onto** ⟺ The columns of $A$ **span** $\mathbb{R}^m$
   - ⟺ $A\mathbf{x} = \mathbf{b}$ is consistent for all $\mathbf{b}$
   - ⟺ Every row of $A$ has a pivot

### Example 1: Is $T$ One-to-One?

$$T\begin{pmatrix} x \\ y \end{pmatrix} = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}\begin{pmatrix} x \\ y \end{pmatrix}$$

Check if $A\mathbf{x} = \mathbf{0}$ has only trivial solution:

$$\text{RREF}\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$$

Both columns are pivot columns → **Yes, one-to-one!** ✓

### Example 2: Is $T$ Onto?

$$A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}, \quad T: \mathbb{R}^3 \to \mathbb{R}^2$$

RREF has 2 pivots (2 rows). Every row has a pivot → **Yes, onto!** ✓

But not one-to-one (3 columns, only 2 pivots → free variable exists).

### Example 3: Neither

$$A = \begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix}, \quad T: \mathbb{R}^2 \to \mathbb{R}^2$$

$$\text{RREF}(A) = \begin{bmatrix} 1 & 2 \\ 0 & 0 \end{bmatrix}$$

- Not all columns pivot → **Not one-to-one** ✗
- Not all rows have pivot → **Not onto** ✗

---

## Summary

| Property   | Matrix Condition      | Geometric Meaning                                 |
| ---------- | --------------------- | ------------------------------------------------- |
| One-to-one | Columns independent   | No "collapse"; distinct inputs → distinct outputs |
| Onto       | Columns span codomain | Entire codomain is "hit"; all outputs achievable  |
