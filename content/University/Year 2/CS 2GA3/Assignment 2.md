Toheeb Eji
400666188
ejit@mcmaster.ca
### Chapter 2: Instructions: Language of the Computer (16 Marks)

**1. Exercise 2.14 (4 Marks)** For instruction described by the following RISC-V fields:  

$$\text{opcode} = \text{0x33}, \quad \text{funct3} = \text{0x0}, \quad \text{funct7} = \text{0x20}, \quad rs2 = 5, \quad rs1 = 7, \quad rd = 6$$

provide:

- **a. (1 mark)** The instruction type
	This is a R-type instruction
- **b. (1 mark)** Assembly language instruction
    
- **c. (2 marks)** Binary representation
    

**2. Exercise 2.29 (4 Marks)** Implement the following C code in RISC-V assembly as one recursive routine. Please put comments in your code. The size of `int` is 4 bytes.

```
int fib(int n) {
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
    else
        return fib(n - 1) + fib(n - 2);
}
```

**3. (4 Marks)** Translate procedure `f` into RISC-V assembly language. The C code for `f` is:

```
int f (int g, int h, int i, int j) {
    return ((g + h) - i + ((g - h) + j));
}
```

Assume arguments `g`, `h`, `i`, `j` are in registers `x10`, `x11`, `x12`, `x13`. Return value should be in `x10`. Please put comments in your code. The size of `int` is 4 bytes.

**4. Exercise 2.40 (4 Marks)** Assume that for a given program $70\%$ of the executed instructions are arithmetic, $10\%$ are load/store, and $20\%$ are branch.

- **a. (2 marks)** Given this instruction mix and the assumption that an arithmetic instruction requires two cycles, a load/store instruction takes six cycles, and a branch instruction takes three cycles, find the average CPI.
    
- **b. (1 mark)** For a $25\%$ improvement in performance, how many cycles, on average, may an arithmetic instruction take if load/store and branch instructions are not improved at all?
    
- **c. (1 mark)** For a $50\%$ improvement in performance, how many cycles, on average, may an arithmetic instruction take if load/store and branch instructions are not improved at all?