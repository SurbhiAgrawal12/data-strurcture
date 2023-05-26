/**
 * input(ie insert operation) both side possible.
 * output(ie pop operation) is possible only from front side
 *
 * operations:
 * 1. push_front
 * 2. push_back
 * 3. pop_front
 */

// javascript implementation of Output Restricted Queue using circular array

// Maximum size of array or Output
// Restricted Queue
const MAX = 100;

// A structure to represent a Output Restricted Queue
class Deque {
  constructor(size) {
    this.arr = new Array(size).fill(0);
    this.front = -1;
    this.rear = 0;
    this.size = size;
  }

  // Checks whether Output Restricted Queue is full or not.
  isFull() {
    return (
      (this.front == 0 && this.rear == this.size - 1) ||
      this.front == this.rear + 1
    );
  }

  // Checks whether Output Restricted Queue is empty or not.
  isEmpty() {
    return this.front == -1;
  }

  // Function to insert element at front end of Output Restricted Queue
  insertfront(key) {
    // Check whether Deque if full or not
    if (this.isFull()) {
      console.log("overflow");
      return;
    }

    // If queue is initially empty
    if (this.front == -1) {
      this.front = 0;
      this.rear = 0;
    }

    // Front is at first position of queue
    else if (this.front == 0) this.front = this.size - 1;
    // Decrement front end by '1'
    else this.front = this.front - 1;

    // Insert current element into Deque
    this.arr[this.front] = key;
  }

  // Function to insert element at rear end of Output Restricted Queue
  insertrear(key) {
    // Check whether Deque if full or not
    if (this.isFull()) {
      console.log("overflow");
      return;
    }

    // If queue is initially empty
    if (this.front == -1) {
      this.front = 0;
      this.rear = 0;
    }

    // Rear is at last position of queue
    else if (this.rear == this.size - 1) this.rear = 0;
    // Increment rear end by '1'
    else this.rear = this.rear + 1;

    // Insert current element into Deque
    this.arr[this.rear] = key;
  }

  // Deletes element at front end of Output Restricted Queue
  deletefront() {
    // Check whether Deque
    // is empty or not
    if (this.isEmpty()) {
      console.log("Queue Underflow");
      return;
    }

    // Deque has only one element
    if (this.front == this.rear) {
      this.front = -1;
      this.rear = -1;
    }
    // Back to initial position
    else if (this.front == this.size - 1) this.front = 0;
    // Increment front by '1' to remove
    // current front value from Deque
    else this.front = this.front + 1;
  }

  // Returns front element of Output Restricted Queue
  getFront() {
    // Check whether Deque is empty or not
    if (this.isEmpty()) {
      console.log(" Underflow");
      return -1;
    }
    return this.arr[this.front];
  }

  // Function to return rear element of Output Restricted Queue
  getRear() {
    // Check whether Deque is empty or not
    if (this.isEmpty() || this.rear < 0) {
      console.log(" Underflow");
      return -1;
    }
    return this.arr[this.rear];
  }
}

// Driver code
let dq = new Deque(5);

// Function calls
console.log("Inserted element at rear end : 10 \n");
dq.insertrear(10);

console.log("Inserted element at rear end : 15 \n ");
dq.insertrear(15);

console.log("Inserted element at front end : 5 \n");
dq.insertfront(5);

console.log("Get rear element : ", dq.getRear());
console.log("\n");
console.log("Get front element : ", dq.getFront());
console.log("\n");

dq.deletefront();

console.log("After delete front element new front become : ", dq.getFront());
