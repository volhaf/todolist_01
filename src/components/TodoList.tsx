
type TodolistPropsType = {
    title: string;
}


export function TodoList({title}: TodolistPropsType) {
    return (
        <div className="todolist">
            <h3>{title}</h3>
            <input/>
            <button>+</button>
            <ul>
                <li>
                    <input type='checkbox'/>
                    <span>text</span>
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