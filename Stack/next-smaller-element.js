/** ie for every element give us the first smaller element */

const nextSmallerElement = (arr) => {
  let stack = [];
  stack.push(-1);

  let ans = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    let currentElement = arr[i];
    while (currentElement < stack[stack.length - 1]) {
      stack.pop();
    }
    ans[i] = stack[stack.length - 1];
    stack.push(currentElement);
  }
  return ans;
};

const previousSmallerElement = (arr) => {
  let stack = [];
  stack.push(-1);

  let ans = [];

  for (let i = 0; i <= stack.length - 1; i++) {
    let currentElement = arr[i];
    while (currentElement < stack[stack.length - 1]) {
      stack.pop();
    }
    ans[i] = stack[stack.length - 1];
    stack.push(currentElement);
  }
  return ans;
};
