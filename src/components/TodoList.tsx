import {TaskType} from "../App";
import {Button} from "./Button";
import {Fragment} from "react";

type TodolistPropsType = {
    title: string;
    tasks: TaskType[]
}


export function TodoList({title, tasks}: TodolistPropsType) {
    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div className={'input_conteiner'}>
                <input/>
                <Button title={'add'} onClick={() => {
                }}/>
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
                                    <Button title={'X'} onClick={()=>{}}/>
                                    <Button title={'!'} onClick={()=>{}}/>
                                </div>

                            </li>
                        )
                    })}
                </ul>
            )
            }
<div className={'button_conteiner'}>
    <Button title={'All'} onClick={()=>{}} />
    <Button title={'Active'} onClick={()=>{}} />
    <Button title={'Done'} onClick={()=>{}} />
</div>

        </div>
    )
}