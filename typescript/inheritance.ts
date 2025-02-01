// Inheritance allows one class (child) to inherit the meothds and atrributes of another class (parent).
// This promotes code reuse

class Animal {
  eat(): string {
    return 'This animal is eating.';
  }
}

class Dog extends Animal {
  bark(): string {
    return 'The dog is barking.';
  }
}

const myDog = new Dog();
console.log(myDog.eat()); // Output: This animal is eating
console.log(myDog.bark()); // Output: The dog is barking
