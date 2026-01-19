import React, { Component } from "react";
import TodoForm from "./TodoForm";

class TodoApp extends Component {
    constructor(props){
        super(props);

        this.state={ items: [] };

        this.AddTodo=this.AddTodo.bind(this);
    }

    AddTodo(text){
        const newItem={
            id: Date.now(),
            text: text,
            completed: false,
        };
        this.setState({ items: [...this.state.items, newItem] });
    }

    render(){
        return(
            <div>
                <TodoForm AddTodo={this.AddTodo}/>
            </div>
        )
    }
}

export default TodoApp;