////// Map ////////////////////

let obj1 = {
    1 : "one",
    2 : "two",
    ["one"] : "hello"
}

console.log("obj1 :: ", obj1);

for(let k in obj1) {
    console.log(k , typeof k);
}

//  conclusion : in JS object type of keys can only be string. 

// If we want different type of keys, we will use MAP.
// Map
//1) it is a ordered Map, ie When we iterate over the map object it returns the key,value pair in the same order as inserted.
//2) Each element is stored as a Key, value pair.
//3) for...of loop returns an array of [key, value] for each iteration.
//4) can be any type of key.

//  Creation of map()
var map1 = new Map() // empty obj
console.log("map1 :: ", map1);
//var map2 = new Map(1,2); // wrong cannot define like this
//console.log("map2 :: ", map2);
//var map3 = new Map([1,2]);  // wrong cannot define like this
//console.log("map3 :: ", map3);
var map4 = new Map([[1 , 2], [2 ,3 ] ,[4, 5]]);  // key value pairs syntax is => new map([it])
console.log("map4 :: ", map4);

var map2 = new Map([["firstname" ,"sumit"], ["lastname", "ghosh"], ["website", "geeksforgeeks"]]); 
console.log("Map2 :: ", map2); 

var map3 = new Map([["whole numbers", [1 ,2 ,3 ,4]], ["Decimal numbers" , [1.1, 1.2, 1.3, 1.4]], ["negative numbers", [-1, -2, -3, -4]]]); 
console.log("Map3 :: ", map3); 

var map5 = new Map([ [["first name", "last name"], ["sumit", "ghosh"]], [["friend 1", "friend 2"], ["sourav","gourav"]] ]); 
console.log("Map5 :: ", map5); 

for(let eachPair of map5) {
    console.log(eachPair);
}


for(let eachPair of map4) {
    console.log(eachPair, typeof eachPair);
    for(let k of eachPair) {
        console.log(k, typeof k);
    }
}


// Methods of map
//1) Map.prototype.set() - It adds the key and value to the Map Object, map1.set(k, v); // k - key, v - value // it returns a Map object
console.log(map5.set("newKey", "newValue"), map5.set(1,2));
//2) Map.prototype.size – It returns the number of elements or the key-value pairs in the map.
console.log("map5 size :: ",  map5.size);
//3) Map.prototype.has() – It return a boolean value depending on whether the specified key is present or not, map1.has(k); returns true or false
console.log(map5.has(1));
//4) Map.prototype.get() – It returns the value of the corresponding key, map1.get(k); returns the value associated with that key
console.log(map5.get(1));
//5) Map.prototype.delete() – It delete’s both the key as well as a value from the map ; map1.delete(k);; returns trur or false
console.log(map5.delete(2));
//6) Map.prototype.clear() – Removes all the elements from the Map object
//console.log(map5.clear());
//7) Map.prototype.entries() – It returns an iterator object that contains key/value pair for each element present in the Map object.
console.log(map5.entries());
//8) Map.prototype.keys() – It returns an iterator object which contains all the keys present in the Map Object. map1.keys();
console.log(map5.keys());
//9) Map.prototype.values() – It returns an iterator object which contains all the values present in the Map Object.
console.log(map5.values());
//10) Map.prototype.forEach() – It executes the callback function once for each key/value pair in the Map, in the insertion order.
// callback function parameter orders are like 1) values, 2) keys, 3) map
function printOne(values)  
{ 
   console.log("value:: ", values); 
}
function printTwo(values, key)  
{ 
   console.log("keys and values :: ", `${key} ${values}`); 
} 
function printThree(values, key, map)  
{ 
   // it will print key and value  
   // and the set object 
   console.log(key + "  " + values); 
   console.log(map); 
} 
map5.forEach(printOne);
map5.forEach(printTwo);
//map5.forEach(printThree);