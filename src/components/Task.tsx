import React, {useState} from "react";
import {Button} from "./Button";
import {TaskType} from "../App";

type TaskPropsType ={
    removeTask: (taskId: string) => void;
    changeTaskStatus: (taskId: string, IsDone: boolean) => void
    task: TaskType
}


export function Task ({removeTask, changeTaskStatus, task}:TaskPropsType ) {

    const [isActive, setIsActive] = useState(false)

    return (
        <li  className={task.isDone ? 'is-done' : ''}>
            <input
                type='checkbox'
                checked={task.isDone}
                onChange={(event) => changeTaskStatus(task.id, event.currentTarget.checked)}
            />
            <span className={`${isActive ? 'title_active' : ''}`}>{task.title}</span>
            <div>
                <Button title={'X'} onClick={()=>removeTask(task.id)}/>
                <Button title={'!'} onClick={ () => setIsActive(!isActive) } />
            </div>
        </li>
    )
}