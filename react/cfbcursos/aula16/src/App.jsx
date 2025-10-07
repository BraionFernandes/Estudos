import { useState } from 'react'
import './App.css'
import Nota from './assets/components/nota';
import Resultado from './assets/components/resultado';

function App() {

  const [notas,setNotas]=useState({"nota1":"","nota2":"","nota3":"","nota4":""});

  const henderNotas=(e)=>{
    if(e.target.getAttribute('name')=='nota1'){
      setNotas({"nota1":e.target.value,"nota2":notas.nota2,"nota3":notas.nota3,"nota4":notas.nota4})
    }else if(e.target.getAttribute('name')=='nota2'){
      setNotas({"nota1":notas.nota1,"nota2":e.target.value,"nota3":notas.nota3,"nota4":notas.nota4})
    }else if(e.target.getAttribute('name')=='nota3'){
      setNotas({"nota1":notas.nota1,"nota2":notas.nota2,"nota3":e.target.value,"nota4":notas.nota4})
    }else{
      setNotas({"nota1":notas.nota1,"nota2":notas.nota2,"nota3":notas.nota3,"nota4":e.target.value})
    }
  }

  // const [nota1,setNota1]=useState(0)
  // const [nota2,setNota2]=useState(0)
  // const [nota3,setNota3]=useState(0)
  // const [nota4,setNota4]=useState(0)

  return (
    <>
      <Nota num={1} nota={notas.nota1} setNota={(e)=>henderNotas(e)}/>
      <Nota num={2} nota={notas.nota2} setNota={(e)=>henderNotas(e)}/>
      <Nota num={3} nota={notas.nota3} setNota={(e)=>henderNotas(e)}/>
      <Nota num={4} nota={notas.nota4} setNota={(e)=>henderNotas(e)}/>
      <Resultado somaNotas={(parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)) / 4}/>
    </>
  )
}

export default App