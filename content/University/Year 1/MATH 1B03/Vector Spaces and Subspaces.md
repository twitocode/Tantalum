---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---
# Lecture 20: Vector Spaces Introduction

## Vector Space Definition

A **vector space** $V$ is a non-empty set with:
- A binary operation $+$ (addition)
- Unary operations $c$ for every $c \in \mathbb{R}$ (scalar multiplication)

These operations must satisfy 10 axioms:

### Addition Axioms (1-5)
1. **Closure under addition**: If $u, v \in V$, then $u + v \in V$
2. **Associativity**: $(x + y) + z = x + (y + z)$ for all $x, y, z \in V$
3. **Commutativity**: $x + y = y + x$ for all $x, y \in V$
4. **Identity element**: There exists $\mathbf{0} \in V$ such that $v + \mathbf{0} = v$ for all $v \in V$
5. **Inverse elements**: For every $v \in V$, there exists $-v \in V$ such that $v + (-v) = \mathbf{0}$

### Scalar Multiplication Axioms (6-10)
6. **Closure under scalar multiplication**: If $c \in \mathbb{R}$ and $v \in V$, then $cv \in V$
7. **Distributivity (vectors)**: $c(u + v) = cu + cv$ for all $c \in \mathbb{R}$ and $u, v \in V$
8. **Distributivity (scalars)**: $(c + d)u = cu + du$ for all $c, d \in \mathbb{R}$ and $u \in V$
9. **Associativity**: $c(dv) = (cd)v$ for all $c, d \in \mathbb{R}$ and $v \in V$
10. **Scalar identity**: $1v = v$ for all $v \in V$

---

## Example 1: $\mathbb{R}^n$

The standard example! $\mathbb{R}^n$ with usual addition and scalar multiplication is a vector space.

**Zero vector in $\mathbb{R}^n$:**
$$\mathbf{0} = \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 0 \end{pmatrix}$$

**Additive inverse:** For $v = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}$, we have $-v = \begin{pmatrix} -v_1 \\ -v_2 \\ \vdots \\ -v_n \end{pmatrix}$

**Verification of Axiom 9:**
For $c, d \in \mathbb{R}$ and $v \in \mathbb{R}^n$:
$$c(dv) = c\begin{pmatrix} dv_1 \\ dv_2 \\ \vdots \\ dv_n \end{pmatrix} = \begin{pmatrix} cdv_1 \\ cdv_2 \\ \vdots \\ cdv_n \end{pmatrix} = (cd)v$$

---

## Example 2: Continuous Functions on $[0,1]$

Let $V$ be the set of continuous functions on $[0, 1]$.

**Operations:**
- Addition: $(f + g)(x) = f(x) + g(x)$ for $x \in [0, 1]$
- Scalar multiplication: $(cf)(x) = c \cdot f(x)$ for $x \in [0, 1]$

**Why is addition commutative?**
For any $f, g \in V$ and $x \in [0, 1]$:
$$(f + g)(x) = f(x) + g(x) = g(x) + f(x) = (g + f)(x)$$

**Zero element (Axiom 4):**
The **zero function** $\mathbf{0}$ where $\mathbf{0}(x) = 0$ for all $x \in [0, 1]$.
- It's continuous on $[0, 1]$, so $\mathbf{0} \in V$
- $(f + \mathbf{0})(x) = f(x) + 0 = f(x)$ ✓

**Additive inverse (Axiom 5):**
For $f \in V$, define $(-f)(x) = -f(x)$ for all $x$.
- Check: $(f + (-f))(x) = f(x) + (-f(x)) = 0 = \mathbf{0}(x)$ ✓

---

## Key Facts About Vector Spaces

**Theorem:** In any vector space $V$:
1. The zero vector $\mathbf{0}$ is **unique**
2. For any $v \in V$, the inverse $-v$ is **unique** (and equals $(-1)v$)
3. For any $c \in \mathbb{R}$: $c\mathbf{0} = \mathbf{0}$

**Proof of uniqueness of $\mathbf{0}$:**
If both $\mathbf{0}$ and $\mathbf{0}'$ act as zero vectors, then:
$$\mathbf{0} = \mathbf{0} + \mathbf{0}' = \mathbf{0}'$$

---

## Subspaces

**Definition:** A non-empty subset $W \subseteq V$ is a **subspace** if:
1. $W$ is **closed under addition**: $u, v \in W \implies u + v \in W$
2. $W$ is **closed under scalar multiplication**: $c \in \mathbb{R}, v \in W \implies cv \in W$

*Note:* If $W$ is a subspace of $V$, then $W$ is itself a vector space!

---

## Important Examples of Subspaces

### 1. Nullspace (Kernel)
For an $m \times n$ matrix $A$:
$$\text{Nul}(A) = \{x \in \mathbb{R}^n : Ax = \mathbf{0}\}$$

This is a subspace of $\mathbb{R}^n$.

### 2. Span
If $v_1, \ldots, v_k \in \mathbb{R}^n$, then:
$$\text{span}\{v_1, \ldots, v_k\} = \{c_1v_1 + \cdots + c_kv_k : c_1, \ldots, c_k \in \mathbb{R}\}$$

This is a subspace of $\mathbb{R}^n$.

---

## Visual Intuition

```tikz
\begin{document}
\begin{tikzpicture}
    % Draw axes
    \draw[->] (-0.5,0) -- (4,0) node[right] {$x$};
    \draw[->] (0,-0.5) -- (0,4) node[above] {$y$};
    
    % Draw vector space ellipse
    \draw[blue, thick] (2,2) ellipse (2cm and 1.5cm);
    \node[blue] at (3.5,3.2) {Vector Space $V$};
    
    % Draw subspace line
    \draw[red, thick] (0.5,0.5) -- (3.5,3.5);
    \node[red] at (3.8,3.5) {Subspace $W$};
    
    % Draw zero vector
    \filldraw[black] (2,2) circle (2pt) node[below right] {$\mathbf{0}$};
    
    % Draw some vectors in subspace
    \draw[->, thick, red] (2,2) -- (2.8,2.8) node[above right] {$v$};
    \draw[->, thick, red] (2,2) -- (2.5,2.5) node[right] {$w$};
\end{tikzpicture}
\end{document}
```

---

## Summary

✅ Vector spaces generalize $\mathbb{R}^n$
✅ Must satisfy 10 axioms (5 for addition, 5 for scalar multiplication)
✅ Examples include $\mathbb{R}^n$, continuous functions, polynomials
✅ Subspaces are "smaller" vector spaces within larger ones
✅ Nullspace and span are important examples of subspaces