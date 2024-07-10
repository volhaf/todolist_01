import {TaskType} from "../App";
import {Button} from "./Button";

type TodolistPropsType = {
    title: string;
    tasks: TaskType[]
}


export function TodoList({title, tasks}: TodolistPropsType) {
    return (
        <div className="todolist">
            <h3>{title}</h3>
            <input/>
            <Button title={'add'} onClick={()=>{}}/>
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
                                <Button title={'X'} onClick={()=>{}}/>
                                <Button title={'!'} onClick={()=>{}}/>
                            </li>
                        )
                    })}
                </ul>
            )
            }

            <Button title={'Active'} onClick={()=>{}} />
            <Button title={'Active'} onClick={()=>{}} />
            <Button title={'Done'} onClick={()=>{}} />
        </div>
    )
}