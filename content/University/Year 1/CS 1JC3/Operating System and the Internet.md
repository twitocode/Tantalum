---
CreatedAt: 2025-10-21
class: CS 1JC3
tags:
  - "#classnote"
---
# Alan Turing
Mathematician, logician, and computer scientist
- Created the **Turing machine**
- **Proved that there were undecidable decision problems with Alonzo Church**
- broke the code of the German **Enigma machine** in WW2
	- Designed the **Automatic Computing Engine** (ACE).
	- Was interest in AI after WW2. Created the **Turing Test** (the imitation game) for determining whether a software system exhibits intelligence.![[Pasted image 20251027180126.png]]
		- The tester asks the machine and the human questions. if the tester cannot tell which is machine, then the machine is intelligent. 
	- The **Turing award** is the highest award in computing
# Characters
Characters represent **graphemes** (the units of a writing system)
Characters are represented using ASCII  or Unicode

ASCII
- american only
- 128 characters (94 printable, space, 33 non-printable)
	- non-printable characters are like "\n" - new line
Unicode
- is intended to represent the graphemes of the world's major writing systems
- characters are represented by 8, 16 or 32 bits
# Operating Systems
**Operating Systems** are software that control the operations a computer and enables programs to be executed
- **Kernels** control the computer's hardware
	- provides a set of system calls that give application programs access to the computer's resources
	- *Runs in an infiniteeeeeeeee loooooooooop*
	- Provides
		- I/O device management
		- Program execution
		- Memory management
		- File system management
- **System Programs** provide critical applications for the use of the computer

## Graphical User Interfaces (GUI)
Enables user to access the OS/Program via a graphical display
Display consists of a **root window** and other windows and objects within the root window

GUI events are initiated by mouse or keyboard - are dependent on what the input is focused on.
- are handled as they happen

Are easy to use but are resource intensive
## Command-Line Interfaces (CLI)
Enables the user to access the OS/program via a interactive text-oriented program in a shell
A shell provides a **read-execute-print loop** in which
1. a command is typed and is **read**
2. the command is then **executed**
3. the results are **printed**

Shell scripts can package commands together (.sh, .bash, etc.)
Very hard to use
## Files
A finite sequence of data (characters or bits) stored on a persistent data storage device.
- txt files
- binary failes
- .exe, .docx, etc
- Allows for the sharing of data
- Can be very large (TB of data)
- Can be used by programs for input and output
	- are way more efficient for this compared to other data structures
### File Systems
Files are stored in a recursive structure called a **file tree** which consists of Files and Folders/Directories
- the top level is called the **root directory**
- can be references by
	- absolute - C://hey
	- relative - ../hey
	-
## Processes
**Processes** are application programs that execute on the computer
Each process is run on of the CPUs using time sharing
![[Pasted image 20251027182311.png]]
- A process is given control of the CPU for a time period called a **time slice**
	- Then it is **suspended** at the end of the time slice, its context is saved, then another process is given control of the CPU. This is a **process context switch**
	- The process is given control of the CPU again the next time it is scheduled. 
- Can be in these states
	- Executing
	- Blocked - waiting for some event to happen
	- Ready - Waiting for control of the CPU
	- Finished
 - Each is given a **virtual address space** to hold the program's code and data
 - 
# Physical Networks
# Internet
## Internet Architecture
## Structure of the Internet
## TCP/IP
## Internet Services
## DARPA

## IP Addresses

## Internet Protocol

## Transmission Control Protocol TCP
