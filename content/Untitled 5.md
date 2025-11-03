# Lec 22: Vector Spaces and Subspaces

## Vector Space Axiom Checks

* **Axiom 10:** Why is $1x = x$?
    * For our chosen scalar multiplication: $1x = (x) = x$. This holds for all $x \in \mathbb{R}$.
* **Axiom 8:** Check $(c+d)v = cv \oplus dv$ for $c, d \in \mathbb{R}$ and $v \in \mathbb{R}_{+}$.
    * LHS: $(c+d)v := v^{(c+d)}$
    * RHS: $cv \oplus dv := v^c \cdot v^d$
    * Since $v^{(c+d)} = v^c v^d$, the axiom holds.
* **To-Do:** Check axioms 7 and 9.

---

## Subspaces

### Definition: Subspace
If $V$ is a vector space and $W$ is a non-empty subset of $V$, we call $W$ a **subspace** of $V$ if $W$ is closed under addition and scalar multiplication.
* **Closure under +:** If $u, v \in W$, then $u+v \in W$.
* **Closure under scalar mult:** If $c \in \mathbb{R}$ and $v \in W$, then $cv \in W$.

### Example: Nullspace (Nul(A))
* Given an $m \times n$ matrix $A$, the set of solutions to $Ax=0$ is a subspace of $\mathbb{R}^n$.
* This subspace is called the **nullspace** of A, written $Nul(A)$.
* $Nul(A) = \{ x \in \mathbb{R}^n : Ax=0 \}$

#### Concrete Example: Finding Nul(A)
* **Goal:** Find all $x \in \mathbb{R}^6$ such that $Ax=0$.
* **Method:** Compute $rref(A)$.
* From $rref(A)$, we find that $x_4, x_5, x_6$ are free variables.
* **Equations from rref(A):**
    * $x_1 = -\frac{3}{2}x_4 + \frac{1}{2}x_5 - \frac{3}{2}x_6$
    * $x_2 = \frac{3}{4}x_4 - \frac{1}{4}x_5 - \frac{5}{4}x_6$
    * $x_3 = -x_5 - x_6$
* **Solution in Parametric Vector Form:**
    $$
    x = x_4 \begin{pmatrix} -3/2 \\ 3/4 \\ 0 \\ 1 \\ 0 \\ 0 \end{pmatrix} + x_5 \begin{pmatrix} 1/2 \\ -1/4 \\ -1 \\ 0 \\ 1 \\ 0 \end{pmatrix} + x_6 \begin{pmatrix} -3/2 \\ -5/4 \\ -1 \\ 0 \\ 0 \\ 1 \end{pmatrix}
    $$
   
* These three vectors span $Nul(A)$.
* These vectors are also linearly independent.

---

## The Span as a Subspace

* Suppose $v_1, ..., v_k$ are vectors in $\mathbb{R}^n$. The **span** of $v_1, ..., v_k$ is a subspace of $\mathbb{R}^n$.
* Recall: The span is the set of all linear combinations of $v_1, ..., v_k$.

### Definition: Columnspace (Col(A))
* If $v_1, ..., v_k$ are the columns of a matrix $A$, we call the span of these vectors the **columnspace** of A, written $Col(A)$.
* $A = \begin{pmatrix} | & & | \\ v_1 & ... & v_k \\ | & & | \end{pmatrix}$
* $Col(A) = \text{span}\{v_1, ..., v_k\}$

### Algorithm: Finding a Smallest Spanning Set for Col(A)
1.  Compute $rref(A)$.
2.  Pick the columns in the **original matrix A** that correspond to the pivot columns in $rref(A)$.
* This set of columns is also linearly independent.

---

## Examples of Subspaces in General Vector Spaces

* **Example 2: Continuous Functions**
* Let $W$ = set of all continuous functions such that $f(0) = 0$.
* $W$ is a subspace. We must check:
    1.  **Zero Vector:** The zero function is in $W$ (since $0(0) = 0$).
    2.  **Closure under +:** (Must be checked). ($0+0=0$)
    3.  **Closure under scalar mult:** (Must be checked).

---

## Linear Transformations Between Vector Spaces

### Definition
* Suppose that $V$ and $W$ are vector spaces.
* A function $T: V \to W$ is called a **linear transformation** from $V$ to $W$ if for all $u, v \in V$ and $c \in \mathbb{R}$:
    1.  $T(u+v) = T(u) + T(v)$
    2.  $T(cu) = cT(u)$

### The Kernel and the Range
* Suppose $T: V \to W$ is a linear transformation. We define:
    * **Kernel:** $ker(T) = \{v \in V : T(v) = 0\}$
    * **Range:** $rng(T) = \{T(v) : v \in V\}$

```tikz
\begin{document}
  \begin{tikzpicture}[domain=0:4]
    \draw[very thin,color=gray] (-0.1,-1.1) grid (3.9,3.9);
    \draw[->] (-0.2,0) -- (4.2,0) node[right] {$x$};
    \draw[->] (0,-1.2) -- (0,4.2) node[above] {$f(x)$};
    \draw[color=red]    plot (\x,\x)             node[right] {$f(x) =x$};
    \draw[color=blue]   plot (\x,{sin(\x r)})    node[right] {$f(x) = \sin x$};
    \draw[color=orange] plot (\x,{0.05*exp(\x)}) node[right] {$f(x) = \frac{1}{20} \mathrm e^x$};
  \end{tikzpicture}
\end{document}
```