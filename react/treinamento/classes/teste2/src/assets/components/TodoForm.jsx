import React, { Component } from "react";

class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state = { text: "" };

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({ text: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();
        if(!this.state.text.trim()) return;

        this.props.AddTodo(this.state.text);
        this.setState({ text: "" });
    }

    componentDidUpdate(){
        console.log(this.state.text);
        console.log(this.props.Items);
    }

    render(){
        return(
        <>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                        placeholder="Nova Tarefa..."
                    />
                    <button type="submit">Adicionar</button>
                </form>
            </div>
        </>
        )
    }
}

export default TodoForm;