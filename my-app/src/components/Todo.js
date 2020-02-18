import React, { useReducer, useState } from 'react';
import { reducer, intialState } from './../reducers/reducer';

export const Todo = props => {
    console.log('this is props ', props)
    return (
        <div className='todo' 
        onClick={() => {props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.id})}}
        >
            <h1>{props.todo}</h1>
            <p>{props.id}</p>
            {/* <h4>{props.item}</h4> */}
            {/* <button onClick = {}>Remove</button> */}
        </div>
    )
}