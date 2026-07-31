"use client";

import { useState } from "react";

export interface Tarefa{
    id:number;
    text:string;
}

export default function Criador(){

    const [dados, setDados]=useState<Tarefa[]>([]);
    

    const handleCreateTask=()=>{
        
    }

    return(
        <form action={handleCreateTask} className="flex gap-3">
            <input className="bg-gray-300 p-1 rounded-md outline-none font-bold text-lg" type="text" name="tarefaNome" id="tarefaNome"/>
            <input className="bg-red-800 p-1 px-2 rounded-md text-white font-bold text-lg cursor-pointer" type="submit" value="Criar Tarefa" />
        </form>
    )
}