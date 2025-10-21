import { useState } from 'react'
import './App.css'
import Globais from './assets/components/globais'
import Info from './assets/components/info'

function App() {

  const [resumo,setResumo]=useState(Globais.resumo)

  const gravarResumo=()=>{
    Globais.resumo=resumo
  }

  const verResumo=()=>{
    alert(Globais.resumo)
  }

  return (
    <>
      <p>{'Canal: ' + Globais.canal}</p>
      <p>{'Curso: ' + Globais.curso}</p>
      <p>{'Ano: ' + Globais.ano}</p>
      <hr />
      <Info/>
      <hr />
      <input type="text" value={resumo} onChange={(e)=>setResumo(e.target.value)}/>
      <button onClick={()=>gravarResumo()}>Gravar Resumo</button>
      <button onClick={()=>verResumo()}>Ver Resumo</button>
    </>
  )
}

export default App
