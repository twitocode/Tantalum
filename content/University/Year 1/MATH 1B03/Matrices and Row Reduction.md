---
CreatedAt: 2025-11-07
class: MATH 1B03
tags:
  - "#classnote"
---
## Elementary Row Operations (Review)

Three types of operations that preserve solutions:

1. **Interchange two rows**
2. **Multiply a row by a non-zero constant**
3. **Add a constant multiple of one row to another**

### Example: Step-by-Step Solution

Solve the system with augmented matrix:
$$\left[\begin{array}{cc|c}
0 & 1 & 4 \\
2 & -1 & 2
\end{array}\right]$$

This represents:
$$\begin{align}
y + 3z &= 4 \\
2x - y + z &= 2
\end{align}$$

**Step 1**: Swap rows (since top-left is 0)
$$\left[\begin{array}{cc|c}
2 & -1 & 2 \\
0 & 1 & 4
\end{array}\right]$$

**Step 2**: Divide row 1 by 2
$$\left[\begin{array}{cc|c}
1 & -\frac{1}{2} & 1 \\
0 & 1 & 4
\end{array}\right]$$

This is **row echelon form** (REF) with pivots in positions (1,1) and (2,2).

**Step 3**: For RREF, eliminate above the second pivot
$$\frac{1}{2} \times \text{row2} + \text{row1} \to \text{row1}$$

$$\left[\begin{array}{cc|c}
1 & 0 & 3 \\
0 & 1 & 4
\end{array}\right]$$

**Solution**: $x = 3$, $y = 4$

---

## Echelon Forms - Formal Definition

### Row Echelon Form (REF)

A matrix is in REF if:

1. All zero rows are grouped at the bottom
2. In any two consecutive non-zero rows, the leading entry of the upper row is **strictly to the left** of the leading entry in the lower row

**Note**: Some textbooks require leading entries to be 1, but this course doesn't require that for REF (only for RREF).

### Reduced Row Echelon Form (RREF)

A matrix in REF is in RREF if additionally:

3. Each **pivot column** contains a **1** (leading 1)
4. Each pivot column has **zeros in all other positions**

> **Important Theorem**: Every matrix can be row reduced to a **unique** matrix in RREF.

---

## The Row Reduction Procedure

### Complete Algorithm

**Forward Phase** (to REF):

1. Find the leftmost non-zero column
2. Interchange rows to get a non-zero entry at the top
3. Divide the top row by that entry to make the leading entry 1
4. Add multiples of the top row to rows below to create zeros below the leading 1
5. Ignore the top row; repeat steps 1-4 with remaining rows until done

**Backward Phase** (to RREF):

6. Start with the rightmost leading 1
7. Working leftward, add multiples of each pivot row to rows **above** to create zeros above all leading 1's

### Example with Three Variables

Augmented matrix:
$$\left[\begin{array}{ccc|c}
0 & 1 & 3 & 4 \\
2 & -1 & 1 & 2 \\
0 & 0 & 0 & 0
\end{array}\right]$$

Already has a zero row at bottom ✓

**Apply operations**:

After row reduction:
$$\left[\begin{array}{ccc|c}
1 & 0 & * & * \\
0 & 1 & 3 & 4 \\
0 & 0 & 0 & 0
\end{array}\right]$$

**Analysis**:
- Pivot columns: 1 and 2
- Free variable: $x_3 = t$ (since column 3 has no pivot)
- Second and fourth variables would be free in general solution

---

## Solving Linear Systems

### Step-by-Step Procedure

1. **Form augmented matrix** from the system
2. **Row reduce** to RREF
3. **Check for consistency**:
   - If there's a leading 1 in the last column → **No solution**
   - Otherwise → System is **consistent**

4. **Identify variables**:
   - **Pivot columns** → **Basic variables**
   - **Non-pivot columns** → **Free variables**

5. **Write general solution**:
   - Express basic variables in terms of free variables

### Example: No Solution

RREF of augmented matrix:
$$\left[\begin{array}{ccc|c}
1 & 0 & 2 & 0 \\
0 & 1 & 3 & 0 \\
0 & 0 & 0 & \boxed{1}
\end{array}\right]$$

Third row represents: $0x_1 + 0x_2 + 0x_3 = 1$, which is impossible!

**Conclusion**: System is inconsistent (no solution).

### Example: Infinitely Many Solutions

RREF:
$$\left[\begin{array}{cccc|c}
1 & 2 & 0 & 3 & 5 \\
0 & 0 & 1 & 4 & 7 \\
0 & 0 & 0 & 0 & 0
\end{array}\right]$$

**Analysis**:
- Pivot columns: 1, 3
- Free variables: $x_2 = s$, $x_4 = t$

**General solution**:
$$\begin{cases}
x_1 = 5 - 2s - 3t \\
x_2 = s \\
x_3 = 7 - 4t \\
x_4 = t
\end{cases}$$

where $s, t \in \mathbb{R}$ are arbitrary parameters.

---

## Important Observations

### About Pivot Positions

```tikz
\usepackage{tikz}
\begin{document}
\begin{tikzpicture}
  \node at (0,2) {Example RREF:};
  \node at (0,0) {$\left[\begin{array}{cccc|c}
    \boxed{1} & 0 & 2 & 0 & 3 \\
    0 & \boxed{1} & 4 & 0 & -1 \\
    0 & 0 & 0 & \boxed{1} & 5
  \end{array}\right]$};
  
  \draw[->, red, thick] (1.5, -0.8) -- (1.5, -1.5);
  \draw[->, red, thick] (2.8, -0.8) -- (2.8, -1.5);
  \draw[->, blue, thick] (2.1, -0.8) -- (2.1, -1.5);
  \draw[->, red, thick] (3.5, -0.8) -- (3.5, -1.5);
  
  \node[red] at (1.5, -1.8) {\small Basic};
  \node[red] at (2.8, -1.8) {\small Basic};
  \node[blue] at (2.1, -1.8) {\small Free};
  \node[red] at (3.5, -1.8) {\small Basic};
\end{tikzpicture}
\end{document}
```

### Key Facts

- The number of **pivot positions** = number of **basic variables**
- The number of **free variables** = (total variables) - (pivot positions)
- More free variables → "more" solutions (higher dimensional solution space)

---

## Summary

| Condition | Number of Solutions |
|-----------|-------------------|
| Leading 1 in last column | **0** (inconsistent) |
| No free variables | **1** (unique solution) |
| Has free variables | **∞** (infinitely many) |
