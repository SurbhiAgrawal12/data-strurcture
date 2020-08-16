



let hash = (key) => {
    let hashValue = 0;
    let gh = 0;
    const stringTypeKey = `${key}${typeof key}`;
    
        for (let index = 0; index < stringTypeKey.length; index++) {
          const charCode = stringTypeKey.charCodeAt(index);
          console.log("charcode :: ", charCode);
          let temp = hashValue += charCode;
          console.log("temp :: ", temp);
          temp << (index * 8);
          console.log("temp2 :: ", temp);
          hashValue = temp;
          console.log("hashValue :: ", hashValue);
          gh += charCode << (index * 8);
          console.log("gh :: ", gh);
          
        }
    
    return hashValue;
}

let key = "cat";
hash(key);