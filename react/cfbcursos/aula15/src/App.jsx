import { useState } from 'react'
import './App.css'

function App() {

  const[form,setForm]=useState({"nome":"","curso":"","ano":""});
  const handleFormChange=(e)=>{
    if(e.target.getAttribute('name')=='fnome'){
      setForm({"nome":e.target.value,"curso":form.curso,"ano":form.ano})
    }else if(e.target.getAttribute('name')=='fcurso'){
      setForm({"nome":form.nome,"curso":e.target.value,"ano":form.ano})
    }else{
      setForm({"nome":form.nome,"curso":form.curso,"ano":e.target.value})
    }
  }

  return (
    <>
      <label htmlFor="fnome">Nome</label>
      <input type="text" name="fnome" id="fnome" value={form.nome} onChange={(e)=>handleFormChange(e)}/>
      <label htmlFor="fnome">Curso</label>
      <input type="text" name="fcurso" id="fcurso" value={form.curso} onChange={(e)=>handleFormChange(e)}/>
      <label htmlFor="fnome">Ano</label>
      <input type="text" name="fano" id="fano" value={form.ano} onChange={(e)=>handleFormChange(e)}/>

      <p>Nome digitado: {form.nome}</p>
      <p>Curso digitado: {form.curso}</p>
      <p>Ano digitado: {form.ano}</p>

    </>
  )
}

export default App