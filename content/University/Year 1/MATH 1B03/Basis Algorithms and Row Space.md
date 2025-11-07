---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---
## Review: Linear Independence and Basis

**Linear independence:** $v_1, \ldots, v_n \in V$ are linearly independent if:
$$c_1v_1 + \cdots + c_nv_n = \mathbf{0} \implies c_1 = \cdots = c_n = 0$$

**Basis:** A set $B \subseteq V$ is a basis if:
1. $B$ is linearly independent
2. $B$ spans $V$

---

## Examples of Bases

### Example 1: $P_n$ (Polynomials of degree $\leq n$)

**Standard basis:** $\{1, x, x^2, \ldots, x^n\}$

These are linearly independent (as we proved) and span $P_n$ ✓

### Example 2: $P$ (All polynomials)

**Basis:** $\{1, x, x^2, x^3, \ldots\}$ (infinite!)

Any finite subset is linearly independent by Example 1 ✓

### Example 3: Non-standard basis for $\mathbb{R}^2$

$$B = \left\{\begin{pmatrix} 1 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ 0 \end{pmatrix}\right\}$$

**Verification:** Form matrix $A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$

$$\det(A) = (1)(0) - (1)(1) = -1 \neq 0$$

Since $A$ is invertible (by IMT):
- Columns are linearly independent ✓
- Columns span $\mathbb{R}^2$ ✓

---

## Spanning Set Theorem

**Theorem:** If $V$ is a vector space and $H = \text{span}\{v_1, \ldots, v_n\}$, then there exists a subset of $\{v_1, \ldots, v_n\}$ which is a basis for $H$.

### Algorithm for Finding Basis from Spanning Set

**Goal:** Start with spanning set $\{v_1, \ldots, v_n\}$, extract a basis.

**Step 1:** Look at $v_1$
- If $v_1 = \mathbf{0}$: discard
- Otherwise: keep

**Step 2:** Look at $v_2$ (assume $v_1 \neq \mathbf{0}$ wasn't discarded)
- If $v_2 = kv_1$ for some $k$: discard
- Otherwise: keep

**Step 3:** Look at $v_3$ (assume $v_1, v_2$ were kept)
- If $v_3 \in \text{span}\{v_1, v_2\}$: discard
- Otherwise: keep

**Step $i$:** Look at $v_i$ (assume $u_1, \ldots, u_{i-1}$ were kept)
- If $v_i \in \text{span}\{u_1, \ldots, u_{i-1}\}$: discard
- Otherwise: keep

**Result:** The kept vectors form a basis! ✓

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.2]
    % Original spanning set
    \node[draw, circle, fill=blue!20] (v1) at (0,3) {$v_1$};
    \node[draw, circle, fill=blue!20] (v2) at (1,3) {$v_2$};
    \node[draw, circle, fill=red!20] (v3) at (2,3) {$v_3$};
    \node[draw, circle, fill=blue!20] (v4) at (3,3) {$v_4$};
    \node[draw, circle, fill=red!20] (v5) at (4,3) {$v_5$};
    
    \node at (-1,3) {Spanning set:};
    
    % Arrow
    \draw[->, thick] (2,2.5) -- (2,1.5) node[midway, right] {Algorithm};
    
    % Resulting basis
    \node[draw, circle, fill=green!30] (u1) at (0.5,0.5) {$v_1$};
    \node[draw, circle, fill=green!30] (u2) at (2,0.5) {$v_2$};
    \node[draw, circle, fill=green!30] (u3) at (3.5,0.5) {$v_4$};
    
    \node at (-1,0.5) {Basis:};
    
    % Annotations
    \node[red] at (2,4) {Linearly dependent};
    \node[green!60!black] at (2,-0.5) {Linearly independent};
