import React from "react";

export default function Resultado(props){


    return(
        <>
            <p>Soma das notas: {props.somaNotas}</p>
            <p>{props.somaNotas >= 6 ? "Aprovado" : "Reprovado"}</p>
        </>
    )
}