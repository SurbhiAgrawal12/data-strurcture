class UniqueElement {
    constructor() {
        this.uniqueEntity = "Not Found";
        this.map = new Map();
    }

    createObjHavingFrequecy(arr) {

        for(let eachElement of arr) {
            if(this.map.has(eachElement)) {
                let value = this.map.get(eachElement);
                value++;
                this.map.set(eachElement, value);
            } else {
                this.map.set(eachElement, 1);
            }
        }
    }

    getUniqueElementOfArray = (value, key) => {
        if(value === 1) {
           this.uniqueEntity = key;
        }
    }

    Iteratemap() {
        console.log("map :: ", this.map)
        this.map.forEach(this.getUniqueElementOfArray);
    }
}


function main() {
    let arr = [2, 3 ,1 ,1 ,3, 6, 2];
    const obj = new UniqueElement();
    obj.createObjHavingFrequecy(arr);
    obj.Iteratemap();
    return obj.uniqueEntity;

}

console.log("unique element :: ", main());