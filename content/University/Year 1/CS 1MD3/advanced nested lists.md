---
CreatedAt: 2025-10-31
tags:
  - lecture
class: CS 1MD3
---
```python
from typing import List


def has_snowed(precip: List[float], temps: List[int]) -> bool:
    """Return true if and only if the it has snowed based on the input given,
    precip and temps at index i  give the amount of precipitation and 
    the temperature on day i respectively. Assume it snows on day i if the precipitation on day i is greater than 0 and the temperature  on day i is less than 0. ASsume precip and temps are the same length .
    
    >>> has_snowed([], [])
    False
    >>> has_snowed([5.2, 0, 0], [5, -4, -3])
    False
    >>> has_snowed([5.2, 1.1, 0], [5, -4, -3])
    True
    """
    
    for i in range(len(temps)):
        if precip[i] > 0 and temps[i] < 0:
            return True
    return False

L = [[1,2,3], [4,5], [6]]
L1 = [1,2,3]
L2 = L1
L3 = [4,5,6]
L = [L1, L2, L3]
L[0].append(10)
# L1 and L2 are stil lthe same so they're both changed

def h2(n):
    for i in range(n):
        for j in range(i):
            print(f"i, j = {str(i)}, {str(j)}")

type Matrix = List[List[int]]

# matrices
def max_row_sum(m: Matrix) -> int:
    current_max = 0
    for row in m:
        sum = 0
        for num in row:
            sum += num
        if sum > current_max:
            current_max = sum
    return current_max

def col_sums(m: Matrix) -> List[int]:
    array = []
    
    for x in m:
        for j in range(len(x)):
            if (len(array) - 1) < j:
                array.append(0)
            array[j] += x[j]

    return array


def col_sums2(m: Matrix) -> List[int]:
    array = []

    for j in range(len(m[0])):
        current_col_sum = 0
        for i in range(len(m)):
            current_col_sum += m[i][j]

    return array


def transpose(m: Matrix) -> None:
    for i in range(len(m)):
        for j in range(i):
         
            m[i][j], m[j][i] = m[j][i], m[i][j]
    return m

print(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

def are_groups_valid(group: List[List[int]], classlist: List[int]) -> bool:
    """[[1,2, 3], [4, 8, 6]] classlist [1,2,3,4,8,6]"""
    """
    1) all students in the groups, must be in the classlist
    2) all students are only in one group and are only in their group once
    3) all groups are size 3-5
    4) appear in a group fewer than 2 times
    5) everyone in the class is in a group
    """
    
def has_valid_sizes(groups):
    for group in groups:
        if len(group) < 3 or len(group) > 5:
            return False
    return True

def all_studnets_enrolled(groups, classlist):
    for group in groups:

        for student in group:
            if not student in classlist:
                return False
            
    return True

def appears_once(groups, classlist):
    for student in classlist:
        appearances = 0
        for group in groups:
            if appearances > 1:
                return False
            elif student in group:
                appearances += 1
        
    return True
```