import { useState } from 'react'
import './App.css'

function App() {

  const [categoria,setCategoria]=useState('All');

  const carros=[
    {categoria:"Esportivo",preco:"R$ 1.450.000,00",modelo:"BMW M8 Competition"},
    {categoria:"Esportivo",preco:"R$ 22.330.000,00",modelo:"Porshe Carrera GT"},
    {categoria:"Esportivo",preco:"R$ 6.590.000,00",modelo:"Mercedes SLR McLaren"},
    {categoria:"Esportivo",preco:"R$ 1.095.000,00",modelo:"Corvette C6"},
    {categoria:"SUV",preco:"R$ 180.000,00",modelo:"Hyundai Creta"},
    {categoria:"SUV",preco:"R$ 150.000,00",modelo:"Honda HR-V"},
    {categoria:"SUV",preco:"R$ 165.000,00",modelo:"Jeep Renegade"},
    {categoria:"SUV",preco:"R$ 220.000,00",modelo:"Toyota SW4"},
    {categoria:"Supercarro",preco:"R$ 5.450.000,00",modelo:"Lamborghini Aventador"},
    {categoria:"Supercarro",preco:"R$ 15.000.000,00",modelo:"Bugatti Chiron"},
    {categoria:"Supercarro",preco:"R$ 12.280.000,00",modelo:"Ferrari Laferrari"},
    {categoria:"Supercarro",preco:"R$ 24.090.000,00",modelo:"McLaren Senna"},
    {categoria:"Sedan",preco:"R$ 110.000,00",modelo:"Toyota Corolla"},
    {categoria:"Sedan",preco:"R$ 95.000,00",modelo:"Volkswagen Jetta"},
    {categoria:"Sedan",preco:"R$ 105.000,00",modelo:"Honda Civic"},
    {categoria:"Sedan",preco:"R$ 215.000,00",modelo:"BMW 420I"},
  ]

  return (
    <>
      {carros
        .filter((carro) => {
          switch (categoria){
            case "All":
              return true;
            case "Esportivo":
              return carro.categoria === "Esportivo";
            case "SUV":
              return carro.categoria === "SUV";
            case "Supercarro":
              return carro.categoria === "Supercarro";
            case "Sedan":
              return carro.categoria === "Sedan";
            default:
              return false;
          }
        })
        .map((carro) =>
          <p>
            Modelo: {carro.modelo} | Categoria: {carro.categoria} | Preço: {carro.preco}
          </p>
        )
      }

      <div>
        <p>Categorias: </p>
        <select value={categoria} onChange={(e)=>setCategoria(e.target.value)}>
          <option value="All">Todas</option>
          <option value="Esportivo">Esportivo</option>
          <option value="SUV">SUV</option>
          <option value="Supercarro">Supercarros</option>
          <option value="Sedan">Sedan</option>
        </select>
      </div>
    </>
  )
}

export default App
