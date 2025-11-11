---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---
## Review: Groups (Without Scalar Multiplication)

Before discussing vector spaces, let's understand the structure formed by just addition.

### Example: $\{1, 2, 3, 4, \ldots\}$ with $+$
- Axioms 1, 2, 3 satisfied ✓
- **Axiom 4 fails**: No zero element! There's no $x$ in this set where $x + 0 = x$

### Example: $\{0, 1, 2, 3, \ldots\}$ with $+$
- Axioms 1-4 satisfied ✓
- **Axiom 5 fails**: No negative elements! For $x > 0$, we can't find $-x$ in the set

### Example: $\mathbb{Z}$ (integers) with $+$
- **All axioms 1-5 satisfied** ✓
- This is called a **group**

---

## Unusual Vector Space: $\mathbb{R}^+$

Let $V = \mathbb{R}^+ = \{r \in \mathbb{R} : r > 0\}$ (positive real numbers)

**Define unusual operations:**
- Addition: $x + y := xy$ (multiply the numbers!)
- Scalar multiplication: $c \cdot x := x^c$ (raise to power!)

### Verifying the Axioms

**Axiom 4 (Zero element):** What is $\mathbf{0}$?
- We need $x + \mathbf{0} = x$ for all $x$
- Under our operation: $x \cdot \mathbf{0} = x$
- Therefore: $\mathbf{0} = 1$ ✓

**Axiom 5 (Inverse):** What is $-x$?
- We need $x + (-x) = \mathbf{0} = 1$
- Under our operation: $x \cdot (-x) = 1$
- Therefore: $-x = \frac{1}{x}$ ✓

**Axiom 6 (Closure under scalar mult):**
For $c \in \mathbb{R}$ and $x \in \mathbb{R}^+$: $c \cdot x = x^c > 0$ ✓

**Axiom 10 (Scalar identity):**
$$1 \cdot x = x^1 = x$$ ✓

**Axiom 8 (Distributivity of scalars):**
For $c, d \in \mathbb{R}$ and $v \in \mathbb{R}^+$:
$$(c + d) \cdot v = v^{c+d} = v^c \cdot v^d = (c \cdot v) + (d \cdot v)$$ ✓

*Exercise:* Check axioms 7 and 9!

> **Lesson:** Vector spaces can look very different from $\mathbb{R}^n$! The operations don't have to be "usual" addition/multiplication.

---

## Subspaces

**Definition:** $W \subseteq V$ is a **subspace** if:
1. $W$ is non-empty
2. Closed under $+$: $u, v \in W \implies u + v \in W$
3. Closed under scalar multiplication: $c \in \mathbb{R}, v \in W \implies cv \in W$

**Important Fact:** If $W$ is a subspace of vector space $V$, then $W$ is itself a vector space!

---

## Example 1: Polynomial Functions

Let $P$ = all polynomial functions on $[0, 1]$ with usual $+$ and scalar multiplication.

$P$ is a subset of the vector space of continuous functions on $[0, 1]$. Since polynomials are continuous, we check if $P$ is a subspace:

**Closed under addition:**
$$p(x) = a_0 + a_1x + \cdots + a_nx^n$$
$$q(x) = b_0 + b_1x + \cdots + b_mx^m$$
$$(p + q)(x) = (a_0 + b_0) + (a_1 + b_1)x + \cdots$$

This is still a polynomial! ✓

**Closed under scalar multiplication:**
$$(c \cdot p)(x) = c(a_0 + a_1x + \cdots + a_nx^n) = ca_0 + ca_1x + \cdots + ca_nx^n$$

Still a polynomial! ✓

**Conclusion:** $P$ is a subspace of continuous functions, so $P$ is a vector space.

---

## Example 2: Polynomials of Degree $\leq n$

Let $P_n$ = all polynomials of degree $\leq n$ on $[0, 1]$.

$P_n \subseteq P$ and is closed under $+$ and scalar multiplication.

