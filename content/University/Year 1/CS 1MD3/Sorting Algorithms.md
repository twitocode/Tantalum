---
CreatedAt: 2025-12-11
tags:
  - lecture
class: CS 1MD3
---
```python
from typing import List
import random


def hanoi(n, source, spare, target):
    if n == 1:
        print(f"Move a disk from {source} to {target}")
    else:
        hanoi(n - 1, source, target, spare),
        print(f"Move a disk from {source} to {target}")
        hanoi(n - 1, spare, source, target)


# print(hanoi(30, "Left", "Middle", "Right"))


def bad_quicksort(L: List[int]) -> List[int]:
    if L == []:
        return []
    a, b = [], []
    c = L[0]
    for x in L[1:]:
        if x < c:
            a.append(x)
        else:
            b.append(x)
    return bad_quicksort(a) + [c] + bad_quicksort(b)


print(bad_quicksort([3, 7, 2, 1, 8, 6]))

"""
average: O(nlogn)
quicksort: good
merge: good
heap: good

O(n^2)
bubble: bad
insertion: bad
selection: bad
"""


def create_random_list(length, max_value):
    L = []
    for _ in range(length):
        L.append(random.randint(0, max_value))
    return L


def selection_sort(L):
    for i in range(len(L)):
        j = find_min_index(L, i)
        L[i], L[j] = L[j], L[i]


def find_min_index(L, i):
    current_min = i
    for j in range(i, len(L)):
        if L[j] < L[current_min]:
            current_min = j
    return current_min


def insert_into(L, i):
    while i > 0:
        if L[i] < L[i - 1]:
            L[i], L[i - 1] = L[i - 1], L[i]
            i = i -1
        else:
            return


def insertion_sort(L):
    for i in range(len(L)):
        insert_into(L, i)
        print(L)



```