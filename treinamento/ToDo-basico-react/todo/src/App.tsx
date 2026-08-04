import { useState } from 'react';
import './App.css';
import Criador from './components/criador/criador';
import Tarefa from './components/tarefa/tarefa';

export interface Tarefa{
  id:number;
  text:string;
}

function App() {
  const [dados, setDados]=useState<Tarefa[]>([]);

  return (
    <div className="bg-red-950 w-screen h-screen flex justify-center items-center">
      <div className="bg-white w-225 h-175 rounded-4xl">

        <div className="flex flex-col items-center p-10">

          <div className="p-10 mb-5">
            <h1 className="font-bold text-3xl font-sans">ToDo Básico com Next.js</h1>
          </div>

          <div className="p-5">
            <Criador setDados={setDados}/>
          </div>

        </div>

        <hr className="mx-2 text-gray-300"/>

        <Tarefa dados={dados} setDados={setDados}/>

      </div>
    </div>
  )
}

export default App
