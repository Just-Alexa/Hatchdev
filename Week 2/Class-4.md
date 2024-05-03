# Class 4

pi is an instance property

Inheritance establishes 'is a class' relationship.
Compusition in oop is when an object is composed in another object.
Types of letter case in programming

## Super

What is Super?
Super is a constructure. It initailly defines the structure of the object. In object-oriented programming (OOP) languages like TypeScript, the super keyword is used within classes to refer to the parent class (also called the base class or superclass). It provides a way to access members (properties and methods) defined in the parent class.

 Here's a breakdown of how super works:

1. Calling the Parent Constructor:

The primary use of super is inside the constructor of a derived class (child class) to call the constructor of the parent class.
This ensures that the parent class's constructor is executed first to initialize its properties before the derived class's constructor can proceed.

```ts
class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);  // Call the parent class constructor
  }
}

```

2 Accessing Parent Class Members:

You can also use super to access properties and methods defined in the parent class from within the derived class.
This is useful when you need to use functionality from the parent class but potentially override it in the derived class.

```ts
class Shape {
  area(): number {
    return 0;  // Abstract method (implementation required in subclasses)
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();  // Optional call to parent constructor if needed
    this.width = width;
    this.height = height;
  }

  override area(): number {
    return this.width * this.height;  // Override the abstract method with rectangle's calculation
  }
}
```

A set name returns the whole object by itself.

super()

.foreach is an higher-order function.

The concept of abstract class

Subscribing to an interface. So you implement

An interface defines a contract, total abstraction

Typescript is a superset

Abstract class  as to do with inheritance. There's total and partial abstraction.
We just need to know which one to use at the appropriate timeor case study. You cannot create an object from an abstract class.

When a group shares the same property  or have a property unique to them they push it towards the abstraction. Once a property or method is common or being shared don't use interface(to avoid code smolting), you push up to abstraction.

Yes, interfaces in TypeScript are specifically designed to define properties that classes or other objects must implement.

Here's a breakdown of how interfaces define properties:

Specifying Structure: Interfaces act like contracts that outline the expected structure of objects. They define the properties (attributes) and optionally methods that an object adhering to the interface must have.
No Implementation: Interfaces themselves don't provide any implementation for these properties or methods. They simply declare what needs to exist.
Enforcing Consistency: By using interfaces, you ensure that all objects implementing that interface have the same set of properties with the same data types. This promotes consistency and code maintainability.

```ts
interface Contact {
  name: string;
  phoneNumber: string;
  address: string;
}
```

In this example, the Contact interface defines three properties: name, phoneNumber, and address. Any class that implements the Contact interface (like the Contact and Friend classes in your address book example) must have these properties with the specified data types (all strings in this case).

## Can an interface implement another interface?

No, in TypeScript and most object-oriented programming languages, an interface cannot directly implement another interface. However, interfaces can extend other interfaces to inherit their properties and methods.  It can only define

Here's a breakdown of the concepts:

Implementing vs. Extending Interfaces:

Implementing: When a class implements an interface, it promises to provide implementations for all the properties and methods declared in the interface. The class becomes a concrete realization of the interface's contract.
Extending: When an interface extends another interface, it inherits all the properties and methods from the parent interface. It can then add its own properties and methods to create a more specific contract.
Why Interfaces Cannot Directly Implement:

Interfaces define the structure (properties and methods) but don't provide any implementation. There's no code within an interface to "implement" from another interface.
The purpose of interfaces is to define contracts, not to provide functionality.
Solution: Interface Inheritance (Extending):

To reuse properties and methods from existing interfaces, you can use interface inheritance.
An interface can extend one or more interfaces using the extends keyword.
This allows you to create a hierarchical structure of interfaces, where child interfaces inherit and potentially add to the functionality of parent interfaces.

```ts
interface Person {
  name: string;
  age: number;
}

interface Contact extends Person {
  phoneNumber: string;
  address: string;
}

class Friend implements Contact {
  name: string;
  age: number;
  phoneNumber: string;
  address: string;
  relationship: string;
```

Class define the shape of an object
Interface define the shape of an interface

Project for next week
Online shopping system

Research OSI models

Polymorphism is when an object acts as another object

Inheritance in Object-Oriented Programming (OOP) establishes an "is-a" relationship between classes. This means that a derived class (also called a child class) inherits properties and behaviors from a base class (also called a parent class). It gives this extends.
