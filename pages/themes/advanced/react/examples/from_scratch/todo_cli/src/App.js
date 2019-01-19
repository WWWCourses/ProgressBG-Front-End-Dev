import React, { Component } from 'react';
import './App.css';

import	TODOS from './TODOS/TODOS.jsx'

class App extends Component {
  state = {
    todos: [],
    currentTodo:{}
  }

  addItem(){
    console.log("AN ITEM IS ADDED!")
  }
  render() {
    return (
      <div className="App">
        <h1>TODO App</h1>
        <TODOS addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;



