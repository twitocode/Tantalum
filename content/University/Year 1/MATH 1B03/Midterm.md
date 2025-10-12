## Chapter 1: Systems of Linear Equations and Matrices
### 1.1 Introduction to Systems of Linear Equations (Review)
- [ ] **Definition of a Linear Equation** in $n$ unknowns ($a_1x_1 + a_2x_2 + \dots + a_nx_n = b$).
- [ ] Understanding the **Augmented Matrix** notation for a system of equations.

### 1.2 Gaussian Elimination (Matrix Notation & Elimination Method)
- [ ] The **systematic procedure for solving linear systems**.
- [ ] Understanding and identifying **Row Echelon Form (REF)** and **Reduced Row Echelon Form (RREF)**.
- [ ] Applying **Elementary Row Operations** to find solutions.

### 1.3 Matrices and Matrix Operations
- [ ] **Matrix Notation and Terminology**: Definitions of matrix, entries, scalars, row vectors, column vectors, square matrix, and main diagonal.
- [ ] **Matrix Multiplication**: Definition of matrix product $AB$. Know the mechanical process: calculating an entry requires $n$ multiplications and $n-1$ additions.

### 1.4 and 1.5: Invertibility and Elementary Matrices (Core Concepts)
- [ ] **Inverse Matrices**: Definition and properties of $A^{-1}$.
- [ ] **Elementary Matrices**: Their role in row operations and finding the inverse of $A$.
- [ ] **Equivalent Statements (Theorem 1.5.3)**: This is foundational, relating invertibility ($A$ is invertible), homogeneous systems ($A\mathbf{x} = \mathbf{0}$ has only the trivial solution), RREF (RREF of $A$ is $I_n$), and elementary matrices.

### 1.8 Matrix Transformations
- [ ] **Definition of Matrix Transformation**: $T_A(\mathbf{x}) = A\mathbf{x}$.
- [ ] **Standard Matrix for T**: How to find the standard matrix $A$ for a transformation $T: \mathbb{R}^n \to \mathbb{R}^m$ (columns are $T(\mathbf{e}_i)$).

---

## Chapter 2: Determinants

The curriculum schedule suggests coverage of Determinants (3 lectures), which is essential context for invertibility and the properties of linear operators.

- [ ] **2.1 Determinants by Cofactor Expansion**: Calculation of minors and cofactors, and expanding determinants.
- [ ] **2.2 Evaluating Determinants by Row Reduction**: How elementary row operations affect determinants.
- [ ] **2.3 Properties of Determinants**: Including $\det(AB) = \det(A)\det(B)$ and the **invertibility criterion** ($\det(A) \ne 0$).

---

## Chapter 3: Euclidean Vector Spaces

The core definitions of vectors and their geometry in $\mathbb{R}^n$ must be understood, as suggested by the 3–4 lecture allocation in the template.

- [ ] **3.1 Vectors in $n$-Space**: Vector addition and scalar multiplication in $\mathbb{R}^n$.
- [ ] **3.2 Norm, Dot Product, and Distance in $\mathbb{R}^n$**: Definitions and calculation of the Euclidean norm (length) and distance, and the dot product.

---

## Chapter 4: General Vector Spaces (Most Critical Chapter for the Midterm)

The lecture excerpts heavily reinforce concepts from this chapter, focusing specifically on independence and the fundamental matrix spaces, aligning with the large 9–10 lecture allocation.

### 4.3 Linear Independence
- [ ] **Definition**: Understanding when a set of vectors $\{\mathbf{v}_1, \dots, \mathbf{v}_m\}$ is linearly independent (trivial solution only).
- [ ] **Linear Dependence**: If vectors are linearly dependent, at least one vector can be written as a **linear combination of the others**. This leads to non-trivial solutions in the homogeneous system $A\mathbf{x} = \mathbf{0}$.

### 4.4 Coordinates and Basis
- [ ] **Basis**: Definition of a basis (linearly independent spanning set).
- [ ] **Coordinate Vectors**: Finding $[\mathbf{v}]_S$ relative to a given basis $S$.

### 4.5 Dimension
- [ ] **Dimension Theorem**: All bases for a finite-dimensional vector space have the same number of vectors (Theorem 4.5.1).
- [ ] Theorems relating the number of vectors to spanning and linear independence (e.g., how to reduce a spanning set or expand an independent set to a basis).

### 4.7 Row Space, Column Space (Range), and Null Space (Kernel)
- **Definitions**: Row space, **Column Space** (the **Range of $T_A$**), and **Null Space** (the **Kernel of $T_A$**).
- The **Range of $T_A$ is the span of the columns** of the matrix $A$.
- Finding bases for these spaces.

### 4.8 Rank, Nullity, and the Fundamental Matrix Spaces
- **Rank and Nullity Definitions**.
- **Dimension Theorem for Matrices**: $\text{rank}(A) + \text{nullity}(A) = n$ (number of columns).

### 4.10 Properties of Matrix Transformations
- **Injective (One-to-One)**: $T_A$ is **1-1** if and only if the columns of $A$ are linearly independent, or equivalently, $\text{nullity}(A) = 0$.
- **Surjective (Onto)**: $T_A$ is **onto** $\mathbb{R}^m$ if and only if the columns of $A$ span $\mathbb{R}^m$, or equivalently, $\text{rank}(A) = m$.

---

## Later Concepts (As Referenced by Lectures)
- **Composition of Matrix Transformations**: Understanding that **matrix multiplication is equivalent to the composition** of the corresponding matrix transformations ($T_A \circ T_B \equiv T_{AB}$).
- **Computational Complexity**: The conceptual cost of multiplying two $n \times n$ matrices. (This primarily draws from the introduction to numerical methods in the text, usually Section 9.3).