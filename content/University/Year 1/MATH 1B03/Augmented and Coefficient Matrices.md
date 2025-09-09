---
CreatedAt: 2025-09-09
tags:
  - lecture
class: MATH 1B03
---
The linear system
$$
\begin{equation}
\begin{cases}
2y = -4 \\
2x + 6y + 2z = 4 \\
3x + z = 7
\end{cases}
\end{equation}
$$
becomes the augmented matrix
$$
\begin{bmatrix}
0 & 1 & 0 & -4 \\
2 & 6 & 2 & 4 \\
3 & 0 & 1 & 7
\end{bmatrix}
$$
The coefficient matrix is the augmented matrix without the last column
$$
\begin{bmatrix}
0 & 1 & 0  \\
2 & 6 & 2  \\
3 & 0 & 1 
\end{bmatrix}
$$
with $m*n = 3 * 4$ (3 rows and 4 columns)
We want to turn it into **row-echelon form** 


# Elementary Row operations
1. Multiply a row through by a nonzero constant (row3 = 3row1 + row3).
2. Interchange two rows (swap).
3. Add a constant times one row to another (row3 = 1/2row3).


# Matrix Forms
The $\color{magenta} 1$'s are known as pivots - the left-most non zero number. every number in the same column as the pivot belongs to the pivot column
## Row Echelon

$$
\begin{bmatrix}
\color{magenta} 1 & 4 & -1 & 1 \\
\color{lime}0 & \color{magenta} 1 & 10 & \frac{1}{2} \\
\color{lime}0 &\color{lime} 0 & \color{magenta} 1 & 3
\end{bmatrix}
$$
- In this form, the numbers are not fully reduced. 
- it is debated on whether the pivots must be 1. Machines prefer to have it as a non zero to remove rounding errors. Plus you can still solve the problem without reducing
- 0's only have to be below the pivot
$$
\begin{bmatrix}
0 & 1 & * & * & * & * & * & * & * & * \\
0 & 0 & 0 & 1 & * & * & * & * & * & * \\
0 & 0 & 0 & 0 & 1 & * & * & * & * & * \\
0 & 0 & 0 & 0 & 0 & 1 & * & * & * & * \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & *
\end{bmatrix}
$$
this is also in row echelon form
## Reduced Row Echelon
$$
\begin{bmatrix}
\color{magenta} 1 & \color{cyan} \color{cyan}0 & \color{cyan}0 & 1 \\
\color{lime}0 & \color{magenta} 1 &\color{cyan} 0 & 2 \\
\color{lime}0 &\color{lime} 0 & \color{magenta} 1 & 3
\end{bmatrix}
$$
- zeroes are above and below the pivot
- **The pivot points MUST BE 1**

$$
\begin{bmatrix}
0 & 1 & * & * & * & * & * & * & * & * \\
0 & 0 & 0 & 1 & * & * & * & * & * & * \\
0 & 0 & 0 & 0 & 1 & * & * & * & * & * \\
0 & 0 & 0 & 0 & 0 & 1 & * & * & * & * \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & *
\end{bmatrix}
$$

# Infinite many solutions
take this example in reduced row echelon form

$$
\begin{bmatrix}
1 & 0 & 2 & 3 \\
0 & 1 & 3 & 4
\end{bmatrix}
$$

when we do addition with normal equations, it becomes
$$x + 2z = 3$$
$$y + 3z = 4$$
the issue here is that z still appears in both rows in reduced row echelon form, meaning that it is a *free* variable (we can make z anything) so:
$$z = t$$ $t$ is known as a parameter (think of parametric equations, or a function parameter)
now we can say $$y = 4-3z$$ or $$y = 4-3t$$
vice versa for x

> [!NOTE] Title
> Pivot columns contain leading 1's
> Free columns don't contain leading 1's

### In bigger augmented matrices
$$

\begin{bmatrix} \\

\color{magenta} 1 & \color{lime}  1 & 0 & \color{lime}-4 & 2 \\
0 & \color{lime}0 & \color{magenta}  1 & \color{lime}4  & -\frac{1}{2}\\
0 & \color{lime}0 & 0 & \color{lime}0 & 0
\end{bmatrix}
$$
no pivots in the third row, all zeroes
the second and fourth columns will be free columns in the general solution. This has infinitely many solutions because there zeros at the bottom (no pivots underneath)

### Finding a free variable early on
in this example
$$
\begin{bmatrix}
1 & -\frac{1}{2} & \frac{1}{2} & 1  \\
0  & \color{magenta}1 & \color{cyan}3 & 4
\end{bmatrix}
$$
1 is a pivot point while the column that 3 is in has no pivot. there is also no pivot point underneath. that means that there must be a free variable

# One solution
in this example, there are no free variables unlike the last example
$$
\begin{bmatrix}
\color{magenta} 1 & 2 & -3 & 1 \\
0 & \color{magenta}1 & 0 & -1 \\
0 & 0 &\color{magenta} 1 & 2
\end{bmatrix}
$$
so there must be 1 solution which is $x = 9$, $y = -1$ and $z = 2$

# No solution
Sometimes there may be no solution. Ex
$$
\begin{bmatrix}
1 & -2 & 0 & -3 \\
0 & 5 & -2 & 10 \\
0 & 5 & -2 & 11 \\
\end{bmatrix}
$$
The bottom two columns somehow equal each other but somehow equal different numbers. That makes no sense.
It could also happen when an equation cannot be solved

$$
\begin{bmatrix}
1 & -2 & 0 & -3 \\
0 & 5 & -2 & 10 \\
0 & 0 & 0 & 1 \\
\end{bmatrix}
$$
0 = 1 cannot be solved



> [!NOTE]
> # The entire point
> Theorem: every matrix can be reduced to a **unique** matrix reduced row echelon form. This does not apply to row echelon form


