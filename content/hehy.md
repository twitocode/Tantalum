#### **Question 1**

Which of the following application types best describes an **Anti-Lock Braking System (ABS)** in a modern automobile[2][3]?

- A) Interactive transaction-based application
- B) Batch processing system
- **C) Embedded control system**
- D) Data collection system

---

#### **Question 2**

According to software engineering principles, which of the following is **NOT** one of the four essential attributes of good software[4]?

- A) Dependability & Security
- B) Maintainability
- C) **Profitability**
- D) Acceptability

---

#### **Question 3**

Consider the following Java code snippet:

```
int a = 1;
int b = a << 33; 
boolean flag = (a > 0) | (10 / 0 > 1); true

```

this is bitwise or not logical or

What will happen when this code executes?

- **A) It compiles and runs successfully, with `b = 2` and `flag = true`.**
- B) It throws an `ArithmeticException` at runtime due to the division by zero.
- C) It fails to compile because shift values cannot exceed 31.
- D) `flag` evaluates to `true` because of short-circuit evaluation.

---

#### **Question 4**

Based on sound object-oriented design and the **"is-a" relationship** rule[5], which of the following `Derived Class - Base Class` pairs makes logical sense[6]?

- A) `class Book extends Textbook`
- B) `class Lion extends Dog`
- C) `class Car extends Vehicle`
- D) `class Square extends Line`

---

#### **Question 5**

Consider the following classes in a media application[7][8]:

```
abstract class MediaItem {
    public abstract void play();
}
class Song extends MediaItem {
    @Override
    public void play() { System.out.println("Playing Song"); }
}
class Video extends MediaItem {
    @Override
    public void play() { System.out.println("Playing Video"); }
}

```

If we execute:

```
MediaItem item = new Video();
item.play();

```

Which mechanism causes `"Playing Video"` to be printed[9][10]?

- A) Method overloading resolved at compile time
- B) Static type resolution
- C) Dynamic dispatch based on the runtime type of the receiver object
- D) Data encapsulation

---

#### **Question 6**

When designing an object-oriented system, when is it appropriate to use an **interface** rather than an **abstract class**[10][11]?

- A) When you want to share concrete attribute state and default constructor logic.
- B) When you need to define a common identity template in a strict single-inheritance hierarchy.
- **C) When defining a common "can-do" capability across otherwise unrelated classes.**
- D) When you need to instantiate the type directly.

---

#### **Question 7**

Examine the following `try-catch-finally` block[12]:

```
public static int testException() {
    try {
        int x = 10 / 0;
        return 1;
    } catch (ArithmeticException e) {
        return 2;
    } finally {
        System.out.print("F ");
    }
}

```

What is printed to the console and what is the returned integer value when `testException()` is called?

- A) Prints nothing, returns `1`
- B) Prints `F`, returns `2`
- C) Prints `F`, throws uncaught `ArithmeticException`
- **D) Prints nothing, returns `2`**

---

#### **Question 8**

You are modeling a **university course registration system**[13]. Which of the following functions should be located **INSIDE** the core system boundary[13]?

- A) Campus classroom physical maintenance scheduling
- **B) Student course enrollment and schedule validation**
- C) External bank credit card payment gateway processing
- D) Provincial tax reporting

---

#### **Question 9**

In a UML class diagram, which relationship is depicted by a **dashed line with an open stick arrow** pointing to the target class[14]?

- A) Generalization (Inheritance)
- B) Aggregation
- C) Composition
- **D) Dependency**

---

#### **Question 10**

In UML modeling, what is the primary distinction between **Composition** and **Aggregation**[15][16]?

- A) Aggregation uses a solid diamond; composition uses a hollow diamond.
- B) In composition, the part's lifecycle is bound to the whole and cannot exist independently; in aggregation, parts can exist on their own.
- C) Composition represents an "is-a" relationship, whereas aggregation represents a "uses" relationship.
- D) Aggregation is strictly stronger and more restrictive than composition.

---

## **Part II: Short Answer Questions (2 Questions)**

### **Question 11: Java Constructor Chaining & OOP Analysis**

Consider the following two classes:

```
public class Room {
    private int chairs;
    private double area;

    public Room(int chairs, double area) {
        this.chairs = chairs;
        this.area = area;
    }
}

public class LabRoom extends Room {
    private int computers;

    public LabRoom(int chairs, double area, int computers) {
        // LINE A (Fill in the blank)
        this.computers = computers;
    }
}

```

1. **Code Completion:** Provide the exact line of code that must replace `// LINE A` so that `LabRoom` properly initializes the inherited instance variables using the `Room` constructor[17][18].
2. **Concept Identification:** Which core OOP concept is demonstrated by `LabRoom` acquiring the state and behavior of `Room`[19][20]?
3. **Data Integrity:** Explain why the fields `chairs` and `area` were declared `private` in `Room` rather than `public`, and state which OOP concept this enforces[8][9].

---

### **Question 12: UML Sequence Diagram Reading & Interpretation**

Refer to the following scenario represented in a UML sequence diagram[21][22]:

```
   aController           aTripManager           aTripEntity
        |                     |                      |
        |--- 1: create ------&gt;|                      |
        |                     |-- 2: &lt;
```