class Node{
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
//The head pointer is assigned a value of null because when a linked list object is initially created it does not contain any nodes
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {

        let newNode = new Node(data, null);

        if(!this.head) {
            this.head = newNode;
            this.size++;
            return;
        }
        else{
            //insert node in last
            let tail = this.head;
            while(tail["next"] !== null ) {
                tail = tail.next;
            }
            tail.next = newNode;
            this.size++;
            return;
        }
    }

    insertNode (location, data) {

        //insert operation on a singly linked list
            //1) Inserting a new node before the head (at the beginning of the list).
            //2) Inserting a new node after the tail (i.e. at the end of the list).
            //3) Inserting a new node in the middle of the list (at a given random position).

        let newNode = new Node(data);

        // When head = null i.e. the list is empty, then head itself will point to the newNode.
        if(!this.head) {
            this.head = newNode;
            this.size++;
            return;
        }

        //insert node at begining, new node needs to be inserted at the front of the list
        if(location === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
            return;
        }

        // insert node in middle, need to traverse the node to insert in middle, temp will work as a previous node of given location
        let i = 0;
        let temp = this.head;
        while(i < location-1) {
            temp = temp.next;
            i++;
        }
        newNode.next = temp.next;
        temp.next = newNode;
        this.size++;

    }


    deleteNodeFromLast () {
        // 1) Deleting the first node.
        // 2) Deleting the last node.
        // 3) Deleting a node from the middle of the list (at a given random position).

        if(!this.head) {
            return;
        }

        if(!this.head.next) {
            this.head == null;
            this.size--;
            return;
        }

        // now we need to traverse the list to get the last node
        let previous = this.head;
        let tail = this.head.next;
        while(tail["next"] !== null ){
            previous = tail;
            tail = tail.next;
        }
        previous.next = null;
        this.size--;
    }

    deleteNode(index) {

        if(!this.head) {
            return;
        }

        if(index === 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let i = 0;
        let previousIndexNode = this.head;
        let currentNode = this.head;
        while(i< index){
            previousIndexNode = currentNode;
            currentNode = currentNode.next;
            i++;
        }
        previousIndexNode.next = currentNode.next;
        this.size--;
    }

    print() {
        let temp = this.head;
        //console.log("temp :: ", temp);
        while(temp != null){
            console.log(temp.data);
            temp = temp.next;
        }
    }

    //Helper method
    indexOf (element) {
        let temp = this.head;
        let count = 0;
        while(temp != null) {

            if(temp.data === element) {
                return count;
            }
            temp = temp.next;
            count++;
        }
        return "notFound";
    }

    sizeOfLL() {
        return this.size;
    }

    insertNodeRecursively (head, data, location) {
        //console.log("function called :: ", head, data, location);
        if(!head) {
            return head;
        }
        if(location === 0 ){
            let newNode = new Node(data);
            newNode.next = head;
            this.size++;
            this.head = newNode;
            return newNode;
        }
        
        let updatedList = this.insertNodeRecursively(head.next, data, location-1);
        head.next = updatedList;
        this.head = head;
        return head;
    }

    deleteNodeRecursively (head, location) {
        if(!head) {
            return head;
        }
        if(location === 0 ){
            head = head.next;
            this.size--;
            this.head = head;
            return head;
        }
        
        let updatedList = this.deleteNodeRecursively(head.next, location-1);
        //console.log("old head :: ", head);
        head.next = updatedList;
        //console.log("new head :: ", head);
        this.head = head;
        //console.log("updated List :: ", head);
        return head;
    }

    midPointOfLisnkedList() {

        let midIndex = Math.floor((this.size-1)/2);
        console.log("midIndex :: ", midIndex);
        console.log("Mid point of Linked list :: ", this.printNodeAtIndex(midIndex));
    }
    
    printNodeAtIndex(index) {
        let temp = this.head;
    //    console.log("temp :: ", temp);
        let count = 0;
        while(count < index) {
        //    console.log("temp : ", temp);
            temp = temp.next;
            count++;
        }
        return temp;
    }

    midPointOfLisnkedListBetter() {
        let slow = this.head;
        let fast = this.head.next;

        if((this.size % 2) == 0) {
            while(fast.next != null) {
                slow = slow.next;
                fast = fast.next.next;
            }
        }else {
            while(fast != null) {
                slow = slow.next;
                fast = fast.next.next;
            }
        }
        
        console.log("midPoint of linked list :: ", slow);
    }

    reverseLinkedList(head) {
        if(!head || head.next == null) {
            return head;
        }
    
        let reversedList = this.reverseLinkedList(head.next);
        let temp = reversedList;
        while(temp.next != null) {
            temp = temp.next;
        }
        temp.next = head;
        head.next = null;
        this.head = reversedList;
        return reversedList;
    }

    reverseLinkedListBetter(head) {
        if(!head || head.next == null) {
            this.head = head;
            return head;
        }
    
        let reversedList = this.reverseLinkedListBetter(head.next);
        let tailOfReversedlist = head.next;
        tailOfReversedlist.next = head;     // head.next.next = head;
        head.next = null;
        this.head = reversedList;
        return reversedList;
    }

    reverseLinkedListusingtail (head) {
        if(!head || head.next == null) {
            let nodePair = new NodeHavingTail();
            nodePair.head = head;
            nodePair.tail = head;
            return nodePair;
        }
    
        let reversedlist = this.reverseLinkedListusingtail(head.next);
        reversedlist.tail.next = head;
        head.next = null;
        let nodePair = new NodeHavingTail();
        nodePair.head = reversedlist.head;
        nodePair.tail = head;
        return nodePair;
    
    }
    
    reversedLLUsingTail(head) {
        let obj = this.reverseLinkedListusingtail(head);
        this.head = obj.head;
        return obj.head;
    }

    reverseLinkedListIterative () {

        let previous = null;
        let current = this.head;
        let next = this.head.next;
    
        while(current != null) {
            current.next = previous;
            previous = current;
            current = next;
            if(!next){
                next = null;
            }
            else{
                next = next.next;
            }
            
        }
        this.head = previous;
        return previous;  
    }
    
}

class NodeHavingTail {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }
}

let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.add(6);

linkedList.midPointOfLisnkedList();
linkedList.midPointOfLisnkedListBetter();

console.log("reversedList1 :: " , linkedList.reverseLinkedListIterative());
console.log("reversedList2 :: " , linkedList.reversedLLUsingTail(linkedList.head));
console.log("reversedList3 :: " , linkedList.reverseLinkedListBetter(linkedList.head));
console.log("reversedList4 :: " , linkedList.reverseLinkedList(linkedList.head));


linkedList.insertNodeRecursively(linkedList.head, 99, 3);

linkedList.deleteNodeRecursively(linkedList.head, 5);
linkedList.deleteNodeRecursively(linkedList.head, 4);



// linkedList.insertNode(0, 0); 
// linkedList.deleteNode(3)
// linkedList.insertNode(3,30);
// linkedList.deleteNodeFromLast();

linkedList.print();
console.log("size :: ", linkedList.sizeOfLL());
  

// linkedList.add(20); 
// linkedList.add(30); 
// linkedList.add(40); 
// linkedList.add(50); 
// linkedList.print();





// functions to be implemented 
    // add(element) adds an element at the end of list 
    // insertAt(element, location) 
    // removeFrom(location) 
    // removeElement(element) 