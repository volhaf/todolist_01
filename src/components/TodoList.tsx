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
            {tasks.length === 0 ? (
                <p>no tasks</p>
            ) : (
                <ul>
                    {tasks.map(t => {
                        return (
                            <li key={t.id}>
                                <input
                                    type='checkbox'
                                    checked={t.isDone}
                                />
                                <span>{t.title}</span>
                                <button>+</button>
                                <button>!</button>
                            </li>
                        )
                    })}
                </ul>
            )
            }

            <button>All</button>
            <button>Active</button>
            <button>Done</button>
        </div>
    )
}