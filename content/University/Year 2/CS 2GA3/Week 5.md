---
CreatedAt: 2026-10-06
tags:
  - tutorial
class: CS 2GA3
---
```asm
.data
MemArray: . word 0
          .word 1
          ...
          .word 100
```

```nasm
.text
  addi x6, x0, 0    //i
  addi x5, x0, 0    //result
  addi x29, x0, 100 //end of loop 
  
Loop: lw x7, 0(x10) //load value
      add x5, x5, x7 //add loaded value to result
      addi x10, x10, 4 //shift - change address of current word
      addi x6, x6, 1 //incrementer
      blt x6, x29, Loop
   
```

i: x6, result: x5, x10: base address
Q1: what does this do in C?
```c
int i = 0;
int result = 0; //initalization block

for i = 0; i < 100: i++ {
	value += MemArray[i];
}
```


Q2: Convert to asm

```c
int g(int a, int b);
     //args[0] and args[1]
int f(int a, int b, int c, int d) {
	g(g(a, b), c + d)
	//compute 1st - g(a, b) and 2nd - (c + d)
    //then compute g(1st, 2nd)
}

//a = x10, b = x11, c = x12, d = x13
```

```nasm
f: addi x2, x2, -8  //allocating space for the stack pointer
   sw x1, 0(x2)     //same ra (old sp location)
   add x5, x12, x13 //c +d
   sw x5, 4(x2)     //store on stack

   jal x1, g        //x10 = g(x10, x11), jal returns in x1 whether the result was successful
   
   lw x11, 4(x2)    //load from stack
   jal x1, g        //x10 = g(g(a, b), c + d)
   lw xl, 0(x2)     //get ra
   addi x2, x2, 8   //set sp back to ra (previous sp location)
   jalr x0, 0(x1)

```


Q3: what is in x6 given addresses at 2000, 2001 form halfword value 1000
```nasm
addi x5, x0, 2000 //initialize x5 to 2000
lh x6, 0(x5)      //load halfword at address x5 - 2000 into x6, it loads (x5) and (x5 + 1)
addi x6, x6, 24    //adds 1000 and 24 = 1024
```

Q4: concurrency
```c
void setmax(int *shvar, int y) {
	//Begin CS
	if (y > *shvar) {
	    *shvar = y;
	}
	//End CS
}
```

x10 = `*shvar`
x11 = `y`

```nasm
setmax: try:
		lr.w x5, (x10) //x10 is stored in x5 and x10 is reserved (locked)
		bge x5, x11, release
		addi x5, x11, 0
		
release:
	sc.w x7, x5, (x10) //if there is no reservation then = non zero, otherwise 0
	bne x7, x0, try
	jalr x0, 0(x1) //return it


```