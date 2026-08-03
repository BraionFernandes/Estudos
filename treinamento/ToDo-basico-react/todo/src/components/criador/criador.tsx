import { useState, type Dispatch, type FormEvent, type SetStateAction } from "react";
import { type Tarefa } from "../../App";

interface TarefaProps{
    setDados: Dispatch<SetStateAction<Tarefa[]>>;
}


export default function Criador({ setDados }:TarefaProps){

    const [tarefa, setTarefa]=useState("");

    const handleSubmit=(e:FormEvent<HTMLFormElement>):void=>{
        e.preventDefault();
        if(!tarefa) return;

        const novaTarefa:Tarefa={
            id: Date.now(),
            text:tarefa
        };

        setDados((prev)=>[...prev, novaTarefa]);
        setTarefa("");
    }

    return(
        <form onSubmit={handleSubmit} className="flex gap-3">
            <input onChange={(e)=>setTarefa(e.target.value)} className="bg-gray-300 p-1 rounded-md outline-none font-bold text-lg" type="text" name="tarefaNome" id="tarefaNome"/>
            <input className="bg-red-800 p-1 px-2 rounded-md text-white font-bold text-lg cursor-pointer" type="submit" value="Criar Tarefa" />
        </form>
    )
}