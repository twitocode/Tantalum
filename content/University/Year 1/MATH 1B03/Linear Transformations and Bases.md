---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---

## Linear Transformations - Recap

**Definition:** $T: V \to W$ is a **linear transformation** if:
1. $T(u + v) = T(u) + T(v)$ for all $u, v \in V$
2. $T(cu) = cT(u)$ for all $c \in \mathbb{R}$, $u \in V$

### Important Examples

**Matrix transformations:** For $A$ an $m \times n$ matrix:
$$T_A: \mathbb{R}^n \to \mathbb{R}^m, \quad T_A(x) = Ax$$

**Key fact:** ALL linear transformations from $\mathbb{R}^n$ to $\mathbb{R}^m$ are of this form!

**Differentiation:** $D: P \to P$ where $P$ = polynomials in one variable
$$D(p) = p' = \frac{dp}{dx}$$

**Verification:**
- $D(p + q) = (p + q)' = p' + q' = D(p) + D(q)$ ✓
- $D(cp) = (cp)' = cp' = cD(p)$ ✓

---

## Kernel and Range

For $T: V \to W$ linear transformation:

$$\boxed{\ker(T) = \{v \in V : T(v) = \mathbf{0}_W\}}$$

$$\boxed{\text{rng}(T) = \{T(v) : v \in V\} \subseteq W}$$

```tikz
\begin{document}
\begin{tikzpicture}
    % Domain V
    \draw[blue, thick] (0,0) ellipse (1.5cm and 2cm);
    \node[blue] at (0,2.5) {$V$};
    
    % Kernel
    \fill[red!30] (0,0) ellipse (0.5cm and 0.8cm);
    \node[red] at (0,-0.2) {$\ker(T)$};
    \filldraw[black] (0,0.5) circle (1pt) node[right] {$v$};
    
    % Codomain W
    \draw[green!60!black, thick] (5,0) ellipse (1.5cm and 2cm);
    \node[green!60!black] at (5,2.5) {$W$};
    
    % Range
    \fill[orange!30] (5,0) ellipse (0.8cm and 1.2cm);
    \node[orange] at (5,0.8) {$\text{rng}(T)$};
    
    % Zero vectors
    \filldraw[black] (0,-1) circle (2pt) node[below] {$\mathbf{0}_V$};
    \filldraw[black] (5,-1) circle (2pt) node[below] {$\mathbf{0}_W$};
    
    % Arrows
    \draw[->, thick] (1.2,0.5) -- (3.8,0) node[midway, above] {$T$};
    \draw[->, thick, red] (0,-1) -- (5,-1) node[midway, below] {$T(\mathbf{0}_V) = \mathbf{0}_W$};
\end{tikzpicture}
\end{document}
```

---

## Examples of Kernel and Range

### Example 1: Matrix Transformation

For $T_A: \mathbb{R}^n \to \mathbb{R}^m$ where $T_A(v) = Av$:

$$\ker(T_A) = \{v : T_A(v) = \mathbf{0}\} = \{v : Av = \mathbf{0}\} = \text{Nul}(A)$$

$$\text{rng}(T_A) = \{Av : v \in \mathbb{R}^n\} = \text{Col}(A)$$

### Example 2: Differentiation

For $D: P \to P$ where $D(p) = p'$:

**Kernel:** $\ker(D) = \{p : D(p) = 0\}$

What polynomials have derivative 0? Only **constant polynomials**!
$$\ker(D) = \{c : c \in \mathbb{R}\} = P_0$$

This is the solution set of the differential equation $\frac{dp}{dx} = 0$.

**Range:** $\text{rng}(D) = $ all polynomials!

*Proof:* Given any $p(x) = a_0 + a_1x + \cdots + a_nx^n$, we need to find $q$ such that $D(q) = p$.

Take:
$$q(x) = a_0x + \frac{a_1}{2}x^2 + \frac{a_2}{3}x^3 + \cdots + \frac{a_n}{n+1}x^{n+1}$$

Then $D(q) = p$ ✓

---

## Kernel and Range are Subspaces!

**Theorem:** If $T: V \to W$ is a linear transformation, then:
- $\ker(T)$ is a subspace of $V$
- $\text{rng}(T)$ is a subspace of $W$

### Proof for $\ker(T)$

Very similar to proving $\text{Nul}(A)$ is a subspace!

1. **Non-empty:** $T(\mathbf{0}_V) = \mathbf{0}_W$, so $\mathbf{0}_V \in \ker(T)$ ✓

2. **Closed under addition:** If $u, v \in \ker(T)$:
   $$T(u + v) = T(u) + T(v) = \mathbf{0}_W + \mathbf{0}_W = \mathbf{0}_W$$
   So $u + v \in \ker(T)$ ✓

3. **Closed under scalar multiplication:** If $v \in \ker(T)$ and $c \in \mathbb{R}$:
   $$T(cv) = cT(v) = c\mathbf{0}_W = \mathbf{0}_W$$
   So $cv \in \ker(T)$ ✓

### Proof for $\text{rng}(T)$

