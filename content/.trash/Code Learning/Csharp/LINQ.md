**CreatedAt**:: Aug 09, 2023 - 14:35
**MOC**:: [[Csharp]]
# LINQ

>[!Summary]
>Language-Integrated Query (LINQ) is the name for a set of technologies based on the integration of query capabilities directly into the C# language

# Commonly used Methods
---
## Average
Used to find the average of all elements in a list
```csharp
var list = new List<int>();
var average = list.Average();

var newList = new List<Person>();
var average = newList.Average(x => x.age)
```


- [x] 