---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---
## Matrix-Vector Multiplication

### Definition

Let $A$ be an $n \times m$ matrix with columns $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_m$:

$$A = \begin{bmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_m \end{bmatrix}$$

For $\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_m \end{bmatrix} \in \mathbb{R}^m$, we define:

$$A\mathbf{x} = x_1\mathbf{v}_1 + x_2\mathbf{v}_2 + \cdots + x_m\mathbf{v}_m$$

> [!NOTE]
> **Key Insight**: $A\mathbf{x}$ is a **linear combination** of the columns of $A$!

### Example

$$A = \begin{bmatrix} 1 & 2 & 0 \\ 3 & -1 & 4 \end{bmatrix}, \quad \mathbf{x} = \begin{bmatrix} 2 \\ 1 \\ 3 \end{bmatrix}$$

$$A\mathbf{x} = 2\begin{bmatrix} 1 \\ 3 \end{bmatrix} + 1\begin{bmatrix} 2 \\ -1 \end{bmatrix} + 3\begin{bmatrix} 0 \\ 4 \end{bmatrix} = \begin{bmatrix} 4 \\ 18 \end{bmatrix}$$

### System as Matrix Equation

The linear system:
$$\begin{align}
-x + 3y + z &= 2 \\
2x - y + 2z &= 1
\end{align}$$

can be written as: $A\mathbf{x} = \mathbf{b}$ where

$$\begin{bmatrix} -1 & 3 & 1 \\ 2 & -1 & 2 \end{bmatrix} \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$$

---

## The Fundamental Question (Restated)

> [!NOTE]
> **Question**: Does the equation $A\mathbf{x} = \mathbf{b}$ have a solution?

This is **equivalent** to asking:
- Is $\mathbf{b}$ in the span of the columns of $A$?
- Is $\mathbf{b}$ a linear combination of columns of $A$?

### Example: Testing Membership

Is $\mathbf{b} = \begin{bmatrix} 3 \\ 5 \end{bmatrix}$ in the span of $\mathbf{v}_1 = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$ and $\mathbf{v}_2 = \begin{bmatrix} 1 \\ 3 \end{bmatrix}$?

**Solution**: Form augmented matrix and row reduce:

$$\left[\begin{array}{cc|c} 1 & 1 & 3 \\ 2 & 3 & 5 \end{array}\right] \sim \left[\begin{array}{cc|c} 1 & 0 & 4 \\ 0 & 1 & -1 \end{array}\right]$$

Solution: $x_1 = 4, x_2 = -1$

$$\mathbf{b} = 4\mathbf{v}_1 - \mathbf{v}_2 \quad \checkmark$$

### Example: Not in Span

Is $\mathbf{b} = \begin{bmatrix} 3 \\ 5 \end{bmatrix}$ in the span of $\mathbf{v}_1 = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$ and $\mathbf{v}_2 = \begin{bmatrix} 2 \\ 4 \end{bmatrix}$?

$$\left[\begin{array}{cc|c} 1 & 2 & 3 \\ 2 & 4 & 5 \end{array}\right] \sim \left[\begin{array}{cc|c} 1 & 2 & 3 \\ 0 & 0 & -1 \end{array}\right]$$

Last row: $0 = -1$ → **inconsistent**!

$\mathbf{b}$ is **not** in Span$\{\mathbf{v}_1, \mathbf{v}_2\}$ ✗

---

## Spanning $\mathbb{R}^n$

### Definition

Vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_m$ **span** $\mathbb{R}^n$ if every vector in $\mathbb{R}^n$ can be written as a linear combination of them.

$$\text{Span}\{\mathbf{v}_1, \ldots, \mathbf{v}_m\} = \mathbb{R}^n$$

### How to Test if Vectors Span $\mathbb{R}^n$

Form the matrix $A = \begin{bmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_m \end{bmatrix}$ (size $n \times m$).

> [!NOTE] Theorem
>  $\mathbf{v}_1, \ldots, \mathbf{v}_m$ span $\mathbb{R}^n$ if and only if:
>  
>  When you row reduce $A$, **every row has a leading 1** (pivot).


### Example: Do These Span $\mathbb{R}^3$?

$$\mathbf{v}_1 = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}, \mathbf{v}_2 = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}, \mathbf{v}_3 = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}$$

Form matrix:
$$A = \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix}$$

Row reduce:
$$\text{RREF}(A) = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

