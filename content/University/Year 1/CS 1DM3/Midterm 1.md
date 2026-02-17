## **Chapter 1: Logic and Proofs**

### Propositions and Logical Operators

- [x] Definition of propositions (statements that are true or false)
- [x] Logical operators: negation (¬), conjunction (∧), disjunction (∨), exclusive or (⊕), implication (→), biconditional (↔)
- [x] Truth tables for all operators
- [x] Converse, contrapositive, and inverse of implications

### Logical Equivalences

- [ ] Tautologies and contradictions
- [ ] Equivalence laws: identity, domination, idempotent, double negation, commutative, associative, distributive, De Morgan's, absorption, negation, implication laws
- [ ] How to prove logical equivalences using laws (not just truth tables)

### Quantifiers

- [x] Universal quantifier (∀) and existential quantifier (∃)
- [x] Propositional functions P(x)
- [x] Negation of quantifiers: ¬∀xP(x) ≡ ∃x¬P(x) and ¬∃xP(x) ≡ ∀x¬P(x)
- [x] Nested quantifiers and order mattering

### Rules of Inference

- [ ] Modus ponens, modus tollens
- [ ] Hypothetical syllogism, disjunctive syllogism
- [ ] Addition, simplification, conjunction, resolution
- [ ] Determining if arguments are valid

### Proof Techniques

- [ ] **Direct proof**: Assume P(c) is true, show Q(c) is true
- [ ] **Proof by contraposition**: Prove ¬Q(c) → ¬P(c) instead of P(c) → Q(c)
- [ ] **Proof by contradiction**: Assume P(c) ∧ ¬Q(c) and derive a contradiction
- [ ] **Proof by cases**: Break P(c) into cases P₁(c) ∨ P₂(c) ∨ ... and prove each

## **Chapter 2: Sets, Functions, and Sequences**

### Sets

- [ ] Definition: unordered collection of distinct objects
- [ ] Notation: roster method, set builder notation
- [ ] Standard sets: ℕ, ℤ, ℤ⁺, ℚ, ℝ, ℝ⁺
- [ ] Intervals: [a,b], (a,b], [a,b), (a,b)
- [ ] Set equality: A = B iff ∀x(x ∈ A ↔ x ∈ B)
- [ ] Subset: A ⊆ B iff ∀x(x ∈ A → x ∈ B)
- [ ] Cardinality |A| and power set P(A) where |P(A)| = 2^|A|

### Set Operations

- [ ] Union (∪), intersection (∩), difference (−), complement (Ā)
- [ ] Symmetric difference (⊕)
- [ ] Set identities: De Morgan's laws, distributive laws, absorption laws
- [ ] Cartesian product: A × B = {(a,b) | a ∈ A, b ∈ B}

### Functions

- [ ] Definition: f: A → B assigns exactly one element of B to each element of A
- [ ] Domain, codomain, range, image, preimage
- [ ] **Injective (one-to-one)**: a ≠ b → f(a) ≠ f(b)
- [ ] **Surjective (onto)**: ∀b ∈ B, ∃a ∈ A such that f(a) = b
- [ ] **Bijective**: both injective and surjective
- [ ] Strictly increasing/decreasing functions are injective
- [ ] Composition: (f ∘ g)(x) = f(g(x))
- [ ] Inverse functions f⁻¹ (only for bijections)

### Floor and Ceiling Functions

- [ ] ⌊x⌋ = largest integer ≤ x
- [ ] ⌈x⌉ = smallest integer ≥ x
- [ ] Properties: ⌊x⌋ = n iff n ≤ x < n+1
- [ ] ⌊x+n⌋ = ⌊x⌋ + n for integer n
- [ ] ⌊−x⌋ = −⌈x⌉

### Sequences and Summations

- [ ] Sequences: {aₙ} where n ∈ ℕ
- [ ] Arithmetic progression: {a + kd}
- [ ] Geometric progression: {a·rᵏ}
- [ ] Recurrence relations
- [ ] Summation notation: Σ
- [ ] Geometric series formula: Σ(k=0 to n) arᵏ = a(rⁿ⁺¹−1)/(r−1) if r≠1
- [ ] Telescoping sums: Σ(aⱼ − aⱼ₋₁) = aₙ − a₀
- [ ] Change of summation limits

### Cardinality

- [ ] Two sets have same cardinality if there's a bijection between them
- [ ] Countable sets: finite or bijection with ℤ⁺
- [ ] ℤ and ℚ are countable
- [ ] ℝ and (0,1) are uncountable (proof by diagonalization)

### Matrices

- [ ] m × n matrix notation
- [ ] Matrix addition and multiplication
- [ ] Identity matrix Iₙ
- [ ] Matrix powers: Aⁿ
- [ ] Inverse A⁻¹ (when it exists)
- [ ] Transpose Aᵀ
- [ ] Symmetric matrices: A = Aᵀ
- [ ] Zero-one matrices: join (∨), meet (∧), Boolean product (⊙)

## **Chapter 3: Algorithms and Complexity**

### Algorithms

- [ ] Definition: finite sequence of precise instructions
- [ ] Pseudocode representation
- [ ] **Linear search**: O(n) worst case
- [ ] **Binary search**: O(log n) (requires sorted input)
- [ ] **Bubble sort**: O(n²)
- [ ] **Insertion sort**: O(n²) worst case, O(n) best case

### Growth of Functions (Big-O Notation)

- [ ] **Big-O** (upper bound): f(x) is O(g(x)) if |f(x)| ≤ C|g(x)| for x ≥ k
- [ ] **Big-Ω** (lower bound): f(x) is Ω(g(x)) if |f(x)| ≥ C|g(x)| for x ≥ k
- [ ] **Big-Θ** (tight bound): f(x) is Θ(g(x)) if both O and Ω
- [ ] Polynomial of degree n is Θ(xⁿ)
- [ ] Common orders: 1, log n, n, n log n, n², 2ⁿ, n!
- [ ] n! is O(nⁿ), nᵇ is O(cⁿ) for b,c > 1

### Complexity Analysis

- [ ] Time complexity vs space complexity
- [ ] Worst-case vs average-case vs best-case
- [ ] Number of operations as measure
- [ ] Complexity terminology: constant O(1), logarithmic O(log n), linear O(n), linearithmic O(n log n), polynomial O(nᵇ), exponential O(bⁿ), factorial O(n!)
