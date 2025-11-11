---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---
## Continuing $\mathbb{R}^+$ Example

Recall: $V = \mathbb{R}^+ = \{x \in \mathbb{R} : x > 0\}$ with $x + y = xy$ and $c \cdot x = x^c$.

### Verification of Remaining Axioms

**Axiom 10:** $1 \cdot x = x^1 = x$ for all $x \in \mathbb{R}^+$ ✓

**Axiom 8:** For $c, d \in \mathbb{R}$ and $v \in \mathbb{R}^+$:
$$(c + d) \cdot v = v^{c+d} = v^c \cdot v^d = (c \cdot v) + (d \cdot v)$$ ✓

*Exercise:* Check axioms 7 and 9!

---

## Finding the Nullspace Concretely

**Problem:** Given matrix $A$, find $\text{Nul}(A) = \{x \in \mathbb{R}^n : Ax = \mathbf{0}\}$

### Example

$$A = \begin{pmatrix} 1 & 3 & 5 & 0 \\ 0 & 1 & 4 & -2 \end{pmatrix}$$

We want all $x \in \mathbb{R}^4$ such that $Ax = \mathbf{0}$.

**Step 1:** Identify free variables.
- $x_1$ and $x_2$ are pivot variables (leading 1's in each row)
- $x_3, x_4$ are **free variables**

**Step 2:** Express pivot variables in terms of free variables.

From the second row: $x_2 + 4x_3 - 2x_4 = 0$
$$x_2 = -4x_3 + 2x_4$$

From the first row: $x_1 + 3x_2 + 5x_3 = 0$
$$x_1 = -3x_2 - 5x_3 = -3(-4x_3 + 2x_4) - 5x_3 = 12x_3 - 6x_4 - 5x_3 = 7x_3 - 6x_4$$

**Step 3:** Write general solution.
$$x = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} = \begin{pmatrix} 7x_3 - 6x_4 \\ -4x_3 + 2x_4 \\ x_3 \\ x_4 \end{pmatrix} = x_3\begin{pmatrix} 7 \\ -4 \\ 1 \\ 0 \end{pmatrix} + x_4\begin{pmatrix} -6 \\ 2 \\ 0 \\ 1 \end{pmatrix}$$

**Conclusion:**
$$\text{Nul}(A) = \text{span}\left\{\begin{pmatrix} 7 \\ -4 \\ 1 \\ 0 \end{pmatrix}, \begin{pmatrix} -6 \\ 2 \\ 0 \\ 1 \end{pmatrix}\right\}$$

These vectors span $\text{Nul}(A)$ and are **linearly independent**!

---

## Column Space and Bases

For matrix $A$ with columns $v_1, \ldots, v_n$:
$$\text{Col}(A) = \text{span}\{v_1, \ldots, v_n\}$$

**Question:** How do we find a **smallest spanning set** (basis) for $\text{Col}(A)$?

### Algorithm for Finding Basis of $\text{Col}(A)$

1. Compute $\text{rref}(A)$
2. Identify columns with **pivots** in $\text{rref}(A)$
3. Take the corresponding columns **from the original matrix $A$**

> ⚠️ **Important:** Use columns from $A$, NOT from $\text{rref}(A)$!

These columns form a **linearly independent** spanning set = **basis**.

### Example

$$A = \begin{pmatrix} 1 & 3 & 5 & 0 \\ 0 & 1 & 4 & -2 \\ 2 & 5 & 9 & 1 \end{pmatrix} \quad \xrightarrow{\text{rref}} \quad \begin{pmatrix} 1 & 0 & -7 & 6 \\ 0 & 1 & 4 & -2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

Pivots in columns 1 and 2.

