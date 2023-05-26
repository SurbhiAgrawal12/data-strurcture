/**
 *que: Design a data structure, which represents two stacks using only one array, common for both stacks.

 Following functions must be supported by twoStacks:
    push1(int x) –> pushes x to first stack 
    push2(int x) –> pushes x to second stack
    pop1() –> pops an element from first stack and return the popped element 
    pop2() –> pops an element from second stack and return the popped element
    Implementation of twoStack should be space efficient.

    Note: quest is asking for design a data structure, so create a class.

    condition: You need to perform push and pop operaion in such a way that we are able to
    push elements in the stack untill there is some empty space available in the array.

    Brute Force Approach:  
    In this approach, we will divide the array into two sub-arrays and then store the elements. 
    The array will be divided into two equal subarrays if the number of elements are even, 
    and if the number of elements are odd then the left subarray 
    will have n/2 elements and the right subarray will have n/2+1 elements. 

    Optimized Approach:
    In this approach, the starting index of both stacks is chosen as the extreme corners of the array, 
    i.e. from the leftmost and rightmost corner indices. Iteration is continued for every 
    element and the array starts to shrink towards the middle while storing elements. 
    The space between the top elements of the stacks is checked and if there is space, 
    the elements are stored in those indices.

    psedo code:
    Follow the steps below to solve the problem:
    Stack1 starts from the leftmost corner of the array, the first element in stack1 is pushed at index 0 of the array. 
    Stack2 starts from the rightmost corner of the array, the first element in stack2 is pushed at index (n-1) of the array. 
    Both stacks grow (or shrink) in opposite directions. 
    To check for overflow, all we need to check is for availability of space between top elements of both stacks.
    To check for underflow, all we need to check is if the value of the top of the both stacks  is between 0 to (n-1) or not.
 */

class TwoStacks {
  constructor(n) {
    this.arr = Array(n).fill(0);
    this.size = n;
    this.top1Index = -1;
    this.top2Index = this.size;
    //   this.top2Index = arr.length;
  }
  //stack1 insertion will be from left to right in an array
  push1(num) {
    //there should be atleast one space to insert, although no need to chck in js
    //atleast an empty space is present
    if (this.top2Index - this.top1Index > 1) {
      this.top1Index++;
      arr[this.top1Index] = num;
    } else {
      console.log("stack overflow");
    }
  }
  //stack2 insertion will be from right to left in an array
  push2() {
    //atleast an empty space is present
    if (this.top2Index - this.top1Index > 1) {
      this.top2Index--;
      arr[this.top12ndex] = num;
    } else {
      console.log("stack overflow");
    }
  }
  pop1() {
    //atleast there is any elemengt present in an array
    //Note: we are not actually pop the element here, we just maintain the top referencce,
    //whenever someone will push, element of an array will get override.
    //cos wwhile implementing push operation, we are not using the inbuilt push method, we are doing arr[index] = value, so element at that position would get override
    if (this.top1Index >= 0) {
      let lastElementOfStack1 = this.arr[this.top1Index];
      this.top1Index--;
      return lastElementOfStack1;
    } else {
      return -1;
    }
  }
  pop2() {
    if (this.top2Index < this.size) {
      let lastElementOfStack2 = this.arr[this.top2Index];
      this.top2Index++;
      return lastElementOfStack2;
    } else {
      return -1;
    }
  }
}

// Driver program to test twoStack class
var ts = new TwoStacks(5);
ts.push1(5);
ts.push2(10);
ts.push2(15);
ts.push1(11);
ts.push2(7);
console.log("Popped element from" + " stack1 is " + ts.pop1());
ts.push2(40);
console.log("<br/>Popped element from" + " stack2 is " + ts.pop2());
