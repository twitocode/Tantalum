## 4.9/5.4 Antiderivatives

### Definition of Antiderivative

$F(x)$ is an **antiderivative** of $f(x)$ on an interval $I$ if $F'(x)=f(x)$ for all $x$ in $I$1.

- **Example:** If $f(x)=x^2$ 2, then the general antiderivative is $F(x)=\frac{1}{3}x^3+C$3.
    

### Graphical Representation of Antiderivatives

Antiderivatives of a function form a family of curves that are **vertical shifts** of each other.

Code snippet

```tikz
\begin{document}
\begin{tikzpicture}[scale=1.5]
    \draw[->, thick, blue] (-1.5, 0) -- (1.5, 0) node[right] {$x$};
    \draw[->, thick, blue] (0, -2) -- (0, 2) node[above] {$y$};

    % Curves for F(x) = 1/3 x^3 + C
    \draw[domain=-1.3:1.3, smooth, samples=100, color=green, very thick] plot (\x, {(\x)^3/3 + 1});
    \node[right] at (1.3, {1.3^3/3 + 1}) {$\frac{1}{3}x^{3}+1$};     \draw[domain=-1.3:1.3, smooth, samples=100, color=blue, very thick] plot (\x, {(\x)^3/3});
    \node[right] at (1.3, {1.3^3/3}) {$\frac{1}{3}x^{3}$};
    \draw[domain=-1.3:1.3, smooth, samples=100, color=red, very thick] plot (\x, {(\x)^3/3 - 1});
    \node[right] at (1.3, {1.3^3/3 - 1}) {$\frac{1}{3}x^{3}-1$};
\end{tikzpicture}
\end{document}
```

### Indefinite Integral Notation

The notation for the most general antiderivative of $f(x)$ is the indefinite integral4:

$$\large \int f(x) \, dx = F(x) + C$$

- This notation means $F'(x)=f(x)$.
    
- **Example:** $\int x^{2}dx=\frac{1}{3}x^{3}+c$.
    

---

## Basic Antiderivative Formulas

| **Function f(x)**                     | **Most General Antiderivative F(x)=∫f(x)dx [cite: 24, 32, 33]**         |
| ------------------------------------- | ----------------------------------------------------------------------- |
| $x^n$ ($n \neq -1$) [cite: 25]        | $\frac{1}{n+1}x^{n+1}+c$ [cite: 34]                                     |
| $\frac{1}{x}$ [cite: 26]              | $\ln                                                                    |
| $e^x$ [cite: 26]                      | $e^x+c$ [cite: 35]                                                      |
| $\cos x$ [cite: 26]                   | $\sin x+c$ [cite: 35]                                                   |
| $\sin x$ [cite: 27]                   | $-\cos x+c$ [cite: 35]                                                  |
| $\sec^2 x$ [cite: 27]                 | $\tan x+C$ [cite: 36]                                                   |
| $\sec x \tan x$ [cite: 27]            | $\sec x+C$ [cite: 36]                                                   |
| $\frac{1}{1+x^{2}}$ [cite: 28]        | $\tan^{-1}x+C$ [cite: 36]                                               |
| $\frac{1}{\sqrt{1-x^{2}}}$ [cite: 29] | $\sin^{-1}x+C$ [cite: 36]                                               |
| $a^x$ (e.g., $2^x$) [cite: 30]        | $\frac{1}{\ln a}a^x+c$ (or $\frac{1}{\ln 2}2^x+c$ for $2^x$) [cite: 37] |
| $C$ (Constant) [cite: 31]             | $Cx+D$ (where $D$ is the arbitrary constant) [cite: 37]                 |

---

## Examples: Finding Functions from Derivatives

### Example 1: Finding $g(x)$ given $g'(x)$ and a point

**Problem:** Find $g(x)$ if $g'(x)=4\sin x+\frac{2x^5-\sqrt{x}}{x}$ and $g(0)=2$7.

- **Result:** $g(x)=-4\cos x+\frac{2}{5}x^5-2\sqrt{x}+6$.
    

### Example 2: Finding $f(x)$ given $f''(x)$ and two points

**Problem:** Find $f(x)$ if $f''(x)=12x^2+6x-4$, $f(0)=4$, and $f(1)=1$9.

- **Result:** $f(x)=x^4+x^3-2x^2-3x+4$10.
    

---

## Appendix E: Sigma Notation

### Definition

The Sigma Notation ($\Sigma$) represents a sum11:

