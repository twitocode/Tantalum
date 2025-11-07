---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---
## Motivation: Area in $\mathbb{R}^2$

Consider two vectors in $\mathbb{R}^2$:

$$\mathbf{v}_1 = \begin{bmatrix} a \\ c \end{bmatrix}, \quad \mathbf{v}_2 = \begin{bmatrix} b \\ d \end{bmatrix}$$

They form a parallelogram with **area** = $|ad - bc|$

```tikz
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[scale=1.5]
  % Grid
  \draw[gray!20] (0,0) grid (4,3);
  
  % Axes
  \draw[->, thick] (0,0) -- (4.2,0) node[right] {$x$};
  \draw[->, thick] (0,0) -- (0,3.2) node[above] {$y$};
  
  % Vectors
  \draw[->, red, ultra thick] (0,0) -- (3,1) node[midway, below] {$\mathbf{v}_1 = (a,c)$};
  \draw[->, blue, ultra thick] (0,0) -- (1,2) node[midway, left] {$\mathbf{v}_2 = (b,d)$};
  
  % Parallelogram
  \draw[dashed] (3,1) -- (4,3);
  \draw[dashed] (1,2) -- (4,3);
  
  % Area label
  \node at (2,1.5) {Area = $|ad-bc|$};
\end{tikzpicture}
\end{document}
```

### The Determinant (2×2 case)

For matrix $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$:

$$\det(A) = ad - bc$$

**Key observation**: $A$ is invertible ⟺ $\det(A) \neq 0$

