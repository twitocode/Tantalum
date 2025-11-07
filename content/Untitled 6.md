
# One-to-One and Onto Transformations

## Definitions

### One-to-One (Injective)

A transformation $T : \mathbb{R}^n \to \mathbb{R}^m$ is **one-to-one** if whenever $\mathbf{u} \neq \mathbf{v} \in \mathbb{R}^n$, then $T(\mathbf{u}) \neq T(\mathbf{v})$.

**Intuition**: Different inputs always produce different outputs. No two vectors map to the same place.

### Onto (Surjective)

A transformation $T : \mathbb{R}^n \to \mathbb{R}^m$ is **onto** if the range of $T$ is $\mathbb{R}^m$. That is, for every $\mathbf{b} \in \mathbb{R}^m$, there exists $\mathbf{x} \in \mathbb{R}^n$ such that $T(\mathbf{x}) = \mathbf{b}$.

**Intuition**: Every possible output is achieved by at least one input. The transformation "hits" every point in the codomain.

---

## Key Fact for Linear Transformations

For a linear transformation $T$, the following are **equivalent**:

1. For all $\mathbf{u} \in \mathbb{R}^n$, if $T(\mathbf{u}) = \mathbf{0}$ then $\mathbf{u} = \mathbf{0}$
2. $T$ is one-to-one

**Why this works**: If $T(\mathbf{u}) = T(\mathbf{v})$, then by linearity $T(\mathbf{u} - \mathbf{v}) = \mathbf{0}$. If the only solution to $T(\mathbf{x}) = \mathbf{0}$ is $\mathbf{x} = \mathbf{0}$, then $\mathbf{u} - \mathbf{v} = \mathbf{0}$, so $\mathbf{u} = \mathbf{v}$.

---

## Testing with the Standard Matrix

### Theorem

Suppose $T : \mathbb{R}^n \to \mathbb{R}^m$ is a linear transformation with standard matrix $A$. Then:

1. **$T$ is one-to-one** $\iff$ the columns of $A$ are linearly independent
2. **$T$ is onto** $\iff$ $\mathbb{R}^m$ is the span of the columns of $A$

### Practical Tests

#### Testing One-to-One

Check if $A\mathbf{u} = \mathbf{0}$ has only the trivial solution $\mathbf{u} = \mathbf{0}$.

- Row reduce $A$
- If there are **no free variables**, then $T$ is one-to-one
- If there are **free variables**, then $T$ is not one-to-one

#### Testing Onto

Check if the columns of $A$ span $\mathbb{R}^m$.

- Row reduce $A$
- If there is a **pivot in every row**, then $T$ is onto
- If there is a **row without a pivot**, then $T$ is not onto

---

## Examples

### Example 1: $\mathbb{R}^2 \to \mathbb{R}^2$

$$T\begin{pmatrix} x \ y \end{pmatrix} = \begin{pmatrix} 3x + 5y \ 6x + 10y \end{pmatrix}$$

Standard matrix: $A = \begin{pmatrix} 3 & 5 \ 6 & 10 \end{pmatrix}$

**Is $T$ one-to-one?**

- Check if $A\mathbf{x} = \mathbf{0}$ has only the trivial solution
- Row reduce: $\text{rref}(A) = \begin{pmatrix} 1 & 5/3 \ 0 & 0 \end{pmatrix}$
- There is a free variable → **Not one-to-one**

**Alternative check**: The columns are scalar multiples of each other (not linearly independent)

---

### Example 2: $\mathbb{R}^3 \to \mathbb{R}^2$

$$A = \begin{pmatrix} 1 & 2 & 5 \ 3 & 5 & 0 \end{pmatrix}$$

**Is $T_A$ one-to-one?**

- No, too many columns! With 3 variables and only 2 equations (at most 2 pivots), there must be at least 1 free variable
- **Not one-to-one**

**Is $T_A$ onto?**

- Need to check if columns span $\mathbb{R}^2$
- Only need 2 linearly independent vectors to span $\mathbb{R}^2$
- Any two non-parallel vectors span $\mathbb{R}^2$
- **Yes, onto!**

---

### Example 3: $\mathbb{R}^2 \to \mathbb{R}^3$

$$T\begin{pmatrix} x \ y \end{pmatrix} = x\begin{pmatrix} 1 \ 0 \ 1 \end{pmatrix} + y\begin{pmatrix} 0 \ 1 \ 1 \end{pmatrix}$$

Standard matrix: $A = \begin{pmatrix} 1 & 0 \ 0 & 1 \ 1 & 1 \end{pmatrix}$

**Is $T_A$ one-to-one?**

- The two columns are linearly independent (not scalar multiples)
- **Yes, one-to-one!**

**Is $T_A$ onto?**

- Need 3 linearly independent vectors to span $\mathbb{R}^3$
- Only have 2 columns
- **No, not onto**

---

## Quick Reference Rules

|Property|Matrix $A$ is $m \times n$|Column Space|Free Variables|
|---|---|---|---|
|One-to-one|$n \leq m$ (usually)|Columns are lin. indep.|None|
|Onto|$n \geq m$ (usually)|Col$(A) = \mathbb{R}^m$|Pivot in every row|

**Remember**:

- **One-to-one**: Columns are linearly independent → No free variables
- **Onto**: Columns span the codomain → Pivot in every row

---

## Application: Balancing Chemical Equations

Chemical equations can be balanced using linear systems!

### Example: Butane Combustion

$$x_1 \text{C}_4\text{H}_{10} + x_2 \text{O}_2 \to x_3 \text{CO}_2 + x_4 \text{H}_2\text{O}$$

**Balance each element**:

- C: $4x_1 = x_3$
- H: $10x_1 = 2x_4$
- O: $2x_2 = 2x_3 + x_4$

**Solution**: $(x_1, x_2, x_3, x_4) = (2, 13, 8, 10)$

$$2\text{C}_4\text{H}_{10} + 13\text{O}_2 \to 8\text{CO}_2 + 10\text{H}_2\text{O}$$

This creates a homogeneous system we can solve using row reduction!