// A method is a function defined inside a class that operates on instances of that class.
// Methods often mainpulate or access the class's atrributes

// Example
class Calculator {
  add(a: number, b: number) {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // Output: 8
console.log(calc.subtract(10, 6)); // Output: 4
