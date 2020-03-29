import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoList from './TodoList';
import NewItem from './NewItem';

class App extends Component {
  render(){
    return (
      <div className="App">
        <TodoListHeader />
        <TodoList />
      </div>
    );
  }
  
}

export default App;
