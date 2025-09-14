---
CreatedAt: 2025-09-14
class: CS 1JC3
tags:
  - "#classnote"
---
# Number System
## Families of Number Systems
**All are infinite**
1. $\mathbb{N} = \{0,1,2,\dots \}$
2. $\mathbb{Z} = \{\dots, -2, -1, 0,1,2,\dots \}$
3. $\mathbb{Q}$ = rational numbers
4. $\mathbb{R}$ = real numbers
5. $\mathbb{C}$ = complex numbers
6. $\mathbb{Z}_{n}$ = modular integers for solving arithmetic modulo $n$ where $n \geq 1$ (Clock arithmetic)
	- $3 +5 = 2\text{ in } \mathbb{Z}_{6}$![[Pasted image 20250914151012.png]]

## More and more subsets
each group is a subset of the other
$\mathbb{Z}_{n} \subseteq \mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}$
They all have addition and multiplication in each number system


# Numeral Systems
**Numeral Systems** are a writing system for expressing numbers
- Roman numerals
- Hindu-Arabic Numerals
	- Introduced to Europse by Leonardo of Pisa (Fibonacci)

## Mohammad Al-Khwarizmi
aka Algoritmi
- he made a method called algorism
	- the word algorithm comes from him
	- he introduced arithmetic based on the Hindu-Arabic numeral system to the Middle East and Europe
- He also showed how to solve all linear and quadratic equations in an algebraic way and justified it with geometry (the greeks only knew geometry)'
	- His book *al-jabr* (algebra)

## Decimal vs Binary

|        | Decimal | Binary |
| ------ | ------- | ------ |
| Digits | 0-9     | 0, 1   |
| Base   | 10^X    | 2^x    |

## Representation of Numbers in different bases
$$
(a_n a_{n-1} \dots a_1 a_0)_b = \sum_{k=0}^{n} a_k b^k
$$

bases used in computing are 2, 10, and 16

Hexadecimal allows us to represent binary numbers in a compact way, 
- ex - you see this in visual studio memory editor to show pointers.

## How do we represent infinite number systems on computers?
 1. Represent each member of the system using a *fixed number of bits*
	- 64 bit computer is used to manipulate 64 bit numbers, it has a very good space an time complexity.
		- can only represent $2^{64}$ bits
2. Represent each member of the system using an *unbounded number of bits*
	- every member can be represented
	- it is has a very bad space and time complexity.

## Machine Integers
- Integers are represented with a fixed number of bits.
- Computers use two's complement bits using $2^n$ bits
	- Has one 0; $2^{n - 1} - 1$ positives and $2^{n-1}$ negatives
	- ![[Pasted image 20250914154828.png]]
	 - To negate a number
		- invert its bits and add 1
			- $x + (-x) = 0$
	- addition and multiplication are performed using *modular arithmetic* 
- **arithmetic operations on machine integers can cause overflow**
![[Pasted image 20250914154343.png]]

# Floating Point Numbers
Rational numbers are represented in base 2 scientific notation with a fixed number of bits
$$\pm 1.m *2^e$$
where $1.m$ is called the *mantissa* and $e$ is the *exponent*

**Single-precision floating numbers (floats)** use 32. bits with 1 bit for the sign, 23. bits for the (unsigned) mantissa, and 8 for the (signed) exponent.
**Double-precision float numbers (doubles)** are the same but use 32 bits.
- signed = - or +
- unsigned = none
```haskell
23.678, -0.04
69.78e-20
```

Since $(0.1)_{10} = (0.000110011000\dots)$ in base 10, 0.1 cannot be represented exactly as a floating point number

We cannot represent 0

## Arithmetic
arithmetic operations on floating point numbers **return the float point number that is the best approximation to the true value**

**-0.0** or **0.0** is returned if the result is too close to zero to be represented (**underflow**)
**Infinity** is returned if the result is too large be represented(**positive overflow**)
**-Infinity** is returned if the result is too small to be represented (**negative 
**NaN** or not a number is returned if the result is not defined (**√-1**) 

> [!NOTE]
> Float point numbers can produce inaccurate or insane results because of the lack precision
> ___
> addition and multiplication are not associative
> - $(a + b) + c = a + (b + c)$
> - $(a \times b) \times c = a \times (b \times c)$
