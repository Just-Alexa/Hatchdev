# Class 2

## Object-Oriented Programming in Typescript

The way we want to program our softwares we look through the lens of an object. Everything is an object.
OOP enphasizes the concept of classes and objects.
A class is a blueprint, a definition.
A class defines the properties and behaviours of an object.
An object is an instance of a class.
A function in a class is called a method
A method is the behaviour.
They track the state of an object

Browsers can detect the operating system by analyzing the user-agent string sent with every HTTP request. This string contains information about the browser and the operating system being used. For example, a user-agent string might indicate whether the user is on a Mac or a Windows system, along with other details like the browser version.

> This is what I learned

## Extra Work: Global scope variables in javascript (Research)

A property is like a variable

OOP best in Java

> Look up inheritance

```ts
//sylvester-Divine's definition
class Human {
  hasHands: boolean;
  hasHead: boolean;
  hasLegs: boolean;
  hasBrain: boolean;
  canReason: boolean;

  //David's definition
  name: string;
}

class Car {
  name: string;
  model: string;
  productionYear: Date;
  hasFourTyres: boolean;
}

class Account {
  balance: number;
  name: string;
  currency: string;
}

class Studnet {
  matricNo: string;
  faculty: string;
  department: string;
}
class Art {
  colors: Array<string> = ["orange", "indigo"];
}

const monalisa = new Art();
monalisa.colors = ["red", "blue", "green"];

const vangogh = new Art();
vangogh.colors = ["pink", "orange", "purple"];

console.log("Vangogh", vangogh);
console.log("monalisa", monalisa);
```

## Assignment

Create a contact address book in typescript.  

Look up scoping
