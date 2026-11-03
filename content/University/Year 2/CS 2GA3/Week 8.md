---
CreatedAt: 2026-11-03
tags:
  - tutorial
class: CS 2GA3
---
**Based on week 8 tutorial slides**

Exercise 1
a) blue control lines
b) 
ALUsrc: 0 we are not using immediate just reading from 2nd register
ALUop: "and" -> 0000; bitwise and
RegWrite: true -> 1

MemRead: false -> 0
MemWrite: false -> 0 
MemToReg: false -> 0
because not dealing with memory

c)
**useful** output**:
Registers
ALU
ALU Src multiplexer
MemToReg multiplexer

no output:  --trick question
all blocks produce output -- just not useful output because of control signals

not used - memory, immediate

Exercise 2:

00c6aa23 = 0000 0000 1100 0110 1010 1010 0[010 0011] -- opcode (s type)
` imm[11:5]  rs2     rs1     f3  imm[4:0]  opcode`
`[0000 000][0 1100][ 0110 1][010][1010 0][010 0011]`
`    0       x13     x12     sw  10100    s-type`

a)
ALUop: 00 -> addition
ALU control line: 0010 -> with funct3 to dtermine specific action (sw). 00 is funct7 10 is funct3

b) new PC = 0x00c6aa23 + 4
C)

**ALUsrc:** 
input -  Reg[x12] or 0x14

**MemToReg**: 
input = Reg[x13] + 0x14 or` <undef>` -> undef

PCSrc: input = PC + 4 or PC + 0x28 -> PC + 4