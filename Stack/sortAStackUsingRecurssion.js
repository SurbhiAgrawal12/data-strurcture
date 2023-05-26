/**
 * Base  case:  if stack is empty return
 * firstcase: top element ko side me rakho, and pop the element
 * do recurssive calls now
 * recurssion se wapas aate tym, jo element humne store kiya tha usko sorted order me push karte jao.
 * ek functionBna lo jo element ko sorted order me push karta hai, so input hoga stack and element
 * again sorted  function me, top k sath element ko compare karo, agar top se bda hai toh push kar do else
 * top ko side me rakh k recurssive call maro
 * agar stack empty ho jata hai means wo element sabse smallest hai so use push kar do and return kar do.
 * so base  case   me two conditions hogi if stack empty of ya top element chota ho number se
 * dono cases me hume number ko push karna hai stack me.
 * TC = O(n^2) SC = O(n)
 */
const Stack = require("./stack");
const inserElementInsortedOrder = (stack, element) => {
  //Base   case
  if (stack.isEmpty() || (!stack.isEmpty() && stack.peek() < element)) {
    stack.push(element);
    return;
  }

  //first case
  let temporaryStoreTopElement = stack.peek();
  stack.pop();

  //recurssive call
  inserElementInsortedOrder(stack, element);

  //after recurssion process
  stack.push(temporaryStoreTopElement);
};

const sortStack = (stack) => {
  //base case
  if (stack.isEmpty()) {
    return;
  }
  //first case process

  let topElement = stack.peek();
  stack.pop();

  //recussive call
  sortStack(stack);

  //after recurssion process
  inserElementInsortedOrder(stack, topElement);
};
const main = () => {
  const stack = new Stack();

  // push elements into the stack
  stack.push(10);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  stack.push(61);
  stack.push(7);
  stack.push(0);
  stack.push(9);

  console.log("original stack :: ", stack);
  sortStack(stack);
  console.log("sorted stack :: ", stack);
};
main();
