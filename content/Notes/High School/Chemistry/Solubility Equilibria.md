---
CreatedAt: 2025-01-09
MOC: "[[SCH4U1 MOC]]"
tags:
  - Unit-4
  - Chemistry
aliases:
  - Solubility Product
  - Molar Solubility for Salts
  - Common Ion Effect
---
When all of the solute in a solution is fully dissolved (fully saturated), the solution is in a state of heterogenous equilibrium. 

$$
\ce{K2Cr2O7(s) <=> 2K+(aq) + Cr2O7^2-(aq)}
$$
$$
K_{eq} = \frac{[\ce{K+(aq)}]^2[\ce{Cr2O7^2-(aq)}]}{[\ce{K2Cr2O7(s)}]}
$$

In this example, $\ce{K2Cr2O7(s)}$ is the solid, and therefore has a constant concentration because this is a heterogenous equilibrium. *It is assumed that $\ce{H2O_{(l)}}$ is on the left side of the equation because the products are aqueous*
$$K_{sp} = [\ce{K+(aq)}]^2[\ce{Cr2O7^2-(aq)}$$
**Solubility Product Constant:** This is the product of the solubilities of each ion in the solution.

1. If it is very large
   Equilibrium lies far to the right and prefers the forward reaction
2. If it is very small
   Equilibrium lies far to the left and prefers the reverse reaction.

# Molar Solubility for **Salts**
The amount of solute (salt) dissolved in 1.0L of its saturated solution


> [!NOTE]
> **Salts** are any ionic compound that doesn't contain $\ce{OH-}$ or $\ce{O^{2=}}$
> 
> Ex. $\ce{AgCl}$ and $\ce{PbI2}$
> ___
> Not Bases. $\ce{CsOH}$ and $\ce{NaOH}$
> Not Acids. $\ce{H_{2}SO_{4}}$ and $\ce{HCL}$
> Or Oxides. $\ce{MgO}$ and $\ce{CaO}$

**Let x represent the molar solubility of lead(II) iodide.**

$$\ce{PbI2 (s) <=> Pb^2+(aq) + 2I-(aq)}$$

| $\ce{PbI2 (s)}$ | $\ce{Pb^2+(aq) }$ | $\ce{2I-(aq)}$ |
| --------------- | ----------------- | -------------- |
| ↓x broken apart | ↑x created        | ↑2x created    |

$$
\begin{align*} K_{sp} &= [\ce{Pb^2+(aq)}][\ce{I-(aq)}]^2 \\ K_{sp} &= (x)(2x)^2 \\ K_{sp} &= 4x^3 \\ K_{sp} &= 8.5 \times 10^{-9} \ \mathrm{(mol/L)^3} \quad \text{(from table on page 802 in text)} \end{align*}
$$

**therefore,**

$$
\begin{align*}
8.5 \times 10^{-9} &= 4x^3 \\
2.0\times 10^{-9} &= x^3 \\
1.3 \times 10^{-3} &= x
\end{align*}
$$

**Therefore the molar solubility of plumbous iodide is 1.3 x 10⁻³ mol/L.**

# Common Ion Effect
The phenomenon that occurs when a salt tries to dissolve into a solution that has one or both of the ions in the salt.


$$\ce{AgBr(s) + H2O(l) <=> Ag+(aq) + Br-(aq)}$$
![[Pasted image 20250109165754.png]]
The $[\ce{Br-}]$ is greater compared to an aqueous environment (pure water). This makes it harder for $\ce{AgBr}$ to dissolve into it

## Steps to Solve Common Ion Problems
1. Find Molar Solubility in Water
2. Find final concentration of solution with common ion
3. Find molar solubility in the solution with the common ion


Compare the molar solubility of $\ce{AgBr}$ in pure water to a 0.10 mol/L solution of $\ce{NaBr}$. 
$K_{sp}$ of $\ce{AgBr}$ at 25°C is $5.4 \times 10^{-13} mol^2/L^2$.
![[Pasted image 20250109171323.png]]
Let x represent the molar solubility of $\ce{AgBr}$ in water.

$$\ce{AgBr_{(s)}} + H2O <=> Ag+_{(aq)} + Br-_{(aq)}$$


|         | $$\ce{AgBr_{(s)}}$$ | $$Ag+_{(aq)}$$ | $$Br-_{(aq)}$$ |
| ------- | ------------------- | -------------- | -------------- |
| Initial | 1x                  | 0              | 0              |
| Final   | 0                   | 1x             | 1x             |

$$K_{sp} = [\ce{Ag+_{(aq)}}][\ce{Br-_{(aq)}}]$$
$$5.4 \times 10^{-13} mol^2/L^2 = x^2$$
$$7.4 \times 10^{-7} mol/L = x$$

Therefore, the molar solubility in water is $7.4 \times 10^{-7} mol/L$.

**Recall:**

$$\ce{H2O_{(l)} + NaBr_{(s)} -> Na+_{(aq)} + Br-_{(aq)}}$$


|         | $\ce{NaBr_{(s)} }$ | $\ce{ Na+_{(aq)}}$ | $\ce{ Br-_{(aq)}}$ |
| ------- | ------------------ | ------------------ | ------------------ |
| Initial | 0.10 mol/L         | 0 mol/L            | 0 mol/L            |
| Final   | 0 mol/L            | 0.10 mol/L         | 0.10 mol/L         |

* **Since $\ce{NaBr}$ is extremely soluble in water according to solubility rules (grade 11), it is expected that this solid completely dissociates into ions. There is no equilibrium. here!**

When trying to dissolve silver bromide in $\ce{NaBr}$ instead of water, let x represent the molar solubility of silver bromide.

$$K_{sp} = [\ce{Ag+_{(aq)}}][\ce{Br-_{(aq)}}]$$
$$5.4 \times 10^{-13} mol^2/L^2 = (x)(0.10 + x) mol/L$$

> [!ERROR] Very Important
> We are going to assume that $x$ is a very small number to where 
> $$0.10 +x\approx 0.10$$ 
> so we can assume that $x$ is 0

$$
\begin{align*}
5.4 \times 10^{-13} mol^2/L^2 &= (x)(0.10) mol/L \\
x &= 5.4 \times 10^{-12} mol/L
\end{align*}
$$
Therefore, the molar solubility in water is $7.4 \times 10^{-7} mol/L$ where in $\ce{NaBr}$ is $x = 5.4 \times 10^{-12} mol/L$
