import React from "react";

export default function Dados(props){
    return(
        <section>
            <p>Empresa: {props.empresa}</p>
            <p>CEO: {props.ceo}</p>
            <p>Patrimonio: {props.patri}</p>
        </section>
    )
}