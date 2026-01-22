import React, { Component } from "react";

class ElementoTodo extends Component{
    constructor(props){
        super(props);

    }
    
    render(){
        
        return(
            <div>
                <input
                    type="checkbox"
                    checked={this.props.todo.completed}
                    onChange={()=>this.props.toggleTodo(this.props.todo.id)}
                />
                <span>
                    {this.props.todo.text}
                </span>
                <button onClick={()=>this.props.removeTodo(this.props.todo.id)}>
                    X
                </button>
            </div>
        )
    }
}

export default ElementoTodo;