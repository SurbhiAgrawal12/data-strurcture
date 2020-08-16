// // // console.log("Global this :: ", this);

// // const obj = {
  
// //     "name" : "Billy",
// //     sing : function(){
// //         console.log('a', this);
// //         // var anotherFunction = () => {
// //         //     console.log('b', this);
// //         // }
// //         // return anotherFunction;

// //      //   return anotherFunction.bind(this);  // here this means obj because we are inside obj // bind will lexicall bind the reference of obj
// //     }
// // }

// // obj.sing();



// // //var x = 9; // while printing this.x it is giving undefined why???
// // // this.x = 8 ;

// // const module1 = {
// //     "x" : 81,
// //     getX () {
// //         console.log("inside module :: ", this.x); // 9 , 8
// //         return this.x;

// //     }
    
// //  }

// //  var storeGetX = module1.getX.bind(module1);
// // console.log("sstoreGetX() :: ", storeGetX()); // (it is printing bound function)



// var x = 9; // while printing this.x it is giving undefined why???
 
// this.x = 8 ;
//  console.log(x, this.x);

// const module1 = {
//     "x" : 81,
//     getX : function() {
//         console.log("inside module :: ", x, this.x);
//         return x;
 
//     }
    
// }
 
// console.log("module :: ", module1);
// console.log("getx() :: ", module1.getX());
 
// var storeGetX = module1.getX.bind(this);
// console.log(storeGetX(), this.x);



// // console.log("module :: ", module1);
// // console.log("getx() :: ", module1.getX(), this.x);

// // var storeGetX = module1.getX.bind(module);
// // //var boundValue = storeGetX.bind(module);
// // console.log(storeGetX(),  this.x); // (it is printing bound function)

// // var food = "grapes";

// // function foodthought() {
// //     console.log("first console :: ", food);
// //     var food = "mango";
// //     console.log("second console :: ", food);
// // }

// // foodthought();

// // function callMeMaybe() {
// //     setTimeout(function() {
// //         console.log(callMe);
// //     }, 4000);
// //     const callMe = "Hi!";
// // }

// // callMeMaybe();


// var a = 8;
// let a = 9;
// console.log(a);


class Characterhello{
    constructor(name){
        this.name = name;
    }
}

Characterhello.prototype.lastName = "agrawal";

let obj = new Characterhello("surbhi");
let obj2 = new Characterhello("sonam");

console.log(obj2.lastName, obj2);

let obj3 = {
    name : "sur",
    lastname : "garg"
}

var x = function () {
    console.log("hi");
}
x.try = "first try";
//obj3.prototype.adress = "Bengaluru";

console.log(x, x.prototype, x.try, obj3.prototype)