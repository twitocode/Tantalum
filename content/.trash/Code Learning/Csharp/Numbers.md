**CreatedAt**:: Aug 06, 2023 - 18:01
**MOC**:: [[Csharp]]
# C# Numbers 
---
### Main Types
- Integer
	- int
	- long
- Rational
	- float
	- double
	- decimal

Numbers have a max in min value depending on their type
```csharp
int min = int.MinValue; //-214783647
int max = int.MaxValue; // 214783647

long newMin = long.MinValue; // -9223372036854775807
long newMax = long.MaxValue; // 9223372036854775807
```

Sometimes you have to force the compiler to recognize the type. In this example, the variable **x** is not the length of a **decimal** so the compiler makes it a float. You must force the compiler to treat it as a **decimal** with **M**

```csharp
decimal x = 0.1; //double
float y = 0.1; //double

decimal z = 0.1M; //decimal
float w = 0.1f; //float
```

### Random Tips
When using a number, use ++variable to retrieve and increment the variable
```csharp
Console.WriteLine("Second: " + value++);
```
### Math Namespace
The math namespace has some special variables and methods

```csharp
using System.Math;

var pi = Math.PI;

double x = 1232232.3232;
var squareRoot = Math.Sqrt();
```