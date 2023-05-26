/**
 * Que: In a party of N people, only one person is known to everyone. 
 * Such a person may be present at the party, if yes, (s)he doesn’t know anyone at the party. 
 * We can only ask questions like “does A know B? “. Find the stranger (celebrity) in the
 * minimum number of questions.
We can describe the problem input as an array of numbers/characters representing persons in the 
party. We also have a hypothetical function HaveAcquaintance(A, B) which returns true if A 
knows B, and false otherwise. How can we solve the problem? 

 * condition:
 * 1. everyone knows celebrity
 * 2. celebrity knows no one
 *
 * Input MATRIX = { {0, 0, 1, 0}, {0, 0, 1, 0}, {0, 0, 0, 0}, {0, 0, 1, 0} }
 * Output: id = 2
 * 
 * Brute Force:
 * 1. celebrity row will have all 0's
 * 2. celebrity coloumn will have all 1's, except diagonal element
 * 
 * first approach: using for loop, O(n^2) would be TC
 * second approach: using stack
 * 
 * Algorithm:
 * 1. Create a stack and push all ids in it.
 * 2. Run a loop while there are more than one element in the stack and in each iteration do the following-: 
 *      2.1 Pop two elements from the stack. Let these elements be ‘id1’ and ‘id2’.
 *      2.2 If the person with ‘id1’ knows the person with ‘id2,’ i.e. ‘knows(id1, id2)’ return true,
 *          then the person with ‘id1’ cannot be a celebrity, so push ‘id2’ in the stack.
 *      2.3 Otherwise, if the person with ‘id2’ knows the person with ‘id1,’ i.e. knows(id1, id2) 
 *          return true, then the person with ‘id2’ cannot be a celebrity, so push ‘id1’ in the stack.
 * 3. Only one id remains in the stack; you need to check whether the person having this id is a celebrity or not, 
 *    this can be done by running two loops. One checks whether this person is known to everyone or not, and another loop will check whether this person knows anyone or not.
 * 4. If this person is a celebrity, return his id; otherwise, return -1
 * 
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
const Stack = require("./stack");
const ids = new Stack();

//that means a knows b or not
const knows = (arr, a, b) => {
  if (arr[a][b] == 1) {
    return true;
  }
  return false;
};

const celebrity = (arr) => {
  // step1: Create a stack and push all ids in it.
  for (let i = 0; i < arr.length; i++) {
    ids.push(i);
  }

  // step2: Finding celebrity. Get two elements and compare them
  while (ids.size() > 1) {
    // ie while stack's size is not equal to 1, pop two ids
    let id1 = ids.top();
    ids.pop();
    let id2 = ids.top();
    ids.pop();

    if (knows(id1, id2)) {
      // Because person with id1 can not be celebrity.
      ids.push(id2);
    } else {
      // Because person with id2 can not be celebrity.
      ids.push(id1);
    }
  }

  //step 3: single element in stack is potential celebrity, so verify it
  let candidate = ids.top();
  let rowCheck = false;
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[candidate][i] == 0) {
      zeroCount++;
    }
  }
  //all zeros
  //celebrity row will have all 0's
  if (zeroCount == arr.length) {
    rowCheck = true;
  }

  //coloumn check
  let coloumnCheck = false;
  let oneCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][candidate] == 1) {
      oneCount++;
    }
  }
  //celebrity coloumn will have all 1's, except diagonal element
  if (oneCount == arr.length - 1) {
    coloumnCheck = true;
  }

  if (coloumnCheck == true && rowCheck == true) {
    return candidate;
  } else {
    return -1;
  }
};
