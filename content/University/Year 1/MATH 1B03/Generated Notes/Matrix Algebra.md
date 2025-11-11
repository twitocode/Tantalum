---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---
## Matrix Addition and Scalar Multiplication

### Matrix Addition

If $A$ and $B$ are both $m \times n$ matrices, then $A + B$ is the $m \times n$ matrix with $(i,j)$-th entry:

$$(A + B)_{ij} = A_{ij} + B_{ij}$$

**Example**:
$$\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} + \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix} = \begin{bmatrix} 6 & 8 \\ 10 & 12 \end{bmatrix}$$

**Note**: Can only add matrices of **same size**!

### Scalar Multiplication

If $A$ is an $m \times n$ matrix and $\lambda$ is a scalar, then $\lambda A$ is the $m \times n$ matrix with $(i,j)$-th entry:

$$(\lambda A)_{ij} = \lambda \cdot A_{ij}$$

**Example**:
$$2\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} = \begin{bmatrix} 2 & 4 \\ 6 & 8 \end{bmatrix}$$

### Properties

For matrices $A, B, C$ of the same size and scalars $\lambda, \mu$:

1. $A + B = B + A$ (commutativity)
2. $(A + B) + C = A + (B + C)$ (associativity)
3. $\lambda(A + B) = \lambda A + \lambda B$ (distributivity)
4. $(\lambda + \mu)A = \lambda A + \mu A$ (distributivity)
5. $\lambda(\mu A) = (\lambda\mu)A$ (scalar associativity)

---

## Matrix Multiplication

### Definition

Let $A$ be an $m \times k$ matrix and $B = \begin{bmatrix} \mathbf{b}_1 & \mathbf{b}_2 & \cdots & \mathbf{b}_n \end{bmatrix}$ be a $k \times n$ matrix.

The product $AB$ is the $m \times n$ matrix:

$$AB = \begin{bmatrix} A\mathbf{b}_1 & A\mathbf{b}_2 & \cdots & A\mathbf{b}_n \end{bmatrix}$$

**In words**: Each column of $AB$ is $A$ times the corresponding column of $B$.

### Entry-wise Formula

The $(i,j)$-th entry of $AB$ is:

$$(AB)_{ij} = \sum_{k=1}^{n} A_{ik} \cdot B_{kj} = \text{(row } i \text{ of } A) \cdot \text{(column } j \text{ of } B)$$

### Example

$$\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}\begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix} = \begin{bmatrix} 1(5) + 2(7) & 1(6) + 2(8) \\ 3(5) + 4(7) & 3(6) + 4(8) \end{bmatrix} = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}$$

### Size Requirements

For $AB$ to be defined:
- Number of **columns** of $A$ = Number of **rows** of $B$

$$\underbrace{A}_{m \times \boxed{k}} \underbrace{B}_{\boxed{k} \times n} = \underbrace{AB}_{m \times n}$$

---

## Matrix Multiplication is NOT Commutative!

### Example

$$A = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix}, \quad B = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$$

$$AB = \begin{bmatrix} 2 & 1 \\ 1 & 0 \end{bmatrix}, \quad BA = \begin{bmatrix} 0 & 1 \\ 1 & 2 \end{bmatrix}$$

$$AB \neq BA \quad \text{⚠️}$$

**In general**: $AB \neq BA$ (even when both are defined!)

---

## Matrix Multiplication as Composition

### Geometric Interpretation

If $A$ is $m \times k$ and $B$ is $k \times n$, then:

$$T_{AB} = T_A \circ T_B$$

**In words**: Multiplying matrices corresponds to **composing** the associated linear transformations!

```tikz
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{document}
\begin{tikzpicture}[
  node distance=2.5cm,
  box/.style={rectangle, draw, minimum width=1.5cm, minimum height=1cm, text centered}
]
  
  \node[box] (Rn) {$\mathbb{R}^n$};
  \node[box, right=of Rn] (Rk) {$\mathbb{R}^k$};
  \node[box, right=of Rk] (Rm) {$\mathbb{R}^m$};
  
  \draw[-{Stealth[length=3mm]}, thick] (Rn) -- node[above] {$T_B$} node[below] {$B$} (Rk);
  \draw[-{Stealth[length=3mm]}, thick] (Rk) -- node[above] {$T_A$} node[below] {$A$} (Rm);
  \draw[-{Stealth[length=3mm]}, thick, blue, bend left=40] (Rn) to node[above] {$T_A \circ T_B = T_{AB}$} (Rm);
  
\end{tikzpicture}
\end{document}
```

**Example**: Rotation then reflection = some other transformation

---

## Properties of Matrix Multiplication

For matrices $A, B, C$ of appropriate sizes and scalar $\lambda$:

1. **Associativity**: $A(BC) = (AB)C$
2. **Left distributivity**: $A(B + C) = AB + AC$
3. **Right distributivity**: $(A + B)C = AC + BC$
4. **Scalar factorization**: $\lambda(AB) = (\lambda A)B = A(\lambda B)$

### Computational Complexity