1. **Non-empty:** $\mathbf{0}_W = T(\mathbf{0}_V) \in \text{rng}(T)$ ✓

2. **Closed under addition:** Choose two elements in range: $T(u)$ and $T(v)$ for some $u, v \in V$.
   $$T(u) + T(v) = T(u + v) \in \text{rng}(T)$$ ✓

3. **Closed under scalar multiplication:** If $T(v) \in \text{rng}(T)$ and $c \in \mathbb{R}$:
   $$cT(v) = T(cv) \in \text{rng}(T)$$ ✓

---

## Linear Independence

**Definition:** Vectors $v_1, \ldots, v_n \in V$ are **linearly independent** if whenever
$$c_1v_1 + \cdots + c_nv_n = \mathbf{0}$$
then necessarily $c_1 = \cdots = c_n = 0$.

A set $B \subseteq V$ is linearly independent if **every finite subset** is linearly independent.

> 💡 This definition agrees with linear independence in $\mathbb{R}^n$!

### Example: Polynomials

**Claim:** In $P_n$ (polynomials of degree $\leq n$), the set $\{1, x, x^2, \ldots, x^n\}$ is linearly independent.

**Proof:** Suppose
$$c_0 \cdot 1 + c_1 \cdot x + c_2 \cdot x^2 + \cdots + c_n \cdot x^n = 0$$

This is the **zero polynomial** (the function that is 0 everywhere).

A polynomial of degree $n$ has at most $n$ roots unless all coefficients are 0.

Therefore: $c_0 = c_1 = \cdots = c_n = 0$ ✓

---

## Basis

**Definition:** A subset $B \subseteq V$ is a **basis** for $V$ if:
1. $B$ is **linearly independent**
2. $B$ **spans** $V$ (every vector in $V$ is a linear combination of vectors in $B$)

### Examples

**Example 1:** Standard basis for $\mathbb{R}^n$
$$\left\{e_1 = \begin{pmatrix} 1 \\ 0 \\ \vdots \\ 0 \end{pmatrix}, e_2 = \begin{pmatrix} 0 \\ 1 \\ \vdots \\ 0 \end{pmatrix}, \ldots, e_n = \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 1 \end{pmatrix}\right\}$$

**Example 2:** Basis for $P_n$
$$\{1, x, x^2, \ldots, x^n\}$$

**Example 3:** Basis for $P$ (all polynomials)
$$\{1, x, x^2, x^3, \ldots\}$$

Note: $P$ has an **infinite basis**!

**Example 4:** Non-standard basis for $\mathbb{R}^2$

$$B = \left\{\begin{pmatrix} 1 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ 0 \end{pmatrix}\right\}$$

Why is this a basis?
- Form matrix: $A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$
- $\det(A) = -1 \neq 0$, so $A$ is invertible
- By IMT: columns are linearly independent and span $\mathbb{R}^2$ ✓

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
    % Grid
    \draw[gray!30] (-0.5,-0.5) grid (3.5,2.5);
    
    % Axes
    \draw[->] (-0.5,0) -- (3.5,0) node[right] {$x$};
    \draw[->] (0,-0.5) -- (0,2.5) node[above] {$y$};
    
    % Standard basis (dashed)
    \draw[->, dashed, gray] (0,0) -- (1,0) node[below, gray] {$e_1$};
    \draw[->, dashed, gray] (0,0) -- (0,1) node[left, gray] {$e_2$};
    
    % New basis
    \draw[->, thick, red] (0,0) -- (1,1.5) node[above right] {$v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$};
    \draw[->, thick, blue] (0,0) -- (1,0) node[below] {$v_2 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$};
    
    % Example vector
    \draw[->, thick, green!60!black] (0,0) -- (2,1) node[above] {$\begin{pmatrix} 2 \\ 1 \end{pmatrix} = v_1 + v_2$};
    
    \node at (1.5,2.2) {Different basis, same space!};
\end{tikzpicture}
\end{document}
```

---

## Spanning Set Theorem

**Theorem:** If $V$ is a vector space and $H = \text{span}\{v_1, \ldots, v_n\}$, then there exists a subset of $\{v_1, \ldots, v_n\}$ which is a **basis** for $H$.

> 💡 We can always extract a basis from a spanning set!

---

## Basis for Column Space

**Algorithm:** The **pivot columns** of matrix $A$ form a basis for $\text{Col}(A)$.

**Steps:**
1. Compute $\text{rref}(A)$
2. Identify columns with leading 1's (pivots)
3. Take corresponding columns **from original matrix $A$**

These columns are linearly independent and span $\text{Col}(A)$!

---

## Summary

✅ Linear transformations preserve vector space structure
✅ $\ker(T)$ and $\text{rng}(T)$ are always subspaces
✅ For matrices: $\ker(T_A) = \text{Nul}(A)$, $\text{rng}(T_A) = \text{Col}(A)$
✅ Linear independence: only trivial combination gives zero
✅ Basis = linearly independent spanning set
✅ Pivot columns of $A$ give basis for $\text{Col}(A)$