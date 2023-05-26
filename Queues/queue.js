class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
    this.size;
  }
  enqueue(num) {
    items[this.rear] = num;
    this.rear++;
  }
  //we have inbuilt function shift() in array which works same as pop() of queue
  dequeue() {
    //if queue is empty
    if (this.front == this.rear) {
      return -1;
    } else {
      let ans = this.items[this.front];
      this.items[this.front] = -1;
      this.front++;
      if (this.front == this.rear) {
        this.front = 0;
        this.rear = 0;
      }
      return ans;
    }
  }
  size() {}
  isEmpty() {
    if (this.front == this.rear) {
      return -1;
    }
  }
  //queue me sabse aage kaunsa element hai use dekhne k liye front function hai
  front() {
    if (this.front == this.rear) {
      return -1;
    } else {
      return this.items[this.front];
    }
  }
}

/**
 * <script>
	class Queue {
		constructor() {
			this.items = {}
			this.frontIndex = 0
			this.backIndex = 0
		}
		enqueue(item) {
			this.items[this.backIndex] = item
			this.backIndex++
			return item + ' inserted'
		}
		dequeue() {
			const item = this.items[this.frontIndex]
			delete this.items[this.frontIndex]
			this.frontIndex++
			return item
		}
		peek() {
			return this.items[this.frontIndex]
		}
		get printQueue() {
			return this.items;
		}
	}
	const queue = new Queue()
	console.log(queue.enqueue(7))
	console.log(queue.enqueue(2))
	console.log(queue.enqueue(6))
	console.log(queue.enqueue(4))
	console.log(queue.dequeue())
	console.log(queue.peek())
	var str = queue.printQueue;
	console.log(str)
</script>

 */

/**
 * Explanation: The insertion and deletion of items are performed in O(1) because of variables frontIndex and backIndex.

Time complexity:

Enqueuing an element: O(1)
Dequeuing an element: O(n) (as all the remaining elements need to be shifted one position to the left)
Accessing the front of the queue: O(1)
Space complexity: 

O(n), where n is the number of elements in the queue.

We can also create a queue using array and use the inbuilt array methods to implement the queue
functions. The only drawback of inbuilt array methods is that they perform operations in O(n) 
time complexity.
 */
