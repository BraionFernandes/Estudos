import React from "react";

export default function Dados(props){
    const n1=10
    const n2=5
    return(
        <section>
            <p>Empresa: {props.empresa()}</p>
            <p>CEO: {props.ceo}</p>
            <p>Patrimonio: {props.patri}</p>
            <p>{'A soma de ' + n1 + ' com ' + n2 + ' é igual ' + props.somar(n1,n2)}</p>
        </section>
    )
}