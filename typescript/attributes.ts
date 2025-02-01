// Atrributes (or properties) are variables bound to an instance of a class.
// They represent the state or characteristics of the objects

class Automobile {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  displayDetails(): string {
    return `${this.brand} runs at ${this.speed} km/h.`;
  }
}

const automobile = new Automobile('Toyota', 120);
console.log(automobile.displayDetails()); // Output: Toyota runs at 120 km/h
