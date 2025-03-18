// CHILD

const ImcrementButton = (props) => {
    return (
        // now when a user clicks on the button, it will call props to addOne which has passed from App to be the function addOne() which will ultimately set the count to count+1
        <button onClick={props.addOne}>Increment</button>
    );
};

export default ImcrementButton;