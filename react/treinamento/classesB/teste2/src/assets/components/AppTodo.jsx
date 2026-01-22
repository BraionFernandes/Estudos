import React, { Component } from 'react';
import FormTodo from './FormTodo';
import ListaTodo from './ListaTodo';

class AppTodo extends Component{
    constructor(props){
        super(props);

        this.state=({ todo: [] });

        this.addTodo=this.addTodo.bind(this);
        this.removeTodo=this.removeTodo.bind(this);
        this.toggleTodo=this.toggleTodo.bind(this);
    }
    addTodo(text){
        const newTodo={
            id: Date.now(),
            text: text,
            completed: false,
        }
        this.setState({
            todo: [ ...this.state.todo, newTodo ]
        })
    }
    removeTodo(id){
        this.setState({ todo:
            this.state.todo.filter(todo=>todo.id !== id)
         });
    }
    toggleTodo(id){
        this.setState({ todo:
            this.state.todo.map(todo=>todo.id === id ? {...todo, completed: !todo.completed} : todo)
        });
    }
    componentDidUpdate(){
        console.log(this.state.todo);
    }
    render(){
        return(
            <div>
                <FormTodo AddTodo={this.addTodo} />
                <ListaTodo todo={this.state.todo} removeTodo={this.removeTodo} toggleTodo={this.toggleTodo}/>
            </div>
        )
    }
}

export default AppTodo;