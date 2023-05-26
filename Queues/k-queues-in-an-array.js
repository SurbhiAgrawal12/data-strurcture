/**
 * 1. frontQueue[]: This array will store the indexes of the front element of the queue. Since there are k queues, the size of this array will be k.
 * 2. rearQueue[]: This array will store the indexes of the rear elements of the queue. Since there are k queues, the size of this array will be k.
 * 3. nextQueue[]: This array will store the indexes of the next item for all items in the array arr[]. Since the number of elements in the array is N, the size of this array will be N.
 

The frontQueue and the rearQueue array will be initialized with -1 to indicate that all the
queues are empty.
 
The nextQueue[i] will be initialized with i+1 because all the slots are initially free 
and point to the next slot.

Apart from the three auxiliary arrays, an additional stack of free slots in the array called a free stack will be maintained.
The top of the free stack will be initialized as 0.

push: 
1. check overflow ( when freeSpot = -1)
2. find index, where we want to insert ( let index = freeSpot)
3. update freeSpot ( freeSpot = next[index])

if first element 
if front of nth queue is -1, so front of nth queue = index
else{
    next[rear[qn]] = index
}

for eg: push(5,1) ie push 5 in 1st queue.
1. find index ( index = freeSpot, so index = 0);
2. update freeSpot  (freeSpot = next[index]  = next[0] = 1)
3. if front[qn] = -1 => we are inserting first tym so front[qn] = index
4. rear[qn] = index
5. arr[i] = x
 */

class kQueue {
  constructor(n, k) {
    this.k = k; // number of queues
    this.n = n; // size of an array
    this.arr = new Array(n);
    this.front = new Array(k).fill(-1); // front index of all queues
    this.rear = new Array(k).fill(-1); // rear index of all queues
    this.freespot = 0; // this shows current available free slot kaunsa hai
    this.next = new Array(n); // this shows current block k baad next free block kaunsa hoga
    for (let i = 0; i < n; i++) {
      this.next[i] = i + 1;
    }
    this.next[n - 1] = -1;
  }

  /**
   * 1. check overflow ( when freeSpot = -1)
   * 2. find index, where we want to insert ( let index = freeSpot)
   * 3. update freeSpot ( freeSpot = next[index])
   *
   * Note: for first element, we have to handle that case seperately
   * so if front[qn] == -1, that means that queue is empty, we are going to insert it in first tym
   * update front of nth queue, front[qn] = index
   */

  push(data, qn) {
    //check overflow
    if (this.freespot == -1) {
      console.log("queue is full");
      return;
    }
    //find first free index
    let index = this.freespot;
    //update free spot
    this.freespot = next[index];

    //check whether it is first element or not
    //indexing zero se start hai isly qn -1 likh rahe, 2nd queue means queue at 1st index
    if (front[qn - 1] == -1) {
      front[qn - 1] = index;
    } else {
      //link new element to the previous element
      next[qn - 1] = index;
    }
    //update next
    next[index] = -1;
    //update rear
    rear[qn - 1] = index;

    arr[index] = data;
  }
}
