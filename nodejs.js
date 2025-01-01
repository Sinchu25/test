const readline = require('readline');
const fs = require('fs');

// Create an interface to read input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for input
rl.question('Please enter some text: ', (input) => {
  // Write the input to a file
  fs.writeFile('output.txt', input, (err) => {
    if (err) {
      console.log('Error writing to file', err);
    } else {
      console.log('Input successfully written to output.txt');
    }

    // Close the readline interface
    rl.close();
  });
});
