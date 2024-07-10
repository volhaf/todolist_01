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

export type FilterType = 'all' | 'active' | 'done';

function App() {
    let [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: 'milk', isDone: false},
        {id: 2, title: 'milk', isDone: false},
        {id: 3, title: 'milk', isDone: false},
        {id: 4, title: 'milk', isDone: false},

    ]);

    const [filter, setFilter] = useState<FilterType>('all');
    //FUNCTION

function removeTask (taskId: number) {
    const nextState: Array<TaskType> = tasks.filter (t => t.id !== taskId)
    setTasks (nextState);
}

function activeTask (taskId: number) {

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
                activeTask={activeTask}/>

        </div>

    </div>
  );
}

export default App;
