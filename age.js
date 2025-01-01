import React, { useState, useEffect } from 'react';

const AgeComponent = ({ age }) => {
  // Use state to manage the updated age
  const [updatedAge, setUpdatedAge] = useState(age);

  // useEffect hook to log the age change when the updatedAge changes
  useEffect(() => {
    console.log(Age updated to: ${updatedAge});
  }, [updatedAge]); // Runs whenever updatedAge changes

  // Handle input change
  const handleInputChange = (e) => {
    setUpdatedAge(e.target.value); // Update the state when the input changes
  };

  return (
    <div>
      <h1>Age: {updatedAge}</h1> {/* Display the updated age */}
      
      {/* Input field to change the age */}
      <input 
        type="number" 
        value={updatedAge} 
        onChange={handleInputChange} 
        placeholder="Enter new age" 
      />
      
      {/* Button to update the age */}
      <button onClick={() => setUpdatedAge(updatedAge)}>
        Update Age
      </button>
    </div>
  );
};

export default AgeComponent;


app.js


import React from 'react';
import AgeComponent from './AgeComponent';

function App() {
  return (
    <div>
      <h2>Welcome to the Age Updater</h2>
      <AgeComponent age={25} /> {/* Passing initial age as 25 */}
    </div>
  );
}

export default App;
