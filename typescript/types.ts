// TypeScript uses static typing to ensure better code quality
// Common types:
// string: Text values
// number: Numeric values (integer or float)
// boolean: True or false
// array: A collection or values
// void: Used for functions that do not return a value

let isLogIn: boolean = true;
let surname: string = 'Mark';
let scores: number[] = [90, 80, 100];

// Function with void type
function logMessage(message: string): void {
  console.log(message);
}

// Notes:
// TypeScript also supports union types, like string | number
