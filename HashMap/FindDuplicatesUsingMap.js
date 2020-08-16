class FindDuplicate {
    constructor() {
        this.duplicateElement = "Not Found";
    }

    printDuplicates = (value, key) => {
        if(value > 1) {
            this.duplicateElement = key;
        }
    }
    
    findDuplicateUsingMap = (arr) => {
        let map = new Map();
    
        for(let eachElement of arr) {
            if(map.has(eachElement)) {
                let value = map.get(eachElement);
                value++;
                map.set(eachElement, value);
            }else {
                map.set(eachElement, 1);
            }
        }
    
        map.forEach(this.printDuplicates);
        
    }
    
}


function main() {
    let arr = [0, 5, 2, 5, 4, 7, 1, 3, 6];
    let obj = new FindDuplicate();
    obj.findDuplicateUsingMap(arr);
    console.log("Duplicate Element :: ", obj.duplicateElement);
}

main();