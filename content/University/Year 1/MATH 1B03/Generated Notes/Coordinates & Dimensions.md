Ex : $P_{2}$ - polys of $degree \leq 2$
$B_{1} = {\{1, x, x^{2}}\}$ is a basis for $P_{2}$
$B_{2} = \{1, x + 1, x^{2} + x+ 1 \}$s a basis for $P_{2}$
- none of these vectors are in the spans of one another

What are the coordinates of $x^{2}$ with respect to $B_{1}$ and $B_{2}$?



# Linear Algebra Notes

## Coordinates and Isomorphisms

### Example: $P_2$
$P_2 = \text{Polynomials of degree} \le 2$
* $B = \{1, x, x^2\}$ is a basis for $P_2$.
* $C = \{1, 1+x, 1+x+x^2\}$ is also a basis.
* $\text{coord}_B(p(x))$ is the vector of coordinates for a polynomial $p(x)$ relative to basis $B$.

---

### Example: Coordinates of $F = x^2 + x + 1$
**1. With respect to basis $B = \{1, x, x^2\}$:**
$F = 1(1) + 1(x) + 1(x^2)$
$$
[F]_B = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}
$$

**2. With respect to basis $C = \{1, 1+x, 1+x+x^2\}$:**
We need to find $a, b, c$ such that:
$F = a(1) + b(1+x) + c(1+x+x^2)$
$x^2 + x + 1 = a + b + bx + c + cx + cx^2$
$x^2 + x + 1 = (a+b+c) + (b+c)x + (c)x^2$

Comparing coefficients:
* $c = 1$
* $b+c = 1 \implies b+1 = 1 \implies b = 0$
* $a+b+c = 1 \implies a+0+1 = 1 \implies a = 0$

So, $F = 0(1) + 0(1+x) + 1(1+x+x^2)$
$$
[F]_C = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}
$$

---

### Isomorphisms
* A basis of size $n$ for a vector space $V$ gives coordinates in $\mathbb{R}^n$.
* The map $T: V \to \mathbb{R}^n$ given by $T(v) = [v]_B$ is a **linear map**.
* This map is one-to-one and onto. Such maps are called **isomorphisms**.
* If $V$ has a basis with $n$ elements, then $V$ and $\mathbb{R}^n$ are **isomorphic** (they are structurally the same).

**Example:**
* $V = P_2$ with basis $B = \{1, x, x^2\}$. This is a basis of size 3.
* $T: P_2 \to \mathbb{R}^3$.
* So, $P_2$ and $\mathbb{R}^3$ are isomorphic.

**In general:**
* $P_n$ has a basis $\{1, x, x^2, \dots, x^n\}$, which has $n+1$ vectors.
* So, $P_n$ is isomorphic to $\mathbb{R}^{n+1}$.

---

### Why is $T_B$ Linear?
Let $V$ have a basis $B = \{v_1, \dots, v_n\}$. The map is $T(v) = [v]_B$.
Let $v, w \in V$.
* $v = c_1v_1 + \dots + c_nv_n \implies [v]_B = \begin{bmatrix} c_1 \\ \vdots \\ c_n \end{bmatrix}$
* $w = d_1v_1 + \dots + d_nv_n \implies [w]_B = \begin{bmatrix} d_1 \\ \vdots \\ d_n \end{bmatrix}$

Now consider $v+w$:
* $v+w = (c_1+d_1)v_1 + \dots + (c_n+d_n)v_n$
* $T(v+w) = [v+w]_B = \begin{bmatrix} c_1+d_1 \\ \vdots \\ c_n+d_n \end{bmatrix}$
* $T(v+w) = \begin{bmatrix} c_1 \\ \vdots \\ c_n \end{bmatrix} + \begin{bmatrix} d_1 \\ \vdots \\ d_n \end{bmatrix} = T(v) + T(w)$
(A full proof would also show $T(cv) = cT(v)$)

---
---

## Dimensions
* If a vector space $V$ has a finite spanning set, then $V$ has a finite basis.
* Any basis for $V$ is finite and has the **same size**.
* The **dimension** of $V$, or $dim(V)$, is the size of any basis for $V$.
* $P_n$ is finite-dimensional.
* $P$ (the space of all polynomials) does not have a finite spanning set, so $P$ is **infinite-dimensional**.

---

### Example: $dim(M_{m \times n})$
* $V = M_{m \times n}$ (the space of $m \times n$ matrices).
* The standard basis consists of matrices $E_{ij}$ (with a 1 in the $(i, j)$ position and 0s elsewhere).
* There are $m \times n$ such basis matrices.
* $dim(M_{m \times n}) = mn$
* Example: $dim(M_{2 \times 2}) = 2 \times 2 = 4$. The basis is:
    $E_{11} = \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}, E_{12} = \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, E_{21} = \begin{bmatrix} 0 & 0 \\ 1 & 0 \end{bmatrix}, E_{22} = \begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix}$

---

### Example: $dim(S_n)$
* $V = S_n$ (the space of all $n \times n$ **symmetric** real matrices, where $A^T = A$).

**Case $n=2$:**
* A symmetric $2 \times 2$ matrix looks like $A = \begin{bmatrix} a & b \\ b & c \end{bmatrix}$.
* We can write this as a linear combination:
    $A = a \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} + b \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} + c \begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix}$
* The basis for $S_2$ is $\{ \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 0 \\ 0 & 1 \end{bmatrix} \}$.
* $dim(S_2) = 3$.

**Case $n=3$:**
* A symmetric $3 \times 3$ matrix $A = \begin{bmatrix} a & b & c \\ b & d & e \\ c & e & f \end{bmatrix}$.
* We need 3 basis matrices for the diagonal entries ($a, d, f$):
    $\begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}$
* We need 3 basis matrices for the off-diagonal entries ($b, c, e$):
    $\begin{bmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 0 \end{bmatrix}, \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}$
* $dim(S_3) = 3 + 3 = 6$.

**General Case $n$:**
* We need one basis vector for each entry on the **diagonal**. There are **$n$** of these.
* We need one basis vector for each pair of entries **above the diagonal**. There are $\frac{n(n-1)}{2}$ of these.
* $dim(S_n) = (\text{diagonal entries}) + (\text{unique off-diagonal entries})$
$$
dim(S_n) = n + \frac{n(n-1)}{2}
$$
* Simplifying this expression:
$$
dim(S_n) = \frac{2n}{2} + \frac{n^2 - n}{2} = \frac{2n + n^2 - n}{2} = \frac{n^2 + n}{2}
$$
* Therefore:
$$
dim(S_n) = \frac{n(n+1)}{2}
$$