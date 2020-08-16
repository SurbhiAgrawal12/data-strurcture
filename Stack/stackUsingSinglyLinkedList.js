// Implementation of Stack using Singly LinkedList

class Node {
    constructor(data) {
        this.data = data;
        this.nextIndex = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(data) {
        let node = new Node(data);
        node.nextIndex = this.head;
        this.head = node;
        this.size++;
    }

    pop() {
        if(this.isEmpty()) {
            return "Stack Underflow";
        }
        else{
            let returnResult = this.head.data; 
            this.head = this.head.nextIndex;
            this.size--;
            return returnResult;

        }
    }
    
    peek() {
        if(this.isEmpty()){
            return "Stack is Empty";
        }
        else {
            return this.head.data;
        }
    }

}

// creating object for stack class 
var stack = new Stack(); 


// testing isEmpty and pop on an empty stack 
console.log(stack.isEmpty());  // returns true 
console.log(stack.pop());  // returns Underflow 

// Adding element to the stack 
stack.push(10); 
stack.push(20); 
stack.push(30);

// Printing the stack element 
//console.log(stack.printStack());  // prints [10, 20, 30] 
console.log(stack.peek()); // returns 30
console.log(stack.pop()); // returns 30 and remove it from stack 
console.log("stack :: ", stack);
console.log("size of an stack :: ", stack.getSize());
//console.log(stack.printStack()); // returns [10, 20] 