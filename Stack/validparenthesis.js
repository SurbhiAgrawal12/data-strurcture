/**
 *Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
 determine if the input string is valid.
 An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

    Input: s = "()"   Input: s = "()[]{}"    Input: s = "(]"
    Output: true      Output: true           Output: false

 Solution: For all the opening bracket, store in stack once the closing bracket comes, 
 check with top and pop().

 Key thing: for a string to be valid, the last opening bracket should have corresponding first closing bracket.
 ie for all cosing bracket we wanted to validate opening bracket in reverse orde, that's why we have prefereed here stack.
 */
const Stack = require("./stack");
const BraketBalancedMatches = (topElementOfstack, currentElementOfString) => {
  if (topElementOfstack == "(" && currentElementOfString == ")") {
    return true;
  }
  if (topElementOfstack == "{" && currentElementOfString == "}") {
    return true;
  }
  if (topElementOfstack == "[" && currentElementOfString == "]") {
    return true;
  }
  return false;
};

const isValidParenthesis = (str) => {
  const stack = new Stack();
  console.log("original stack :: ", stack);
  for (let i = 0; i < str.length; i++) {
    console.log("str[i] :: ", str[i]);

    //if opening bracket , stack push
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
      stack.push(str[i]);
      console.log("after stack push:: ", stack);
    } else {
      //for closing bracket
      if (!stack.isEmpty()) {
        let topElementOfstack = stack.peek();
        if (BraketBalancedMatches(topElementOfstack, str[i])) {
          stack.pop();
          console.log("after stack pop:: ", stack);
        } else {
          return false;
        }
      }
      //here stack is empty but string still have some closed brackets, ie string is invalid
      else {
        return false;
      }
    }
  }
  if (stack.isEmpty() == true) {
    return true;
  } else {
    return false;
  }
};
const main = () => {
  const str = "()[]{}";
  console.log("isValidParenthesis :: ", isValidParenthesis(str));
};
main();
