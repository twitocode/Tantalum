---
CreatedAt: 2026-10-20
tags:
  - tutorial
class: CS 2GA3
---
questions 6, 7, 5 for midterm
question 8 for the exam


Question 8:
```nasm
.data

#32-bit architecture 
#i will decide where they are put in memory

# declare variables
dividd: .word 40 #dividend mem address = 0x1000000
diviss: .word 6  #divisor  mem address = 0x1000004        
quotient: .word 0          #mem address = 0x1000008
remainder: .word 0         #mem address = 0x100000C

.text
#load values into registeres
#lw t1, 0(dividd) wrong, this does lw t1, 0(0x40) not 0(1x1000000)

#la reg, addr. of var.
la t0, dividd #load the address of dividd into t0 = 0x1000000
lw t1, 0(t0) #load the value at t0 = 40

la t0, diviss
lw t2, 0(t0)

#divide

#div rd, rs1, rs2 rd = rs1 ÷ rs2
#rem rd, rs1, rs2 rd = rs1 % rs2
div t3, t1, t2 #t3 = 6
rem t4, t1, t2 #t4 = 4

# store into memory
la t0, quotient #holds the address of quotient
sw t3, 0(t0) #store 6 at the address of quotient

la t0, remiander  #holds the address of remainder
sw t4, 0(t0) #store 4 at the address of remainder
```

Retry with 64 bit and register names instead of ABI

Question 7:
-126 + -126 twos compliment

126 = 01111110
-126 = 10000010

1000 0010 + 
1000 0010 

= 1 0000 0100
= 0000 0100 **chop off overflow**

convert to decimal
000 0100
 = 2^2
 = 4

Question 6
saturing arithmetic - NO OVERFLOW NO 

8 bits - 2^8 - 1 = 255

range = 0 - 255
150 + 120 = 255 overflow 45
100 - 200 = 0 underflow 155
PLEASE TOHEEB REMEMBER THIS :)

151 + 214 = 365 -> 255

Bonus Question
minimum for any unsigned  = 0
maximum value = $2^n - 1$


Bonus question 2
4 bit twos compliment saturation range
= [-2^3, 2^3 - 1]

15/2 = 7.5
15-7 = 8

[0, 7] => high end
[-8, -1] => low end

= [-8, 7]v

Question 5
8 bit twos compliment saturating arithmetic
151 + 214

range  = [-128, 127] 
numbers arent in range but result is

1. convert from  decimal to binary
151 = 1001 0111
214 = 1101 0110

2. interpret the binary number as per two's complement


3. convert to decimal

1001 0111 = -105
1101 0110 = -42
1. subtract/add
-105 - (-42) = -63



