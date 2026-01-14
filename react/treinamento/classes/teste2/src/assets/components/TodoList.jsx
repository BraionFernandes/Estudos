import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
    render(){
        return(
            <div>
                {this.props.items.map((item)=>(
                    <TodoItem
                    key={item.id}
                    todo={item}
                    removeTodo={this.props.removeTodo}
                    toggleTodo={this.props.toggleTodo}
                    />
                ))}
            </div>
        )
    }
}

export default TodoList;