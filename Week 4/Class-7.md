# Class 7

## Data Structures

Data structures are essential components that help organize and store data efficiently in computer memory. They provide a way to manage and manipulate data effectively, enabling faster access, insertion, and deletion operations. (Create,Read,Understand,Delete)

Commonm data structures include arrays, linked lists, stacks, queues, trees, and graphs, each serving specific purposes based  on the requirements of the problem. Understanding data structures is fundamental for designing effcient algorithms and optimizing software performance.

### Why do we need Data Structures?

* Data structures and algorithmsare two of the key aspects of computer science
* Data structures allow us to organize and store data, whereas Algorithms allow us to process data
* Learning Data structures and algorithmswill help us become better programmers
* We will be able to write code that is more effective and reliable
* We will be able to solve problems more quickly and efficiently
* Data Organization: They organize data in a logical manner, making it easier to understand and access.
* Data Abstarction: 

## Classification of Data Structures

1. Primitive
2. Non-primitive

Primitive: Integer, Float, Character, Boolean
  
Non-Primitive

* Linear Data Structure
  * Static
    * Array
  * Dynamic
    * Linked List
    * Stack(LIFO)
    * Queue(FIFO)

* Non-linear Data Structure
  * Tree
  * Graph
  
### NOTE: An array is a collection of lists. They are static

## Examples of Linked list in Typescript

Singly Linked List:

```ts
TypeScript
class Node<T> {
  data: T;
  next: Node<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

class SinglyLinkedList<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;

  // Add a node to the end of the list
  append(data: T) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }
    this.tail!.next = newNode;
    this.tail = newNode;
  }

  // Prepend a node to the beginning of the list
  prepend(data: T) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  // Insert a node after a specific node
  insertAfter(data: T, afterNode: Node<T>) {
    if (!afterNode) {
      throw new Error("Node not found in the list");
    }
    const newNode = new Node(data);
    newNode.next = afterNode.next;
    afterNode.next = newNode;
    if (!this.tail || this.tail === afterNode) {
      this.tail = newNode;
    }
  }

  // Delete a node by its data
  delete(data: T) {
    if (!this.head) {
      return;
    }
    let current = this.head;
    let prev: Node<T> | null = null;
    while (current) {
      if (current.data === data) {
        if (!prev) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        if (current === this.tail) {
          this.tail = prev;
        }
        return;
      }
      prev = current;
      current = current.next;
    }
  }

  // Search for a node by its data
  search(data: T): Node<T> | null {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  // Print the contents of the list
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example Usage
const list = new SinglyLinkedList<number>();
list.append(10);
list.append(20);
list.prepend(5);
list.insertAfter(15, list.search(10)!);
list.delete(20);

list.printList(); // Output: 5, 10, 15
Use code with caution.
content_copy
2. Doubly Linked List:

TypeScript
class DoublyNode<T> {
  data: T;
  next: DoublyNode<T> | null = null;
  prev: DoublyNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

class DoublyLinkedList<T> {
  head: DoublyNode<T> | null = null;
  tail: DoublyNode<T> | null = null;

  // Add a node to the end of the list
  append(data: T) {
    const newNode = new DoublyNode(data);
    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }
    this.tail!.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  // Prepend a node to the beginning of the list
  prepend(data: T) {
    const newNode = new DoublyNode(data);
    newNode.next = this.head;
    if (this.head) {
      this.head.prev = newNode
```
