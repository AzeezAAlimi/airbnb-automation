// Interfaces define the structure of an object. they ensure consistency in object shapes
// Example
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

const user: User = {
  id: 1,
  name: 'Alice',
  isAdmin: true,
};

// Notes
// Interfaces are only for describing the structure of objects
// Optional properties can be added using ?
// Read-only properties use readonly

// Example with optional and read-only properties
interface Book {
  readonly id: number;
  title: string;
  author?: string; // Optional property
}

const myBook: Book = { id: 101, title: 'typeScript Basic' };
// myBook.id = 102; is going to display the error - Error: Cannot modify a readonly property
