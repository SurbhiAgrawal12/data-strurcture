// You have three stacks of cylinders where each cylinder has the same diameter, but they may vary in height. 
//You can change the height of a stack by removing and discarding its topmost cylinder any number of times.

// Find the maximum possible height of the stacks such that all of the stacks are exactly the same height.
// This means you must remove zero or more cylinders from the top of zero or more of the three stacks until 
// they're all the same height, then print the height. The removals must be performed in such a way as to 
// maximize the height.

// Note: An empty stack is still a stack.


class EqualStack {
    constructor (n1, n2, n3, arr1, arr2, arr3) {
        this.n1 = n1;
        this.n2 = n2;
        this.n3 = n3;
        this.arr1 = arr1;
        this.arr2 = arr2;
        this.arr3 = arr3;
    }

    calculateHeight() {
        let h1 = 0; let h2 = 0; let h3 = 0;
        let i = 0; let j = 0; let k = 0;
        for(; i< this.n1 && j<this.n2 && k<this.n3; ) {
            h1 = h1+ this.arr1[i]; i++;
            h2 = h2 + this.arr2[j]; j++;
            h3 = h3 + this.arr3[k]; k++;
        }
    
        while(i<this.n1) {
            h1 = h1+ this.arr1[i]; i++;
        }
    
        while(j<this.n2) {
            h2 = h2 + this.arr2[j]; j++;
        }
    
        while(k < this.n3) {
            h3 = h3 + this.arr3[k] ; k++;
        }
        console.log("h1 :: ", h1, "h2 :: ", h2, "h3 :: ", h3);
        return this.compareAndTrim(h1, h2, h3);
    }
    
    compareAndTrim(h1, h2, h3) {
    
        let topIndex1 = 0; let topIndex2 = 0; let topIndex3 = 0;
    
        while(true) {
            if(this.n1 == 0 || this.n2 == 0 || this.n3 == 0) {
                return 0;
            }
            if(h1 == h2 && h2 == h3) {
                return h1;
            }else if(h1 >= h2 && h1 >= h3){
                h1 = h1 - this.arr1[topIndex1]; topIndex1++;
                console.log("h1 ", h1, "top index :: ", topIndex1);
            }else if(h2 >= h1 && h2 >= h3) {
                h2 = h2 - this.arr2[topIndex2]; topIndex2++;
                console.log("h2 ", h2, "top index :: ", topIndex2);
            }else if(h3 >= h1 && h3 >= h2) {
                h3 = h3 - this.arr3[topIndex3]; topIndex3++;
                console.log("h3 ", h3, "top index :: ", topIndex3);
            }
        }
        
    }
}

let arr1 = [3, 2, 1, 1, 1];
let arr2 = [4 ,3 ,2];
let arr3 = [1 ,1 ,4 ,1];

let n1 = 5; let n2 = 3; let n3 = 4;
let obj = new EqualStack(n1, n2, n3, arr1, arr2, arr3);
console.log(obj.calculateHeight());
