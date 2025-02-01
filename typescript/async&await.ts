// async/await simplifies working asynchronous code. It allows you to write asynchronous operations in a synchronous manner

// Example
async function fetchData(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicoode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();

// Notes:
// async functions return a Promise
// await pauses the execution until the promise resolves
// Use try-catch for error handling
