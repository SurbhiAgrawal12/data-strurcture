// Given a string, find the longest substring which is palindrome. 
// For example, if the given string is “forgeeksskeegfor”, the output should be “geeksskeeg”.

let checkPallindrome = (str) => {
    console.log("str :: ", str);
    let reverseString = str.split("").reverse().join("");
    console.log("reverseString :: ", reverseString);
    if(str == reverseString) {
        return true;
    }
    return false;
}

let longestPallindrome = (str) => {

    let arr = str.split("");
    //console.log("length of string :: ", str.length);

    let i = 0;
    let j = arr.length-1;

    for(;i<j;) {
        i = 0;
        j = arr.length-1;
        console.log("arr[i] :: ", arr[i], "arr[j] :: ", arr[j]);
        if(arr[i] != arr[j]){
            arr.pop();
            arr.shift();
            console.log("length:: ", arr.length, "arr :: ", arr);
        }else{
            let pallindromeString = arr.join("");
            isPallindrome = checkPallindrome(pallindromeString);
            if(!!isPallindrome) {
                return pallindromeString;
            } else {
                arr.pop();
                arr.shift();
            }
        }
    }
};

let str = "forgeeksskeegfor";
console.log("longest Pallindrome :: ", longestPallindrome(str));