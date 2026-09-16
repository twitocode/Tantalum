---
CreatedAt: 2025-10-10
tags:
  - lecture
class: CS 1MD3
---
```python
L = [1, 2, 3]
L = [1, True, "h", lambda x: x * 2]
print(L[3](4))

L = [1, 2, 6, 2, -23]
L[1:3]
L[1::2]

L[4] = 1

L2 = L.copy()
L2[0] = 2

L[0] == L2(0) == False

L.append(6)
L2 = L
L2.append(4)
L = [1, 2, 6, 2, -23, 4]  # mutated by append

L = [1, 2, 3]


def f(L):
    L.append(4)


f(L)
L = [1, 2, 3, 4]  # because lists is a reference type

L = [1]


def g(L):
    L = [1, 2, 3, 4]


f(L)
L = [1]  # scope

L = [1, 2, 3, 4]
L.append(L)
L[-1][-1][-1][-1][-1][-1]  # this works but dont do it

L = [1, "hey", False]
for thing in L:
    print(thing)


from typing import List


def get_even(list: List[int]) -> List[int]:
    return [x for x in list if x % 2 == 0]

    evens = []
    for x in list:
        if x % 2 == 0:
            evens.append[x]
    return evens


def get_even_average(list: List[int]) -> float:
    if L == []:
        return 0.0

    even_sum = 0
    even_count = 0
    for element in list:
        if element % 2 == 0:
            even_sum += element
            even_count += 1

    if even_count == 0:
        return 0.0
    return even_sum / even_count
    # there is a better way to do this

```