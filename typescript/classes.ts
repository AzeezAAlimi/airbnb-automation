// Classes are blueprints for creating objects. They encapsulate data and behaviour

// Syntax
class Person {
  // See the class as the boss, the class name is Person
  name: string; // The type is a string These are also properties in a class
  age: number; // The type is a number

  constructor(name: string, age: number) {
    // A constructor is a special method used to initialize objects when they are created
    this.name = name; // Access the properties in the class we use .this
    this.age = age;
  }

  greet(): void {
    // This is method
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person('John', 30); // Creating an object of the class
person.greet(); // Using the object
