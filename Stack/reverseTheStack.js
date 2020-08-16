/*
Problem Description : Reverse a given Stack with the help of another empty stack. Two stacks will be given. 
Out of which first contains some integers and second one is empty.
 You need to reverse the first one using second stack. Change in the given first stack itself.
Note : You don't need to print or return the stack, 
just reverse the given stack and it will be printed internally.

*/



function reverseStack(arr) {
    

    if(arr.length == 1){
        let x = arr.pop();
        tempArr.push(x);
        return;
    }

    let x = arr.pop();
    reverseStack(arr);
    tempArr.push(x);
    return;
}

function main(arr, tempArr) {

    reverseStack(arr, tempArr);

    //copy back to arr
    while(tempArr.length >0){
        arr.push(tempArr.pop());
    }
}

let arr = [1, 2, 3, 4 ];
let tempArr = [];

main(arr, tempArr);

console.log("tempArr :: ", tempArr, " arr :: ", arr);


// while(arr.length >0){
//     tempArr.push(arr.pop());
// }
// console.log(tempArr, arr);

// while(tempArr.length >0){
//     arr.push(tempArr.pop());
// }
// console.log(tempArr, arr);