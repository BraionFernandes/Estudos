import React, { Component } from "react";

class Counter extends Component {
    constructor(props){
        super(props);

        this.state = {count: 0};

        this.incremento=this.incremento.bind(this);
        this.decremento=this.decremento.bind(this);
        this.reset=this.reset.bind(this);
    }
    componentDidMount(){
        console.log("Componente Montado!");
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log("Componente Atualizado!");
        }
    }

    componentWillUnmount(){
        console.log("Componente Desmontado!");
    }

    incremento(){
        this.setState({count: this.state.count + 1});
    }

    decremento(){
        if(this.state.count > 0){
            this.setState({count: this.state.count - 1});
        }
    }

    reset(){
        this.setState({count: this.state.count = 0});
    }

    render(){
        return(
            <>
                <div>
                    <p>Contador: {this.state.count}</p>
                    <button onClick={this.incremento}>Incrementar</button>
                    <button onClick={this.decremento}>Decrementar</button>
                    <button onClick={this.reset}>Resetar</button>
                </div>
            </>
        );
    }
}

export default Counter;