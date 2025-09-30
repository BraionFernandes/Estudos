import Verde from './img/verde.jpeg'
import Vermelho from './img/vermelho.jpeg'

export default function Led(props){

  return (
    <>
      <img style={{width:'50px', height:'50px'}} src={props.ligado?Verde:Vermelho} alt="" />
      <button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado?"Desligar":"Ligar"}</button>
    </>
  )
}