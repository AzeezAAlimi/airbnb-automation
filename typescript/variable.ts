// Variables in typescript store data. they are declared using using let, const or var
// let: Declares a mutable variable (its value can change)
let age: number = 25; // mutable variable

// const: Delcares an immutabke variable (its value cannot be reassigned)
const firstname: string = 'Alice'; // Immutable variable

let greetings: string = 'Hey my friend'; // Variable: A named storage location that holds a value or data
let greeetme = 'Hey';

greetings.toLowerCase();
console.log(greetings);

// number
let userId: number = 5678;
userId.toString; // The toString is a method
let userNum = 765;

// boolean
let isLoggedIn: boolean = false;
let isloggedOut = true; // TypeScript infers it as boolean

// Notes:
// Use const for values that do not change
// Use let for vairable that change