**Basis for $\text{Col}(A)$:**
$$\left\{\begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix}, \begin{pmatrix} 3 \\ 1 \\ 5 \end{pmatrix}\right\}$$

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
    % 3D axes
    \draw[->] (0,0,0) -- (3,0,0) node[right] {$x$};
    \draw[->] (0,0,0) -- (0,3,0) node[above] {$y$};
    \draw[->] (0,0,0) -- (0,0,3) node[below left] {$z$};
    
    % Plane representing Col(A)
    \fill[blue!20, opacity=0.6] (0,0,0) -- (2,0,1) -- (2.5,1.5,2) -- (0.5,1.5,1) -- cycle;
    
    % Basis vectors
    \draw[->, thick, red] (0,0,0) -- (1,0,0.5) node[right] {$v_1$};
    \draw[->, thick, red] (0,0,0) -- (0.5,1,0.5) node[above] {$v_2$};
    
    \node[blue] at (1.5,0.5,1.5) {$\text{Col}(A)$};
\end{tikzpicture}
\end{document}
```

---

## Subspaces in General Vector Spaces

### Example 1: Polynomial Spaces
$$P_0 \subseteq P_1 \subseteq P_2 \subseteq \cdots \subseteq P \subseteq \text{continuous functions on } [0,1]$$

All of these are subspaces!

### Example 2: Functions with $f(0) = 0$

Let $W = \{f : [0,1] \to \mathbb{R} \text{ continuous} : f(0) = 0\}$

**Is $W$ a subspace of continuous functions?**

1. **Contains zero function:** $\mathbf{0}(x) = 0$ for all $x$, so $\mathbf{0}(0) = 0$ ✓

2. **Closed under addition:** 
   If $f, g \in W$, then $f(0) = 0$ and $g(0) = 0$.
   $$(f + g)(0) = f(0) + g(0) = 0 + 0 = 0$$ ✓

3. **Closed under scalar multiplication:**
   If $f \in W$ and $c \in \mathbb{R}$:
   $$(cf)(0) = c \cdot f(0) = c \cdot 0 = 0$$ ✓

**Conclusion:** $W$ is a subspace! ✓

---

## Linear Transformations

**Definition:** Let $V$ and $W$ be vector spaces. A function $T: V \to W$ is a **linear transformation** if for all $u, v \in V$ and $c \in \mathbb{R}$:

1. $T(u + v) = T(u) + T(v)$ (preserves addition)
2. $T(cu) = cT(u)$ (preserves scalar multiplication)

### Examples

**Example 1: Matrix transformation**
For $A$ an $m \times n$ matrix, define $T_A: \mathbb{R}^n \to \mathbb{R}^m$ by $T_A(x) = Ax$.

This is a linear transformation! In fact, **every** linear transformation from $\mathbb{R}^n$ to $\mathbb{R}^m$ is of this form.

**Example 2: Differentiation**
Let $V$ = vector space of polynomials. Define $D: V \to V$ by $D(p) = p'$ (derivative).

**Check linearity:**
- $D(p + q) = (p + q)' = p' + q' = D(p) + D(q)$ ✓
- $D(cp) = (cp)' = cp' = cD(p)$ ✓

So differentiation is a linear transformation!

---

## Kernel and Range

For linear transformation $T: V \to W$:

**Kernel (Nullspace):**
$$\ker(T) = \{v \in V : T(v) = \mathbf{0}\}$$

**Range (Image):**
$$\text{rng}(T) = \{T(v) : v \in V\} = \{w \in W : w = T(v) \text{ for some } v \in V\}$$

### Examples

**For matrix $T_A$:**
- $\ker(T_A) = \text{Nul}(A)$
- $\text{rng}(T_A) = \text{Col}(A)$

**For differentiation $D$:**
- $\ker(D) = \{p : D(p) = 0\} = $ all constant polynomials
  - These are solutions to the differential equation $p' = 0$!
- $\text{rng}(D) = V$ (all polynomials)
  - For any polynomial $p(x) = a_0 + a_1x + \cdots + a_nx^n$, we can find $q$ with $D(q) = p$:
  $$q(x) = a_0x + \frac{a_1}{2}x^2 + \cdots + \frac{a_n}{n+1}x^{n+1}$$

---

## Summary

✅ To find $\text{Nul}(A)$: solve $Ax = \mathbf{0}$, express in terms of free variables
✅ To find basis for $\text{Col}(A)$: use pivot columns from original matrix $A$
✅ Linear transformations preserve addition and scalar multiplication
✅ Differentiation is a linear transformation
✅ Kernel = nullspace, Range = column space (for matrices)