// Import necessary modules
const EventEmitter = require('events');
const debug = require('debug')('app:debug');

// Initialize EventEmitter for demo purposes
const myEmitter = new EventEmitter();

// 1. Measuring Execution Time
console.time('executionTime'); // Start measuring time

// Simulate some work with a delay
setTimeout(() => {
  console.timeEnd('executionTime'); // End measuring time and display elapsed time

  // 2. Grouping Related Log Messages
  console.group('User Actions');
  console.log('User logged in');
  console.log('User viewed profile');
  console.log('User logged out');
  console.groupEnd(); // End group

  // 3. Using Assertions
  const userAge = 15;
  console.assert(userAge >= 18, 'User must be at least 18 years old');  // Will print error message

  const validAge = 22;
  console.assert(validAge >= 18, 'User must be at least 18 years old');  // No output

  // 4. Displaying Data in a Tabular Format
  const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
  ];
  console.table(users); // Display data as a table

  // 5. Logging Debugging Details
  debug('Debugging details: Process started');
  debug('Processing data...');
  debug('Process completed');
  
  // Emit event and listen for it
  myEmitter.on('greet', () => {
    console.log('Hello, event emitted!');
  });
  myEmitter.emit('greet');  // Emit the greet event

}, 2000);  // Simulate a delay of 2 seconds
