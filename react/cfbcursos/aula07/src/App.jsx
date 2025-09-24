import { useState } from 'react'
import './App.css'
import Header from './assets/components/header'
import Dados from './assets/components/dados'

function App() {
  const emp=()=>{
    return 'Empire Corp.'
  }
  const ceo='Braion Reis'
  const patri='108B'

  const somar=(v1,v2)=>{
    return v1+v2
  }

  return (
    <>
      <Header/>
      <Dados empresa={emp} ceo={ceo} patri={patri} somar={somar}/>
    </>
  )
}

export default App
