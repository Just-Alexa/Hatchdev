class LNode<T> {
  data: T;
  next: LNode<T>;

  constructor(val: T) {
    this.data = val;
  }
}

class LinkedList<T> {
  head: LNode<T>;

  add(val: T) {
    const newNode = new LNode(val);

    // if we don't have 'head'
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // if we have 'head'

    let currentNode = this.head;

    // [] => [] => [] => [] => null
    //                          ^
    //  ^
    while (currentNode.next != undefined) {
      // null
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  print() {}
}

const l = new LinkedList<number>();
l.add(1);
l.add(2);
l.add(3);
console.log(l);