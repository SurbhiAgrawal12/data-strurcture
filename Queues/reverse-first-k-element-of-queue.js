/**
 * Algo:
 * 1. fetch first k elements from queue and put it into stack
 * 2. fetch elements from stack and put it into queue.
 * 3. fetch first n-k element from queue and puch_back to same queue.
 *
 * Space Commmplexity = O(k), cos we created stack of k size
 * Time Commplexity = O(k) + O(k) + O(n-k)
 * put k = n
 * so O(n) + O(n) + O(0) => O(n) is TC
 */

const modifyQueue = (arr, k, n) => {
  let st = [];
  //fetch first k elements from queue and put it into stack
  for (let i = 0; i < k; i++) {
    st.push(arr.shift());
  }

  //fetch elements from stack and put it into queue.
  while (st.length != 0) {
    arr.push(st.pop());
  }

  for (let i = 0; i < n - k; i++) {
    arr.push(arr.shift());
  }
  console.log("arr :: ", arr);
  console.log("st :: ", st);
};

let arr = [1, 2, 3, 4, 5];
modifyQueue(arr, 3, arr.length);
