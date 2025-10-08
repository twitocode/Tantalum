---
CreatedAt: 2025-10-08
tags:
  - lecture
class: CS 1MD3
---
```python
import random

def guess() -> None:
    num = random.randint(1, 10)
    guess = input("Please enter a number between 1 and 10")

    while num != int(guess):
        num = random.randint(1, 10)
        if num > int(guess):
            guess = input(f"sorry, the number is greater than {guess}:")
        else:
            guess = input(f"sorry, the number is smaller than {guess}:")

    print("Congratulations")


```