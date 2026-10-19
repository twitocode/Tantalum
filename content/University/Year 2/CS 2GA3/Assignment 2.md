Name: Toheeb Eji
Student ID: 400666188
Mac ID: ejit
### Chapter 2: Instructions: Language of the Computer (16 Marks)

**1. Exercise 2.14 (4 Marks)** For instruction described by the following RISC-V fields:  

$$\text{opcode} = \text{0x33}, \quad \text{funct3} = \text{0x0}, \quad \text{funct7} = \text{0x20}, \quad rs2 = 5, \quad rs1 = 7, \quad rd = 6$$

provide:

- **a. (1 mark)** The instruction type
	This is a R-type instruction
- **b. (1 mark)** Assembly language instruction

	```nasm
	sub x6, x7, x5
	```
- **c. (2 marks)** Binary representation
    opcode = $3 \cdot 16 + 3 = 51_{10} =  0110011_{2}$
    funct3 = $0 = 000_{2}$
    func7 = $2 \cdot 16 = 32_{10} = 0100000_{2}$
    rs2 = $00101_{2}$
    rs1 = $00111_{2}$
    rd = $00110_{2}$
    Binary representation = 0100 0000 0101 0011 1000 0011 0011 0011

**2. Exercise 2.29 (4 Marks)** Implement the following C code in RISC-V assembly as one recursive routine. Please put comments in your code. The size of `int` is 4 bytes.

```c
int fib(int n) {
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
    else
        return fib(n - 1) + fib(n - 2);
}
```

Assembly:
```nasm
fib:   #label of the fib procedure
  addi sp, sp, -12  # adjust the stack for 3 items
  sw x1, 4(sp)      # store the return address in the stack 
  sw x10, 0(sp)     # store the argument n
  
  addi x29, x0, 1   # used for beq comparison 
  beq x10, x0, B0   # if n == 0 go to the first base case
  beq x10, x29, B1  # if n == 1 go to the second base case
   
  addi x10, x10, -1 # store n - 1 for the first recursive call
  jal x1, fib       # get the result of f(n - 1)
  sw x10, 8(sp)     # store the result of fib(n - 1) as fib(n - 2) would override
  
  lw x10, 0(sp)     # restore the orignal value of n
  
  addi x10, x10, -2 # store n - 2 for the second recursive call
  jal x1, fib       # get the result of f(n - 2)
  
  lw x28, 8(sp)     # restore fib(n - 1)
  add x10, x10, x28 # get fib(n - 1) + fib (n - 2)
  
  lw x1, 4(sp)      # restore the original return address
  addi sp, sp, 12   # pop 3 items from the stack
  jalr x0, 0(x1)    # returns back to the point in the eprogram where the procedure was called

B0:                 # label for the first base case  n == 0
  lw x1, 4(sp)      # reload the return address 
  addi sp, sp, 12   # pop 3 items from the stack
  addi x10, x0, 0   # return 0
  jalr x0, 0(x1)    # return to the caller
  
B1:                 # label for the second base case n == 1
  lw x1, 4(sp)      # reload the return address 
  addi sp, sp, 12   # pop 3 items from the stack
  addi x10, x0, 1   # return 1
  jalr x0, 0(x1)    # return to the caller 
  
```
**3. (4 Marks)** Translate procedure `f` into RISC-V assembly language. The C code for `f` is:

```c
int f (int g, int h, int i, int j) {
    return ((g + h) - i + ((g - h) + j));
}
```

Assume arguments `g`, `h`, `i`, `j` are in registers `x10`, `x11`, `x12`, `x13`. Return value should be in `x10`. Please put comments in your code. The size of `int` is 4 bytes.
```nasm
f: #label for f
  sub x28, x10, x11 # g - h
  add x28, x28, x13 # (g - h) + j
  
  add x29, x10, x11 # g + h
  sub x29, x29, x12 # (g + h) - i
  
  add x10, x29, x28 # ((g + h) - i + ((g - h) + j))
  
  jalr x0, 0(x1) # exit out of the ufnction
```

**4. Exercise 2.40 (4 Marks)** Assume that for a given program $70\%$ of the executed instructions are arithmetic, $10\%$ are load/store, and $20\%$ are branch.

- **a. (2 marks)** Given this instruction mix and the assumption that an arithmetic instruction requires two cycles, a load/store instruction takes six cycles, and a branch instruction takes three cycles, find the average CPI.
$$
\begin{align}
\text{CPI} &= \sum^{4}_{i = 1}(\text{Relative Frequency} \cdot CPI_{i}) \\
&= 0.7(2) + 0.1(6) + 0.2(3) \\
&= 2.6 \ ~~~~
\end{align}

$$
- **b. (1 mark)** For a $25\%$ improvement in performance, how many cycles, on average, may an arithmetic instruction take if load/store and branch instructions are not improved at all?
    $$
    \begin{align}
      \text{New CPI} &= \frac{\text{Old CPI}}{1.25} \\ \\
      &= 2.08 \\
      2.08 &= 0.7(x) +  0.1(6) + 0.2(3)  \\
      \frac{2.08 - 0.1(6) - 0.2(3)}{0.7} &= x \\
      &= 1.2571428571 \\
      &\approx 1.26
    \end{align}
    $$
    
- **c. (1 mark)** For a $50\%$ improvement in performance, how many cycles, on average, may an arithmetic instruction take if load/store and branch instructions are not improved at all?
- 
  $$
    \begin{align}
      \text{New CPI} &= \frac{\text{Old CPI}}{1.5} \\ \\
      &= 1.73 \\
      1.73 &= 0.7(x) +  0.1(6) + 0.2(3)  \\
      \frac{1.73 - 0.1(6) - 0.2(3)}{0.7} &= x \\
      &= 0.7571428571 \\
      &\approx 0.76
    \end{align}
    
  $$