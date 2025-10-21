```python
from typing import List


def get_even(list: List[int]) -> List[int]:
    return [x for x in list if x % 2 == 0]


def get_even_average(list: List[int]) -> float:
    if list == []:
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


def get_even_average2(list: List[int]) -> float:
    evens = get_even(list)
    if evens == []:
        return 0

    return sum(evens) / len(evens)


# for i in range(5):
#     print(i)
# for i in range(5, 10):
#     print(i)
# for i in range(5, 10, 2):
#     print(i)


def replace_with(L: List[int], x: int, y: int) -> None:
    for i in range(len(L)):
        if L[i] == x:
            L[i] = y


def replace_first(L: List[int], x: int, y: int) -> None:
    for i in range(len(L)):
        if L[i] == x:
            L[i] = y
            break


def replace_nth(L: List[int], x: int, y: int, n: int) -> None:
    c = 0
    for i in range(len(L)):
        if L[i] == x:
            c += 1
            if c == n:  
                L[i] = y
                break

L = [1,2,3,4,1,2]
replace_nth(L, 1, 10, 2)
print(L)

def is_prime(n):
    for i in range(2, n):
        if n % i == 0:
            return False
        
    return True

print(is_prime(1))
def print_primes(n):
    for i in range (2, n + 1):
        if is_prime(i):
            print(i)
            
print_primes(100)
```