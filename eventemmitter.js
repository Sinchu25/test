// Import the EventEmitter class from the 'events' module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Step 1: Add an event listener
const onGreet = () => {
  console.log('Hello, event emitted!');
};

// Listen for the 'greet' event
myEmitter.on('greet', onGreet);

// Step 2: Emit the 'greet' event
console.log('Emitting greet event...');
myEmitter.emit('greet');  // This will trigger the onGreet listener

// Step 3: Remove the event listener
myEmitter.removeListener('greet', onGreet);
console.log('Listener removed.');

// Emit the 'greet' event again (no listener will be triggered)
console.log('Emitting greet event again...');
myEmitter.emit('greet');  // This will not trigger anything because the listener is removed
