// src/App.jsx

// PARENT

import { useState } from 'react';
// import IncrementButton from "./components/IncrementButton";
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

// NOTES FOR PASSING FUNCTIONS AS PROPS BELOW:
// const App = () => {
//     const [count, setCount] = useState(0);

    // MODIFYING STATE VARIABLE WITHIN THE PARENT
//     const addOne = () => {
//         setCount(count + 1);
//     };

//     return (
//         <>
//             <p>Count: {count}</p>
//             {/* PASSING DOWN A FUNCTION FROM A PARENT (App.jsx) TO A CHILD (IncrementButton.jsx)*/}
//             <IncrementButton addOne={addOne} />
//         </>
//     );
// };


const App = () => {
    // tracking our whole to do list
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        console.log(newTodo);
        // instead of using push to update the array, we create a new array to hold all the todos. the starting value is a spread of the todos and adding the newTodo at the end of the new array
        const updatedTodos = [...todos, newTodo];
        // pass the new array into setTodos
        setTodos(updatedTodos);
        // these two lines of code above can be simplified into one:
        // setTodos([...todos, newTodo]);
    };

    return (
        <>
            <h1>To-do App</h1>
            {/* Now, we want to pass addTodo down from App.jsx to NewTodo.jsx in much the same way that we passed addOne down from App.jsx to IncrementButton.jsx previously. */}
            <NewTodo addTodo={addTodo}/>
            {/* display todos */}
            <TodoList todos={todos}/>
        </>
    );
};

export default App;
