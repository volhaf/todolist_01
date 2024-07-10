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
        {id: 1, title: 'milk', isDone: false},
        {id: 2, title: 'milk', isDone: false},
        {id: 3, title: 'milk', isDone: false},
        {id: 4, title: 'milk', isDone: false},

    ]);


    //FUNCTION

function removeTask (taskId: number) {
    const nextState: Array<TaskType> = tasks.filter (t => t.id !== taskId)
    setTasks (nextState);
}

function activeTask (taskId: number) {

}



  return (
    <div className="App">
        <Header/>
        <div className="Main">
            <TodoList
                title={'grocery list'}
                tasks={tasks}
                removeTask={removeTask}
                activeTask={activeTask}/>

        </div>

    </div>
  );
}

export default App;
