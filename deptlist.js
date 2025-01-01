import React from "react";

// Functional component to render the list of departments
const DepartmentList = () => {
  // Array of departments
  const departments = ["Human Resources", "Finance", "Marketing", "IT", "Operations"];

  // Return an unordered list
  return (
    <div>
      <h1>Departments</h1>
      <ul>
        {departments.map((department, index) => (
          <li key={index}>{department}</li> // Use key for unique identification
        ))}
      </ul>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div>
      <DepartmentList />
    </div>
  );
};

export default App;
