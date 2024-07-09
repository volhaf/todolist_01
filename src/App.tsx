import React, {useState} from 'react';
import logo from './logo.svg';
import './styles/App.css';
import {TodoList} from "./components/TodoList";
import {Header} from "./components/Header";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}
function App() {
    const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: 'Task 1', isDone: false},
    ]);
  return (
    <div className="App">
        <Header/>
        <div className="Main">
            <TodoList title={'grocery list'}/>
            <TodoList title={'shopping list'}/>
        </div>

    </div>
  );
}

export default App;
