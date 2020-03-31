import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personsState, setPersonState] = useState({
    persons: [
      { name: "Priyanshiii", age: 23 },
      { name: "Yash", age: 25 }
    ],
    otherState: "hello other state"
  });

  const switchNameHandler = () => {
    //console.log('I was clicked');
    setPersonState({
      persons: [
        { name: "PriyanshiUpdate", age: 25 },
        { name: "YashUpdate", age: 20 }
      ]
    });
  };

  return (
    <div className="App">
      <button onClick={switchNameHandler}>Click me</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        I am awesome
      </Person>
    </div>
  );
};

export default App;
