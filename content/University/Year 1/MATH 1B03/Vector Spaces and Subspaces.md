---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---
## Vector Spaces - The Axioms

### Definition

A **vector space** $V$ is a non-empty set with two operations:
- **Addition**: $+ : V \times V \to V$
- **Scalar multiplication**: For each $c \in \mathbb{R}$, a function $V \to V$

satisfying **10 axioms**:

### Axioms for Addition

1. **Closure**: If $\mathbf{u}, \mathbf{v} \in V$, then $\mathbf{u} + \mathbf{v} \in V$

2. **Associativity**: $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$

3. **Commutativity**: $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$

4. **Zero element**: There exists $\mathbf{0} \in V$ such that $\mathbf{v} + \mathbf{0} = \mathbf{v}$ for all $\mathbf{v} \in V$

5. **Additive inverse**: For each $\mathbf{v} \in V$, there exists $-\mathbf{v} \in V$ such that $\mathbf{v} + (-\mathbf{v}) = \mathbf{0}$

### Axioms for Scalar Multiplication

6. **Closure**: If $c \in \mathbb{R}$ and $\mathbf{v} \in V$, then $c\mathbf{v} \in V$

7. **Distributivity (vectors)**: $c(\mathbf{u} + \mathbf{v}) = c\mathbf{u} + c\mathbf{v}$

8. **Distributivity (scalars)**: $(c + d)\mathbf{v} = c\mathbf{v} + d\mathbf{v}$

9. **Compatibility**: $c(d\mathbf{v}) = (cd)\mathbf{v}$

10. **Identity**: $1\mathbf{v} = \mathbf{v}$

**Note**: Axioms 1-5 say that $(V, +)$ is an **abelian group**.

---

## Example 1: $\mathbb{R}^n$

The space $\mathbb{R}^n$ with standard addition and scalar multiplication **is** a vector space.

**Zero element**: $\mathbf{0} = \begin{bmatrix} 0 \\ 0 \\ \vdots \\ 0 \end{bmatrix}$

**Additive inverse** of $\mathbf{v} = \begin{bmatrix} v_1 \\ \vdots \\ v_n \end{bmatrix}$: $-\mathbf{v} = \begin{bmatrix} -v_1 \\ \vdots \\ -v_n \end{bmatrix}$

### Verifying an Axiom

**Axiom 9**: Let $c, d \in \mathbb{R}$ and $\mathbf{v} = \begin{bmatrix} v_1 \\ \vdots \\ v_n \end{bmatrix}$

$$c(d\mathbf{v}) = c\begin{bmatrix} dv_1 \\ \vdots \\ dv_n \end{bmatrix} = \begin{bmatrix} c(dv_1) \\ \vdots \\ c(dv_n) \end{bmatrix} = \begin{bmatrix} (cd)v_1 \\ \vdots \\ (cd)v_n \end{bmatrix} = (cd)\mathbf{v}$$ ✓

---

## Example 2: Continuous Functions on $[0,1]$

Let $V = C[0,1]$ = the set of all continuous functions $f: [0,1] \to \mathbb{R}$.

### Operations

**Addition**: $(f + g)(x) = f(x) + g(x)$ for all $x \in [0,1]$

**Scalar multiplication**: $(cf)(x) = c \cdot f(x)$ for all $x \in [0,1]$

### Verifying Axioms

**Axiom 1** (Closure under addition): If $f, g$ are continuous, is $f + g$ continuous?

**From calculus**: Sum of continuous functions is continuous ✓

**Axiom 3** (Commutativity): Is $(f + g)(x) = (g + f)(x)$?

$$(f + g)(x) = f(x) + g(x) = g(x) + f(x) = (g + f)(x) \quad \text{✓}$$

(using commutativity of real numbers)

**Axiom 4** (Zero element): What is $\mathbf{0}$ in this space?

The **zero function**: $\mathbf{0}(x) = 0$ for all $x \in [0,1]$

Check: $(f + \mathbf{0})(x) = f(x) + 0 = f(x)$ ✓

**Axiom 5** (Additive inverse): Given $f$, what is $-f$?

$(-f)(x) = -f(x)$ for all $x \in [0,1]$

Check: $(f + (-f))(x) = f(x) + (-f(x)) = 0 = \mathbf{0}(x)$ ✓

---

## Basic Facts About Vector Spaces

### Theorem

In any vector space $V$:

1. **Zero is unique**: There is only one element satisfying axiom 4

2. **Additive inverse is unique**: For each $\mathbf{v}$, there's only one $-\mathbf{v}$ satisfying axiom 5, and $-\mathbf{v} = (-1)\mathbf{v}$

