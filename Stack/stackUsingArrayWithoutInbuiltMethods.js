// Implentation of Stack using Array without using inbuilt menthod(push)

class Stack{
    constructor() {
        this.arr = [];
        this.nextIndex = 0;
    }

    push(element) {
        this.arr[this.nextIndex] = element;
        this.nextIndex = this.nextIndex+1;
    }

    pop() {
        if(this.nextIndex == 0){
            return "Stack UnderFlow";
        }
        this.nextIndex = this.nextIndex-1 ;
        return this.arr.pop();
        //return this.arr[this.nextIndex]; // by doing this it will not get removed from array
    }

    peek() {
        if(this.nextIndex == 0){
            return "Stack is empty";
        }
        return this.arr[this.nextIndex-1];
    }

    isEmpty() {
        return this.nextIndex == 0;
    }

    printStack() {
        let str = ``;
        for(let i =0; i< this.arr.length; i++){
            str += ` ${this.arr[i] } `
        }
        return str;
    }

    size() {
        return this.nextIndex;
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
console.log(stack.size());

// Printing the stack element 
console.log(stack.printStack());  // prints [10, 20, 30] 
console.log(stack.peek()); // returns 30
console.log(stack.pop()); // returns 30 and remove it from stack 
console.log(stack.printStack()); // returns [10, 20] 
console.log(stack.size());
