import { useState } from 'react'
import './App.css'

function App() {

  const[nome,setNome]=useState()

  const armazenar=(chave,valor)=>{
    localStorage.setItem(chave,valor)
  }
  const consultar=(chave)=>{
    alert(localStorage.getItem(chave))
  }
  const apagar=(chave)=>{
    localStorage.removeItem(chave)
  }

  return (
    <>
      <label>Digite um nome:</label>
      <input type="text" name="inome" value={nome} onChange={(e)=>setNome(e.target.value)}/>
      <button onClick={()=>armazenar('nome',nome)}>Gravar Nome</button>
      <button onClick={()=>consultar('nome')}>Ver Nome</button>
      <button onClick={()=>apagar('nome')}>Remover Nome</button>
    </>
  )
}

export default App
