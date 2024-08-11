**CreatedAt**:: Aug 07, 2023 - 17:55
**MOC**:: [[Csharp]]
# C# Strings
There are different types of strings in C#.
1. Normal String "Hello"
2. Verbatim String @"Hello"

A **verbatim string literal** will keep all whitespace and characters without the need to escape the backslash. To create a verbatim string, use the `@` directive before the literal string. 
Used for **Multi-line strings** and **keeping the string exactly how it was, aka Verbatim**

```csharp
Console.WriteLine(@"    c:\source\repos    
        (this is where your code goes)");
// This will produce:
c:\source\repos    
        (this is where your code goes)
```

C# string have many special characters that do things in non-verbatim strings. \" allows for " in strings. \t creates a tab without tabbing manually.