// src/components/NewTodo.jsx

import { useState } from "react";

// CHILD

const NewTodo = (props) => {
    const handleSubmit = (event) => {
        // preventing the default behavior of the whole page refreshing when we click submit on the form 
        event.preventDefault();
        // console.log("Creating a new to-do...");
        props.addTodo(newTodo);
        // empty imput field once newToDo is added
        setNewTodo('');
    };

    // setting up state
    const [newTodo, setNewTodo] = useState('');

    // handleChange()
    const handleChange = (event) => {
        setNewTodo(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todoInput">Todo: </label>
            <input 
                id="todoInput" 
                type="text" 
                name="todo" 
                value={newTodo}
                onChange={handleChange}
                />
            <button type="submit">Create to-do</button>
        </form>
    );
};

export default NewTodo;