3. **$0\mathbf{v} = \mathbf{0}$** for all $\mathbf{v} \in V$

4. **$c\mathbf{0} = \mathbf{0}$** for all $c \in \mathbb{R}$

### Proof of (1)

Suppose both $\mathbf{0}$ and $\mathbf{0}'$ act as zero elements.

Then:
$$\mathbf{0} = \mathbf{0} + \mathbf{0}' \quad \text{(using } \mathbf{0}' \text{ as zero)}$$
$$= \mathbf{0}' + \mathbf{0} \quad \text{(commutativity)}$$
$$= \mathbf{0}' \quad \text{(using } \mathbf{0} \text{ as zero)}$$

So $\mathbf{0} = \mathbf{0}'$ $\square$

### Proof of (3)

$$0\mathbf{v} = (0 + 0)\mathbf{v} \quad \text{(algebra in } \mathbb{R}\text{)}$$
$$= 0\mathbf{v} + 0\mathbf{v} \quad \text{(axiom 8)}$$

Add $-(0\mathbf{v})$ to both sides:
$$0\mathbf{v} + (-(0\mathbf{v})) = (0\mathbf{v} + 0\mathbf{v}) + (-(0\mathbf{v}))$$
$$\mathbf{0} = 0\mathbf{v} + (0\mathbf{v} + (-(0\mathbf{v}))) \quad \text{(associativity)}$$
$$\mathbf{0} = 0\mathbf{v} + \mathbf{0} = 0\mathbf{v} \quad \square$$

---

## Subspaces

### Definition

A **subspace** of a vector space $V$ is a non-empty subset $W \subseteq V$ such that:

1. $W$ is **closed under addition**: If $\mathbf{u}, \mathbf{v} \in W$, then $\mathbf{u} + \mathbf{v} \in W$

2. $W$ is **closed under scalar multiplication**: If $c \in \mathbb{R}$ and $\mathbf{v} \in W$, then $c\mathbf{v} \in W$

**Important**: A subspace is automatically a vector space with the inherited operations!

**Why?** Most axioms (associativity, commutativity, etc.) are automatically inherited from $V$. We only need to check **closure**.

### Subspace Test

> **Theorem**: $W$ is a subspace of $V$ if and only if:
> 1. $\mathbf{0} \in W$
> 2. $W$ is closed under addition
> 3. $W$ is closed under scalar multiplication

**Note**: Condition 1 can be derived from 3 (take $c = 0$), but it's useful to check explicitly.

---

## Examples of Subspaces in $\mathbb{R}^n$

### Example 1: Lines through the origin

$$W = \{t\mathbf{v} : t \in \mathbb{R}\} = \text{Span}\{\mathbf{v}\}$$

for some fixed $\mathbf{v} \in \mathbb{R}^n$.

**Check**:
- $\mathbf{0} = 0\mathbf{v} \in W$ ✓
- If $t_1\mathbf{v}, t_2\mathbf{v} \in W$, then $(t_1 + t_2)\mathbf{v} \in W$ ✓
- If $t\mathbf{v} \in W$ and $c \in \mathbb{R}$, then $c(t\mathbf{v}) = (ct)\mathbf{v} \in W$ ✓

### Example 2: Planes through the origin in $\mathbb{R}^3$

$$W = \{s\mathbf{v}_1 + t\mathbf{v}_2 : s, t \in \mathbb{R}\} = \text{Span}\{\mathbf{v}_1, \mathbf{v}_2\}$$

This is a subspace (closure follows from linearity of operations).

### Non-Example: Lines NOT through origin

$$W = \left\{\begin{bmatrix} x \\ y \end{bmatrix} : x + y = 1\right\}$$

**Not a subspace!**

Why? $\mathbf{0} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \notin W$ since $0 + 0 \neq 1$ ✗

---

## The Nullspace

### Definition

For an $m \times n$ matrix $A$, the **nullspace** of $A$ is:

$$\text{Nul}(A) = \{\mathbf{x} \in \mathbb{R}^n : A\mathbf{x} = \mathbf{0}\}$$

i.e., the set of all solutions to the homogeneous equation $A\mathbf{x} = \mathbf{0}$.

### Theorem

> $\text{Nul}(A)$ is a subspace of $\mathbb{R}^n$.

**Proof**:

1. $\mathbf{0} \in \text{Nul}(A)$ since $A\mathbf{0} = \mathbf{0}$ ✓

