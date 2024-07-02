# Latex Guide

## Chèn hình ảnh

```latex
\begin{figure}
\centering
\includegraphics[width=1\linewidth]{[1]}
\caption{[2]}
\label{fig:[3]}
\end{figure}
```

trong đó:

- [1] là đường dẫn tương đối tới hình ảnh, tính từ thư mục tài liệu
- [2] là tiêu đề hình ảnh
- [3] là nhãn để tham chiếu

Khi muốn tham chiếu, sử dụng

```latex
~\ref{fig:[3]}
```

## Chèn công thức

```latex
\begin{equation}\label{[2]}
    [1]
\end{equation}
```

trong đó:

- [1] là biểu diễn công thức toán học
- [2] là nhãn để tham chiếu

Khi muốn tham chiếu, sử dụng

```latex
\eqref{[2]}
```
