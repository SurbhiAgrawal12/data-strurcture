/**
 * Reverse a Stack using Recurssion
 * first case: top element ko side me rakho and pop the element and recurssion call maro
 * do recurssion till stack is empty
 * if stack is empty return
 * wapas aate tym top elemet ko bottom of stack me push karte jao
 * TC = O(N^2) SC = O(n)
 */
const Stack = require("./stack");

const pushAtBottom = (stack, topElement) => {
  //Base  case
  if (stack.isEmpty()) {
    stack.push(topElement);
    return;
  }

  //first case
  let temporaryStoreTopElement = stack.pop();
  //recurssive call
  pushAtBottom(stack, topElement);
  //after  recurssiion
  stack.push(temporaryStoreTopElement);
};

const reverseThestack = (stack) => {
  //base case
  if (stack.isEmpty()) {
    return;
  }

  //first case   process
  let topElement = stack.pop();
  reverseThestack(stack);
  pushAtBottom(stack, topElement);
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

  console.log("original stack :: ", stack);
  reverseThestack(stack);
  console.log("reverssed stack :: ", stack);
};
main();
