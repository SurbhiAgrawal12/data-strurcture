/**
 * Reverse a string using stack will have TC = O(n) and SC == O(n)
 * Reverse a string using swapping in an array will have TC = O(n) and SC = O(1)
 */
const Stack = require("./stack");
const reverseStringUsingSwapping = (charactersOfString) => {
  let firstElementIndex = 0;
  let lastElementIndex = charactersOfString.length - 1;
  while (firstElementIndex < lastElementIndex) {
    let temporarystoreFirstElement = charactersOfString[firstElementIndex];
    charactersOfString[firstElementIndex] =
      charactersOfString[lastElementIndex];
    charactersOfString[lastElementIndex] = temporarystoreFirstElement;
    firstElementIndex++;
    lastElementIndex--;
  }
  let reversedString = charactersOfString.join("");
  console.log("charactersOfString :: ", charactersOfString);
  console.log("reversedString :: ", reversedString);
};
const reverseStringUsingStack = (charactersOfString) => {
  const stack = new Stack();
  for (let eachElemet of charactersOfString) {
    stack.push(eachElemet);
  }
  let reversedString = "";
  while (stack.isEmpty() != true) {
    reversedString = reversedString + stack.pop();
  }
  console.log("reversedString :: ", reversedString);
};
const main = () => {
  let str = "abcdef";

  let charactersOfString = str.split("");
  console.log("charactersOfString :: ", charactersOfString);
  //reverseStringUsingSwapping(charactersOfString);
  reverseStringUsingStack(charactersOfString);
};
main();
