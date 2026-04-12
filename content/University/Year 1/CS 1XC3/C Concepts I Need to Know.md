
**The Compilation Process and Environment**

- [ ] **The Compilation Pipeline:** C is a compiled language, meaning source code goes through four distinct stages to become an executable: **preprocessing** (handles `#include` and `#define`), **compiling** (translates C to assembly), **assembling** (translates assembly to object code), and **linking** (combines object files with standard libraries).
- [ ] **Makefiles:** To manage multi-file programs, you learned to write Makefiles, which automate the compilation and linking process using rules, targets, dependencies, and shell variables.

**Basic Syntax, Data Types, and Operators**

- [x] **Syntax & Control Flow:** Unlike Python, C requires semicolons to terminate statements and uses curly braces `{}` to define code blocks. Control flow mechanisms include `if`/`else` statements, `switch` statements (which use computed jumps and require `break` keywords to prevent fall-through), loops (`for`, `while`, `do while`), and jump statements (`break`, `continue`, `goto`).
- [x] **Data Types:** You learned basic types like `int`, `float`, and `double` (which uses the IEEE 754 standard and should not be compared using `==` due to precision limits). C also features `enum` for creating named integer constants, `typedef` to create aliases for types, and `<stdint.h>` for fixed-width integers like `int32_t`.
- [x] **Character Arithmetic:** Characters (`char`) are stored as their underlying integer ASCII values, meaning you can directly perform mathematical operations on them.
- [x] **Operators:** C includes standard arithmetic operators, but notably, **integer division** truncates fractional parts if both operands are integers. You also learned about increment/decrement operators (`++`, `--`) 
- [ ] **Bitwise Operators** (`&`, `|`, `^`, `~`, `<<`, `>>`) for masking and manipulating individual binary bits.

**Arrays and Strings**

- [ ] **Arrays:** You covered 1D and multidimensional arrays (stored in row-major order), initialized them using designated initializers, and utilized Variable-Length Arrays (VLAs).
- [ ] **Strings:** In C, there is no distinct string type; strings are simply arrays of characters terminated by a **null character** (`\0`). You learned to differentiate between mutable character arrays (`char name[]`) and immutable string literals (`char *name`), and utilized the `<string.h>` library for operations like `strlen`, `strcpy`, `strcat`, and `strcmp`.

**Functions and Scope**

- [ ] **Function Architecture:** Functions require explicit return types, parameter types, and prototype declarations (usually placed in header `.h` files).
- [ ] **Pass by Value vs. Reference:** C strictly passes arguments by value (copying the value). However, by passing a **pointer** as an argument, you simulate pass-by-reference, allowing the function to directly modify the original variable in memory.
- [ ] **Type Qualifiers:** The `const` keyword makes variables read-only, `volatile` prevents the compiler from caching a value in a register, and `restrict` indicates that a pointer is the sole reference to a block of memory.
- [ ] **Storage Classes:** Variables are governed by storage classes that dictate their lifetime, scope, and linkage. `auto` is the default for local variables (destroyed after the block executes). `static` variables retain their value throughout the program's lifetime; at the local level, they persist across function calls, and at the file level, they hide variables/functions from other files (internal linkage). `extern` declares that a global variable is defined in another file.

**Pointers and Memory Management**

- [ ] **The C Memory Model:** Programs are divided into the **Stack** (local variables and function frames), the **Heap** (dynamically allocated memory), the **Data/BSS** segments (initialized and uninitialized global/static variables), the **Text** segment (executable machine code), and the **Rodata** segment (read-only data like string literals).
- [ ] **Pointers:** Pointers are variables that store memory addresses. You used the address-of operator (`&`) to find a variable's address and the indirection/dereference operator (`*`) to access the value at that address.
- [ ] **Pointer Arithmetic:** Because arrays decay to pointers, you can navigate them by adding or subtracting integers to pointers. The compiler automatically scales the arithmetic by the byte size of the underlying data type.
- [ ] **Advanced Pointers:** You explored complex pointer concepts, including pointers to pointers (used to modify an address passed to a function) and pointers to functions (used to pass functions as arguments, like in `qsort`).
- [ ] **Dynamic Memory Allocation:** Using `<stdlib.h>`, you learned to request memory on the Heap at runtime using `malloc` (allocates uninitialized bytes), `calloc` (allocates and zeroes out bytes), and `realloc` (resizes existing allocations). Every dynamic allocation must be explicitly released using `free()` to prevent **memory leaks**.

**Complex Data Structures and Organization**

- [ ] **Structs and Unions:** A `struct` groups related variables of different types into a single unit, while a `union` shares the exact same memory space for all its members, meaning only one member can be active at a time.
- [ ] **Abstract Data Types (ADTs):** You learned to use structs, pointers, and information hiding (via `static`) to build dynamic data structures like **Linked Lists**, **Stacks** (LIFO), and **Binary Search Trees (BST)**.
- [ ] **The Preprocessor:** You explored advanced preprocessor directives, including parameterized macros (`#define MAX(x,y)`), stringization (`#`), and token-pasting (`##`). You also heavily utilized conditional compilation (`#ifdef`, `#ifndef`, `#endif`) to create header guards and write portable code.
- [ ] **File I/O:** You learned how to read from and write to external files using `FILE *` streams. This included understanding open modes (`"r"`, `"w"`, `"a"`), reading/writing functions (`fgets`, `fprintf`), moving the file cursor (`fseek`, `rewind`), and flushing buffers (`fflush`).