$$\large \sum_{i=m}^{n} a_{i} = a_{m} + a_{m+1} + \dots + a_{n}$$

- $i$ is the index of summation12121212.
    
- $m$ is the starting index13.
    
- $n$ is the ending index14.
    
- $a_i$ is a function of the index $i$15.
    
- **Example:** $\sum_{i=4}^{8}\frac{i}{i-2}=\frac{4}{4-2}+\frac{5}{5-2}+\frac{6}{6-2}+\frac{7}{7-2}+\frac{8}{8-2}$16.
    

### Properties of Summation

1. **Constant Multiple Rule:** $\large \sum_{i=m}^{n} C a_{i} = C\sum_{i=m}^{n} a_{i}$171717.
    
2. **Sum/Difference Rule:** $\large \sum_{i=m}^{n} (a_{i}+b_{i}) = \sum_{i=m}^{n} a_{i}+\sum_{i=m}^{n} b_{i}$18.
    
3. **Sum of a Constant:** $\large \sum_{i=1}^{n} C = nC$19.
    

### Formulas for Sums of Powers

$$\large \sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$

202020

$$\large \sum_{i=1}^{n} i^{2} = \frac{n(n+1)(2n+1)}{6}$$

21

$$\large \sum_{i=1}^{n} i^{3} = \left[\frac{n(n+1)}{2}\right]^{2}$$

22

### Example: Evaluating a Summation

**Problem:** Evaluate $\large \sum_{i=1}^{n} i(4i^2 - 3)$23.

- **Result:** $\large \frac{1}{2} n(n+1) (2n^2 + 2n - 3)$24.
    

### Example: Telescoping Sum

**Problem:** Evaluate $\large \sum_{i=1}^{n}\left(\frac{1}{i+1}-\frac{1}{i+3}\right)$25.

- This is a **Telescoping Sum**26.
    
- **Result:** $\large \frac{5}{6}-\frac{2n+5}{(n+2)(n+3)}$27.
    

---

## 5.1 Areas and Distances

### Approximating Area

To approximate the area under $f(x)$ on $[a, b]$, the interval is divided into $n$ parts, each with width:

$$\large \Delta x = \frac{b-a}{n}$$

28282828

- The endpoints of the subintervals are $x_i = a+i\Delta x$29292929.
    
- The starting point is $x_0=a$30.
    

#### Right Endpoint Approximation ($R_n$)

Uses the right endpoint $x_i$ of each subinterval for the height31:

$$\large R_n = \sum_{i=1}^{n} f(x_i) \Delta x$$

32

#### Left Endpoint Approximation ($L_n$)

Uses the left endpoint $x_{i-1}$ of each subinterval for the height33:

$$\large L_n = \sum_{i=1}^{n} f(x_{i-1}) \Delta x$$

34

### Example: Area under $y=x^2$ on $[0, 1]$

**Graph of $y=x^2$:**

Code snippet

```
\begin{document}
\begin{tikzpicture}[scale=3]
    \draw[->, very thin] (-1.2, 0) -- (1.2, 0) node[right] {$x$};
    \draw[->, very thin] (0, 0) -- (0, 1.2) node[above] {$y$};
    \node[right] at (1, 1) {$y=x^2$};
    \draw[thick, blue, domain=-1.1:1.1, smooth] plot (\x, {\x*\x});

    % Shaded Area (A) on [0, 1]
    \fill[blue!20, pattern=north east lines, pattern color=blue!50] (0, 0) -- plot[domain=0:1] (\x, {\x*\x}) -- (1, 0) -- cycle;
    \draw[thick, blue, domain=0:1] plot (\x, {\x*\x}); % Redraw curve over shaded area
    \draw (1, 0) -- (1, 1); % Vertical line at x=1
    \node at (0.8, 0.5) {$A$};
    \node[below] at (1, 0) {$1$};
\end{tikzpicture}
\end{document}
```

- **Approximate Area ($n=4$ Right Endpoints):**
    
    - **Result:** $A \approx 0.46875$35.
        
- **Approximate Area ($n=4$ Left Endpoints):**
    
    - **Result:** $A \approx \frac{1}{4}[0^2+\frac{1}{16}+\frac{1}{4}+\frac{9}{16}]$36.
        
- Exact Area:
    
    $$\large A = \lim_{n\rightarrow\infty} R_n = \lim_{n\rightarrow\infty} \frac{2n^3}{6n^3} = \frac{1}{3}$$
    
    37
    

