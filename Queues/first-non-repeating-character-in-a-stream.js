/**
 *e.g. "aabc"
 output: [a, #, b, b]

 Algorithm:
 1. make a data structure either hashmap or object to store the count of characters.
 2. traverse the string
        2.1 increase the count count[a]++;
        2.2 q.push(a); and push the ch in queue

 3. check q.front
        3.1 if it is repeating ch. pop() the ch from queue
        3.2 if it is non repeating ch. print kara lo ya ans me store kra lo.
        3.3. if queue is empty, return #

1. Take map to check the uniqueness of an element.
2. Take queue to find first non-repeating element.
3. Traverse through the string and increase the count of elements in map and push in to queue is count is 1.
4. If count of front element of the queue > 1 anytime then pop it from the queue until we get unique element at the front.
5. If queue is empty anytime append answer string with ‘#’ else append it with front element of queue.
6.  return answer string.

Time Complexity: O(26 * n)
Auxiliary Space: O(n)
 */

const FirstNonRepeating = (inputString) => {
  const countofCharacters = {};
  let queue = [];
  let ans = "";

  for (let i = 0; i < inputString.length; i++) {
    let character = inputString[i];
    console.log("character :: ", character);
    //increase the count
    countofCharacters[character] = countofCharacters[character]
      ? countofCharacters[character] + 1
      : 1;
    console.log("countofCharacters :: ", countofCharacters);
    //queue me push karo
    queue.push(character);
    while (queue.length != 0) {
      if (countofCharacters[queue[0]] > 1) {
        //repeating character
        queue.pop();
      } else {
        //non repeating character
        ans = ans + queue[0];
        break;
      }
    }
    //hum loop se tabhi bahar aaye hai jab ya toh queue empty ho gayi hai ya fir koi non repeating character nahi hai
    if (queue.length == 0) {
      ans = ans + "#";
    }
  }
  return ans;
};
console.log(FirstNonRepeating("aabc"));
