import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>What would you like to accomplish today? </h1>
      <div className="wrapper">
      <form className="form">
      <div className="newTodoArea">
      <label htmlFor="">New Todo</label>
        <input className="input" type="text" placeholder="Enter New Todo"/>
        <button className="btn">Add</button>
      </div>
      </form>
      <ul className="todo-list">
        <li className="todo">Take a Nap</li>
        <li className="todo">Eat tacos</li>
        <li className="todo">Wave to a good doggo</li>
        
      </ul>
      </div>
    </div>
  );
}

export default App;
