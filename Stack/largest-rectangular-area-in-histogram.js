/**
 * Brute force: har ek element k liye check kro, ise left me extend kar sakte ya right me extend kar sakte?
 * so in short agar us element k just next left and right elemnet us element se bade ho toh extend kar skte else nahi kar sakte.
 *
 * Approach 2: solve it in O(n) TC
 * ie hum kisi bar ko tab tak extend kar skte jab tak hume koi bar usse choti nahi mil jati
 * ie hum previous smaller element nikal lenge
 * and next smaller element nikal lenge
 *
 * so (nextSmallerElementIndex - previousSmallerElementIndex) * current Element = area
 */

const nextSmallerElement = (arr) => {
  let stack = [];
  stack.push(-1);

  let ans = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    let currentElement = arr[i];

    while (
      currentElement < arr[stack[stack.length - 1]] &&
      stack[stack.length - 1] !== -1
    ) {
      stack.pop();
    }
    ans[i] = stack[stack.length - 1];
    stack.push(i);
  }
  return ans;
};

const previousSmallerElement = (arr) => {
  let stack = [];
  stack.push(-1);

  let ans = [];

  for (let i = 0; i <= stack.length - 1; i++) {
    let currentElement = arr[i];
    while (
      currentElement < arr[stack[stack.length - 1]] &&
      stack[stack.length - 1] !== -1
    ) {
      stack.pop();
    }
    ans[i] = stack[stack.length - 1];
    stack.push(i);
  }
  return ans;
};

const largestArea = (heights) => {
  const next = nextSmallerElement(heights);
  const previous = previousSmallerElement(heights);
  let area = 0;
  for (let i = 0; i < heights.length; i++) {
    if (next[i] == -1) {
      next[i] = heights.length;
    }
    let length = heights[i];
    let breadth = next[i] - previous[i] - 1;
    let newArea = length * breadth;
    area = Math.max(area, newArea);
  }
  return area;
};
