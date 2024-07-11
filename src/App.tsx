import React, {useState} from 'react';
import logo from './logo.svg';
import './styles/App.css';
import {TodoList} from "./components/TodoList";
import {Header} from "./components/Header";
import {v1} from "uuid";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

export type FilterType = 'all' | 'active' | 'done';

function App() {
    let [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: 'milk', isDone: false},
        {id: v1(), title: 'milk', isDone: false},
        {id: v1(), title: 'milk', isDone: false},
        {id: v1(), title: 'milk', isDone: false},

    ]);

    const [filter, setFilter] = useState<FilterType>('all');


    //FUNCTION

    function addTask() {
        const newTask = {
            id: v1(),
            title: 'title',
            isDone: false,
        }
        const newList = [newTask, ...tasks]
        setTasks(newList)
    }
function removeTask (taskId: string) {
    const nextState: Array<TaskType> = tasks.filter (t => t.id !== taskId)
    setTasks (nextState);
}

function activeTask (taskId: string) {

}

    function changeFilter (filter: FilterType) {
        setFilter(filter);
    }

    let taskFilter = tasks;
    if (filter === 'active') {
        taskFilter = tasks.filter(t => t.isDone === false)
    }
    if (filter === 'done') {
        taskFilter = tasks.filter(t => t.isDone === true)
    }


  return (
    <div className="App">
        <Header/>
        <div className="Main">
            <TodoList
                title={'grocery list'}
                tasks={taskFilter}
                filter={filter}
                changeFilter={changeFilter}
                removeTask={removeTask}
                activeTask={activeTask}
                addTask={addTask}/>


        </div>

    </div>
  );
}

export default App;
