---
CreatedAt: 2026-10-27
tags:
  - tutorial
class: CS 2GA3
---
Q1: 0x0C000000 to float

convert to binary (single preceision in this case)
0000 1100 0000 0000 0000 0000 0000 0000 0000

extract components


0 00011000  000000000000000000000000000

sign = 0 => +
exponent = 00011000
mantissa =  000000000000000000000000000

exponent = 24 - 127 = -103
value = $+ (1.0)^{-103}_{2}$ in binary

Q2: $63.25_{10}$ in single precision
1 sign bit + 8 exponent bits + 23 mantissa bits

63 = a
25 = b

a = 111111
b = .01
$63.25_{10}$  = $111111.01_{2}$

=$1.1111101_{2} \cdot 2^{5 + 127 \text{ bias}}$
=$1.1111101_{2} \cdot 2^{132}$

exponent = 1000 0100
sign = 0
mantissa = 1111 1010 0000 0000 0000 0000

final form = 0100 0010 0111 1101 0000 0000 0000 0000

Q3: $63.25_{10}$ in double precision
1 sign bit + 11 exponent bits + 52 mantissa bits

=$1.1111101_{2} \cdot 2^{5 + 1023 \text{ bias}}$
=$1.1111101_{2} \cdot 2^{1028}$

exponent = 
sign = 0
mantissa = 1111 1010 0000 0000 0000 0000...

0100 0000 0100 1111 1010 0000...

Q4 Half precision IEEE-754 2008
1 sign bit + 5 exponent bits + 10 mantissa bits, bias is 15

-1.5625 x $10^{-1}$
= -0.15625 x $10^{0}$

a = 0
b = .15625 
   = 0101

= -0.15625 x $10^{0}$
= $-0.00101 \cdot 2^0$  in binary
= $-1.01 \cdot 2^{-3}$  in binary
exponent = -3 + 15 binas = 12
sign = 1
mantissa = 01

=> 1 0 1100 0100 0000 00
=> 1011 0001 0000 0000


Q5: Floating point arithmetic
G - guard
R - round
S - sticky

$2.625 \cdot 10^1$ + $4.150390625 \cdot 10^{-1}$ in half bit precision, Assume 1G, 1R, 1S
$2.625 \cdot 10^1 = 25.125 \cdot 10^0 \to 11010.001 \cdot 2^0 \to  1.1010001 \cdot 2^4$
$4.150390625 \cdot 10^-1 = 0.4150396025 \cdot 10^0 \to 0.011010100111 \cdot 2^0 \to 1.1010100111 \cdot 2^{-2}$

shift smaller number exponent to larger number exponent

`              `
`1.1010 001000 000`
`0.0000 011010 100 [111]`
`________________________`
`1.1010 100010 11`
$1.101010001011 \cdot 2^4$
 = $11010.10001011 \cdot 2^0$
 = 26.546875

Q6:
x12 $\in$ RISCV-32I; x12 = -6
		*riscvI has negatives stored in 2's compliment*
		
a) what is x12 in hexadecimal

-6 = 110 = 0000 0000 0000 0000 0000 0000 0000 0110
	     = 1111 1111 1111 1111 1111 1111 1111 1010
-6 = 0xFFFFFFA

b) `srai x12, x12, 1` what is x12 in hexadecimal and decimal

srai - shift right arithmetic immediate (shift right and add (x = 1))
1111 1111 1111 1111 1111 1111 1111 1010 -> 1111 1111 1111 1111 1111 1111 1111 1101

2s compliment -> 0000 0000 0000 0000 0000 0000 0000 0011
convert to decimal
x12 = -3



