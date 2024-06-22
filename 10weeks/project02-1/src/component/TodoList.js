import "./TodoList.css"
import TodoItem from "./TodoItem"

function TodoList(){
    return(
        <div className="TodoList">
            <h4>Todo List</h4>
            <div className="list_wrapper">
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
        </div>
    );

};
export default TodoList