# Assignment

1. How does a browser work?
2. Read about access modifiers
3. Why is bracket notation exposing private property
4. Research about constructors
5. What is a filter, Arrow function
6. Find the difference between;
 static method and properties
 Instance method and properties

## Solutions

1.) How Does a web browser work?
Using The Analogy of A Libary;
The web is a giant libary with tons of information stored in different books (websites). The browser is a special tool that helps you find and understand this information. Behind the scenes, the browser acts like a detective. It looks up the web address (URL) in a special directory (DNS) that translates friendly web addresses into numerical addresses (IP addresses) that computers can understand.
Once the browser knows the numerical address (IP address) of the website, it acts like a messenger. It sends a request to the computer where the website is stored (web server) asking for the information you want to see. The web server responds by sending back all the bits and pieces that make up the website, like HTML files (blueprint of the page), CSS files (styles for formatting), and maybe even images or videos. The browser is like a skilled builder. It takes all the parts it receives from the web server (HTML, CSS, etc.) and assembles them into a webpage that you can understand and see on your screen. It interprets the HTML code to structure the content, uses CSS to style the layout and design, and displays any images or videos included.Modern websites are often interactive.  The browser can understand additional scripting languages like JavaScript, which can add dynamic features and allow you to interact with the web page in various ways, like submitting forms, watching videos, or playing games.

2.) What are Access Modifers?
These are keywords that control the visibility and accessibility of classes,  methods, variables and other elements within your code. They act like bouncers at a club, deciding who can access certain parts of your program.

There are typically three main access modifiers you'll encounter:

- Public:  Think of a public place like a park.  Elements marked as public can be accessed from anywhere in your program, just like anyone can enter a park. This is useful for functionalities that need to be used by different parts of your code.

- Private: Imagine a private room.  Elements marked as private are only accessible within the class they are defined in.  They're hidden from the outside world, like a private room that only authorized people can enter. This promotes encapsulation, protecting data integrity and ensuring methods manipulate data as intended.

- Protected (may vary depending on the programming language):  Think of a restricted area with limited access.  Elements marked as protected can be accessed from within the class they are defined in, as well as by subclasses (child classes) inheriting from that class. It's like a restricted area that only authorized personnel and their teams can access.

3.) Why does bracket notation expose private property?
  Bracket notation can be a concern for encapsulation and data protection. Bracket notation sometimes called property accessor allows you to access a property on an object using its name within square brackets[]. It provides a way access an object's property by its name as a string, bypassing the usual access control mechanism.

  Property Access Mechanisms:

Traditionally, objects expose their properties through public member variables or methods (getters and setters).
In object-oriented programming (OOP), access modifiers like private restrict direct access to certain properties within a class, promoting encapsulation.
Bracket Notation as a Bypass:

Bracket notation allows you to access a property on an object using its name within square brackets []. For instance, objectName["propertyName"].
This notation retrieves the value associated with the property name provided as a string.
Why it Exposes Private Properties:

The core issue is that bracket notation doesn't inherently consider access modifiers. It simply fetches the property value based on the provided string name.
If a private property name is used within the brackets, the code bypasses the intended access control established by the private modifier.
Language-Specific Behavior:

It's important to note that not all languages handle bracket notation the same way regarding private properties.
Some languages might throw errors when trying to access private members through bracket notation.
Others might allow it but issue warnings or behave unpredictably.
Security Concerns:

Exposing private properties through bracket notation can be a security concern.
Malicious code or unintended external manipulation could alter the object's internal state in unexpected ways.
Mitigating the Risk:

Language Features: Some languages offer additional features to strengthen encapsulation alongside access modifiers. For example:
Readonly properties: These properties can only be assigned a value during object creation and cannot be modified later.
Interfaces: Interfaces define the public contract of an object without revealing implementation details, including private properties.
Coding Practices: As a programmer, you should be mindful of using bracket notation for private properties and only do so when absolutely necessary. Consider alternative approaches that respect encapsulation principles, such as using public getter methods.
In Summary:

Bracket notation is a powerful tool for dynamic property access, but it can undermine encapsulation if not used carefully. Understanding the access mechanisms in your programming language and following best practices are crucial for writing secure and well-structured OOP code.

4.) Constructors
In TypeScript, constructors are just like constructors in other OOP languages: they are special methods that get called automatically when you create a new instance of a class. They are essential for initializing objects and setting their initial state. Here's how they work with some TypeScript examples:

Basic Constructors

```ts
class Car {
  model: string;
  color: string;

  constructor(model: string, color: string) {
    this.model = model;
    this.color = color;
  }
}

const car1 = new Car("Camry", "Red");
console.log(car1.model); // Output: "Camry"
console.log(car1.color);  // Output: "Red"
```

