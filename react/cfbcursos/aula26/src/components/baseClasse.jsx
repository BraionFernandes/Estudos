import React from "react";


export default class BaseClasse extends React.Component{
    constructor(props){

        // Para  permitir o uso de props

        super(props)

        //state

        this.state={
            canal:'CFB Cursos',
            curso:'React',
            ativo:true,
            nome:this.props.nomeAluno
        }
        this.status=this.props.status

        //bindagem

        let ad=this.ativarDesativar.bind(this)
    }

    //instruções do construtor

    ativarDesativar(){

        //forma de utilizar o setState em classes.
        
        this.setState(
            state=>({
                ativo:!state.ativo
            })
        )
    }

    //função que será chamada logo após o componente ser criado.

    componentDidMount(){
        console.log('O componente foi criado')
    }

    //função que será chamada toda vez que o componente atualizar.

    componentDidUpdate(){
        console.log('O componente foi atualizado')
    }

    //função que será chamada logo após o componente ser removido.

    componentWillUnmount(){
        console.log('O componente foi removido')
    }

    //função que rederiza o conteúdo.

    render(){
        return(
            <>
                <h1>Componente de Classe</h1>
            </>
        )
    }
}