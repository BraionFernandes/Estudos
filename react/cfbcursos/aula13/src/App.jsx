import { useState } from 'react'
import './App.css'

function App() {

  // const carros=['Jetta','Golf','HRV','Cruze','Argo']

const carros=[
  {categoria: "Esporte", preco: "110000.00", modelo: "Golf GTI"},
  {categoria: "Esporte", preco: "120000.00", modelo: "Camaro"},
  {categoria: "SUV", preco: "85000.00", modelo: "HRV"},
  {categoria: "SUV", preco: "83000.00", modelo: "T-Cross"},
  {categoria: "Utilitario", preco: "120000.00", modelo: "Hillux"},
  {categoria: "Utilitario", preco: "90000.00", modelo: "Ranger"}
];

  const listaCarros=carros.map(
    (c,i)=>
      <li key={i}>{c.categoria} - {c.preco} - {c.modelo}</li>
  )

  return (
    <>
      
      <ul>{listaCarros}</ul>
    </>
  )
}

export default App
