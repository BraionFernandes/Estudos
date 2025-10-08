import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const[contagem,setContagem]=useState(0)

  useEffect(
    ()=>console.log("Pagina Carregada")
  )
    
  return (
    <>
      <p>Contagem: {contagem}</p>
      <button onClick={()=>setContagem(contagem+1)}>Contar</button>
    </>
  )
}

export default App