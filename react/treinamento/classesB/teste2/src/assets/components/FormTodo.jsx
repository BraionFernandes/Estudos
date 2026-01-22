import React, { Component } from 'react';

class FormTodo extends Component{
    constructor(props){
        super(props);

        this.state=({ text: "" });

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
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                value={this.state.text}
                onChange={this.handleChange}
                />
                <button type='submit'>
                    Criar
                </button>
            </form>
        )
    }
}

export default FormTodo;