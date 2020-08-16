class Stack{
    constructor() {
        this.arr = {};
        this.count = 0;
    }

    push(element) {
        this.arr[this.count] = element;
        this.count++;
        return this.count;
    }

    size() {
        return this.count;
    }

    peek() {
        return this.arr[this.count-1];
    }

    pop() {
        if(this.count == 0) {
            console.log("Stack underflow");
        }
        this.count--;
        let result = this.arr[this.count];
        delete this.arr[this.count]; 
        return result;
    }

    print() {
        return (Object.values(this.arr));
    }

}

let obj = new Stack();
console.log("object inserted ", obj.push(10));
console.log("object inserted ",obj.push(20));
console.log("object inserted ",obj.push(30));
console.log("size of obj :: ", obj.size());
console.log(" last element of array :: ", obj.peek());
console.log("last element poped from stack is :: ", obj.pop());
console.log("print :: ", obj.print());