// fileOperations.js
const fs = require('fs');

// Function to read a file
function readFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

// Function to write to a file (overwrites the content)
function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null, 'File written successfully!');
    }
  });
}

// Function to append data to a file
function appendFile(filePath, content, callback) {
  fs.appendFile(filePath, content, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null, 'Data appended successfully!');
    }
  });
}

// Export the functions
module.exports = {
  readFile,
  writeFile,
  appendFile
};
