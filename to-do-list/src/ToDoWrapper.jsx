import React from 'react';
import {useSelector} from 'react-redux';

const ToDoWrapper = () => {
    const todos = useSelector(store => store.todos);

    return (
        <div>
            {todos.map((todo) => {
                return <ToDo todo={todo}/>;
            })}
        </div>
    )
}

export default ToDoWrapper;