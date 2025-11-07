---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---
# Lecture 1: Systems of Linear Equations

## What is a Linear Equation?

A linear equation in $n$ variables ($x_1, x_2, ..., x_n$) is an equation of the form: $a_1x_1 + a_2x_2 + ... + a_n x_n = b$

- $a_1, ..., a_n$ are the **coefficients** (numbers).
    
- $b$ is the **constant term** (a number).
    
- $x_1, ..., x_n$ are the **unknowns** or **variables**.
    

Equations with terms like $x_1^2$, $\sqrt{x_2}$, or $x_1x_2$ are **not** linear.

A **solution** is an ordered n-tuple $(s_1, s_2, ..., s_n)$ that makes the equation true when substituted.

## Systems of Linear Equations

A **system of linear equations** is a finite set of one or more linear equations. A **solution to the system** is an n-tuple that is simultaneously a solution to _every_ equation in the system.

### Geometric Interpretation (in $R^2$)

In 2D, a linear equation represents a line. A system of two equations represents two lines, which can:

1. **Intersect at one point:** One unique solution.
    
2. **Be parallel and distinct:** No solutions.
    
3. **Be coincident (the same line):** Infinitely many solutions.
    

```tikz
\begin{document}
\begin{scope}[shift={(0,0)}]
    \draw[->] (-2,0) -- (2,0) node[right] {$x_1$};
    \draw[->] (0,-2) -- (0,2) node[above] {$x_2$};
    \draw[blue, thick] (-1, 2) -- (2, -1) node[right] {$L_1$};
    \draw[red, thick] (-1, -1) -- (2, 1) node[right] {$L_2$};
    \fill (0.8, 0.4) circle (2pt);
    \node at (0, -2.5) {1. One Solution};
\end{scope}

\begin{scope}[shift={(5,0)}]
    \draw[->] (-2,0) -- (2,0) node[right] {$x_1$};
    \draw[->] (0,-2) -- (0,2) node[above] {$x_2$};
    \draw[blue, thick] (-1, 2) -- (2, 1);
    \draw[red, thick] (-1, 1) -- (2, 0);
    \node at (0, -2.5) {2. No Solution};
\end{scope}

\begin{scope}[shift={(10,0)}]
    \draw[->] (-2,0) -- (2,0) node[right] {$x_1$};
    \draw[->] (0,-2) -- (0,2) node[above] {$x_2$};
    \draw[blue, thick, line width=2pt] (-1, 1.5) -- (2, 0);
    \draw[red, thick, dashed, line width=1pt] (-1, 1.5) -- (2, 0);
    \node at (0, -2.5) {3. Infinite Solutions};
\end{scope}
\end{document}
```

## Matrix Representation

We can represent a linear system using matrices.

**System:** $a_{11}x_1 + ... + a_{1n}x_n = b_1$ $...$ $a_{m1}x_1 + ... + a_{mn}x_n = b_m$

**Coefficient Matrix:**

$$A = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{m1} & \cdots & a_{mn} \end{pmatrix} $$**Augmented Matrix:** $$(A|b) = \left( \begin{array}{ccc|c} a\_{11} & \cdots & a\_{1n} & b\_1 \\ \vdots & \ddots & \vdots & \vdots \\ a\_{m1} & \cdots & a\_{mn} & b\_m \end{array} \right)$$


```tikz
\begin{document}
	\begin{tikzpicture}
	% R^2 visualization
	\draw[->] (0,0) -- (3,0) node[right] {$x$};
	\draw[->] (0,0) -- (0,2.5) node[above] {$y$};
	\draw[->, thick, blue] (0,0) -- (2,1.5) node[midway, above left] {$\mathbf{v}$};
	\fill[blue] (2,1.5) circle (2pt);
	\node at (1.5,-1) {$\mathbb{R}^2$ (the plane)};
	\node[blue, right] at (2,1.5) {$\begin{bmatrix} 2 \\ 1.5 \end{bmatrix}$};
	
	% R^3 visualization
	\begin{scope}[xshift=6cm]
	\draw[->] (0,0) -- (2,0) node[right] {$x$};
	\draw[->] (0,0) -- (0,2) node[above] {$y$};
	\draw[->] (0,0) -- (-0.7,-0.7) node[below left] {$z$};
	\draw[->, thick, red] (0,0) -- (1.5,1.2) node[midway, above] {$\mathbf{u}$};
	\fill[red] (1.5,1.2) circle (2pt);
	\node at (0.5,-1.5) {$\mathbb{R}^3$ (3D space)};
	\end{scope}
	\end{tikzpicture}
\end{document}
```