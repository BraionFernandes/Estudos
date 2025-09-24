import { useState } from 'react'
import './App.css'

function App() {

  const [num,setNum]=useState(50)

  const n100=()=>{
    setNum(100)
  }

  return (
    <>
      <p>Valor do State num: {num}</p>
      <button onClick={()=>n100()}>100</button>
    </>
  )
}

export default App
