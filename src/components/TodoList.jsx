// src/components/TodoList.jsx

const TodoList = (props) => {
    // const tempTodos = ['first', 'second', 'third'];
    return (
        <ul>
            {/* You have now lifted state up from NewTodo.jsx into App.jsx and then passed it back down into TodoList.jsx, effectively moving state from NewTodo.jsx to its sibling component TodoList.jsx. */}
            {/* {tempTodos.map((todo, index) => { */}
            {props.todos.map((todo, index) => {
                return <li key={index}>{todo}</li>;
            })}
        </ul>
    );
};

export default TodoList;
