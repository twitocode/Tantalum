---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---
## Elementary Matrices

### Definition

An $n \times n$ matrix $E$ is an **elementary matrix** if it can be obtained from $I_n$ by performing a **single** elementary row operation.

### Three Types

**Type 1**: **Row interchange**
$$E = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix} \quad \text{(swaps rows 2 and 3 of } I_3\text{)}$$

**Type 2**: **Row scaling**
$$E = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 1 \end{bmatrix} \quad \text{(multiplies row 2 by 5)}$$

**Type 3**: **Row addition**
$$E = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 3 & 1 \end{bmatrix} \quad \text{(adds } 3 \times \text{row 2 to row 3)}$$

### Key Property

> **Theorem**: Multiplying a matrix $A$ on the **left** by an elementary matrix $E$ performs the corresponding row operation on $A$:
> $$EA = \text{(result of performing the row operation on } A\text{)}$$

### Example

$$E = \begin{bmatrix} 1 & 0 \\ 2 & 1 \end{bmatrix} \quad \text{(adds } 2 \times \text{row 1 to row 2)}$$

$$EA = \begin{bmatrix} 1 & 0 \\ 2 & 1 \end{bmatrix}\begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} a & b \\ 2a+c & 2b+d \end{bmatrix}$$

Indeed, row 2 becomes row 2 + $2 \times$ row 1! ✓

---

## Inverses of Elementary Matrices

> **Theorem**: Every elementary matrix is invertible, and $E^{-1}$ is also elementary.

### Inverses by Type

**Type 1** (row swap): $E^{-1} = E$ (swapping twice undoes it)

$$\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}^{-1} = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$$

**Type 2** (scale by $k \neq 0$): $E^{-1}$ scales by $\frac{1}{k}$

$$\begin{bmatrix} 1 & 0 \\ 0 & 5 \end{bmatrix}^{-1} = \begin{bmatrix} 1 & 0 \\ 0 & \frac{1}{5} \end{bmatrix}$$

**Type 3** (add $k \times$ row $i$ to row $j$): $E^{-1}$ adds $-k \times$ row $i$ to row $j$

$$\begin{bmatrix} 1 & 0 \\ 3 & 1 \end{bmatrix}^{-1} = \begin{bmatrix} 1 & 0 \\ -3 & 1 \end{bmatrix}$$

---

## Algorithm for Finding $A^{-1}$

### The Method

To find $A^{-1}$ for an $n \times n$ matrix $A$:

1. Form the augmented matrix $[A \mid I_n]$
2. Row reduce to reduced row echelon form
3. If the result is $[I_n \mid B]$, then $B = A^{-1}$
4. If you get a row of zeros on the left side, then $A$ is **not invertible**

### Why It Works

When we row reduce $A$, we're multiplying by elementary matrices:

$$E_k E_{k-1} \cdots E_2 E_1 A = I_n$$

The product $E_k E_{k-1} \cdots E_1 = A^{-1}$.

When we perform the same operations on $I_n$:

$$E_k E_{k-1} \cdots E_2 E_1 I_n = A^{-1}$$

### Example 1: Invertible Matrix

Find the inverse of $A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$

$$\left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 3 & 4 & 0 & 1 \end{array}\right]$$

$-3 \times \text{R1} + \text{R2} \to \text{R2}$:

$$\left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 0 & -2 & -3 & 1 \end{array}\right]$$

$-\frac{1}{2} \times \text{R2}$:

$$\left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 0 & 1 & \frac{3}{2} & -\frac{1}{2} \end{array}\right]$$

$-2 \times \text{R2} + \text{R1} \to \text{R1}$:

$$\left[\begin{array}{cc|cc} 1 & 0 & -2 & 1 \\ 0 & 1 & \frac{3}{2} & -\frac{1}{2} \end{array}\right]$$

**Result**: $A^{-1} = \begin{bmatrix} -2 & 1 \\ \frac{3}{2} & -\frac{1}{2} \end{bmatrix}$ ✓

### Example 2: Non-Invertible Matrix

Try to find inverse of $A = \begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix}$

$$\left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 2 & 4 & 0 & 1 \end{array}\right] \sim \left[\begin{array}{cc|cc} 1 & 2 & 1 & 0 \\ 0 & 0 & -2 & 1 \end{array}\right]$$

Row of zeros on left → $A$ is **not invertible** ✗

---

## The Invertible Matrix Theorem (IMT)

This is one of the most important theorems in linear algebra!

### The Theorem

> **Theorem**: For an $n \times n$ matrix $A$, the following are **equivalent** (all true or all false):
>
> (a) $A$ is invertible
> (b) $A$ can be row reduced to $I_n$
> (c) $A$ has $n$ pivot positions
> (d) $A\mathbf{x} = \mathbf{0}$ has only the trivial solution
> (e) The columns of $A$ are linearly independent
> (f) $T_A: \mathbb{R}^n \to \mathbb{R}^n$ is one-to-one
> (g) The columns of $A$ span $\mathbb{R}^n$
> (h) $T_A: \mathbb{R}^n \to \mathbb{R}^n$ is onto
> (i) $A\mathbf{x} = \mathbf{b}$ has a unique solution for each $\mathbf{b} \in \mathbb{R}^n$
> (j) There exists an $n \times n$ matrix $C$ such that $CA = I_n$
> (k) There exists an $n \times n$ matrix $D$ such that $AD = I_n$
> (l) $A^T$ is invertible

