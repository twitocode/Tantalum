---
CreatedAt: 2025-11-05
tags:
  - lecture
class: CS 1MD3
---
```python
d = {}
L = [""]
type(d)

len(d)
L[0] = "William Farmer"
d["William"] = "Farmer"
print(d)

d["William"] = "Okay professor" 
print(d)
d["William"]  = ["Farmer", "Okay professor"]
d["William"].append("Nylander")

d[False] = 0
d[1] = 1
d["2"] = 2
#d[[3]] = 3 anything that is multable cannot be a key

t = (1, 2)
print(t[0])
print(len(t))

t = ()
type(t) == tuple

singleton = (4)
type(singleton) == int

singleton = (4,)
type(singleton) == tuple

d[()] = 4
print(d[()])

del d[()]
print(d)

birthdays = {}
birthdays["Oct"] = {}

birthdays["Oct"][4] = ["Me"]
birthdays["Oct"][4].append("Dakota Johnson")

d[True] = "blah"
True == 1

d.pop(True)
print(d)

list(d.keys())
list(d.values())

for v in d.values():
    print(v)
for k in d.keys():
    print(k)

d1 = {"hey": "there"}
d2 = d1
d2["hey"] = "person"
print(d1["hey"] == "person")
```