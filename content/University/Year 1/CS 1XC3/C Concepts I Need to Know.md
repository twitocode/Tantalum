
Based on the **Final Exam Review Session** and the comprehensive lecture materials from **CS 1XC3**, here is the integrated summary of the core concepts for your final exam preparation.

---

## 1. The C Memory Model & Storage Classes

Every piece of data in a C program resides in a specific memory segment, which dictates its **lifetime**, **scope**, and **linkage**.

|**Segment**|**What lives here?**|**Lifetime**|**Scope**|
|---|---|---|---|
|**Stack**|Local variables, function parameters|Function call $\rightarrow$ return|Block|
|**Heap**|`malloc`, `calloc`, `realloc`|Until you `free()` it|Accessible via pointer|
|**Global/Static**|Global variables, `static` locals|Entire program|File or Block|
|**Code (.text)**|Compiled machine instructions|Entire program|N/A|
|**Read-Only (.rodata)**|String literals like `"hello"`|Entire program|N/A|

### Key Storage Class Distinctions

- **`static` (Local):** Initialized **once** and persists across function calls. It lives in the Global/Static segment, not the stack.
    
- **`static` (Global/File):** Restricts the variable or function to that specific `.c` file only (**internal linkage**).
    
- **`extern`:** Tells the compiler a variable is defined in another file (**external linkage**).
    
- **`const`:** Creates a read-only variable. Note that `const int *p` (pointer to const) differs from `int * const p` (const pointer).
    

---

## 2. Pointers and Memory Management

### Pointer Arithmetic & Casting

When you add an integer to a pointer, C advances it by `sizeof(type)` bytes.

- `int *p; p + 1;` advances **4 bytes**.
    
- `char *p; p + 1;` advances **1 byte**.
    
- **Casting:** Changing a pointer type (e.g., `int*` to `char*`) doesn't change the address, but it changes the **step size** of arithmetic.
    

### Dynamic Allocation (`<stdlib.h>`)

|**Function**|**Purpose**|**Initialization**|
|---|---|---|
|**`malloc(size)`**|Allocates `size` bytes|Contains garbage values|
|**`calloc(n, size)`**|Allocates `n * size` bytes|**Initializes to zero**|
|**`realloc(ptr, size)`**|Resizes existing allocation|Preserves old data|

**Crucial:** Always `free()` heap memory to avoid **memory leaks**. When freeing a struct with pointer fields, free the "inner" pointers **before** the "outer" struct pointer.

---

## 3. Data Structures: Structs, Unions, & Lists

- **Structs:** Every member has its own independent memory space. `sizeof` is the sum of members plus potential padding.
    
- **Unions:** All members **share the same memory**. Its size is that of its largest member.
    
- **Linked Lists & Stacks:**
    
    - **Linked List:** A collection of nodes where each points to the next. Use a `temp` pointer when freeing to avoid "use-after-free" errors.
        
    - **Stack:** A **LIFO** (Last-In, First-Out) structure. Can be implemented via fixed-size arrays or dynamic linked lists.
        

---

## 4. The Compilation Pipeline & Tools

C programs go through four stages:

1. **Preprocessing (`gcc -E`):** Expands macros and includes headers.
    
2. **Compilation (`gcc -S`):** Translates C to assembly language.
    
3. **Assembly (`gcc -c`):** Creates machine-code **object files** (`.o`).
    
4. **Linking (`gcc`):** Combines `.o` files and libraries into an **executable**.
    

### Makefiles & GDB

- **Makefiles:** Use targets, dependencies, and recipes (which **must** start with a Tab).
    
- **GDB:** Requires the `-g` flag during compilation. Common commands: `break` (set pause point), `run`, `next` (step over), `step` (step into), and `print`.
    

---

## 5. Preprocessor & Macros

- **Macros:** Pure text substitution performed before compilation.
    
- **Parenthesis Trap:** Always use `((x) * 2)` instead of `(x * 2)` to ensure correct order of operations.
    
- **Header Guards:** Use `#ifndef HEADER_H` to prevent "conflicting types" errors from double-inclusion.
    

---

## 6. File I/O (`<stdio.h>`)

- **Pattern:** Open $\rightarrow$ Check (for `NULL`) $\rightarrow$ Read/Write $\rightarrow$ Close.
    
- **Modes:** `"r"` (read), `"w"` (write - **truncates/erases file**), `"a"` (append).
    
- **Functions:** `fgetc` (char), `fgets` (line - keeps `\n`), `fscanf` (formatted), `fprintf` (write formatted).
    
- **Buffering:** Use `fflush(stdout)` to force output to appear immediately, which is vital for debugging crashes.
    

---

## 7. Strings & I/O Formatting

- **Strings:** Character arrays ending in `\0`.
    
- **`printf`/`scanf` Specifiers:**
    
    - `%d`: Integer | `%f`: Float | `%lf`: Double.
        
    - `%c`: Single character | `%s`: String (up to `\0`).
        
- **Quotes:** `'A'` is a single character (integer ASCII value); `"A"` is a string (array of `'A'` and `'\0'`).