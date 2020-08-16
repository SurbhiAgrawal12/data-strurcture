// let inputString = "{VitalizeId:553858,supportBy:DXCDB,Contact:karim.razak@brillio.com,bms:desired-instance-schedule:BMS-AlwaysOn}";

//  var removeCurliBracket = inputString.match("{(.*)}");
//  console.log("removeCurliBracket :: ", removeCurliBracket);
// let data = removeCurliBracket.length > 1 ? removeCurliBracket[1] : null;

// var modifiedSplitIssue = (arrayData = []) => {
//     var modifiedData = [];
//     var privisionKeyValuePairIndex;

//     for(let index = 0; index < arrayData.length; index++){
//         if(arrayData[index].indexOf(":") == -1) {
//             console.log("no keys avail", arrayData[index], privisionKeyValuePairIndex);
//             modifiedData[privisionKeyValuePairIndex] += `,${arrayData[index]}`;     
//         }else{
//             modifiedData.push(arrayData[index]);
//             privisionKeyValuePairIndex = index;
//         }
//     }
//     console.log("modifiedSplitIssue output :: ", modifiedData);
//     return modifiedData;
// }

// if(!!data) {
//     let splitAllProperties = data.split(",");
//     let modifiedSplitAllProperties = modifiedSplitIssue(splitAllProperties);

//     console.log("modifiedSplitAllProperties :: ", modifiedSplitAllProperties);
//     let jsonObject = {};
//     for(let eachSplitProperty of modifiedSplitAllProperties) {
//         let splitIntoKeyAndValue = eachSplitProperty.split(":");
        
//         if(splitIntoKeyAndValue.length > 2){
            
//             let value = splitIntoKeyAndValue[splitIntoKeyAndValue.length-1];
//             console.log("splitIntoKeyAndValue :: ", splitIntoKeyAndValue, "value :: ", value);
//             let key ='';
//             for(let i =0 ; i < (splitIntoKeyAndValue.length -1); i++){
//                 key += `${splitIntoKeyAndValue[i]}:`
//             }
//             key = key.substr(0,key.length-1);
//             console.log("key :: ", key.substr(0,key.length+20));
//             jsonObject[key] = value;
//         }
//         else{
//         let key = splitIntoKeyAndValue[0].toString();
//         let value = splitIntoKeyAndValue[1].toString();
//         jsonObject[key] = value;

//          }
        
//     }
//     console.log("jsonObject :: ", jsonObject, JSON.stringify(jsonObject));
// }


// var a = "hi";

// function one() {
//     //var a;
//     a = "hello";
//     console.log(a);
//     var a ="bye";
// }

// function two() {
//     console.log(a);
// }
// one();
// two();

// no hoisting here as first word is () not the fuction
function ab (lll) {
    try{
        var a = 1;
        throw new Error();
    } catch(x) {
         x = 3;
        var x; var y=2;
        console.log(x);
        console.log(a);
        this.x = 444;
    }
    console.log(x);
    console.log(y);
    console.log(a)
}

(function () {
    ab();
})()
// console.log(x);
// let x = 7;
// console.log(x);