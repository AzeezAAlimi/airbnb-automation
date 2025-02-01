// Access modifiers (public, private, protected) control access to properties and methods
// readonly ensures properties cannot be modified after initialization

// Public: Accessible from anywhere
// Private: Access only from within the class
// protected: Accessible within the class and its subclasses

// Example with access modifiers
class Male {
  public name: string; // Accessible anywhere
  private age: number; // Accessible onky iunside this class
  protected salary: number; // Accessible in this classd and subclasses

  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  private displayAge() {
    console.log(`Age: ${this.age}`);
  }

  public displayInfo() {
    console.log(`Name: ${this.name}`);
    this.displayAge(); // Private method acessed inside tge class
  }
}

class Employee extends Male {
  showSalary() {
    console.log(`Salary: ${this.salary}`); // Protected can be access in subclass
  }
}

const john = new Male('John', 30, 50000);
john.displayInfo(); // Works
// john.age; // Error: 'age' is private
// john.salary; // Error: 'salary' is protected

const jane = new Employee('Jane', 28, 60000);
jane.showSalary(); // Works

// Example with access modifiers
class GermAanBankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  desposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const germanAccount = new GermAanBankAccount(1000);
germanAccount.desposit(500);
console.log(germanAccount.getBalance());
