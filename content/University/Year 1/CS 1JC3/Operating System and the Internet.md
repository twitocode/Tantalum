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
	 - When running
		 - The VAS is mapped to RAM as needed
	 - When not running
		 - The VAS is mapped to secondary storage 
	 - It is not necessary that the entire VAS space fits into RAM
# Physical Networks
A set of computes that exchange digital information with each other via a physical medium
- Connected via a **network interface**
- Wired vs wireless
- Connection-oritented vs connectionless
- LAN vs WAN
- Bus, ring, star, and point-to-point technologies
![[Pasted image 20251027184636.png]]
# Internet
A virtual network based on
- the **internet architecture**
- the **TCP/IP Internet Protocol Suite**
the global Internet is *an internet* that serves as a universal virtual network
## Internet Architecture
consists of 
- a set of physical networks
- routers that connect the networks together
- edges are network interfaces
- hosts are computers
![[Pasted image 20251027185219.png]]
## Structure of the Internet
The internet has 2 layers
- Heterogenous collection of underlying **physical networks**
	- **Physical addresses** are assigned according to schemes which vary from one network technology to another
- Homogenous **virtual network** implemented using *TCP/IP* protocol software on top of the physical network
	- **IP Addresses** are assigned according to a scheme that is uniform across the internet
## TCP/IP
Consists of a set of **communication protocols** for communicating across interconnected physical networks. 
- hardware independen
- universal connection
- communication is end-to-end, rather than router-to-router
## Internet Services
Each service is specified by a communication protocol
- network levelogin
	- connectionless packet via IP
	- reliable stream transport via TCP
- application level
	- email - smtp
	- file transfer - ssh
	- remote login - ssh
	- web - http
## DARPA

## IP Addresses

## Internet Protocol

## Transmission Control Protocol TCP
