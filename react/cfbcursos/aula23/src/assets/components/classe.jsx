import React from "react";

class Classe extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <h1>Primeiro componente de classe</h1>
                <p>Empresa: {this.props.empresa}</p>
            </>
        )
    }
}

export default Classe