/**
 * input restricted to only rear side(ie insert operation)
 * output( ie pop operation) both side possible
 *
 * Opearions:
 * 1. push_back (push from rear)
 * 2. pop_back (pop from rear)
 * 3. pop_front (pop from front)
 */

// JavaScript program for the above approach
// Queue using circular array

// A structure to represent a Input Restricted Queue
class Deque {
  constructor(size) {
    this.arr = new Array(size);
    this.front = -1;
    this.rear = 0;
    this.size = size;
  }
  // Operations on Input Restricted Queue

  // Checks whether Input Restricted Queue is full or not.
  isFull() {
    return (
      (this.front === 0 && this.rear === this.size - 1) ||
      this.front === this.rear + 1
    );
  }

  // Checks whether Input Restricted Queue is empty or not.
  isEmpty() {
    return this.front === -1;
  }

  // function to inset element at rear end of Input Restricted Queue
  insertRear(key) {
    if (this.isFull()) {
      console.log("Overflow");
      return;
    }
    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
    } else if (this.rear === this.size - 1) {
      this.rear = 0;
    } else {
      this.rear = this.rear + 1;
    }
    this.arr[this.rear] = key;
  }

  // Deletes element at front end of Input Restricted Queue
  deletefront() {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
      return;
    }
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else if (this.front === this.size - 1) {
      this.front = 0;
    } else {
      this.front = this.front + 1;
    }
  }

  // Delete element at rear end of Input Restricted Queue
  deleterear() {
    if (this.isEmpty()) {
      console.log("Underflow");
      return;
    }
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else if (this.rear === 0) {
      this.rear = this.size - 1;
    } else {
      this.rear = this.rear - 1;
    }
  }

  // Returns front element of Input Restricted Queue
  getFront() {
    if (this.isEmpty()) {
      console.log("Underflow");
      return -1;
    }
    return this.arr[this.front];
  }

  // Function return rear element of Input Restricted Queue
  getRear() {
    if (this.isEmpty() || this.rear < 0) {
      console.log("Underflow");
      return -1;
    }
    return this.arr[this.rear];
  }
}

// Driver code

// Function calls
const dq = new Deque(5);
console.log("Insert element at rear end : 5");
dq.insertrear(5);
console.log("Insert element at rear end : 10");
dq.insertrear(10);
console.log("Insert element at rear end : 15");
dq.insertrear(15);
console.log("Get rear element : ", dq.getRear());
dq.deleterear();
console.log("After delete rear element new rear become : ", dq.getRear());
console.log("Get front element : ", dq.getFront());
dq.deletefront();
console.log("After delete front element new front become : ", dq.getFront());
