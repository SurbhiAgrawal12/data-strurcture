// Suppose you're given a list of the following values: [1,4,5,7,8,9]
// and you're given that k=4 where k is the difference between two array elements. 
// How would you find how many times k appears?
// For example, in this list k appears 3 times[(5-1),(8-4),(9-5)]

class Solution {
    constructor() {

    }

    findPairs(arr, k) {

        let map1 = new Map();
        
        for(let i =0; i< arr.length; i++) {
            map1.set(arr[i]-k, i);
        }

        let count = 0;
        for(let i = 0; i<arr.length; i++) {
            if(map1.has(arr[i]) && map1.get(arr[i]) != i){
                count++;
            }
        }
        //console.log("map :: ", map1, "count :: ", count);
        return count;
    }
}

let arr = [1,4,5,7,8,9];
let k = 4;

let numberOfpairs = new Solution().findPairs(arr, k);

console.log("numberOfpairs :: ", numberOfpairs);





