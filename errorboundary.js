import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, info) {
    // Log error details
    console.log("Error details:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error occurred: {this.state.errorMessage}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;


app.js

import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import DivisionByZero from './DivisionByZero';
import ArrayIndexOutOfBounds from './ArrayIndexOutOfBounds';

function App() {
  return (
    <div>
      <h1>React Error Boundaries Example</h1>
      
      <h2>Handling Division by Zero Error</h2>
      <ErrorBoundary>
        <DivisionByZero />
      </ErrorBoundary>

      <h2>Handling Array Index Out of Bounds Error</h2>
      <ErrorBoundary>
        <ArrayIndexOutOfBounds />
      </ErrorBoundary>
    </div>
  );
}

export default App;


import React, { Component } from 'react';

class ArrayIndexOutOfBounds extends Component {
  render() {
    const array = [1, 2, 3];
    const index = 5; // Index out of bounds
    
    // This will cause an array index out of bounds error
    const item = array[index];

    return <h2>Item: {item}</h2>;
  }
}

export default ArrayIndexOutOfBounds;


import React, { Component } from 'react';

class DivisionByZero extends Component {
  render() {
    const num = 10;
    const denom = 0; // Division by zero
    
    // This will cause a division by zero error
    const result = num / denom;

    return <h2>Result: {result}</h2>;
  }
}

export default DivisionByZero;


