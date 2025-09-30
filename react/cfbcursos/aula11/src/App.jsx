import { useState } from 'react'
import './App.css'
import Led from './components/led'

function App() {
  const[ligado,setLigado]=useState(false);

  return (
    <>
      <Led ligado={ligado} setLigado={setLigado}/>
    </>
  )
}

export default App