# 4.9/5.4 Antiderivatives

### Definition
$F(x)$ is an **antiderivative** of $f(x)$ on an interval $I$ if $F'(x) = f(x)$ for all $x$ in $I$.

**Example:**
If $f(x) = x^2$, then an antiderivative is $F(x) = \frac{1}{3}x^3$.
Another one is $F(x) = \frac{1}{3}x^3 + 2$.

In general, the **most general antiderivative** is $F(x) = \frac{1}{3}x^3 + C$, where $C$ is any constant.

This represents a family of functions, all vertical shifts of each other.

```tikz
\begin{document}
  \begin{tikzpicture}[domain=-1.5:1.5, samples=50]
    % Axes
    \draw[->] (-2,0) -- (2,0) node[right] {$x$};
    \draw[->] (0,-2.5) -- (0,2.5) node[above] {$y$};
    
    % Curves
    \draw[color=green, thick] plot (\x, {\x*\x*\x/3 + 1}) node[right, font=\small] {$\frac{1}{3}x^3+1$};
    \draw[color=blue, thick] plot (\x, {\x*\x*\x/3}) node[right, font=\small] {$\frac{1}{3}x^3$};
    \draw[color=red, thick] plot (\x, {\x*\x*\x/3 - 1}) node[right, font=\small] {$\frac{1}{3}x^3-1$};
  \end{tikzpicture}
\end{document}