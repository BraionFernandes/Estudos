import { useState } from 'react'
import './App.css'
import Header from './assets/components/header'
import Dados from './assets/components/dados'

function App() {
  const emp='Empire Corp.'
  const ceo='Braion Reis'
  const patri='108B'

  return (
    <>
      <Header/>
      <Dados empresa={emp} ceo={ceo} patri={patri}/>
    </>
  )
}

export default App
