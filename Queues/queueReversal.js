/**
 * first Approach: queue se ek2 kar k elements nikalo, then stack me dalo and then stack se ek2 kar k nikal lo
 * and wapas queue me daal do
 * TC = O(n) and SC = O(n)
 * Second Approach: Through Recurssion TC = O(n)
 * 1. base case: return when queue is empty
 * 2. first case: front element ko side me rakho and pop kar do
 * 3. recurssion call kro
 * 4. jab recurssion se wapas aaoge tab alag rakhe huye element ko push kar do
 */

// const Queue = require("./queue");
// const queue = new Queue();
const queueReversal = (queue) => {
  //Base  case
  if (queue.isEmpty()) {
    return;
  }

  //first case
  let frontElement = queue.front();
  queue.pop();

  //recurssion
  queueReversal(queue);

  //after recurssion process
  queue.push(frontElement);
};

//use  inbuilt function of queue

const reverse = (queue) => {
  //Base case
  if (queue.length == 0) {
    return;
  }
  //first case
  let front = queue.shift();
  reverse(queue);
  queue.push(front);
};
let arr = [1, 2, 3, 4, 5];
console.log("arr :: ", arr);
reverse(arr);
console.log("reversed arr :: ", arr);

/**
 * The time complexity of the shift() method is O(n), where n is the number of elements in the
 * array. When an element is removed from the beginning of the array, all the remaining elements
 *  need to be shifted one position to the left, which requires updating their indices.
 * This shifting operation takes linear time, resulting in an overall time complexity of O(n).
 *
 * In JavaScript, arrays are implemented as dynamic arrays, which means they are internally stored as contiguous blocks of memory.
 */
