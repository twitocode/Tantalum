# Reflection Questions

  

Answer each question in 1-3 sentences. Focus on explaining the concept clearly in your own words. Short, precise answers are better than long, vague ones.

  

1. **Memory**

	1. What is the difference between memory allocated on the stack and memory allocated on the heap? Give an example of each from this assignment.
	   
	2. Why do we use `Student **arr` instead of `Student *arr` in `insertionSort`? What would happen if we swapped `Student` structs directly instead of swapping pointers?
	
	3. In `cleanup`, why must you use `postorder` traversal rather than `inorder` or `preorder`?
	
	4. Why does `realloc` potentially return a different address than the one you passed in?

6. **Pointers and Structs**

	1. Why do we use `->` to access struct fields through a pointer instead of `.`?
	
	2. In the linked list question, why do we save `curr->next` before freeing `curr`?
	
	3. What is a self-referential struct? How does `Node` differ from `BSTNode`, and why?

10. **Algorithms**

	1. `inorder` traversal of a BST always produces a sorted sequence. Why? How does this connect to `insertionSort`?
	
	2. How does the left/right decision in `bstInsert` relate to the decision you made in `binarySearch`?
	
	3. What is the worst case for BST insertion, and when does it occur? What does the tree look like in that case?

14. **Recursion**

	1. What happens to the call stack when you call `inorder` on a tree of height 5? How many stack frames are active at the deepest point?
	
	2. Why is `binarySearch` easier to implement recursively than iteratively?