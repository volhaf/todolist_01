import {FilterType, TaskType} from "../App";
import {Button} from "./Button";
import {Fragment} from "react";

type TodolistPropsType = {
    title: string;
    tasks: TaskType[]
    removeTask: (taskId: number) => void;
    activeTask: (taskId: number) => void;
    filter: FilterType;
    changeFilter: (filter: FilterType) => void;
}


export function TodoList({title, tasks, removeTask, activeTask, changeFilter, filter}: TodolistPropsType) {
    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div className={'input_conteiner'}>
                <input/>
                <Button title={'add'} onClick={() =>{}} />
            </div>
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
                                <div>
                                    <Button title={'X'} onClick={()=>removeTask(t.id)}/>
                                    <Button title={'!'} onClick={()=>activeTask(t.id)}/>
                                </div>

                            </li>
                        )
                    })}
                </ul>
            )
            }
<div className={'button_conteiner'}>
    <Button title={'All'} onClick={()=>changeFilter('all')} />
    <Button title={'Active'} onClick={()=>changeFilter('active')} />
    <Button title={'Done'} onClick={()=>changeFilter('done')} />
</div>

        </div>
    )
}