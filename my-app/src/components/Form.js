import React, { useReducer, useState } from 'react';
import { reducer, initialState } from './../reducers/reducer';
import { Todo } from './Todo';

export const Form = () => {
    const [todoList, dispatch] = useReducer(reducer, initialState)
    const [todo, setTodo] = useState('');
    const handleChanges = e => {
        setTodo(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD_TODO", payload: todo});
        setTodo("");
    }

    return (
        <div>
            <h1> List of Todo's</h1>
                <form onSubmit={handleSubmit}>
                    <input className='input' type='text' value={todo} name='todo' onChange={handleChanges} />

                    <button>
                        Add Todo
                    </button>
                </form>
                {todoList.map(item => (
                    <Todo
                        todo={item.todo}
                        dispatch={dispatch}
                        id = {item.id}
                        key = {item.id}
                        completed = {item.completed}
                    />    
                ))}
                <button onClick={() => {dispatch({ type: "CLEAR_COMPLETED"})}}>
                    Clear Completed
                </button>
        </div>
    )
}