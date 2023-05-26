/**
 * Que: A pair of brackets is said to be redundant when a subexpression is surrounded by needless/
 * useless brackets. For Example : ((a+b)) has a pair of redundant brackets.
 * The pair of brackets on the first and last index is needless.
 * Solution: Checking Redundant Bracket using Stack
 * Follow the steps mentioned below to implement the approach:
        1. We iterate through the given expression and for each character in the expression
        2. if the character is an open parenthesis ‘(‘ or any of the operators or operands, 
            we push it to the stack.
        3. If the character is close parenthesis ‘)’, then pop characters from the stack 
            till matching open parenthesis ‘(‘ is found.
    Now for redundancy two conditions will arise while popping.
    Note: if there are no operators to consume, that bracket is redundant bracket.
 */
const Stack = require("./stack");
const isRedundantBracket = () => {
  const str = "(a+b)";
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "(" ||
      str[i] == "+" ||
      str[i] == "-" ||
      str[i] == "*" ||
      str[i] == "/"
    ) {
      stack.push(str[i]);
    }
    if (str[i] == ")") {
      let isRedundant = true;
      while (stack.peek() != "(") {
        let topElement = stack.peek();
        if (
          topElement == "+" ||
          topElement == "-" ||
          topElement == "*" ||
          topElement == "/"
        ) {
          isRedundant = false;
        }
        stack.pop();
      }
      if (isRedundant == true) {
        return true;
      }
      //to remove the last opening element
      stack.pop();
    }
  }
  // we are returning false here, cos just imagine u got the string only "abc", so this is valid string
  return false;
};
console.log("isRedundantBracket :: ", isRedundantBracket());
