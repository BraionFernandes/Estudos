import { useState } from 'react'
import './App.css'
import Tabela from './assets/components/tabela'
import Peso from './assets/components/peso'
import Altura from './assets/components/altura'
import Calcular from './assets/components/calcular'
import Resultado from './assets/components/resultado'

function App() {

  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)
  const [res,setRes]=useState(0)

  return (
    <>
      <Peso peso={peso} setPeso={setPeso}/>
      <Altura altura={altura} setAltura={setAltura}/>
      <Calcular peso={peso} altura={altura} setRes={setRes}/>
      <Resultado res={res}/>
      <Tabela/>
    </>
  )
}

export default App