**CreatedAt**:: Aug 10, 2023 - 15:59
**MOC**:: [[Csharp]]
# Enumerable Collections

>[!Summary]
> [Namespace](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic?view=net-7.0)

# Most Important Data Structures
[Dictionary](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2?view=net-7.0)
[LinkedList](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.linkedlist-1?view=net-7.0)
[List](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=net-7.0)
[Queue](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.queue-1?view=net-7.0)
[Stack](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.stack-1?view=net-7.0)
[Hashset](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.hashset-1?view=net-7.0)

# Tips
Never return null for collections
```csharp
//Do not do this
return null;

//Do this
return Enumerable.Empty<Person>();
```