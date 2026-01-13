import React, { Component } from "react";
import TodoForm from "./TodoForm";


class TodoApp extends Component {
  constructor(props){
    super(props);
    this.state={ items: [] };

    this.AddTodo = this.AddTodo.bind(this);
  }

  AddTodo(text){
    const newTodo={
      id: Date.now(),
      text: text,
      completed: false,
    };
    this.setState({ items: [...this.state.items, newTodo] });
  }

  render(){
    return(
      <>
        <div>
          <h1>ToDo List Full Class Component</h1>
          <div>
            <TodoForm AddTodo={this.AddTodo} Items={this.state.items}/>
          </div>
        </div>
      </>
    )
  }
}

export default TodoApp;