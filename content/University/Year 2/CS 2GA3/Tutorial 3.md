---
CreatedAt: 2026-09-22
tags:
  - tutorial
class: CS 2GA3
---
Q1

```c
f = g + (h - 5); x5, x6, x7
```

```
addi is add immediate

addi x5, x7, -5
add x5, x5, x6
```

if it was 
```c
f = g - (h - 5)
```

```asm
addi x5, x7, -5
sub x5, x6, x5
```

Q2

```c
B[8] = A[i - j]; 

i, j -> x28, x29; 
A, B -> x10, x11
```

32bit
```asm
find index
sub x30, x28, x29
slli x30, x30, 2
add x3 x10, x30

lw x30, 0(x3) 
sw x30 32(x11)
```

lw -  load word
sw - store word

64bit
```asm
find index
sub x30, x28, x29
slli x30, x30, 3
add x3, x10, x30

ld x30, 0(x3)  - 0(x3) = part of memory (0) + the offset (x3)
sd x30 64(x11)
```

ld -  load doubleword
sd - store doubleword


Q3
```c
B[8]  = A[i] + A[j]
i, j -> x28, x29
```

32 bit
```asm
slli x28, x28, 3
add x12, x10, x28
lw x3, 0(x12)
slli x29, x29, 2
add x13, x10, x29
lw x4, 0(x13)
add x30, x3, x4
sw x30 32(x11)
```

64 bit 
```asm
slli x28, x28, 3
add x12, x10, x28
ld x3, 0(x12)
slli x29, x29, 3
add x13, x10, x29
ld x4, 0(x13)
add x30, x3, x4
sd x30 64(x11)
```



a












