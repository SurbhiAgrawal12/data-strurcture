/**
 * Circular Queue:
 * The circular queue is a linear data structure in which the operations are performed based
 * on FIFO (First In First Out) principle and the last position is connected back to the first
 * position to make a circle. It is also called "Ring Buffer".
 *
 * One of the benefits of the circular queue is that we can make use of the spaces in front
 * of the queue. In a normal queue, once the queue becomes full, we cannot insert the next
 * element even if there is a space in front of the queue.
 * But using the circular queue, we can use the space to store new values.
 *
 * Operations:
 * Front() − Get the front item from the queue. If the queue is empty, return -1.
 * Rear() − Get the last item from the queue. If the queue is empty, return -1.
 * enQueue(value) − Insert an element into the circular queue. Return true if the operation is successful.
 * deQueue() − Delete an element from the circular queue. Return true if the operation is successful.
 * isEmpty() − Checks whether the circular queue is empty or not.
 * isFull() − Checks whether the circular queue is full or not.
 *
 * how to check modulus
 * 2%5 = remainder when 2/5, so (2/5 + 1 -1) => (2/5 + 5/5 -1) => (7/5 -1) => (2-1) => 1
 * 1%5 = 0
 * 2%5 = 1
 * 3%5 = 2
 * 4%5 = 3
 * 5%5 = 0
 * so, from above observation, it is clear that in circular queue if we want to check rear
 * is just one index before front, use modulus operation
 *
 */

class CircularQueue {
  constructor(n) {
    this.front = -1;
    this.rear = -1;
    this.size = 5;
    this.arr = new Array(n);
  }
  /**
   *
   * Enqueue: To enqueue an element x into the queue, do the following:
   * 1. Increment rear by 1.
   * 2. If rear is equal to n, set rear to 0.
   * 3. If front is -1, set front to 0.
   * 4. Set queue[rear] to x.
   * 5. if queue is full return "queue is full"
   * 6. condition
   */
  enQueue(value) {
    /**
     * if front ==0 and rear == lastindex of an array, queue is full;
     * if rear is just oneindex before the front index, cos queue is circular, in that case also queue is full.
     * For example, the elements in array is [1,2,3,4,5] and the value of frontIndex is 5
     * by doing modulo with array size (5 % 5) it will return back 0
     * so the next element to be dequeue is the index position of 0.
     */
    if (
      (this.front == 0 && this.rear == this.size - 1) ||
      this.rear == (this.front - 1) % (this.size - 1)
    ) {
      console.log("Queue is Full");
      return;
    } else if (this.front == -1) {
      /* Insert First Element , if front is -1 then rear would be also -1, cos we are inserting frst element*/
      this.front = this.rear = 0;
      //   this.arr[this.rear] = value;
    } else if (this.rear == this.size - 1 && this.front != 0) {
      // to maintain the cyclic nature
      this.rear = 0;
      //   this.arr[this.rear] = value;
    } else {
      //normal fow
      this.rear++;
      //   this.arr[this.rear] = value;
    }
    this.arr[this.rear] = value;
    return true;
  }
  /**
   * Dequeue: To dequeue an element from the queue, do the following:
   * 1. Check if the queue is empty by checking if front is -1.
   * 2. If it is, return an error message indicating that the queue is empty.
   * 3. Set x to queue[front].
   * 4. If front is equal to rear(that means single element is in queue), set front and rear to -1.
   * 5. Otherwise, increment front by 1
   * 6. and if front is equal to n, set front to 0.(cos it is circular queue)
   * 7. Return x
   */
  deQueue() {
    if (this.front == -1) {
      console.log("Queue is Empty");
      return -1;
    }
    let data = this.arr[this.front];
    this.arr[this.front] = -1;
    if (this.front == this.rear) {
      //single element present
      this.front = -1;
      this.rear = -1;
    } else if (this.front == this.size - 1) {
      //to  maintain cyclic nature
      this.front = 0;
    } else {
      //normal flow
      this.front++;
    }

    // console.log("Data: ",data);
    return data;
  }

  displayQueue() {
    if (this.front == -1) {
      console.log("Queue is Empty");
      return;
    }
    console.log("\nElements in Circular Queue are: ");
    if (this.rear >= this.front) {
      for (let i = this.front; i <= this.rear; i++) console.log(this.arr[i]);
    } else {
      for (let i = this.front; i < this.size; i++) console.log(this.arr[i]);
      for (let i = 0; i <= this.rear; i++) console.log(this.arr[i]);
    }
  }
}

/* Driver of the program */
let q = new Queue();

// Inserting elements in Circular Queue
q.enQueue(14);
q.enQueue(22);
q.enQueue(13);
q.enQueue(-6);

// Display elements present in Circular Queue
q.displayQueue();

// Deleting elements from Circular Queue
console.log("Deleted value = ", q.deQueue());
console.log("Deleted value = ", q.deQueue());
q.displayQueue();
q.enQueue(9);
q.enQueue(20);
q.enQueue(5);
q.displayQueue();
q.enQueue(20);
