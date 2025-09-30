import { useState } from 'react'
import './App.css'

function App() {
  const cumprimento=()=>{
    const hora=new Date().getHours()
    if(hora >=0 && hora < 13){
      return <p>Bom Dia!</p>
    }else if(hora>=13 && hora <18){
      return <p>Boa Tarde!</p>
    }else{
      return <p>Boa Noite!</p>
    }
  }

  return (
    <>
      {cumprimento()}
    </>
  )
}

export default App