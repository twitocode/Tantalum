---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---
## Elementary Row Operations

To solve linear systems, we perform operations that don't change the solution set.

### Three Elementary Row Operations

1. **Interchange two rows** (swap rows)
2. **Multiply a row by a non-zero constant**
3. **Add a constant multiple of one row to another**

> [!NOTE]
> **Key Fact**: These operations preserve the solution set of the system!

---

## Echelon Forms

### Leading Entry
In a non-zero row, the **leading entry** is the leftmost non-zero entry.

### Row Echelon Form (REF)

A matrix is in **row echelon form** if:

1. All zero rows are at the bottom
2. In consecutive non-zero rows, the leading entry of the upper row is **to the left** of the leading entry in the lower row
3. (Optional in some texts) All leading entries are 1

**Example**:
$$\begin{bmatrix}
\boxed{1} & 2 & 3 & 4 \\
0 & \boxed{2} & 5 & 6 \\
0 & 0 & 0 & \boxed{1} \\
0 & 0 & 0 & 0
\end{bmatrix}$$

### Reduced Row Echelon Form (RREF)

A matrix is in **reduced row echelon form** if it's in REF and additionally:

3. All leading entries are **1** (called **leading 1's**)
4. Each column containing a leading 1 has **zeros elsewhere**

**Example**:
$$\begin{bmatrix}
\boxed{1} & 0 & 3 & 0 \\
0 & \boxed{1} & 5 & 0 \\
0 & 0 & 0 & \boxed{1} \\
0 & 0 & 0 & 0
\end{bmatrix}$$

---

## Gaussian Elimination Algorithm

### Forward Phase (to Row Echelon Form)

1. Find the leftmost non-zero column
2. Interchange rows to get a non-zero entry at the top
3. If that entry is $a \neq 1$, divide the row by $a$ to make it 1
4. Add multiples of the first row to rows below to make all entries below the leading 1 equal to zero
5. Ignore the top row and repeat with remaining rows

### Backward Phase (to Reduced Row Echelon Form)

6. Start with the rightmost leading 1
7. Working left, add multiples of each row to rows **above** to make all entries above leading 1's equal to zero

This complete process is called **Gauss-Jordan elimination**.

---

## Solving Systems by Row Reduction

### Solution Procedure

1. Form the augmented matrix
2. Row reduce to RREF
3. Interpret the result:

### Case Analysis

**Case 1**: Leading 1 in the rightmost column
- System is **inconsistent** (no solution)
- Example RREF: 
$$\left[\begin{array}{ccc|c}
1 & 0 & 2 & 0 \\
0 & 1 & 3 & 0 \\
0 & 0 & 0 & \boxed{1}
\end{array}\right]$$
Last row says $0 = 1$ → impossible!

**Case 2**: No leading 1 in rightmost column

Columns with leading 1's → **pivot columns** → **basic variables**

Columns without leading 1's → **free variables**

- **No free variables**: Unique solution
- **Has free variables**: Infinitely many solutions

### Example with Free Variables

RREF:
$$\left[\begin{array}{cccc|c}
1 & 0 & 3 & 0 & 4 \\
0 & 1 & 5 & 0 & -2 \\
0 & 0 & 0 & 1 & 7
\end{array}\right]$$

Variables: $x_1, x_2, x_3, x_4$
- Pivot columns: 1, 2, 4 → Basic variables: $x_1, x_2, x_4$
- Free variable: $x_3$ (let $x_3 = t$)

**General solution**:
$$\begin{align}
x_1 &= 4 - 3t \\
x_2 &= -2 - 5t \\
x_3 &= t \\
x_4 &= 7
\end{align}$$

where $t \in \mathbb{R}$ is arbitrary.

---

## Visual Summary

```tikz
\usepackage{tikz}
\usetikzlibrary{shapes,arrows,positioning}
\begin{document}
\begin{tikzpicture}[
  box/.style={rectangle, draw, minimum width=3cm, minimum height=1cm, text centered},
  arrow/.style={->, thick}
]
  
  \node[box] (system) {System of Equations};
  \node[box, below=1cm of system] (aug) {Augmented Matrix};
  \node[box, below=1cm of aug] (ref) {Row Echelon Form};
  \node[box, below=1cm of ref] (rref) {Reduced REF};
  \node[box, below=1cm of rref] (solution) {Solution(s)};
  
  \draw[arrow] (system) -- (aug);
  \draw[arrow] (aug) -- node[right] {Forward phase} (ref);
  \draw[arrow] (ref) -- node[right] {Backward phase} (rref);
  \draw[arrow] (rref) -- node[right] {Interpret} (solution);
  
\end{tikzpicture}
\end{document}
```

---

## Key Takeaways

- Elementary row operations preserve solutions
- Every matrix can be reduced to a **unique** RREF
- The structure of RREF tells us everything about solutions:
  - Leading 1 in last column → no solution
  - No free variables → unique solution
  - Free variables → infinitely many solutions
- Basic variables are expressed in terms of free variables
