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

from typing import Dict


def invert(d: Dict[int, int]):
    inverted = {}
    for key, value in d.items():
        if not value in inverted:
            inverted[value] = [key]
        else:
            if not key in inverted[value]:
                inverted[value].append(key)

    return inverted


d = {1: 2, 3: 4, 10: 4}
print(invert(d))


def combine1():
    
    pass


def combine2(d1, d2):
    combined = {}
    for k in d1:
        combined[k] = sum(d1[k])
    for k in d2:
        if k in combined:
            combined[k] += sum(d2[k])
        else:
            combined[k] = sum(d2[k])
            
    return combined

print(combine2({1: [2,4], 3: [4]}, {1: [2], 10: [21]}))
months = {
    1: "Jan",
    2: "Feb",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "Sept",
    10: "Oct",
    11: "Nov",
    12: "Dec",
}


def add_birthday(birthdays, month, day, name):
    if months[month] in birthdays:
        if day in birthdays[months[month]]:
            birthdays[months[month]][day].append(name)
        else:
            birthdays[months[month]][day] = [name]
    else:
        birthdays[months[month]] = {}
        birthdays[months[month]][day] = [name]

birthdays = {}
add_birthday(birthdays, 1, 21, "Me")
add_birthday(birthdays, 1, 22, "Me")
add_birthday(birthdays, 1, 23, "Me")
add_birthday(birthdays, 10, 12, "Me2")
add_birthday(birthdays, 10, 12, "Me23")
add_birthday(birthdays, 10, 12, "Me234")
# add_birthday(birthdays, 10, 4, "Me3")
add_birthday(birthdays, 12, 5, "Me4")
add_birthday(birthdays, 4, 4, "Me5")
add_birthday(birthdays, 7, 12, "Me6")
print(birthdays)

def most_common_month(birthdays):
    current = 0 
    current_month = ""
    for month in birthdays:
        total = 0
        for day in birthdays[month]:
            total += len(birthdays[month][day])    
            
        if current < total:
            current = len(birthdays[month])
            current_month = month
            
    return (current, current_month)

def most_common_day(birthdays):
    current = 0
    count = 0
    for month in birthdays:
        for day in birthdays[month]:
            if len(birthdays[month][day]) > count:
                current = day
                count = len(birthdays[month][day])
    return (current, count)


def total_numbers(birthdays):
    """
    returns the total number of birthdays encoded in birthdays
    """
    count = 0
    for month in birthdays:
        for day in birthdays[month]:
            count += len(birthdays[month][day])
            print(len(birthdays[month][day]))
    return count


print(total_numbers(birthdays))
print(most_common_day(birthdays))
print(most_common_month(birthdays))
```