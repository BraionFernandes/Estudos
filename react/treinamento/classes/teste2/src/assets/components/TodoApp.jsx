import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


class TodoApp extends Component {
  constructor(props){
    super(props);
    this.state={ items: [] };

    this.AddTodo = this.AddTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  AddTodo(text){
    const newTodo={
      id: Date.now(),
      text: text,
      completed: false,
    };
    this.setState({ items: [...this.state.items, newTodo] });
  }

  removeTodo(id){
    this.setState({
      items: this.state.items.filter((t)=>t.id !== id),
    });
  }

  toggleTodo(id){
    this.setState({
      items: this.state.items.map((t)=>
      t.id === id ? {...t, completed: !t.completed} : t
      ),
    });
  }

  render(){
    return(
      <>
        <div>
          <h1>ToDo List Full Class Component</h1>
          <div>
            <TodoForm AddTodo={this.AddTodo} Items={this.state.items}/>
            <TodoList
            items={this.state.items}
            removeTodo={this.removeTodo}
            toggleTodo={this.toggleTodo}
            />
          </div>
        </div>
      </>
    )
  }
}

export default TodoApp;