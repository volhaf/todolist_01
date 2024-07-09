import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import {TodoList} from "./components/TodoList";
import {Header} from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="Main">
            <TodoList/>
            <TodoList/>
        </div>

    </div>
  );
}

export default App;
