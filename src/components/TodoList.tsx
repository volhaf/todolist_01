import {FilterType, TaskType} from "../App";
import {Button} from "./Button";
import {Fragment} from "react";

type TodolistPropsType = {
    title: string;
    tasks: TaskType[]
    removeTask: (taskId: string) => void;
    activeTask: (taskId: string) => void;
    filter: FilterType;
    changeFilter: (filter: FilterType) => void;
    addTask: () => void;
}


export function TodoList({title, tasks, removeTask, activeTask, changeFilter, filter, addTask}: TodolistPropsType) {
    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div className={'input_conteiner'}>
                <input/>
                <Button title={'add'} onClick={addTask} />
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