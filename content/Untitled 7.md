# Reflection Questions

  

Answer each question in 1-3 sentences. Focus on explaining the concept clearly in your own words. Short, precise answers are better than long, vague ones.

  

1. **Memory**

	1. What is the difference between memory allocated on the stack and memory allocated on the heap? Give an example of each from this assignment.
	   
	   Stack memory is automatically managed by the compiler meaning when it is allocated in a scope, its freed when out of scope. Heap memory is manually created with `malloc()` and freed when you call `free()`. In the code, local variables like `int i` in `insertionSort` live on the stack, while `malloc(sizeof(Student))` in `createStudent` allocates a Student on the heap.
	   
	1. Why do we use `Student **arr` instead of `Student *arr` in `insertionSort`? What would happen if we swapped `Student` structs directly instead of swapping pointers?
	   
	   `Student **arr` is an array of _pointers_ to students, so sorting it means swapping low memory pointers instead of large structs. If you swapped `Student` structs directly, you'd have to copy all fields on every swap which is much more expensive. This would also mess up external pointers.

	1. In `cleanup`, why must you use `postorder` traversal rather than `inorder` or `preorder`?
	  You must free children before freeing the parent. If you used preorder, you'd `free(root)` first, then try to access root->left and root->right. reading freed memory. Postorder makes sure that every node's subtrees are fully freed before the node itself is released.
	
	2. Why does `realloc` potentially return a different address than the one you passed in?
		 
		When `realloc` is called with a certain size, it may be a larger size the section of memory the original pointer is pointing to, potentially touching other allocated portions of memory. When that does happen, `realloc` finds a new memory location.


2. **Pointers and Structs**

	1. Why do we use `->` to access struct fields through a pointer instead of `.`?
		`a->b` is shorthand for `(*a).b`. otherwise you would be accessing a property of an integer which makes no sense. 
		
	2. In the linked list question, why do we save `curr->next` before freeing `curr`?
	
		Once `free(curr)` is called, that memory is returned to the allocator and reading from it is undefined behaviour. If `curr->next` wasn't saved first, then you'd lose the only reference to the rest of the list. 
		
	1. What is a self-referential struct? How does `Node` differ from `BSTNode`, and why?
	 A self-referential struct contains a pointer to another instance of itself. `Node` has one `next` pointer. while `BSTNode` has two: `left` and `right`. This branching structure is what makes `BSTNode` a tree as each node can have up to two children instead of one child.

3. **Algorithms**

	1. `inorder` traversal of a BST always produces a sorted sequence. Why? How does this connect to `insertionSort`?
	    By the BST property, everything in a node's left subtree has a smaller key and everything in the right subtree has a larger key. Inorder visits left -> root -> right, so it always processes smaller values before larger ones, creating a sorted sequence. `insertionSort` achieves the same result differently by repeatedly placing each element into its correct position in a growing sorted prefix.
		
	2. How does the left/right decision in `bstInsert` relate to the decision you made in `binarySearch`?
	   	Both make the exact same comparison decision: 
		   	if the target is less than the current node/midpoint, go left; 
		   	if greater, go right. 
		`bstInsert` builds a structure where this property holds, and `binarySearch` exploits that same property to halve the search space at each step. They are two sides of the same ordered-partition idea.

	3. What is the worst case for BST insertion, and when does it occur? What does the tree look like in that case?
	   The worst case is O(n) per insertion, occurring when you insert elements in already-sorted order (or reverse-sorted). Every new element is always larger or always smaller than the previous, so the tree degenerates into a linear chain; kind of like a linked list.


4. **Recursion**

	1. What happens to the call stack when you call `inorder` on a tree of height 5? How many stack frames are active at the deepest point?
	   Each recursive call pushes a new stack frame containing the local root pointer and the return address. At the deepest point (the leftmost leaf at depth 5), there are 6 active frames on the call stack at the same time. Once that frame returns, frames are popped back up as the traversal unwinds.
			
	2. Why is `binarySearch` easier to implement recursively than iteratively?
	The recursive form is easier because each call handles a strictly smaller subarray, the base case (empty array) is obvious, and there's no index arithmetic to maintain across iterations. An iterative version requires manually tracking `low` and `high` indices and updating them correctly.