\end{tikzpicture}
\end{document}
```

---

## Matrix Approach: Column Space Basis

If $H = \text{Col}(A) = \text{span}\{v_1, \ldots, v_n\}$ where $A = \begin{pmatrix} v_1 & v_2 & \cdots & v_n \end{pmatrix}$:

**Algorithm:**
1. Compute $\text{rref}(A)$
2. Find columns with **pivots** in $\text{rref}(A)$
3. Take corresponding columns **from $A$**

These form a basis for $\text{Col}(A)$!

---

## Row Space

The **row space** of matrix $A$:
$$\text{Row}(A) = \text{span}\{\text{rows of } A\}$$

### Key Property

**Row operations don't change the row space!**

**Why?**
- Interchanging rows: obviously doesn't change span
- Multiplying a row by non-zero constant $k$: row $r_i$ is replaced by $kr_i$
  - Can recover: $(kr_i) - kr_j = r_i$ (multiply back by $1/k$)
  - Span unchanged!
- Adding multiple of one row to another: $r_i$ replaced by $r_i + kr_j$
  - Can recover: $(r_i + kr_j) - kr_j = r_i$
  - Span unchanged!

---

## Finding Basis for Row Space

**Algorithm:**
1. Compute $\text{rref}(A)$
2. Take the **non-zero rows** of $\text{rref}(A)$

These form a basis for $\text{Row}(A)$!

### Example

$$A = \begin{pmatrix} 1 & 3 & 5 \\ 2 & 4 & 6 \\ 3 & 5 & 7 \end{pmatrix} \xrightarrow{\text{rref}} \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 2 \\ 0 & 0 & 0 \end{pmatrix}$$

**Basis for $\text{Row}(A)$:**
$$\left\{\begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix}\right\}$$

**Basis for $\text{Col}(A)$:** First two columns of $A$
$$\left\{\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \begin{pmatrix} 3 \\ 4 \\ 5 \end{pmatrix}\right\}$$

**Observation:** 
$$\text{size of basis for Row}(A) = \text{size of basis for Col}(A) = 2$$

This is **not a coincidence**! This number is called the **rank**.

---

## Important Observation

For the transpose $A^T$:

$$A^T = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 4 & 5 \\ 5 & 6 & 7 \end{pmatrix}$$

The columns of $A^T$ are the rows of $A$!

$$\text{Col}(A^T) = \text{Row}(A)$$

To find basis for $\text{Row}(A)$:
1. Take $A^T$
2. Find basis for $\text{Col}(A^T)$ using pivot columns
3. These give basis for $\text{Row}(A)$

$$A^T \xrightarrow{\text{rref}} \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

Alternatively, use non-zero rows of $\text{rref}(A)$ directly!

---

## Relationship Between Spaces

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.3]
    % Matrix A
    \node at (0,3) {\Large $A_{m \times n}$};
    
    % Four fundamental subspaces
    \node[draw, rounded corners, fill=blue!20, minimum width=2.5cm, minimum height=1cm] (col) at (-3,1) {$\text{Col}(A) \subseteq \mathbb{R}^m$};
    \node[draw, rounded corners, fill=red!20, minimum width=2.5cm, minimum height=1cm] (row) at (3,1) {$\text{Row}(A) \subseteq \mathbb{R}^n$};
    \node[draw, rounded corners, fill=green!20, minimum width=2.5cm, minimum height=1cm] (nul) at (-3,-1.5) {$\text{Nul}(A) \subseteq \mathbb{R}^n$};
    \node[draw, rounded corners, fill=orange!20, minimum width=2.5cm, minimum height=1cm] (left) at (3,-1.5) {$\text{Nul}(A^T) \subseteq \mathbb{R}^m$};
    
    % Arrows and labels
    \draw[<->, thick] (col) -- (row) node[midway, above] {same rank};
    \draw[<->, thick] (nul) -- (left);
    
    \node at (0,-3) {All bases have consistent sizes!};
\end{tikzpicture}
\end{document}
```

---

## Key Takeaways

**Three ways to get a basis:**
1. **For $\text{Col}(A)$:** Pivot columns of $A$
2. **For $\text{Row}(A)$:** Non-zero rows of $\text{rref}(A)$
3. **For $\text{Nul}(A)$:** Solve $Ax = \mathbf{0}$, express in terms of free variables

**Important:** 
$$\dim(\text{Col}(A)) = \dim(\text{Row}(A)) = \text{number of pivots}$$

This will be formalized as the **rank** in the next lecture!

---

## Summary

✅ Extract basis from spanning set: discard linearly dependent vectors
✅ For $\text{Col}(A)$: use pivot columns from $A$
✅ For $\text{Row}(A)$: use non-zero rows from $\text{rref}(A)$
✅ Row operations preserve row space
✅ $\text{Row}(A) = \text{Col}(A^T)$
✅ Number of basis vectors is the same for row and column space!