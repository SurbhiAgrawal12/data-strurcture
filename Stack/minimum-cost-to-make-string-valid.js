/**
 * Que: Ninja has been given a string ‘STR’ containing either ‘{’ or ‘}’. 
 * 'STR’ is called valid if all the brackets are balanced. Formally for each opening bracket, 
 * there must be a closing bracket right to it.
 * For Example:
“{}{}”, “{{}}”, “{{}{}}” are valid strings while “}{}”, “{}}{{}”, “{{}}}{“ are not valid strings.

Ninja wants to make ‘STR’ valid by performing some operations on it.
In one operation, he can convert ‘{’ into ‘}’ or vice versa, and the cost of one such operation is 1.
Your task is to help Ninja determine the minimum cost to make ‘STR’ valid.

For Example:
Minimum operations to make ‘STR’ = “{{“ valid is 1.
In one operation, we can convert ‘{’ at index ‘1’ (0-based indexing) to ‘}’. 
The ‘STR’ now becomes "{}" which is a valid string.
 */
/**
 * condition:
 * 1. number of open braces = number of close braces
 * 2. every close brace should have open brace before it.
 * logic:
 * 1. if string lenth is odd, return -1
 * 2. input string me se valid wala part remove kar do.
 * 3. remaining part jo hoga, wo below mention type me se ek hoga.
 * 2.  By just analyzing, will got to know that invalid strings are of some type of pattern
 * 1. {{{{...... (if string length is odd return -1, else min cost would be length/2)
 * 2. }}}}}......(if string length is odd return -1, else min cost would be length/2)
 * 3. ....}}}}{{{{....
 * this could have 4 cases further a = odd & b = odd, a = even & b = even, a = even & b = odd, a = odd & b = even
 * apart from that string would be valid.
 * consider a = count of open braces, b= count of close braces
 * so and = ((a+1)/2) + ((b+1)/2)
 */

const Stack = require("./stack");
const stack = new Stack();
const findMinCost = () => {
  //odd condition
  if (str.length() % 2 == 1) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "{") {
      stack.push(str[i]);
    } else {
      //ch is closed brace
      if (!stack.isEmpty() && stack.peek() == "{") {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }
  }
  //stack contains invalid expression
  let a = 0;
  let b = 0;
  while (!stack.isEmpty()) {
    if (stack.peek == "{") {
      b++;
    } else {
      a++;
    }
    stack.pop();
  }
  let ans = (a + 1) / 2 + (b + 1) / 2;
  return ans;
};
