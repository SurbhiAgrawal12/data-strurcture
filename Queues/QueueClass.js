class Queue {
  constructor() {
    this.items = [];
  }

  // add element to the back of the queue
  enqueue(item) {
    this.items.push(item);
  }

  // remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  // return the front element without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  // check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // return the size of the queue
  size() {
    return this.items.length;
  }

  // print the elements of the queue
  print() {
    console.log(this.items);
  }
}