2. **Closure under addition**: Let $\mathbf{u}, \mathbf{v} \in \text{Nul}(A)$, so $A\mathbf{u} = \mathbf{0}$ and $A\mathbf{v} = \mathbf{0}$.

   Then: $A(\mathbf{u} + \mathbf{v}) = A\mathbf{u} + A\mathbf{v} = \mathbf{0} + \mathbf{0} = \mathbf{0}$

   So $\mathbf{u} + \mathbf{v} \in \text{Nul}(A)$ ✓

3. **Closure under scalar multiplication**: Let $\mathbf{v} \in \text{Nul}(A)$ and $c \in \mathbb{R}$.

   Then: $A(c\mathbf{v}) = c(A\mathbf{v}) = c\mathbf{0} = \mathbf{0}$

   So $c\mathbf{v} \in \text{Nul}(A)$ ✓ $\square$

### Example

$$A = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix}$$

Find $\text{Nul}(A)$: Solve $A\mathbf{x} = \mathbf{0}$:

$$\left[\begin{array}{ccc|c} 1 & 2 & 3 & 0 \\ 4 & 5 & 6 & 0 \end{array}\right] \sim \left[\begin{array}{ccc|c} 1 & 0 & -1 & 0 \\ 0 & 1 & 2 & 0 \end{array}\right]$$

General solution: $\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} x_3 \\ -2x_3 \\ x_3 \end{bmatrix} = x_3\begin{bmatrix} 1 \\ -2 \\ 1 \end{bmatrix}$

$$\text{Nul}(A) = \text{Span}\left\{\begin{bmatrix} 1 \\ -2 \\ 1 \end{bmatrix}\right\}$$

A line through the origin in $\mathbb{R}^3$!

---

## The Span as a Subspace

### Theorem

> If $\mathbf{v}_1, \ldots, \mathbf{v}_k \in \mathbb{R}^n$, then $\text{Span}\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$ is a subspace of $\mathbb{R}^n$.

**Proof**: Exercise - use the fact that linear combinations of linear combinations are linear combinations! $\square$

### Column Space

For an $m \times n$ matrix $A = \begin{bmatrix} \mathbf{a}_1 & \cdots & \mathbf{a}_n \end{bmatrix}$:

$$\text{Col}(A) = \text{Span}\{\mathbf{a}_1, \ldots, \mathbf{a}_n\} \subseteq \mathbb{R}^m$$

**Interpretation**: The **range** of the linear transformation $T_A: \mathbb{R}^n \to \mathbb{R}^m$

**Key question**: Is $\mathbf{b} \in \text{Col}(A)$? ⟺ Is $A\mathbf{x} = \mathbf{b}$ consistent?

---

## Summary

| Concept | Key Idea |
|---------|----------|
| Vector Space | Abstract structure with 10 axioms |
| $\mathbb{R}^n$ | Standard example |
| $C[a,b]$ | Function spaces are vector spaces too! |
| Subspace | Closed subset, contains $\mathbf{0}$ |
| $\text{Nul}(A)$ | Solutions to $A\mathbf{x} = \mathbf{0}$ (subspace of $\mathbb{R}^n$) |
| $\text{Col}(A)$ | Span of columns (subspace of $\mathbb{R}^m$) |
| $\text{Span}\{\mathbf{v}_1,\ldots\}$ | Always a subspace |

```tikz
\usepackage{tikz}
\usetikzlibrary{shapes,positioning}
\begin{document}
\begin{tikzpicture}[
  box/.style={rectangle, draw, rounded corners, minimum width=3cm, minimum height=1cm, text centered}
]
  
  \node[box, fill=blue!10] (vs) {Vector Space $V$};
  \node[box, fill=green!10, below left=1.5cm and -0.5cm of vs] (sub1) {Subspace $W_1$};
  \node[box, fill=green!10, below right=1.5cm and -0.5cm of vs] (sub2) {Subspace $W_2$};
  \node[box, fill=red!10, below=1cm of sub1] (zero1) {$\mathbf{0}$};
  \node[box, fill=red!10, below=1cm of sub2] (zero2) {$\mathbf{0}$};
  
  \draw[->, thick] (vs) -- (sub1);
  \draw[->, thick] (vs) -- (sub2);
  \draw[->, thick] (sub1) -- (zero1);
  \draw[->, thick] (sub2) -- (zero2);
  
  \node[right=0.2cm of vs] {Contains everything};
  \node[right=0.2cm of sub1] {Closed subsets};
  \node[right=0.2cm of zero1] {Always included};
  
\end{tikzpicture}
\end{document}
```