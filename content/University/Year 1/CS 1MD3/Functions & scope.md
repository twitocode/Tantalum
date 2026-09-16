---
CreatedAt: 2025-09-16
tags:
  - lecture
class: CS 1MD3
---
## Overview
- Topic:
- Main objectives:

## Notes
```python
def pizzas_to_order(adults, children):
	total_slices = 3 * adults + children -1
	return total_slices // 8 + 1

def pizzas_to_order(adults, children):
	total_slices = 3 * adults + children -1
	return -(-total_slices // 8)

def pizzas_to_order(adults, children):
	total_slices = 3 * adults + children
	return total_slices // 8 + int(total_slices % 8 != 0)

def pizzas_to_order(adults, children):
	total_slices = 3 * adults + children
	return total_slices // 8 + min(1, total_slices % 8)

def is_multiple_of(n, m):
	return n % m == 0

#scope ----------------------

x = 5
y = 1


def my_fun(y):
	global x
	x += 1
	y = y + 1
	return y

try:
	print(y)
except Exception as e:
	print(e)


my_fun(10)
print(x)

  
y = 5
z = 1

def my_fun(y):
	#will cause an error, will not be on the test.
	#python will look ahead and think it already has a local variable called x, it will not look at the global variable
	y = z + y
	z = 0
	
	return y 
	#this will not work because of weird scope issues, you can see with the highlighting
  ```

## Key Terms
- Term 1: Definition
- Term 2: Definition

## Questions
- 

## Summary
- 
