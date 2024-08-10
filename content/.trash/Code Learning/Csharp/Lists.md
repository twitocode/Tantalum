**CreatedAt**:: Aug 06, 2023 - 18:22
**MOC**:: [[Csharp]]
# C# Lists 
Lists are almost like arrays in C#. However, you are able to dynamically change the size of it.

```csharp
using System.Collections.Generic;

int[] array = { 1, 2, 3, 4 };
List<int> list = new List<int>() { 1, 2, 3, 4 };

int firstA = array[0];
int firstL = list[0];

int lengthA = array.Length;
int lengthL = list.Count;
```

### Fibonacci
```csharp
var previous = fibonacciNumbers[fibonacciNumbers.Count - 1];
var previous2 = fibonacciNumbers[fibonacciNumbers.Count - 2];

fibonacciNumbers.Add(previous + previous2);

foreach(var item in fibonacciNumbers)
{
    Console.WriteLine(item);
}
```
## Important Methods
---
### IndexOf
Use if you do not know where in the list the element is
```csharp
var list = new List<string>() { "Bro", "Fem" };

int index = list.IndexOf("Bro"); //0
```

### Sort
```csharp
var list = new List<int>() { 12, 434, 2, 1 };
list.Sort(); // 1, 2, 12, 434
```

### Min
Uses to find the minimum value in a list. Always returns an int.
```csharp
var list = new List<int> { 12, 434, 2, 1 };
int min = list.Min();

var newList = new List<int> { 
	new Person { Age: 10 },
	new Person { Age: 8 }
}

int minAge = list.Min(person => person.Age);
```