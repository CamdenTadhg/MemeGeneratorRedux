import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './ToDoList.css';

const ToDoWrapper = () => {
    const todos = useSelector(store => store.todos);
    const dispatch = useDispatch();

    const handleDelete = (event) => {
        dispatch({type: 'DELETE', payload: event.target.id});
    }

    return (
        <ul>
            {todos.map((todo) => {
                return <li>{todo}<span id={todo} onClick={handleDelete}>X</span></li>
            })}
        </ul>
    )
}

export default ToDoWrapper;