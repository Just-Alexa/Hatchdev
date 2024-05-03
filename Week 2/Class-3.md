# Class 3

URL stands for Universal Resource Locator

The part of a URL includes the

- Scheme/Protocol: HTTP
- Domain/Authority:
- Path
- Query : p
- Fragment: Everything after #

Control statements are conditional and looping statements. They affect the flow of execution of a program.

For in loop is iterable.

```js
const fruits = [];

for (const fruit of fruits) {
  console.log(fruit);
}
```

Why do we need functions in JavaScript?
To perform an action, takes in a variable and returns a value

```js
function functionName() {
  // Perform an action
  console.log("functionName");
}
```

> Study public key and private key

## Constructs of OOP

- Inheritance: Taking properties from the parent class.
- Polymorphism
- Classes
- Interface
- Methods: This are fuctions in a class. But in OOP there is no function

## Encapsulation and Abstraction

Encapsulation is hiding data (attributes) and methods that manipulate that data within a single unit, typically a class. This is a core principle in object-oriented programming (OOP) that aims to bundle data (properties) and the methods that operate on that data together within a class.

Abstraction is hiding the implementation details of how an object works and focusing on what it does and how to interact with it.

```ts
console.log("Someone will be evicted today!!")

functions getStudentNames() {
    return["Ade","Lola","Bola","Tola"]
}

function getTotalNumberOfStudents() {
    const studentNames = getStudentNames()
    return studentNames.length
}

class HatchDevclass {
    constructor() {}
}
```
