```tikz
\begin{document}

\begin{tikzpicture}[scale=1.2]
\draw[->] (-0.5,0) -- (4,0) node[right] {$x$};
\draw[->] (0,-0.5) -- (0,4) node[above] {$y$};
\draw[help lines, gray!30] (0,0) grid (4,4);

% Basis vectors
\draw[->, thick, blue] (0,0) -- (1,0) node[below] {$\mathbf{v}_1$};
\draw[->, thick, blue] (0,0) -- (0,1) node[left] {$\mathbf{v}_2$};

% Scaled vectors
\draw[->, thick, red] (0,0) -- (2,0) node[below] {$2\mathbf{v}_1$};
\draw[->, thick, red] (2,0) -- (2,3) node[right] {$3\mathbf{v}_2$};

% Result
\draw[->, very thick, purple] (0,0) -- (2,3) node[midway, above left] {$2\mathbf{v}_1 + 3\mathbf{v}_2$};
\fill[purple] (2,3) circle (2pt);
\end{tikzpicture}
\end{document}
```


