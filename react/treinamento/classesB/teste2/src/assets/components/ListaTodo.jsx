import React, { Component } from 'react';
import ElementoTodo from './ElementoTodo';

class ListaTodo extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                {this.props.todo.map(todo => 
                    <ElementoTodo
                        key={todo.id}
                        todo={todo}
                        removeTodo={this.props.removeTodo}
                        toggleTodo={this.props.toggleTodo}
                    />
                )}
            </div>
        )
    }
}

export default ListaTodo;