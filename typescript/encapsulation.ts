// Encapsulation restricts direct access to some of an object's atrributes and methods.
// Instead, it exposes only what is necessary through public methods (getters/setters)

class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log('Insufficient balance.');
    } else {
      this.balance -= amount;
    }
  }

  getBalance(): Number {
    return this.balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // Output: 150
account.withdraw(200); // Output: Insufficient balance
