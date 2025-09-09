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
$$ with $m*n = 3 * 4$ (3 rows and 4 columns)
We want to turn it into **row-echelon form** 

Sometimes there may be no solution. Ex
$$
\begin{bmatrix}
1 & -2 & 0 & -3 \\
0 & 5 & -2 & 10 \\
0 & 5 & -2 & 11 \\
\end{bmatrix}
$$
The bottom two columns somehow equal each other but somehow equal different numbers. That makes no sense.

# Elementary Row operations
1. Multiply a row through by a nonzero constant (row3 = 3row1 + row3).
2. Interchange two rows (swap).
3. Add a constant times one row to another (row3 = 1/2row3).


