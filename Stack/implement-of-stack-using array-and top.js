class Stack {
  constructor() {
    this.arr = [];
    this.top = -1;
  }
  push() {
    // in javascript, we don't need to check space is available or not in an array, cos array is dynamic.
    this.top = this.top + 1;
    this.arr[this.top] = element;
  }

  pop() {
    //check element is present or not, there are number of ways to check that, first top>= 0 other is this.isEmpty() == false
    if (this.top >= 0) {
      this.arr.pop();
      this.top = this.top - 1;
    } else {
      console.log("stack underflow");
    }
  }

  peek() {
    if (this.top >= 0 && this.top < this.arr.length) {
      return this.arr[this.top];
    } else {
      console.log("stack is empty");
    }
  }

  //   size() {}

  empty() {
    if (this.top == -1) {
      console.log("stack is empty");
    }
  }
}
