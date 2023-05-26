/**
 * Que: Insert an element at its bottom in a given stack.
 * Naive Approach: The simplest approach would be to create another stack. TC = O(n), SC = O(n)
 * Effecient Approach: Instead of using a temporary stack, the implicit stack can be used through recursion.
 * TC = O(n) and SC = O(n)
 * PsedoCode:
 * 1. Check Basecase: if stack is empty, push the element.
 * 2. firstcase: top ko side me rakh liya and pop the top element.
 * 3. Now do recurssive calls.
 * 4. now, jab wapas aaenge side me rakha hua element wapas  push karna hai.
 *
 */
const Stack = require("./stack");
const pushAtBottom = (stack, num) => {
  //Base  case
  if (stack.isEmpty()) {
    stack.push(num);
    return;
  }

  //first case process
  let topElement = stack.pop();

  //Recurssive call
  pushAtBottom(stack, num);

  //after recurssion
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

  let num = 15;
  console.log("original stack :: ", stack);
  pushAtBottom(stack, num);
  console.log("modified stack :: ", stack);
};

main();
