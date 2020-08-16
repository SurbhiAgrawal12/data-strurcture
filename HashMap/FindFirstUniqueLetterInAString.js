//Find first unique letter in a string

let str = "geeksforgeeks";

let checkfreq = () => {

    let map1 = new Map();
    for(let i =0; i<str.length; i++){
        if(map1.has(str[i])) {
            let value = map1.get(str[i]);
            map1.set(str[i], value+1);
        }else {
            map1.set(str[i], 1);
        }
    }

    for(let i =0; i<str.length; i++) {
        if(map1.get(str[i]) == 1){
            return str[i];
        }
    }

}
let ans = checkfreq(str);
console.log("ans :: ", ans);

// let printFrequency = (value, key) =>{
//     if(value == 1) {
//         console.log("key :: ", key);
//         return;
//     }
// }

// map1.forEach(printFrequency);