let findIntersectedArray = (arr1, arr2) => {

    const map = new Map();
    let intersectedArray = [];

    // traverse the first array and create a map and put the corresponding count of that key as well
    for(let i =0; i<arr1.length; i++) {
        if(map.has(arr1[i])){
            let value = map.get(arr1[i]);
            value++;
            map.set(arr1[i] , value);
        }else {
            map.set(arr1[i] , 1);
        }
    }

    //traverse the second array and check the element is presnt or not
    //if present decrement the count and if count == 0 remove from the map as well to avoid duplicates
    // e.g { 3, 3, 7} && {3, 3, 1, 8} => {3,3}output but {3, 7, 8} && {3, 3, 7}  => {3,7}output
    for(let i = 0; i<arr2.length; i++) {
        if(map.has(arr2[i])) {
            intersectedArray.push(arr2[i]);
            //console.log(arr2[i]);
            let value = (map.get(arr2[i])); //decrement the count
            value--;
            if(value === 0) {
                map.delete(arr2[i]);
            }
        }
    }

    return intersectedArray;
}

function main() {
    let arr1 = [2, 6, 8, 5, 4,3, 3];
    let arr2 = [2 ,3 ,3,4 ,7 ];

    let intersectedArray = findIntersectedArray(arr1, arr2);
    console.log("intersectedArray :: ", intersectedArray);

}

main();