import {FilterType, TaskType} from "../App";
import {Button} from "./Button";
import {Fragment, useState} from "react";

type TodolistPropsType = {
    title: string;
    tasks: TaskType[]
    removeTask: (taskId: string) => void;
    activeTask: (taskId: string) => void;
    filter: FilterType;
    changeFilter: (filter: FilterType) => void;
    addTask: (title: string) => void;
}


export function TodoList({title, tasks, removeTask, activeTask, changeFilter, filter, addTask}: TodolistPropsType) {


    //*********************LOCAL STATE***********************

    const [taskInput, setTaskInput] = useState('')

 //********************************************


    //****************FUNCTION *******************
    const tasksElements: Array<JSX.Element> | JSX.Element = tasks.length !== 0
        ? tasks.map((t: TaskType)=> {
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
        }) : <p>no task</p>


    const addTaskHandler = () => {
        addTask(taskInput)
        setTaskInput('')
    }


//********************************************

    return (

        <div className="todolist">
            <h3>{title}</h3>
            <div className={'input_conteiner'}>
                <input value={taskInput}
                onChange={e => setTaskInput(e.currentTarget.value)}/>
                <Button title={'add'} onClick={addTaskHandler}/>
            </div>

            {tasksElements}

<div className={'button_conteiner'}>
    <Button title={'All'} onClick={()=>changeFilter('all')} />
    <Button title={'Active'} onClick={()=>changeFilter('active')} />
    <Button title={'Done'} onClick={()=>changeFilter('done')} />
</div>

        </div>
    )
}