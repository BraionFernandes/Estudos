import React, { Component } from "react";

class TodoItem extends Component {
    render(){
        const { todo, removeTodo, toggleTodo } = this.props;

        return(
            <div>
                <input
                type="checkbox"
                checked={todo.completed}
                onChange={()=>toggleTodo(todo.id)}
                />
                <span>
                    {todo.text}
                </span>
                <button onClick={()=>removeTodo(todo.id)}>X</button>
            </div>
        )
    }
}

export default TodoItem;