Here, the Car class has a constructor that takes two arguments, model and color. Inside the constructor, these arguments are used to initialize the corresponding properties (this.model and this.color) of the new Car object.

5.) What is a filter?
In programming, filters are functions or techniques used to process collections of data and extract specific elements that meet certain conditions. Here are two common examples:

Built-in filter Functions: Many programming languages have built-in filter() functions that take a collection (like an array or list) and a callback function. The callback function defines the filtering criteria. The filter() function iterates through the collection and returns a new collection containing only the elements that pass the test defined in the callback function.

Filtering with Loops: You can also implement filtering manually using loops and conditional statements. You iterate through the collection, check each element against your criteria, and add only the matching elements to a new collection.

Here's an analogy to understand filtering in programming:

Imagine you have a basket of fruits of different colors. You want to separate the red ones from the others. A filter function would be like having someone go through the basket one by one, picking out only the red fruits and putting them in another basket.

By using filters effectively, you can streamline your code, make it more readable, and efficiently manipulate data sets based on your needs.

5b.) What is an Arrow Function?
Arrow functions, introduced in ES6 (ECMAScript 2015), are a concise way to write anonymous functions in JavaScript. They provide a cleaner syntax compared to traditional function expressions, especially for shorter functions. Here's a breakdown of what they are and how they work:

Traditional Function Expression:

```js
function greet(name) {
  return "Hello, " + name + "!";
}

const message = greet("Bard");
console.log(message); // Output: "Hello, Bard!"
```

Equivalent Arrow Function:

```js
const greet = (name) => {
  return "Hello, " + name + "!";
};

const message = greet("Bard");
console.log(message); // Output: "Hello, Bard!"
```

As can be seen, the arrow function achieves the same functionality as the traditional function but with a shorter syntax:
-Conciseness: The function keyword is replaced by => (arrow).
-Implicit Return: For single-line functions, the return keyword and curly braces are optional. In the above example, the return statement is implicit.

So in sunmmary arrow functions offer a cleaner and more concise way to write anonymous functions in JavaScript. They are particularly useful for short functions and callbacks, but keep in mind their behavior regarding this binding to make informed decisions in your code.

6.) In object-oriented programming (OOP), both static methods and static properties are associated with the class itself, rather than with instances of the class. However, they differ in how they are used and what they represent:

Static Properties:

Store class-level data: Static properties are used to hold data that is relevant to the class as a whole, rather than to any specific object created from the class.
Shared across instances: The value of a static property is the same for all instances of the class. There's just one copy of the data associated with the class itself.
Example: Imagine a Math class with a static property PI that holds the value of pi (3.14...). All instances of the Math class can access this value using Math.PI.
Static Methods:

Perform class-level operations: Static methods are functions defined within a class that can be called directly on the class itself, without needing to create an instance first.
Don't operate on instance data: Static methods typically don't have access to an instance's specific data (properties) because they are not working on a particular object.
Utility functions: They often act like utility functions that operate on the class itself or on external data.
Example: A String class might have a static method formatString that takes a string and some arguments and formats the string according to those arguments. You could call this method using String.formatString("Hello, %s!", "World").

In essence:

Think of static properties as variables that belong to the class blueprint, not to individual objects created from that blueprint.
Think of static methods as functions that are part of the class toolbox, available for anyone to use without needing to create a specific object first.

6b.) In object-oriented programming (OOP), the difference between instance methods and properties lies in their purpose and how they relate to objects (instances) of a class.

Instance Properties:

Represent object attributes: Instance properties store data that is specific to each object created from a class. They define the characteristics or state of an object.
Unique values per instance: Each instance of the class can have different values for its instance properties.
Example: In a Car class, you might have instance properties like model (e.g., "Camry"), color (e.g., "Red"), and year (e.g., 2023). Each Car object can have its own unique combination of values for these properties.
Instance Methods:

Define object behavior: Instance methods are functions attached to objects that define how the object can behave or perform actions. They operate on the object's data (properties).
Access and modify object state: Instance methods can access and modify the object's own instance properties, allowing you to change the object's state.
Invoked on object instances: Instance methods are called on specific instances of the class using dot notation (.) like objectName.methodName().
Example: A Car class might have instance methods like accelerate(), brake(), and turnLeft(). These methods would operate on the specific Car object they are called on.

Analogy:

Imagine a Car class as a car blueprint. Instance properties are like the car's specific features (model, color, year), which can vary for each car manufactured from the blueprint. Instance methods are like the car's actions (accelerate, brake, turnLeft), which can be performed by any car created from the blueprint.

In essence:

Instance properties hold the data that defines an object's current state.
Instance methods define the actions that objects can perform, potentially changing their state. Together, these properties and methods create well-defined and functional objects in your programs.
