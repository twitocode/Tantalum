---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---
## Linear Equations

### Definition
A **linear equation** in $n$ unknowns (or variables) has the form:

$$a_1x_1 + a_2x_2 + \cdots + a_nx_n = b$$

where:
- $x_i$ are the **unknowns** (variables)
- $a_i$ are **coefficients** (numbers)
- $b$ is a **constant** (number)

### Solution to a Linear Equation
A **solution** is an ordered $n$-tuple $(s_1, s_2, \ldots, s_n)$ such that when we substitute $x_1 = s_1, x_2 = s_2, \ldots, x_n = s_n$ into the equation, the left-hand side equals the right-hand side.

### Example
For the equation $2x_1 + 3x_2 = 4$:
- $(5, -2)$ is a solution because $2(5) + 3(-2) = 10 - 6 = 4$ ✓
- $(2, 0)$ is also a solution because $2(2) + 3(0) = 4$ ✓

**Geometric interpretation**: Any point that lies on the line $2x_1 + 3x_2 = 4$ is a solution.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
  \begin{axis}[
    axis lines=middle,
    xlabel={$x_1$},
    ylabel={$x_2$},
    xmin=-1, xmax=6,
    ymin=-3, ymax=3,
    grid=both,
    width=10cm,
    height=8cm
  ]
    \addplot[blue, thick, domain=-1:6] {(4-2*x)/3};
    \addplot[only marks, mark=*, red] coordinates {(5,-2) (2,0)};
    \node at (axis cs:5,-2) [anchor=west] {$(5,-2)$};
    \node at (axis cs:2,0) [anchor=south] {$(2,0)$};
  \end{axis}
\end{tikzpicture}
\end{document}
```

---

## Systems of Linear Equations

### Definition
A **system of linear equations** is a finite set of linear equations:

$$\begin{align}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n &= b_1 \\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n &= b_2 \\
&\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n &= b_m
\end{align}$$

A **solution** to the system is an ordered $n$-tuple that satisfies **all** equations simultaneously.

### Examples of Different Cases

**Example 1**: System with a unique solution
$$\begin{align}
2x_1 + 3x_2 &= 4 \\
x_1 + 3x_2 &= 2
\end{align}$$
Solution: $(2, 0)$ is the only solution.

**Example 2**: System with no solutions (inconsistent)
$$\begin{align}
2x_1 + 3x_2 &= 4 \\
2x_1 + 3x_2 &= 5
\end{align}$$
These are parallel lines that don't intersect → **no solution**.

**Example 3**: System with infinitely many solutions
$$\begin{align}
2x_1 + 3x_2 &= 4 \\
4x_1 + 6x_2 &= 8
\end{align}$$
These equations represent the same line → **infinitely many solutions**.

---

## Augmented Matrices

To work with systems more efficiently, we use matrix notation.

### Coefficient Matrix and Augmented Matrix

For the system:
$$\begin{align}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n &= b_1 \\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n &= b_2 \\
&\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n &= b_m
\end{align}$$

The **augmented matrix** is:
$$\left[\begin{array}{cccc|c}
a_{11} & a_{12} & \cdots & a_{1n} & b_1 \\
a_{21} & a_{22} & \cdots & a_{2n} & b_2 \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn} & b_m
\end{array}\right]$$

The **coefficient matrix** (without the rightmost column):
$$\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}$$

This matrix has:
- $m$ **rows**
- $n$ **columns**
- Size: $m \times n$ (read "$m$ by $n$")

---

## Key Concepts
- Linear equations form straight lines (in 2D), planes (in 3D), or hyperplanes (in higher dimensions)
- Systems can have: **one solution**, **no solution**, or **infinitely many solutions**
- Matrix notation provides a compact way to represent systems
- The augmented matrix includes both coefficients and constants