Why? Recall the inverse formula:
$$A^{-1} = \frac{1}{ad-bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$

This exists ⟺ $ad - bc \neq 0$!

---

## Volume in $\mathbb{R}^3$

Three vectors in $\mathbb{R}^3$ form a **parallelepiped** (3D parallelogram).

```tikz
\usepackage{tikz}
\usetikzlibrary{3d}
\begin{document}
\begin{tikzpicture}[x={(1cm,0cm)}, y={(0.5cm,0.5cm)}, z={(0cm,1cm)}]
  % Base parallelogram
  \draw[blue, thick] (0,0,0) -- (3,0,0) -- (4,2,0) -- (1,2,0) -- cycle;
  
  % Vertical edges
  \draw[blue, thick] (0,0,0) -- (0,0,2);
  \draw[blue, thick, dashed] (3,0,0) -- (3,0,2);
  \draw[blue, thick, dashed] (4,2,0) -- (4,2,2);
  \draw[blue, thick] (1,2,0) -- (1,2,2);
  
  % Top parallelogram
  \draw[blue, thick, dashed] (0,0,2) -- (3,0,2) -- (4,2,2) -- (1,2,2) -- cycle;
  
  % Vectors
  \draw[->, red, ultra thick] (0,0,0) -- (3,0,0) node[below] {$\mathbf{v}_1$};
  \draw[->, green!60!black, ultra thick] (0,0,0) -- (1,2,0) node[left] {$\mathbf{v}_2$};
  \draw[->, purple, ultra thick] (0,0,0) -- (0,0,2) node[left] {$\mathbf{v}_3$};
  
  \node at (2,1,1) {Volume = $|\det(A)|$};
\end{tikzpicture}
\end{document}
```

**The absolute value of the determinant gives the volume!**

---

## Defining the Determinant

### Cofactors and Minors

For an $n \times n$ matrix $A = (a_{ij})$:

**Minor** $A_{ij}$: The $(n-1) \times (n-1)$ matrix obtained by deleting row $i$ and column $j$

**Cofactor** $C_{ij}$: 
$$C_{ij} = (-1)^{i+j} \det(A_{ij})$$

**Sign pattern** (checkerboard):
$$\begin{bmatrix} + & - & + & - & \cdots \\ - & + & - & + & \cdots \\ + & - & + & - & \cdots \\ \vdots & \vdots & \vdots & \vdots & \ddots \end{bmatrix}$$

### Recursive Definition

For an $n \times n$ matrix $A$, **expand along row $i$**:

$$\det(A) = a_{i1}C_{i1} + a_{i2}C_{i2} + \cdots + a_{in}C_{in}$$

Or **expand along column $j$**:

$$\det(A) = a_{1j}C_{1j} + a_{2j}C_{2j} + \cdots + a_{nj}C_{nj}$$

**Base case**: $\det([a]) = a$ for $1 \times 1$ matrix

---

## Computing Determinants

### Example: 3×3 Matrix

$$A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 0 & 6 \end{bmatrix}$$

Expand along **column 1** (has two zeros!):

$$\det(A) = 1 \cdot C_{11} + 0 \cdot C_{21} + 0 \cdot C_{31}$$

$$= 1 \cdot (+1) \det\begin{bmatrix} 4 & 5 \\ 0 & 6 \end{bmatrix} = 1 \cdot (24 - 0) = 24$$

**Shortcut for triangular matrices**: Product of diagonal entries!

$$\det\begin{bmatrix} a_{11} & * & * \\ 0 & a_{22} & * \\ 0 & 0 & a_{33} \end{bmatrix} = a_{11} \cdot a_{22} \cdot a_{33}$$

### Example: General 3×3

$$A = \begin{bmatrix} 1 & 2 & -1 \\ 3 & 0 & 1 \\ -2 & 1 & 4 \end{bmatrix}$$

Expand along **row 2** (has a zero):

$$\det(A) = 3 \cdot C_{21} + 0 \cdot C_{22} + 1 \cdot C_{23}$$

$$C_{21} = (-1)^{2+1}\det\begin{bmatrix} 2 & -1 \\ 1 & 4 \end{bmatrix} = -(8 - (-1)) = -9$$

$$C_{23} = (-1)^{2+3}\det\begin{bmatrix} 1 & 2 \\ -2 & 1 \end{bmatrix} = -(1 - (-4)) = -5$$

$$\det(A) = 3(-9) + 1(-5) = -27 - 5 = -32$$

---

## Properties of Determinants

Let $A$ and $B$ be $n \times n$ matrices.

1. $\det(I_n) = 1$

2. $\det(A^T) = \det(A)$

3. $\det(AB) = \det(A) \cdot \det(B)$

4. If $A$ is invertible, then $\det(A^{-1}) = \frac{1}{\det(A)}$

5. **Row operations**:
   - Swapping two rows: $\det$ changes sign
   - Multiplying a row by $k$: $\det$ is multiplied by $k$
   - Adding a multiple of one row to another: $\det$ unchanged

6. $\det(kA) = k^n \det(A)$ for $n \times n$ matrix

7. $A$ is invertible ⟺ $\det(A) \neq 0$

---

## Cramer's Rule

### Notation

For an $n \times n$ matrix $A$ and vector $\mathbf{b}$, define $A_i(\mathbf{b})$ as the matrix $A$ with **column $i$ replaced by $\mathbf{b}$**.

### The Rule

> **Cramer's Rule**: If $A$ is invertible, the solution to $A\mathbf{x} = \mathbf{b}$ is:
> $$x_i = \frac{\det(A_i(\mathbf{b}))}{\det(A)}$$

### Example

Solve:
$$\begin{bmatrix} 2 & 1 \\ 4 & -1 \end{bmatrix}\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 3 \\ 1 \end{bmatrix}$$

$$\det(A) = 2(-1) - 1(4) = -2 - 4 = -6$$

$$x = \frac{\det\begin{bmatrix} 3 & 1 \\ 1 & -1 \end{bmatrix}}{-6} = \frac{-3 - 1}{-6} = \frac{-4}{-6} = \frac{2}{3}$$

$$y = \frac{\det\begin{bmatrix} 2 & 3 \\ 4 & 1 \end{bmatrix}}{-6} = \frac{2 - 12}{-6} = \frac{-10}{-6} = \frac{5}{3}$$

**Note**: Cramer's rule is theoretically elegant but **computationally expensive** for large $n$!

---

## The Adjugate Matrix

### Definition

The **adjugate** (or classical adjoint) of $A$ is:

$$\text{adj}(A) = (C_{ij})^T$$

i.e., the transpose of the cofactor matrix.

### Formula for Inverse

> **Theorem**: If $A$ is invertible, then:
> $$A^{-1} = \frac{1}{\det(A)} \text{adj}(A)$$

### Example: 2×2 Case

$$A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$$

Cofactors:
$$C_{11} = d, \quad C_{12} = -c, \quad C_{21} = -b, \quad C_{22} = a$$

$$\text{adj}(A) = \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$

$$A^{-1} = \frac{1}{ad-bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$

This matches our earlier formula! ✓

---

## Area and Volume Transformations

### Theorem

Let $T: \mathbb{R}^n \to \mathbb{R}^n$ be a linear transformation with standard matrix $A$.

1. If $S \subseteq \mathbb{R}^2$ has area $\text{Area}(S)$, then:
   $$\text{Area}(T(S)) = |\det(A)| \cdot \text{Area}(S)$$

2. If $S \subseteq \mathbb{R}^3$ has volume $\text{Vol}(S)$, then:
   $$\text{Vol}(T(S)) = |\det(A)| \cdot \text{Vol}(S)$$

### Example: Ellipse Area

The unit circle has area $\pi$. What's the area of the ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$?

The ellipse is the image of the unit circle under:
$$T\begin{pmatrix} x \\ y \end{pmatrix} = \begin{bmatrix} a & 0 \\ 0 & b \end{bmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} ax \\ by \end{pmatrix}$$

$$\det\begin{bmatrix} a & 0 \\ 0 & b \end{bmatrix} = ab$$

**Area of ellipse** = $|ab| \cdot \pi = ab\pi$ (assuming $a, b > 0$)

```tikz
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[scale=1.5]
  % Unit circle
  \begin{scope}
    \draw[blue, thick] (0,0) circle (1);
    \draw[->, thick] (-1.3,0) -- (1.3,0) node[right] {$x$};
    \draw[->, thick] (0,-1.3) -- (0,1.3) node[above] {$y$};
    \node at (0,-1.6) {Unit circle: Area = $\pi$};
  \end{scope}
  
  % Arrow
  \draw[->, ultra thick] (1.5,0) -- (2.5,0) node[midway, above] {$T$};
  
  % Ellipse
  \begin{scope}[xshift=4.5cm]
    \draw[red, thick] (0,0) ellipse (1.5 and 0.75);
    \draw[->, thick] (-2,0) -- (2,0) node[right] {$x$};
    \draw[->, thick] (0,-1.3) -- (0,1.3) node[above] {$y$};
    \node at (0,-1.6) {Ellipse: Area = $ab\pi$};
    \node at (1.5,0.1) [above right] {$a$};
    \node at (0.1,0.75) [above left] {$b$};
  \end{scope}
\end{tikzpicture}
\end{document}
```

---

## Summary

| Concept | Key Idea |
|---------|----------|
| Determinant | Number associated with square matrix |
| Geometric | $|\det(A)|$ = volume scaling factor |
| Invertibility | $A$ invertible ⟺ $\det(A) \neq 0$ |
| Product | $\det(AB) = \det(A)\det(B)$ |
| Transpose | $\det(A^T) = \det(A)$ |
| Cramer's Rule | Solve $A\mathbf{x} = \mathbf{b}$ using determinants |
| Inverse | $A^{-1} = \frac{1}{\det(A)}\text{adj}(A)$ |
