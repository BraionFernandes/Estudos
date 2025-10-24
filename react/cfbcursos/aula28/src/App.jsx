import { useState, useEffect } from 'react'
import './App.css'
import Pagina1 from './assets/components/pagina1'
import Pagina2 from './assets/components/pagina2'

function App() {

  const [pagina,setPagina]=useState(0)

  useEffect(
    ()=>{
      const url=window.location.href
      const res=url.split('?')
      setPagina(res[1])
    }
  )

  const linksPaginas=(p)=>{
    if(p==1){
      window.open('http://localhost:5173?1','_self')
    }else if(p==2){
      window.open('http://localhost:5173?2','_self')
    }
  }

  const retornarPagina=()=>{
    if(pagina==1){
      return <Pagina1/>
    }else if(pagina==2){
      return <Pagina2/>
    }else{
      return  <div>
                <button onClick={()=>linksPaginas(1)}>Página 1</button>
                <button onClick={()=>linksPaginas(2)}>Página 2</button>
              </div>
    }
  }

  return (
    <>
      {retornarPagina()}
    </>
  )
}

export default App
