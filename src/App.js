import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
    return(
      <div className = "App">
      <h1>hello</h1>
      <Person name = "Priyanshi" age = "25" />
      <Person name = "Yash" age ="20">I am awesome</Person>
      </div>
    )
}

export default App;