### Important Corollaries

**Corollary 1**: The rows of an invertible matrix are linearly independent.

**Proof**: If $A$ is invertible, then $A^T$ is invertible (by (l)). By (e), the columns of $A^T$ are independent. But columns of $A^T$ are rows of $A$ $\square$

**Corollary 2**: If $A\mathbf{x} = \mathbf{b}$ has a solution for every $\mathbf{b}$, then $A$ is invertible.

**Proof**: This means $T_A$ is onto, so by (h), $A$ is invertible $\square$

### Applications

**Example 1**: Is this matrix invertible?

$$A = \begin{bmatrix} 1 & 4 & -3 & 7 \\ 0 & 0 & -1 & 2 \\ 0 & 0 & 0 & 5 \\ 0 & 0 & 0 & 3 \end{bmatrix}$$

This is in row echelon form. Check pivots: positions (1,1), (2,3), (3,4). Only 3 pivots, but matrix is $4 \times 4$.

By (c), not all rows have pivots → **Not invertible** ✗

**Example 2**: Upper triangular matrices

An **upper triangular** matrix has zeros below the diagonal:

$$A = \begin{bmatrix} a_{11} & * & * & * \\ 0 & a_{22} & * & * \\ 0 & 0 & a_{33} & * \\ 0 & 0 & 0 & a_{44} \end{bmatrix}$$

> **Fact**: An upper triangular matrix is invertible ⟺ all diagonal entries are non-zero.

**Why?** The pivots are exactly the diagonal entries!

---

## Product of Invertible Matrices

> **Theorem**: If $A$ and $B$ are invertible $n \times n$ matrices, then $AB$ is invertible.

**Proof**: We know $(AB)^{-1} = B^{-1}A^{-1}$ from before $\square$

> **Converse**: If $AB$ is invertible, then both $A$ and $B$ are invertible.

**Proof**: 
- If $B\mathbf{x} = \mathbf{0}$, then $AB\mathbf{x} = \mathbf{0}$. Since $AB$ is invertible (one-to-one), $\mathbf{x} = \mathbf{0}$. So $B$ satisfies (d) → $B$ is invertible.
- If $A\mathbf{y} = \mathbf{b}$ for some $\mathbf{b}$, we need to show there's a solution. Since $AB$ is invertible (onto), $\exists \mathbf{x}$ with $AB\mathbf{x} = \mathbf{b}$. Let $\mathbf{y} = B\mathbf{x}$. Then $A\mathbf{y} = A(B\mathbf{x}) = \mathbf{b}$. So $A$ satisfies (i) → $A$ is invertible $\square$

---

## Partition Matrices (Block Matrices)

Matrices can be partitioned into blocks:

$$A = \begin{bmatrix} A_{11} & A_{12} \\ A_{21} & A_{22} \end{bmatrix}$$

where each $A_{ij}$ is itself a matrix.

**Block multiplication** works like regular multiplication if dimensions match:

$$\begin{bmatrix} A_{11} & A_{12} \\ A_{21} & A_{22} \end{bmatrix}\begin{bmatrix} B_1 \\ B_2 \end{bmatrix} = \begin{bmatrix} A_{11}B_1 + A_{12}B_2 \\ A_{21}B_1 + A_{22}B_2 \end{bmatrix}$$

### Block Diagonal Matrices

$$A = \begin{bmatrix} A_1 & 0 & 0 \\ 0 & A_2 & 0 \\ 0 & 0 & A_3 \end{bmatrix}$$

If each $A_i$ is invertible, then:

$$A^{-1} = \begin{bmatrix} A_1^{-1} & 0 & 0 \\ 0 & A_2^{-1} & 0 \\ 0 & 0 & A_3^{-1} \end{bmatrix}$$

---

## Invertible Linear Transformations

### Definition

A linear transformation $T: \mathbb{R}^n \to \mathbb{R}^n$ is **invertible** if there exists $S: \mathbb{R}^n \to \mathbb{R}^n$ such that:

$$S(T(\mathbf{x})) = \mathbf{x} \quad \text{and} \quad T(S(\mathbf{x})) = \mathbf{x} \quad \forall \mathbf{x} \in \mathbb{R}^n$$

**Notation**: $S = T^{-1}$, and $S \circ T = T \circ S = \text{id}$

### Theorem

> A linear transformation $T: \mathbb{R}^n \to \mathbb{R}^n$ is invertible ⟺ its standard matrix is invertible.

Moreover, if $A$ is the standard matrix for $T$, then $A^{-1}$ is the standard matrix for $T^{-1}$.

---

## Summary

- Elementary matrices perform row operations via multiplication
- $A$ is invertible ⟺ it row reduces to $I_n$
- The IMT gives **12 equivalent conditions** for invertibility
- Upper/lower triangular: invertible ⟺ non-zero diagonal
- Algorithm: $[A \mid I] \leadsto [I \mid A^{-1}]$ (if possible)
