// Implementation of Stack using array by using predefine functions(push, pop)

 // Functions to be implemented 
    // push(item) 
    // pop() 
    // peek() 
    // isEmpty() 
    // printStack() 

class Stack {
    
        // Array is used to implement stack 
    constructor() { 
        this.items = []; 
        //this.sum = 0;
    } 
      
    /////////// push function /////////////////
    push(element) { 
        this.items.push(element);  // push element into the items 
        //this.sum += element;

    } 
    
    ///////////// pop function /////////////////
    pop() { 
        // return top most element in the stack 
        // and removes it from the stack 
        // Underflow if stack is empty 
        if (this.items.length == 0) {
            return "Underflow"; 
        }
        //this.sum -= this.items[this.items.length - 1];
        return this.items.pop(); 
    } 
    
    ////////// peek function //////////////////
    peek() { 
        // return the top most element from the stack 
        // but does'nt delete it. 
        return this.items[this.items.length - 1]; 
    } 
    
    /////////// isEmpty function /////////////
    isEmpty() 
    { 
        // return true if stack is empty 
        return this.items.length == 0; 
    } 
    
    ///////////// printStack function //////////
    printStack() { 
        let str = ``; 
        for (var i = 0; i < this.items.length; i++) 
            str += ` ${this.items[i]} `; 
        return str; 
    } 

    ///////////////// size function //////////////

    size() {
        return this.items.length;
    }
} 

module.exports = Stack;

// // creating object for stack class 
// var stack = new Stack(); 


// // testing isEmpty and pop on an empty stack 
// console.log(stack.isEmpty());  // returns true 
// console.log(stack.pop());  // returns Underflow 

// // Adding element to the stack 
// stack.push(10); 
// stack.push(20); 
// stack.push(30);

// // Printing the stack element 
// console.log(stack.printStack());  // prints [10, 20, 30] 
// console.log(stack.peek()); // returns 30
// console.log(stack.pop()); // returns 30 and remove it from stack 
// console.log(stack.printStack()); // returns [10, 20] 