/**
 *Given a queue of integers of even length, rearrange the elements by interleaving the first 
  half of the queue with the second half of the queue.
  The meaning of INTERLEAVE is to arrange in or as if in alternate layers.
  insert pages, typically blank ones, between the pages of (a book).

Input  : 1 2 3 4
Output : 1 3 2 4

Input  : 11 12 13 14 15 16 17 18 19 20
Output : 11 16 12 17 13 18 14 19 15 20

Approach:
1. either use another queue or stack to store first half.
    1.1 push first half of queue into stack (stack = [11,12,13,14,15])
    1.2 push into queue from stack( but now right half would be in reverse order) {queue = [16 17 18 19 20 15 14 13 12 11]}
    1.3 pop left half from queue and push into right half of queue. queue = [15 14 13 12 11 16 17 18 19 20]
    1.4 now pop left half from queue and put it into stack (now it is in the order we wanted) stack = [15 14 13 12 11]
    while(!stack.isEmpty()) {
        let val = stack.top(); //11
        stack.pop();
        queue.push(val); // [16 17 18 19 20 11]
        val =  queue.front(); //16
        queue.pop(); // [ 17 18 19 20 11]
        queue.push(val); [ 17 18 19 20 11 16]
    }

    TC = O(n), SC = O(n)
 */