To multiply two $n \times n$ matrices:
- Each entry requires $n$ multiplications and $n-1$ additions ≈ $2n$ operations
- There are $n^2$ entries
- Total: ≈ $2n^3$ operations

For large $n$, this can be **very expensive**!

---

## Identity Matrix

The $n \times n$ **identity matrix** is:

$$I_n = \begin{bmatrix} 
1 & 0 & \cdots & 0 \\
0 & 1 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & 1
\end{bmatrix}$$

**Properties**:
- $I_m A = A$ for any $m \times n$ matrix $A$
- $AI_n = A$ for any $m \times n$ matrix $A$
- $I_n\mathbf{x} = \mathbf{x}$ for any $\mathbf{x} \in \mathbb{R}^n$

**Geometric meaning**: $T_{I_n}$ is the **identity transformation** (does nothing).

### Warning: Zero Divisors Exist!

$$\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix} \neq \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$$

But:
$$\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}\begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 0 \\ 0 & 0 \end{bmatrix}$$

**Two non-zero matrices can multiply to give the zero matrix!** ⚠️

---

## Transpose

### Definition

If $A = (A_{ij})$ is an $m \times n$ matrix, the **transpose** $A^T$ is the $n \times m$ matrix with:

$$(A^T)_{ij} = A_{ji}$$

**In words**: Rows become columns, columns become rows.

### Example

$$A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}, \quad A^T = \begin{bmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{bmatrix}$$

### Properties of Transpose

1. $(A^T)^T = A$
2. $(A + B)^T = A^T + B^T$
3. $(\lambda A)^T = \lambda A^T$
4. **$(AB)^T = B^T A^T$** ⚠️ **(order reverses!)**

**Connection to Transformations**:

If $T_A: \mathbb{R}^n \to \mathbb{R}^m$, then $T_{A^T}: \mathbb{R}^m \to \mathbb{R}^n$

### Special Matrices

A matrix $A$ is **symmetric** if $A^T = A$ (always square).

**Example**:
$$A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 5 \\ 3 & 5 & 6 \end{bmatrix}$$

---

## Invertible Matrices

### Definition

An $n \times n$ matrix $A$ is **invertible** if there exists a matrix $B$ such that:

$$AB = BA = I_n$$

We call $B$ the **inverse** of $A$ and write $B = A^{-1}$.

### Example

$$A = \begin{bmatrix} 2 & 1 \\ 4 & 3 \end{bmatrix}, \quad B = \begin{bmatrix} \frac{3}{2} & -\frac{1}{2} \\ -2 & 1 \end{bmatrix}$$

Check:
$$AB = \begin{bmatrix} 2 & 1 \\ 4 & 3 \end{bmatrix}\begin{bmatrix} \frac{3}{2} & -\frac{1}{2} \\ -2 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = I_2 \quad \checkmark$$

### Uniqueness of Inverse

**Theorem**: If $A$ is invertible, then $A^{-1}$ is **unique**.

**Proof**: Suppose $B$ and $C$ both satisfy $AB = BA = I$ and $AC = CA = I$.

Then:
$$B = BI = B(AC) = (BA)C = IC = C$$

So $B = C$ $\square$

### Connection to Linear Transformations

**Theorem**: $A$ is invertible ⟺ $T_A$ is both **one-to-one** and **onto**.

**Proof** ($\Rightarrow$): 
1. **One-to-one**: If $A\mathbf{x} = \mathbf{0}$, then $\mathbf{x} = A^{-1}A\mathbf{x} = A^{-1}\mathbf{0} = \mathbf{0}$
2. **Onto**: For any $\mathbf{b}$, let $\mathbf{x} = A^{-1}\mathbf{b}$. Then $A\mathbf{x} = AA^{-1}\mathbf{b} = \mathbf{b}$ $\square$

---

## Properties of Inverses

1. **$(A^{-1})^{-1} = A$**

2. **$(AB)^{-1} = B^{-1}A^{-1}$** (order reverses!)

   **Proof**: $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1} = AA^{-1} = I$ $\square$

3. **$(A^T)^{-1} = (A^{-1})^T$**

4. If $AB$ is invertible, then both $A$ and $B$ are invertible

   **Proof**: If $B\mathbf{x} = \mathbf{0}$, then $AB\mathbf{x} = \mathbf{0}$. Since $AB$ is invertible (one-to-one), $\mathbf{x} = \mathbf{0}$. So $B$ is one-to-one, hence invertible (square matrix). Similarly for $A$. $\square$

---

## $2 \times 2$ Inverse Formula

For a $2 \times 2$ matrix:

$$A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$$

If $ad - bc \neq 0$, then $A$ is invertible with:

$$A^{-1} = \frac{1}{ad - bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$

**Note**: $ad - bc$ is the **determinant** of $A$ (more on this later!)

---

## Summary

| Operation | Key Property | Notes |
|-----------|--------------|-------|
| Addition | Commutative | Same size required |
| Multiplication | NOT commutative | Size: $(m \times k)(k \times n) = (m \times n)$ |
| Transpose | $(AB)^T = B^TA^T$ | Reverses order |
| Inverse | $(AB)^{-1} = B^{-1}A^{-1}$ | Reverses order, square only |
