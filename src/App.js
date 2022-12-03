import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Employee Task Management System</h1>
      
      <div className = "form">
        <input type = "text" name = "employee" />
        <input type = "text" name = "task" />
      </div>
    </div>
  );
}

export default App;