Every row has a pivot → **Yes, they span $\mathbb{R}^3$!**

### Important Fact

> If $\mathbf{v}_1, \ldots, \mathbf{v}_m$ span $\mathbb{R}^n$, then $m \geq n$.

**Reason**: We need at least $n$ vectors to get $n$ pivots (one per row).

**Example**: 3 vectors in $\mathbb{R}^4$ cannot span $\mathbb{R}^4$ (at most 3 pivots in 4 rows).

---

## Properties of Matrix-Vector Multiplication

### Theorem (Linearity)

Let $A$ be an $n \times m$ matrix and $\mathbf{x}, \mathbf{y} \in \mathbb{R}^m$, $\lambda \in \mathbb{R}$:

1. **Distributivity**: $A(\mathbf{x} + \mathbf{y}) = A\mathbf{x} + A\mathbf{y}$

2. **Scalar factorization**: $A(\lambda\mathbf{x}) = \lambda(A\mathbf{x})$

**Proof of (1)**:

Write $A = \begin{bmatrix} \mathbf{v}_1 & \cdots & \mathbf{v}_m \end{bmatrix}$, $\mathbf{x} = \begin{bmatrix} x_1 \\ \vdots \\ x_m \end{bmatrix}$, $\mathbf{y} = \begin{bmatrix} y_1 \\ \vdots \\ y_m \end{bmatrix}$

$$\begin{align}
A(\mathbf{x} + \mathbf{y}) &= A\begin{bmatrix} x_1 + y_1 \\ \vdots \\ x_m + y_m \end{bmatrix} \\
&= (x_1 + y_1)\mathbf{v}_1 + \cdots + (x_m + y_m)\mathbf{v}_m \\
&= (x_1\mathbf{v}_1 + \cdots + x_m\mathbf{v}_m) + (y_1\mathbf{v}_1 + \cdots + y_m\mathbf{v}_m) \\
&= A\mathbf{x} + A\mathbf{y} \quad \square
\end{align}$$

---

## Homogeneous Systems

### Definition

A system $A\mathbf{x} = \mathbf{b}$ is **homogeneous** if $\mathbf{b} = \mathbf{0}$:

$$A\mathbf{x} = \mathbf{0}$$

### Key Properties

1. **Always has a solution**: $\mathbf{x} = \mathbf{0}$ (the **trivial solution**)

2. > **Theorem**: A homogeneous system with more unknowns than equations has **infinitely many solutions**.

**Proof**: If $A$ is $m \times n$ with $n > m$, then when we row reduce, there are at most $m$ pivots. Since $n > m$, there's at least one free variable → infinitely many solutions. $\square$

### Example 1: Only Trivial Solution

$$\begin{align}
x_1 + 2x_2 + x_3 &= 0 \\
-x_1 - x_2 + x_3 &= 0 \\
2x_1 - x_2 + 3x_3 &= 0
\end{align}$$

RREF:
$$\left[\begin{array}{ccc|c} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \end{array}\right]$$

Only solution: $(0, 0, 0)$

### Example 2: Infinitely Many Solutions

$$\begin{align}
x_1 + 2x_2 + x_3 &= 0 \\
-x_1 - x_2 + x_3 &= 0
\end{align}$$

RREF:
$$\left[\begin{array}{ccc|c} 1 & 0 & -3 & 0 \\ 0 & 1 & 2 & 0 \end{array}\right]$$

Free variable: $x_3 = t$

General solution:
$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 3t \\ -2t \\ t \end{bmatrix} = t\begin{bmatrix} 3 \\ -2 \\ 1 \end{bmatrix}$$

---

## Solution Structure Theorem

> **Theorem**: Let $A\mathbf{x} = \mathbf{b}$ be consistent, and let $\mathbf{x}_0$ be a particular solution.
> 
> Then **every solution** has the form:
> $$\mathbf{x} = \mathbf{x}_0 + \mathbf{y}$$
> where $\mathbf{y}$ is a solution to the homogeneous equation $A\mathbf{x} = \mathbf{0}$.

**In words**: General solution = Particular solution + All homogeneous solutions

---

## Key Takeaways

- $A\mathbf{x}$ is a linear combination of columns of $A$
- Vectors span $\mathbb{R}^n$ ⟺ every row has a pivot when reduced
- Matrix-vector multiplication is linear
- Homogeneous systems always have $\mathbf{0}$ as a solution
- More unknowns than equations → infinitely many solutions (homogeneous case)