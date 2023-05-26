/**
 * Que: Given a stack with push(), pop(), and empty() operations, The task is to delete the 
 * middle element of it without using any additional data structure.
 * 
    Input  : Stack[] = [1, 2, 3, 4, 5]
    Output : Stack[] = [1, 2, 4, 5]

 * Solution: Remove elements of the stack recursively until the count of removed elements
 * becomes half the initial size of the stack, now the top element is the middle element
 * thus pop it and push the previously removed elements in the reverse order.
 * 
 * Time Complexity: O(N), For the recursive calls
 * Auxiliary Space: O(N), For the Recursion call Stack
 */

const Stack = require("./stack");

const DeleteMiddleElement = (stack, stackHalfSize, count) => {
  //Base case
  if (count == stackHalfSize) {
    stack.pop();
    return;
  }

  let topElement = stack.peek();
  stack.pop();
  DeleteMiddleElement(stack, stackHalfSize, count + 1);
  //after returning
  stack.push(topElement);
};

const main = () => {
  const stack = new Stack();

  // push elements into the stack
  stack.push("1");
  stack.push("2");
  stack.push("3");
  stack.push("4");
  stack.push("5");
  stack.push("6");
  stack.push("7");
  stack.push("8");
  stack.push("9");

  //we  will traverse the stack from top, and once the top will become equal to size/2, will pop the element
  let count = 0;
  const stackHalfSize = Math.floor(stack.size() / 2);
  console.log("original :: ", stack, stack.size());
  DeleteMiddleElement(stack, stackHalfSize, count);
  console.log("ans :: ", stack);
};
main();
