**CreatedAt**:: Aug 09, 2023 - 12:59
**MOC**:: [[Csharp]]
# ToString

>[!Summary]
> Used to turn a value of type T into a string. 

Different types have their own way of turning itself into a string using `ToString();`

# Examples
```csharp
//For booleans, ToString auto-capitalizes
true.ToString() == "True"
false.ToString() == "False"
1.ToString() == "1"
'A'.ToString() = "A"

public class Person {
	public string Name { get; set; }
	public int Age { get; set; }
	
	public override string ToString() {
		return this.Name + " " + this.Age.ToString();
	}
}

Console.WriteLine(new Person("Tom", 14)); == "Tom 14"
```

> [!Pro Tip]
> Whenever you print a value in Csharp using WriteLine, under the hood it automatically uses the ToString method. 