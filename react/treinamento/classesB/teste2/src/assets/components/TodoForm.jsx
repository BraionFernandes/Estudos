import React, { Component } from "react";

class TodoForm extends Component {
    constructor(props){
        super(props);

        this.state={ text: "" };

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        if(!this.state.text.trim()) return;

        this.props.AddTodo(this.state.text);
        this.setState({ text: "" });
    }

    handleChange(e){
        this.setState({ text:e.target.value });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.text}/>
                    <button type="submit">Adicionar</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;