/* Problem description:
You have an empty sequence, and you will be given  queries. Each query is one of these three types:

1 x  -Push the element x into the stack.
2    -Delete the element present at the top of the stack.
3    -Print the maximum element in the stack.

Input Format
The first line of input contains an integer, . The next  lines each contain an above mentioned query.
 (It is guaranteed that each query is valid.)

Output Format
For each type  query, print the maximum element in the stack on a new line.

Sample Input
10
1 97
2
1 20
2
1 26
1 20
2
3
1 91
3

Sample Output
26
91

*/

function processData(input) {
    //    console.log("input :: ", input, JSON.stringify(input),typeof  input);
    
        let stack = [];
        let arr = input.split("\n");
        let [totalQueries] = arr;
        for(let i =1; i<=totalQueries; i++){
    
            //console.log("stack :: ", stack, arr[i], arr);
    
            let temp = arr[i].trim();
            let subArr = temp.split(" ");
            let [query] = subArr;
           
            if(query == 1){
                stack.push(subArr[1]);
            }
            else if(query == 2 ){
                (stack.length !== 0) ? stack.pop() : "";    
            }
            else if (query == 3){
                (stack.length !== 0) ? console.log(Math.max(...stack)) : "";
            }else{
                console.log("invalid query");
            }
        }
        //Enter your code here
    } 



process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
