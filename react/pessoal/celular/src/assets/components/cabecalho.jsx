import { useState } from 'react'
import '../../app.css'
import './css/cabecalho.css'

export default function Cabecalho() {

  return (
    <>
      <header className='cabecalho'>
        <div className='cabecalho-criador'>
            <a className='cabecalho-criador-link' href="#">Braion Fernandes</a>
        </div>
        <div className='cabecalho-projeto'>
            <h1 className='cabecalho-projeto-nome'>Projeto Celular</h1>
        </div>
        <nav className='cabecalho-nav'>
            <a className='cabecalho-nav-item' href="#">Inicio</a>
            <a className='cabecalho-nav-item' href="#">Criador</a>
            <a className='cabecalho-nav-item' href="#">Projetos</a>
        </nav>
    </header>
    </>
  )
}