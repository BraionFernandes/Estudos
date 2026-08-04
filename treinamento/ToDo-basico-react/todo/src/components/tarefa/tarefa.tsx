import { type Dispatch, type FormEvent, type SetStateAction } from "react";
import { type Tarefa } from "../../App";

interface TarefaProps{
    dados: Tarefa[];
    setDados: Dispatch<SetStateAction<Tarefa[]>>;
}

export default function Tarefa({ dados, setDados }:TarefaProps){

    const handleDelet=(id:number)=>{
        setDados((prev)=>prev.filter((t)=>t.id !== id));
    }

    return(
        <>
            <div className="flex items-center flex-col p-5 m-10 overflow-scroll overflow-x-auto h-75 min-w-0 min-h-0">
                {dados.map((tarefa)=>(

                    <div key={tarefa.id} className="bg-gray-400 w-125 p-2 m-1.25 flex justify-between items-center rounded-md">
                        <span className="font-semibold text-lg indent-1.25">{tarefa.text}</span>
                        <button onClick={()=>handleDelet(tarefa.id)} className="p-2 bg-red-800 text-white rounded-md font-medium text-lg">Remover</button>
                    </div>

                ))}
            </div>
        </>
    )
}