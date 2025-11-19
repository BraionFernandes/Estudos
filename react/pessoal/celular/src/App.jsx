import { useState } from 'react'
import './App.css'
import Cabecalho from './assets/components/cabecalho'
import Bloqueio from './assets/components/bloqueio'
import Senha from './assets/components/senha'
import Bemvindo from './assets/components/bemvindo'

function App() {

  const [senhaDefinida,setSenhaDefinida]=useState([]);

  return (
    <>
      <Cabecalho/>
      {/* {senhaDefinida.length==6?<Bloqueio/>:<Senha senhaDefinida={senhaDefinida} setSenhaDefinida={setSenhaDefinida}/>} */}
      {/* <Bloqueio/> */}
      <Bemvindo/>
      {/* <Senha/> */}
    </>
  )
}

export default App