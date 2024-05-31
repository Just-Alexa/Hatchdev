class DNode<T> {
  data: T;
  next: DNode<T>;
  prev: DNode<T>;

  constructor(val: T) {
    this.data = val;
  }
}

class CircularLinkedList<T> {
  head: DNode<T>;
  tail: DNode<T>;


// Add the head node to the list
  add(val: T, position?: number) {
    const newNode = new DNode(val); //It works

    // if we don't have 'head'
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // if we have 'head'

    let currentNode = this.head;

    // [] <=> [] <=> [] <=> [] <=> null
    //                          ^
    //  ^
    while (currentNode.next != undefined) {
      // null
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
    newNode.prev = currentNode;
  }

  //Insert at any position
  InsertAt(val: T, position){
    let newNode = new DNode(val);
    let currentNode = this.head;
    let prevNode;
    let count = 0;

    if (position == 0) {
        this.head = newNode;
        newNode.next = this.head
        return;
    } else{
        prevNode = currentNode; //The node before the previous
        currentNode = currentNode.next; //The node after the previous
    }
    newNode.next = currentNode;
    prevNode.next = newNode;
  }

  //Delete the list of nodes
  delete(val: T) {
    let currentNode = this.head;
    while (currentNode != undefined) {
      if (currentNode.data == val) {
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  print() {}
}

//Thio shows the add and delete results
const MyCircularLinkedList = new CircularLinkedList<number>();
MyCircularLinkedList.add(1);
MyCircularLinkedList.add(2);
MyCircularLinkedList.add(3);
MyCircularLinkedList.add(4);
MyCircularLinkedList.add(5);
MyCircularLinkedList.add(6);

MyCircularLinkedList.delete(3);
MyCircularLinkedList.delete(5); //Opeooo it dey work//\

MyCircularLinkedList.InsertAt(7, 2);
console.log(MyCircularLinkedList)

