import {TaskType} from "../App";

type TodolistPropsType = {
    title: string;
    tasks: TaskType[]
}


export function TodoList({title, tasks}: TodolistPropsType) {
    return (
        <div className="todolist">
            <h3>{title}</h3>
            <input/>
            <button>+</button>
            <ul>
                <li key={tasks[0].id}>
                    <input
                        type='checkbox'
                        checked={tasks[0].isDone}
                    />
                    <span>{tasks[0].title}</span>
                    <button>+</button>
                    <button>!</button>
                </li>
            </ul>
            <button>All</button>
            <button>Active</button>
            <button>Done</button>
        </div>
    )
}