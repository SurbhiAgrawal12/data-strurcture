/*
Problem description: Given a string expression, check if brackets present in the expression are balanced or not. Brackets are balanced if the bracket which opens last, closes first.
You need to return true if it is balanced, false otherwise.
*/

//let strExp = "{ a + [ b - c } ]";
let strExp = "{ a + [ b + ( c + d ) ] + ( e + f ) }";
let bracesArray = [];

Array.prototype.peek = function () {
    return bracesArray[bracesArray.length-1];
}

for(let i =0; i< strExp.length; i++){
    if(strExp[i] == "{" || strExp[i] == "[" || strExp[i] == "(" ) {
        bracesArray.push(strExp[i]);
    }
    else if(strExp[i] == ')' || strExp[i] == '}' || strExp[i] == ']') {
        if(strExp[i] == ')' && bracesArray[bracesArray.length -1] == "("){
            bracesArray.pop();
        }
        else if(strExp[i] == ']' && bracesArray[bracesArray.length -1] == "["){
            bracesArray.pop();
        }
        else if(strExp[i] == '}' && bracesArray[bracesArray.length -1] == "{"){
            bracesArray.pop();
        }
    }
}

if(bracesArray.length == 0){
    console.log("Brackets are balanced");
}else{
    console.log("Brackets are not balanced, bracesArray :: ", bracesArray);
}
