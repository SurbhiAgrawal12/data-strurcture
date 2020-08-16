// Queues using array

class Queue {

    constructor() {
        let nextIndex = 0;
        let firstIndex = -1;
        let data = []; let size = 0;
    }

    getSize() {
        return this.nextIndex; // return size; // return this.data.length;
    }

    isEmpty() {
        (this.firstIndex == -1) ? true : false;  // return size == 0; // return this.data.length == 0;
    }

    enqueue(element) {
        this.firstIndex == -1 ? this.firstIndex = 0 : this.firstIndex;
        this.data.push(element); // data[nextIndex] = element;
    //    this.nextIndex++; this.size++;
    }

    front() {
        if(this.isEmpty() == true){
           return  console.log("Queue is empty");
        
        } 
        return this.data[firstIndex]; // return this.data[0];
    }

    dequeue() {
        console.log(this.isEmpty());
        if(this.isEmpty() == true){
            return  console.log("Queue is empty");
        } 
        this.firstIndex++;
        return this.data.shift(); // return data[firstIndex];  
    }
}

// creating object for queue class 
let queue = new Queue(); 
              
  
// Testing dequeue and pop on an empty queue 
// returns Underflow 
console.log(queue.dequeue()); 
  
// returns true 
console.log(queue.isEmpty()); 
  
// Adding elements to the queue 
// queue contains [10, 20, 30, 40, 50] 
queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30); 
queue.enqueue(40); 
queue.enqueue(50); 
queue.enqueue(60); 
  
// returns 10 
console.log(queue.front()); 
  
// removes 10 from the queue 
// queue contains [20, 30, 40, 50, 60] 
console.log(queue.dequeue()); 
  
// returns 20 
console.log(queue.front()); 
  
// removes 20 
// queue contains [30, 40, 50, 60] 
console.log(queue.dequeue()); 