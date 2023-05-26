/**
 * Sum of minimum and maximum elements of all subArrays of size k
 * for eg arr = [2, 5, -1, 7, -3, -1, -2]
 * k =4
 *
 * Approach: use doubly ended queue
 * 1. will create two doubly ended queue, one to find max element and other to find minn element
 *
 * maxi Dequeue of k size -> will have elements in decresing order, so maxi[front] = max element in k size window
 * mini Dequeue of k size -> will have elements in increasing order, so mini[front] = min element in k size window
 *
 *
 */
const solve = () => {
  const maxi = new Deque();
  const mini = new Deque();

  //addition of first k size window
  for (let i = 0; i < k; i++) {
    while (!maxi.isEmpty() && arr[maxi.back()] <= arr[i]) {
      maxi.pop_back();
    }
    while (!mini.isEmpty() && arr[mini.back()] >= arr[i]) {
      mini.pop_back();
    }
    maxi.push_back(i);
    mini.push_back(i);
  }
  let ans = 0;
  for (let i = k; i < n; i++) {
    ans = ans + arr[maxi.front()] + arr[mini.front()];

    //next window
    //removal
    while (!maxi.isEmpty() && i - maxi.front() >= k) {
      maxi.pop_front();
    }

    while (!mini.isEmpty() && i - mini.front() >= k) {
      mini.pop_front();
    }

    //addition
    while (!maxi.isEmpty() && arr[maxi.back()] <= arr[i]) {
      maxi.pop_back();
    }
    while (!mini.isEmpty() && arr[mini.back()] >= arr[i]) {
      mini.pop_back();
    }
    maxi.push_back(i);
    mini.push_back(i);
  }
  //make sure  to consider last wali window
  ans = ans + arr[maxi.front()] + arr[mini.front()];
  return ans;
};
const main = () => {
  let arr = [2, 5, -1, 7, -3, -1, -2];
  let k = 4;
  solve(arr, arr.length, k);
};
