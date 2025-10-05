import { useState } from 'react'
import './App.css'

function App() {

  const[nome,setNome]=useState('');
  const[carro,setCarro]=useState('BMW M8');

  return (
    <>
      <label htmlFor="fnome">Digite seu Nome</label>
      <input type="text" name="fnome" id="fnome" value={nome} onChange={(e)=>setNome(e.target.value)}/>
      <p>Nome digitado: {nome}</p>
      <label htmlFor="">Selecione um carro</label>
      <select name="" id="" value={carro} onChange={(e)=>setCarro(e.target.value)}>
        <option value="BMW M8">BMW M8</option>
        <option value="Dodge Viper">Dodge Viper</option>
        <option value="Porshee Carrera GT">Porshee Carrera GT</option>
        <option value="Mercedes G36">Mercedes G36</option>
      </select>
      <p>Carro Selecionado: {carro}</p>
    </>
  )
}

export default App