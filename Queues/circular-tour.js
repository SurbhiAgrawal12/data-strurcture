/**
 * que: Given information about N petrol pumps (say arr[]) that are present in a circular path. 
 * The information consists of the distance of the next petrol pump from the current one 
 * (in arr[i][1]) and the amount of petrol stored in that petrol pump (in arr[i][0]).
 * Consider a truck with infinite capacity that consumes 1 unit of petrol to travel 1 unit 
 * distance. The task is to find the index of the first starting point such that the truck can 
 * visit all the petrol pumps and come back to that starting point.

Note: Return -1 if no such tour exists.

Input: arr[] = {{4, 6}, {6, 5}, {7, 3}, {4, 5}}. 
Output: 1
Explanation: If started from 1st index then a circular tour can be covered.

Brute force: for every petrol pump check can u complete the circle or not. TC = O(n^2)
efficient Approach: use queues, have two pointers, front and rear, if travel is possible do rear++
inlast if(front == rear) => circle complete
now, if travel is not possible, increment front, instead of front++ do front = rear+1

Implementation:
1. Set two pointers, start = 0 and end = 1 to use the array as a queue.
2. If the amount of petrol is efficient to reach the next petrol pump then increment the 
    end pointer (circularly). {  ie if travel possible, petrol-distance > 0, do end++}
3. if(start == end) -> circle complete
4. if travel is not possible, ie petrol-distance < 0, do front = rear+1 and rear = front
5. Breaking condition: if(start == end) -> circle complete
 */
//start means front and i means rear
const printTour = (p, n) => {
  let deficit = 0;
  let balance = 0;
  let start = 0;

  for (let i = 0; i < n; i++) {
    balance = balance + (p[i].petrol - p[i].distance);
    if (balance < 0) {
      //hum is for loop k through alrdy 0 se i tk check kr chuke the ki travel psbl hai ya nahi.
      // so agar psbl nahi hai toh uske reult ko hum variable me store kra lenege taki dubara traverse na krna pde
      deficit = deficit + balance;
      start = i + 1;
      balance = 0;
    }
  }
  if (deficit + balance > 0) {
    return start;
  } else {
    return -1;
  }
};

// A petrol pump has petrol and distance to next petrol pump
class petrolPump {
  constructor(petrol, distance) {
    this.petrol = petrol;
    this.distance = distance;
  }
}

// Driver code

let arr = [new petrolPump(6, 4), new petrolPump(3, 6), new petrolPump(7, 3)];
// arr  = [{"petrol" : 6, "distance": 4}, {"petrol": 3, "distance": 6}, {"petrol": 7, "distance": 3}]
let n = arr.length;
let start = printTour(arr, n);

start == -1 ? console.log("No solution") : console.log(`Start = ${start}`);
