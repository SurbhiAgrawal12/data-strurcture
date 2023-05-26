/**
 * Given an Array of size n, and a positive integer k, find the first negative integer for
 * each and every window(contiguous subarray) of size k.
 * e.g. {-8, 2,3,-6, 10}
 * 2 size window would be => [{-8, 2}, {2,3}, {3,-6}, {-6,10}]
 * ans: {-8, 0, -6, -6}
 *
 * think: of DEqueue , cos agar hum question ko dhyaan se dekhe toh har ek window
 * k liye ek naya number add hota hai and ek number remove hota hai.
 *
 * first: k element ko queue me daal do. question me bola hai first negative integer, so back se hum
 * push karte hai and front se hum pop karte hai.
 * so hume srf negative number chahiye hai, toh hum k size kki window me jo bhi negative number
 *  hoga srf use push kar denge.
 *
 *
 * Approach: use DEqueue( doubly ended queue)
 * We create a Dequeue, Di of capacity k,
 * that stores only useful elements of the current window of k elements.
 * An element is useful if it is in the current window and it is a negative integer.
 * For a particular window, if Di is not empty then the element at front of the Di is the first negative integer for that window,
 * else that window does not contain a negative integer.
 */
const Dequeue = require("./Doubly-ended-queue");

const firstNegativeInteger = (arr, n, k) => {
  const dq = new Dequeue(k);
  const ans = []; // this would have first negative integer index in every window of size k

  //process first window
  for (let i = 0; i < k; i++) {
    // if it is a negative integer, store in DE queue
    if (arr[i] < 0) {
      dq.insertRear(i);
    }
  }

  //store ans of first k sized window
  if (dq.size > 0) {
    ans.push(arr[dq.front]);
  } else {
    //  no element present in queue, ie no negative element present
    ans.push(0);
  }

  //process  for remaining windows
  //  [0,           1,      2,      3, 4]
  //  [dq.front,  i-(k-1)...........i, 4]
  //  so window is of k size, lets say k = 3, and i = 2 ie arr[i] =   3... so k size window elements
  // would be 1, 2, 3, ie 0 element would be out of window and 1 element index would be i -(k-1) => i-k+1
  // so if dq.front < i -k+1 , it would be out of window element
  for (let i = k; i < n; i++) {
    //removal of first element
    //so dequeue k front me ya toh index hoga negative element ka ya fir 0
    //mjh chck krna hai, jo bhi dequeue k frnt me index store wo current window me lie karta h kya?
    //currentindex - dq.front() > = k toh ise pop kr do
    if (!dq.isEmpty() && i - dq.front >= k) {
      dq.deleteFront();
    }
    //addition of next element
    if (arr[i] < 0) {
      dq.insertRear(i);
    }
    //ans_store
    if (dq.size > 0) {
      ans.push(arr[dq.front]);
    } else {
      //  no element present in queue, ie no negative element present
      ans.push(0);
    }
  }
  return ans;
};

function printFirstNegativeInteger(arr, n, k) {
  // A Double Ended Queue, Di that will
  // store indexes of useful array elements
  // for the current window of size k.
  // The useful elements are all negative integers.
  var Di = [];

  // Process first k (or first window) elements of array
  let i;
  for (i = 0; i < k; i++) {
    // Add current element at the rear of Di
    // if it is a negative integer
    if (arr[i] < 0) Di.push(i);
  }

  // Process rest of the elements,
  // i.e., from arr[k] to arr[n-1]
  for (; i < n; i++) {
    // if Di is not empty then the element
    // at the front of the queue is the first
    // negative integer of the previous window
    if (Di.length !== 0) console.log(arr[Di[0]] + " ");
    // else the window does not have a negative integer
    else console.log("0" + " ");

    // Remove the elements which are out of this window
    //out of window elements are = (firstNegativeIndex <= currentIndex – k)
    while (Di.length !== 0 && Di[0] < i - k + 1) Di.shift(); // Remove from front of queue

    // Add current element at the rear of Di
    // if it is a negative integer
    if (arr[i] < 0) Di.push(i);
  }

  // Print the first negative
  // integer of last window
  if (Di.length !== 0) console.log(arr[Di[0]] + " ");
  else console.log("0" + " ");
}

// Driver Code

var arr = [12, -1, -7, 8, -15, 30, 16, 28];
var n = arr.length;
var k = 3;
printFirstNegativeInteger(arr, n, k);
// console.log(firstNegativeInteger(arr, n, k));
