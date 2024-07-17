import {FilterType, TaskType} from "../App";
import {Button} from "./Button";
import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Task} from "./Task";

type TodolistPropsType = {
    title: string;
    tasks: TaskType[]
    removeTask: (taskId: string) => void;
    filter: FilterType;
    changeFilter: (filter: FilterType) => void;
    addTask: (title: string) => void;
    changeTaskStatus: (taskId: string, IsDone: boolean) => void
}


export function TodoList({
                             title,
                             tasks,
                             removeTask,
                             changeFilter,
                             filter,
                             addTask,
                             changeTaskStatus
}: TodolistPropsType) {


    //*********************LOCAL STATE***********************

    const [taskInput, setTaskInput] = useState('')
    const [taskInputError, setTaskInputError] = useState<string | null>(null)

 //********************************************



    //****************FUNCTION *******************
    const tasksElements: Array<JSX.Element> | JSX.Element = tasks.length !== 0
        ? tasks.map((t: TaskType)=>(
            <Task key={t.id}
                  removeTask={removeTask}
                  changeTaskStatus={changeTaskStatus}
                  task={t}
            />)) :
        <p>no task</p>


    const addTaskHandler = () => {
        const trimmedTitle = taskInput.trim()
        if (trimmedTitle) {
            addTask(taskInput)
        } else {
            setTaskInputError('Title is required')
        }
        setTaskInput('')
    }

    const keyDownAddTaskHandler = (event: KeyboardEvent <HTMLInputElement>) => {
        setTaskInputError(null)
        if (event.key === 'Enter') {
            addTaskHandler()}
    }

    const changeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        taskInputError && setTaskInputError(null)
       setTaskInput(event.currentTarget.value)
    }


    const isTaskButtonDisabled = !Boolean(taskInput.trim()) || taskInput.length > 20;
    const userTaskEmptyError = taskInputError && <div className={'error-message'}>{taskInputError}</div>
    const userTaskLengthWarning = taskInput.length > 15 && <div>recomendate task title 15 ch</div>




    const setAllTaskHandler = () => {
        changeFilter('all')
    }
    const setActiveTaskHandler = () => {
        changeFilter('active')
    }
    const setDoneTaskHandler = () => {
        changeFilter('done')
    }

//********************************************

    return (

        <div className="todolist">
            <h3>{title}</h3>
                <input className={taskInputError ? 'error' : ''}
                       value={taskInput}
                       onChange={changeEventHandler}
                       onKeyDown={keyDownAddTaskHandler}/>
                <Button
                    title={'add'}
                    onClick={addTaskHandler}
                    disabled={isTaskButtonDisabled}
                />
                {userTaskEmptyError}
                {userTaskLengthWarning}
<ul>
    {tasksElements}
</ul>

<div className={'button_conteiner'}>
    <Button
        title={'All'}
        onClick={setAllTaskHandler}
        buttonColor={filter === "all" ? "button_active" : ''}
    />
    <Button
        title={'Active'}
        onClick={setActiveTaskHandler}
        buttonColor={filter === "active" ? "button_active" : ''}
    />
    <Button
        title={'Done'}
        onClick={setDoneTaskHandler}
        buttonColor={filter === "done" ? "button_active" : ''}


    />
</div>

        </div>
    )
}