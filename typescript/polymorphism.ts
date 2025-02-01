// Polymorphism means "many forms." it allows methods in different classes
// to share the same name but behave differently based on the object calling them

class Bird {
  fly(): string {
    return 'This bird can fly.';
  }
}

class Penguin extends Bird {
  fly(): string {
    return 'Penguins cannot fly.';
  }
}

const sparrow = new Bird();
const penguin = new Penguin();

console.log(sparrow.fly()); // Output: This bird can fly.
console.log(penguin.fly()); // Output: Penguins cannot fly.
