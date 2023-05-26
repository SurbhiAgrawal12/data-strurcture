/**
 * You can implement both stack and queue in doubly ended queue
 *
 * DEQueue Data Structure: Deque or Double-ended queue is a generalized version of queue in
 * which data can be added and removed from both the ends. It performs both the combined
 * operations of stack and queue together and can be used as any of them.
 *
 * opeartions:
 * 1. push_front
 * 2. push_back
 * 3. pop_front
 * 4. pop_back
 * 
 * List of operations performed on Deque
    1. insertFront(): Inserts an element at the front.
    2. insertBack(): Inserts an element at the back.
    3. removeFront(): Removes an element from the front.
    4. removeBack(): Removes an element from the back.
    5. getFront(): Returns the element at the front.
    6. getBack(): Returns the element at the back.
    7. isEmpty(): Checks if the deque is empty or not.
    8. size(): Returns the size of the deque.
    9. clear(): Clears the deque.
    10. toString(): Returns all the elements concatenated as a string from front to back.

    A deque can be implemented either using a doubly-linked list or circular array.
    In both implementation, we can implement all operations in O(1) time.
 */

// Javascript implementation of De-queue using circular array

// A structure to represent a Deque
let MAX = 100;
class Deque {
  constructor(size) {
    this.arr = new Array(MAX);
    this.front = -1;
    this.rear = 0;
    this.size = size;
  }

  // Checks whether Deque is full or not.
  isFull() {
    return (
      (this.front == 0 && this.rear == this.size - 1) ||
      this.front == this.rear + 1
    );
  }

  // Checks whether Deque is empty or not.
  isEmpty() {
    return this.front == -1;
  }

  // Inserts an element at front
  insertFront(key) {
    // check whether Deque if full or not
    if (this.isFull()) {
      console.log("Queue Overflow");
      return;
    }

    // If queue is initially empty
    if (this.front == -1) {
      this.front = 0;
      this.rear = 0;
    }

    // front is at first position of queue
    else if (this.front == 0) this.front = this.size - 1;
    // decrement front end by '1'
    else this.front = this.front - 1;

    // insert current element into Deque
    this.arr[this.front] = key;
  }

  // function to inset element at rear end of Deque.
  insertRear(key) {
    if (this.isFull()) {
      console.log("Queue Overflow");
      return;
    }

    // If queue is initially empty
    if (this.front == -1) {
      this.front = 0;
      this.rear = 0;
    }

    // rear is at last position of queue
    else if (this.rear == this.size - 1) this.rear = 0;
    // increment rear end by '1'
    else this.rear = this.rear + 1;

    // insert current element into Deque
    this.arr[this.rear] = key;
  }

  // Deletes element at front end of Deque
  deleteFront() {
    // check whether Deque is empty or not
    if (this.isEmpty()) {
      console.log("Queue Underflow");
      return;
    }

    // Deque has only one element
    if (this.front == this.rear) {
      this.front = -1;
      this.rear = -1;
    }
    //IF front points to the last index of the array it’s means we have no more elements in array
    // so we move front to points first index of array back to initial position
    else if (this.front == this.size - 1) this.front = 0;
    // increment front by '1' to remove current front value from Deque
    else this.front = this.front + 1;
  }

  // Delete element at rear end of Deque
  deleterear() {
    if (this.isEmpty()) {
      console.log(" Underflow");
      return;
    }

    // Deque has only one element
    if (this.front == this.rear) {
      this.front = -1;
      this.rear = -1;
    }
    //Else IF Rear points to the first index of array it’s means we have to move rear to points
    //last index [ now first inserted element at front end become rear end ]
    else if (this.rear == 0) this.rear = this.size - 1;
    else this.rear = this.rear - 1;
  }

  // Returns front element of Deque
  getFront() {
    // check whether Deque is empty or not
    if (this.isEmpty()) {
      console.log(" Underflow");
      return -1;
    }
    return this.arr[this.front];
  }

  // function return rear element of Deque
  getRear() {
    // check whether Deque is empty or not
    if (this.isEmpty() || this.rear < 0) {
      console.log(" Underflow");
      return -1;
    }
    return this.arr[this.rear];
  }
}
module.exports = Deque;
// Driver program to test above function
// let dq = new Deque(5);

// console.log("Insert element at rear end : 5 <br>");
// dq.insertrear(5);

// console.log("insert element at rear end : 10 <br>");
// dq.insertrear(10);

// console.log("get rear element : " + dq.getRear() + "<br>");

// dq.deleterear();
// console.log(
//   "After delete rear element new rear become : " + dq.getRear() + "<br>"
// );

// console.log("inserting element at front end<br>");
// dq.insertfront(15);

// console.log("get front element: " + dq.getFront() + "<br>");

// dq.deletefront();

// console.log(
//   "After delete front element new front become : " + +dq.getFront() + "<br>"
// );
