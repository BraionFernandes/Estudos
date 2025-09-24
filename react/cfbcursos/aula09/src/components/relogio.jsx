import React from "react";

export default function Relogio(){
    return(
        <>
            {new Date().toLocaleTimeString()}
        </>
    )
}