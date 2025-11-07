---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---
## Vectors

### Definition

An $n \times 1$ matrix is called a **(column) vector**:

$$\mathbf{v} = \begin{bmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{bmatrix}$$

where $a_1, a_2, \ldots, a_n$ are real numbers.

### The Space $\mathbb{R}^n$

The set of all vectors with $n$ entries is called **$\mathbb{R}^n$** (read "$n$-space").

**Examples**:
- $\mathbb{R}^2$ - the plane (2D space)
- $\mathbb{R}^3$ - 3-dimensional space with coordinates $x, y, z$

---

## Vector Operations

### Vector Addition

Vectors in $\mathbb{R}^n$ can be added **component-wise**:

$$\begin{bmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{bmatrix} + \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{bmatrix} = \begin{bmatrix} a_1 + b_1 \\ a_2 + b_2 \\ \vdots \\ a_n + b_n \end{bmatrix}$$

**Example in $\mathbb{R}^2$**:
$$\begin{bmatrix} 1 \\ 2 \end{bmatrix} + \begin{bmatrix} 3 \\ 1 \end{bmatrix} = \begin{bmatrix} 4 \\ 3 \end{bmatrix}$$

```tikz
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[scale=0.8]
  % Grid
  \draw[gray!30] (-0.5,-0.5) grid (5.5,4.5);
  
  % Axes
  \draw[->, thick] (0,0) -- (5.5,0) node[right] {$x_1$};
  \draw[->, thick] (0,0) -- (0,4.5) node[above] {$x_2$};
  
  % Vectors
  \draw[->, blue, very thick] (0,0) -- (1,2) node[midway, left] {$\mathbf{u}$};
  \draw[->, red, very thick] (1,2) -- (4,3) node[midway, above right] {$\mathbf{v}$};
  \draw[->, green!60!black, very thick] (0,0) -- (4,3) node[midway, below right] {$\mathbf{u+v}$};
  
  % Parallelogram (dashed)
  \draw[dashed, gray] (0,0) -- (3,1);
  \draw[dashed, gray] (1,2) -- (4,3);
  \draw[dashed, gray] (3,1) -- (4,3);
\end{tikzpicture}
\end{document}
```

### Scalar Multiplication

We can multiply a vector by a **scalar** (real number) $\lambda$:

$$\lambda \begin{bmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{bmatrix} = \begin{bmatrix} \lambda a_1 \\ \lambda a_2 \\ \vdots \\ \lambda a_n \end{bmatrix}$$

**Example**:
$$2 \begin{bmatrix} 1 \\ 3 \end{bmatrix} = \begin{bmatrix} 2 \\ 6 \end{bmatrix}$$

```tikz
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}[scale=0.6]
  % Grid
  \draw[gray!30] (-0.5,-0.5) grid (3.5,7.5);
  
  % Axes
  \draw[->, thick] (0,0) -- (3.5,0) node[right] {$x_1$};
  \draw[->, thick] (0,0) -- (0,7.5) node[above] {$x_2$};
  
  % Vectors
  \draw[->, blue, very thick] (0,0) -- (1,3) node[midway, left] {$\mathbf{v}$};
  \draw[->, red, very thick] (0,0) -- (2,6) node[midway, right] {$2\mathbf{v}$};
  
  \node[blue] at (1.2, 3) {$(1,3)$};
  \node[red] at (2.3, 6) {$(2,6)$};
\end{tikzpicture}
\end{document}
```

---

## Linear Combinations

### Definition

A **linear combination** of vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_m \in \mathbb{R}^n$ is an expression of the form:

$$\lambda_1 \mathbf{v}_1 + \lambda_2 \mathbf{v}_2 + \cdots + \lambda_m \mathbf{v}_m$$

where $\lambda_1, \lambda_2, \ldots, \lambda_m$ are scalars.

### Example in $\mathbb{R}^2$

Let $\mathbf{v}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$ and $\mathbf{v}_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$

Then:
$$2\mathbf{v}_1 + 3\mathbf{v}_2 = 2\begin{bmatrix} 1 \\ 0 \end{bmatrix} + 3\begin{bmatrix} 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 2 \\ 3 \end{bmatrix}$$

**Note**: Any vector in $\mathbb{R}^2$ can be written as a linear combination of $\mathbf{v}_1$ and $\mathbf{v}_2$!

### Non-Example

Let $\mathbf{v}_1 = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$ and $\mathbf{v}_2 = \begin{bmatrix} 2 \\ 4 \end{bmatrix}$

Notice $\mathbf{v}_2 = 2\mathbf{v}_1$ (they're collinear).

These vectors **do not generate all of $\mathbb{R}^2$** using linear combinations - they only generate points on the line through the origin with slope 2.

---

## The Fundamental Question

> **Given** vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_m$ and $\mathbf{b}$ in $\mathbb{R}^n$:
> 
> **Can** we write $\mathbf{b}$ as a linear combination of $\mathbf{v}_1, \ldots, \mathbf{v}_m$?

In other words: Do there exist scalars $x_1, x_2, \ldots, x_m$ such that:

$$x_1 \mathbf{v}_1 + x_2 \mathbf{v}_2 + \cdots + x_m \mathbf{v}_m = \mathbf{b}$$

### Connection to Linear Systems

This question is **equivalent** to asking: Does the system $A\mathbf{x} = \mathbf{b}$ have a solution?

where $A = \begin{bmatrix} \mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_m \end{bmatrix}$

### How to Answer the Question

Form the **augmented matrix**:
$$\left[\begin{array}{cccc|c} \mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_m & \mathbf{b} \end{array}\right]$$

The system is **consistent** (has a solution) if and only if $\mathbf{b}$ can be written as a linear combination of $\mathbf{v}_1, \ldots, \mathbf{v}_m$.

---

## Span

### Definition

The **span** of vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_m$ is the set of **all linear combinations**:

$$\text{Span}\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_m\} = \left\{ \sum_{i=1}^m \lambda_i \mathbf{v}_i : \lambda_i \in \mathbb{R} \right\}$$

**In words**: The span is the set of all vectors you can "reach" using linear combinations.

### Examples

1. **Span of one vector**: 
   - $\text{Span}\left\{\begin{bmatrix} 1 \\ 2 \end{bmatrix}\right\}$ = all points on the line through origin with slope 2

2. **Span of two non-collinear vectors in $\mathbb{R}^2$**:
   - $\text{Span}\left\{\begin{bmatrix} 1 \\ 0 \end{bmatrix}, \begin{bmatrix} 0 \\ 1 \end{bmatrix}\right\} = \mathbb{R}^2$ (entire plane)

3. **Span of two collinear vectors**:
   - $\text{Span}\left\{\begin{bmatrix} 1 \\ 2 \end{bmatrix}, \begin{bmatrix} 2 \\ 4 \end{bmatrix}\right\}$ = just a line (not all of $\mathbb{R}^2$)

---

## Geometric Interpretation

```tikz
\usepackage{tikz}
\usetikzlibrary{patterns}
\begin{document}
\begin{tikzpicture}[scale=1.2]
  % Title
  \node at (0,4) {\textbf{Span in $\mathbb{R}^2$}};
  
  % Axes
  \draw[->, thick] (-2,0) -- (2,0) node[right] {$x$};
  \draw[->, thick] (0,-2) -- (0,3) node[above] {$y$};
  
  % One vector - line through origin
  \draw[blue, very thick, <->] (-1.5,-1.5) -- (1.5,1.5);
  \draw[->, red, ultra thick] (0,0) -- (1,1) node[right] {$\mathbf{v}_1$};
  \node[blue] at (-1.5,2) {Span$\{\mathbf{v}_1\}$ = a line};
  
  % Filled region suggestion
  \fill[green!10] (-2,-2) -- (2,-2) -- (2,3) -- (-2,3) -- cycle;
  \draw[->, red, ultra thick] (0,0) -- (1,0) node[below right] {$\mathbf{v}_1$};
  \draw[->, red, ultra thick] (0,0) -- (0,1.5) node[left] {$\mathbf{v}_2$};
  \node[green!50!black] at (1.5,2.5) {Span$\{\mathbf{v}_1,\mathbf{v}_2\}$ = plane};
\end{tikzpicture}
\end{document}
```

---

## Key Takeaways

- Vectors in $\mathbb{R}^n$ can be added and scaled
- Linear combinations create new vectors from old ones
- The span is the "space" generated by a set of vectors
- Asking "Is $\mathbf{b}$ in the span?" is the same as solving $A\mathbf{x} = \mathbf{b}$