**Therefore:** $P_n$ is a subspace of $P$, and hence a vector space.

**Hierarchy:**
$$P_0 \subseteq P_1 \subseteq P_2 \subseteq \cdots \subseteq P = \bigcup_{n=0}^{\infty} P_n$$

```tikz
\begin{document}
\begin{tikzpicture}
    % Nested rectangles for polynomial spaces
    \draw[blue, thick, fill=blue!5] (0,0) rectangle (8,5);
    \node[blue] at (7.5,4.7) {$P$};
    
    \draw[red, thick, fill=red!5] (0.5,0.5) rectangle (7,4);
    \node[red] at (6.7,3.7) {$P_3$};
    
    \draw[green!60!black, thick, fill=green!5] (1,1) rectangle (6,3);
    \node[green!60!black] at (5.7,2.7) {$P_2$};
    
    \draw[orange, thick, fill=orange!5] (1.5,1.5) rectangle (5,2);
    \node[orange] at (4.7,1.8) {$P_1$};
    
    \node at (4, 0.3) {Constant functions};
    \node at (4, 1.2) {Linear functions};
    \node at (4, 2.4) {Quadratic functions};
    \node at (4, 3.4) {Cubic functions};
\end{tikzpicture}
\end{document}
```

---

## Example 3: Nullspace of a Matrix

For $m \times n$ matrix $A$:
$$\text{Nul}(A) = \{x \in \mathbb{R}^n : Ax = \mathbf{0}\}$$

**Claim:** $\text{Nul}(A)$ is a subspace of $\mathbb{R}^n$.

**Proof:**
1. **Non-empty:** $\mathbf{0} \in \text{Nul}(A)$ since $A\mathbf{0} = \mathbf{0}$ ✓

2. **Closed under addition:** If $x, y \in \text{Nul}(A)$, then:
   $$A(x + y) = Ax + Ay = \mathbf{0} + \mathbf{0} = \mathbf{0}$$
   So $x + y \in \text{Nul}(A)$ ✓

3. **Closed under scalar multiplication:** If $x \in \text{Nul}(A)$ and $c \in \mathbb{R}$:
   $$A(cx) = c(Ax) = c\mathbf{0} = \mathbf{0}$$
   So $cx \in \text{Nul}(A)$ ✓

---

## Example 4: Span is a Subspace

**Claim:** If $v_1, \ldots, v_k \in \mathbb{R}^n$, then $\text{span}\{v_1, \ldots, v_k\}$ is a subspace of $\mathbb{R}^n$.

**Proof:**
1. **Non-empty:** $\mathbf{0} = 0v_1 + \cdots + 0v_k \in \text{span}\{v_1, \ldots, v_k\}$ ✓

2. **Closed under addition:** 
   If $u = c_1v_1 + \cdots + c_kv_k$ and $w = d_1v_1 + \cdots + d_kv_k$, then:
   $$u + w = (c_1 + d_1)v_1 + \cdots + (c_k + d_k)v_k \in \text{span}\{v_1, \ldots, v_k\}$$ ✓

3. **Closed under scalar multiplication:**
   If $u = c_1v_1 + \cdots + c_kv_k$ and $\alpha \in \mathbb{R}$:
   $$\alpha u = (\alpha c_1)v_1 + \cdots + (\alpha c_k)v_k \in \text{span}\{v_1, \ldots, v_k\}$$ ✓

---

## Column Space

**Recall:** If $A$ is $m \times n$ with columns $v_1, \ldots, v_n$, then:
$$\text{Col}(A) = \text{span}\{v_1, \ldots, v_n\}$$

By the previous claim, **$\text{Col}(A)$ is a subspace of $\mathbb{R}^m$**.

---

## Summary

✅ Groups = sets with just addition (axioms 1-5)
✅ Vector spaces can have unusual operations (like $\mathbb{R}^+$)
✅ Subspaces are closed under $+$ and scalar multiplication
✅ Important subspaces: nullspace, span, column space
✅ Polynomial spaces form nested subspaces