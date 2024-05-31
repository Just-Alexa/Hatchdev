class DLNode<T> {
  data: T;
  next: DLNode<T>;
  prev: DLNode<T>;

  constructor(val: T) {
    this.data = val;
  } 
} 

class DoublyLinkedList<T> {
  head: DLNode<T>;

  add(val: T, position?:number{
    const newNode = new DLNode(val);

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

  delete(val:T)
    {
        let currentNode = this.head;
        while(currentNode != undefined)
        {
        if(currentNode.data == val)
        {
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
            return;
        }
        currentNode = currentNode.next;
        }
    }

  print() {}
}

const MyDoublyLinkedList = new LinkedList<number>();
MyDoublyLinkedList.add(1);
MyDoublyLinkedList.add(2);
MyDoublyLinkedList.add(3);
console.log(MyDoublyLinkedList);

const myDoublyLinkedList = new LinkedList<number>();
MyDoublyLinkedList.delete(1);
