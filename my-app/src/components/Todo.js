import React from 'react';
import "./Todo.css";

export const Todo = props => {
    console.log('this is props ', props)
    return (
        <div className={`todo${props.completed ? " completed" : ""}`} 
        onClick={() => {props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.id})}}
        >
            <h1>{props.todo}</h1>
        </div>
    )
}