### Exact Area as a Limit

If $f$ is continuous and $f(x) \geq 0$, the Area ($A$) under $f(x)$ on $[a, b]$ is defined by the limit of the Riemann sum38383838:

$$\large A = \lim_{n\rightarrow\infty} \sum_{i=1}^{n} f(x_i^*) \Delta x$$

39

- $x_i^*$ is any sample point in the subinterval $[x_{i-1}, x_i]$40.
    

---

## 5.2 The Definite Integral

### Definition

If $f$ is continuous on $[a, b]$ 41, the definite integral of $f$ from $a$ to $b$ is defined as the limit of the Riemann sum42:

$$\large \int_{a}^{b} f(x) \, dx = \lim_{n\rightarrow\infty} \sum_{i=1}^{n} f(x_i) \Delta x$$

43

- This limit is also equal to $\lim_{n\rightarrow\infty}\sum_{i=1}^{n}f(x_{i-1})\Delta x$44.
    

### Interpretation in Terms of Areas

The definite integral represents the net area between $f(x)$ and the $x$-axis on $[a, b]$45:

$$\large \int_{a}^{b} f(x) \, dx = \text{Net Area} = \text{Area above } x\text{-axis} - \text{Area below } x\text{-axis}$$

46

- If $f(x)\geq 0$ on $[a,b]$, then $\int_{a}^{b}f(x)dx$ equals the **area under $f(x)$** from $a$ to $b$47.
    

#### Visualizing Net Area

Code snippet

```
\begin{document}
\begin{tikzpicture}[scale=1.5]
    \draw[->, thick] (-0.5, 0) -- (4, 0) node[right] {$x$};
    \draw[->, thick] (0, -1) -- (0, 2);

    % Draw the function (smooth curve passing through zero)
    \draw[blue, very thick, domain=0:3.5, smooth] plot (\x, {1.5*exp(-0.5*\x)*cos(\x*1.5)});

    % Annotate points x1, x2, x3, x5, x6 (Example from source image)
    \node[below] at (0.5, 0) {$x_1$};
    \node[below] at (1.0, 0) {$x_2$};
    \node[below] at (1.5, 0) {$x_3$};
    \node[below] at (2.7, 0) {$x_5$};
    \node[below] at (3.2, 0) {$x_6$};

    % Right Riemann Sum Rectangles (n=6, approximated from image)
    \def\dx{0.5}

    % Positive Area Rectangles (Right Endpoints: x1, x2, x3)
    \draw[fill=red!30, draw=red, thick] (0, 0) rectangle (\dx, {1.5*exp(-0.5*\dx)*cos(\dx*1.5)}); % f(x1)
    \draw[fill=red!30, draw=red, thick] (\dx, 0) rectangle ({2*\dx}, {1.5*exp(-0.5*2*\dx)*cos(2*\dx*1.5)}); % f(x2)
    \draw[fill=red!30, draw=red, thick] ({2*\dx}, 0) rectangle ({3*\dx}, {1.5*exp(-0.5*3*\dx)*cos(3*\dx*1.5)}); % f(x3)

    % Negative Area Rectangles (Right Endpoints: x5, x6)
    % x4 is roughly 2.0 to 2.5
    \draw[fill=blue!30, draw=blue, thick] ({4*\dx}, 0) rectangle ({5*\dx}, {1.5*exp(-0.5*5*\dx)*cos(5*\dx*1.5)}); % f(x5)
    \draw[fill=blue!30, draw=blue, thick] ({5*\dx}, 0) rectangle ({6*\dx}, {1.5*exp(-0.5*6*\dx)*cos(6*\dx*1.5)}); % f(x6)

    % Signs
    \node at (0.25, 1.2) {$+$};     \node at (0.75, 0.8) {$+$};
    \node at (1.25, 0.3) {$+$};
    \node at (2.25, -0.3) {$-$};
    \node at (2.75, -0.6) {$-$};

    % Labels for width and height (approximated from image)
    \node[below] at (0.5, -0.2) {$f(x_1)\Delta x$};
    \node[below] at (1.5, -0.2) {$f(x_3)\Delta x$};
    \node[below] at (2.7, -0.8) {$f(x_5)\Delta x$};
\end{tikzpicture}
\end{document}
```

---

I've completed the conversion of all topics in your file to an Obsidian-ready format.

Would you like me to convert another set of notes, or do you have any specific questions about Antiderivatives or Definite Integrals?