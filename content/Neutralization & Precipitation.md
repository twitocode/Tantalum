---
CreatedAt: 2025-01-13
MOC: "[[SCH4U1 MOC]]"
tags:
  - Unit-4
aliases:
---
# Predicting Precipitation Formation

## Solubility Curves
Solubility curves are used in chemical applications to determine whether a reaction will result in the formation of a precipitate. For example:

$\ce{Ag+ (aq) + Cl- (aq) <=> AgCl (s)}$

This curve gives all the possible combinations of concentrations that are likely to result in the formation of a precipitate at a given temperature:

- If the product of concentrations is above the curve, a precipitate forms.
- A product below the curve indicates that the solution is unsaturated.
- Products on the curve result in saturated solutions.

---

## Example 1
**50.0 mL of both 0.100 mol/L \ce{Pb(NO3)2} and 0.015 mol/L \ce{KI} solutions are mixed together. A yellow precipitate forms. Determine the type of precipitate formed in a quantitative manner.**

### Solution

$$
\begin{align*}
\ce{Pb(NO3)2 (s)} &\ce{-> Pb^{2+} (aq) + 2NO3- (aq)}
\end{align*}
$$

After examining solubility rules, \ce{Pb(NO3)2} is likely to dissociate completely into ions:

### Amounts:

$$
\begin{align*}
\text{Amount of } \ce{Pb(NO3)2} &= C \times V = 0.100\,\text{mol/L} \times 0.050\,\text{L} = 0.005\,\text{mol}
\end{align*}
$$

**New Concentrations:**

$$
\begin{align*}
[\ce{Pb^{2+}}] &= \frac{0.005\,\text{mol}}{0.100\,\text{L}} = 0.05\,\text{mol/L}
\end{align*}
$$

$$
\begin{align*}
[\ce{NO3-}] &= \frac{2 \times 0.005\,\text{mol}}{0.100\,\text{L}} = 0.10\,\text{mol/L}
\end{align*}
$$

Similarly for \ce{KI}:

$$
\begin{align*}
\ce{KI (s)} &\ce{-> K+ (aq) + I- (aq)}
\end{align*}
$$

$$
\begin{align*}
\text{Amount of } \ce{KI} &= C \times V = 0.015\,\text{mol/L} \times 0.050\,\text{L} = 0.00075\,\text{mol}
\end{align*}
$$

**New Concentrations:**

$$
\begin{align*}
[\ce{K+}] = [\ce{I-}] &= \frac{0.00075\,\text{mol}}{0.100\,\text{L}} = 7.5 \times 10^{-3}\,\text{mol/L}
\end{align*}
$$

---

## Possible Precipitates
- According to solubility rules, \ce{KNO3} is not likely to form.
- \ce{PbI2} is a possible precipitate resulting from the following equilibrium:

$$
\begin{align*}
\ce{PbI2 (s)} &\ce{<=> Pb^{2+} (aq) + 2I- (aq)}
\end{align*}
$$

The solubility product expression:

$$
\begin{align*}
K_\text{sp} &= [\ce{Pb^{2+}}] [\ce{I-}]^2
\end{align*}
$$

Substituting the concentrations:

$$
\begin{align*}
K_\text{sp} &= (0.05)(7.5 \times 10^{-3})^2 = 2.8 \times 10^{-6}\,\text{mol}^3/\text{L}^3
\end{align*}
$$

From tables, \( K_\text{sp} = 8.5 \times 10^{-9} \). Since:

$$
\begin{align*}
2.8 \times 10^{-6} &> 8.5 \times 10^{-9},
\end{align*}
$$

A precipitate forms.

---

## Example 2
**Should precipitation occur when 50.0 mL of 5.00 \times 10^{-4}\,\text{mol/L} \ce{Ca(NO3)2} solution is mixed with 50.0 mL of 2.00 \times 10^{-4}\,\text{mol/L} \ce{NaF} solution? The \( K_\text{sp} \) for \ce{CaF2} is \( 1.7 \times 10^{-10} \).**

### Solution

From solubility rules, \ce{NaNO3} is not likely to precipitate. \ce{CaF2} is the potential precipitate:

$$
\begin{align*}
\ce{CaF2 (s)} &\ce{<=> Ca^{2+} (aq) + 2F- (aq)}
\end{align*}
$$

After mixing:

$$
\begin{align*}
[\ce{Ca^{2+}}] &= \frac{50.0\,\text{mL} \times 5.00 \times 10^{-4}\,\text{mol/L}}{100.0\,\text{mL}} = 2.5 \times 10^{-4}\,\text{mol/L}
\end{align*}
$$

$$
\begin{align*}
[\ce{F-}] &= \frac{50.0\,\text{mL} \times 2.00 \times 10^{-4}\,\text{mol/L}}{100.0\,\text{mL}} = 1.0 \times 10^{-4}\,\text{mol/L}
\end{align*}
$$

Calculating \( K_\text{sp}: \)

$$
\begin{align*}
K_\text{sp} &= [\ce{Ca^{2+}}] [\ce{F-}]^2 = (2.5 \times 10^{-4})(1.0 \times 10^{-4})^2 = 2.5 \times 10^{-12}\,\text{mol}^3/\text{L}^3
\end{align*}
$$

Since:

$$
\begin{align*}
2.5 \times 10^{-12} &< 1.7 \times 10^{-10},
\end{align*}
$$

No precipitate forms.
