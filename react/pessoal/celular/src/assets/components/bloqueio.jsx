import { useState, useEffect } from 'react'
import './css/bloqueio.css'

export default function Bloqueio() {

  const [senhaDigitada,setSenhaDigitada]=useState([]);

  const[hora,setHora]=useState(new Date().getHours());
  const[min,setMin]=useState(new Date().getMinutes());

  const alterarHora=()=>{
    return setHora(new Date().getHours())
  }

  const alterarMin=()=>{
    return setMin(new Date().getMinutes())
  }

  setInterval(alterarHora, 1000);
  setInterval(alterarMin, 1000);

  const exibirMin=()=>{
    switch(min){
      case 0:
        return '0'+min
      case 1:
        return '0'+min
      case 2:
        return '0'+min
      case 3:
        return '0'+min
      case 4:
        return '0'+min
      case 5:
        return '0'+min
      case 6:
        return '0'+min
      case 7:
        return '0'+min
      case 8:
        return '0'+min
      case 9:
        return '0'+min
      default:
        return min
    }
  }

  const numDigitado=(e)=>{
    if(e){
      const novaSenha=[...senhaDigitada, e];
      setSenhaDigitada(novaSenha);
    }
    
  }

  return (
    <>
      <div className='container'>
        <div className='bloqueio'>
          <div className='bloqueio-text'>
            <span className='bloqueio-text-item'>Insira o PIN para desbloquear</span>
          </div>
          <div className='bloqueio-time'>
            <span className='bloqueio-time-display'>{hora}:{exibirMin()}</span>
          </div>
          <div className='bloqueio-senha'>
            <div className='bloqueio-senha-display'>
              <i className="ri-circle-line"></i>
              <i className="ri-circle-line"></i>
              <i className="ri-circle-line"></i>
              <i className="ri-circle-line"></i>
              <i className="ri-circle-line"></i>
              <i className="ri-circle-line"></i>
            </div>
            <div className='bloqueio-senha-pin'>
              <div className='bloqueio-senha-pin-div'>
                <button className='bloqueio-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>1</button>
                <button className='bloqueio-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>2</button>
                <button className='bloqueio-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>3</button>
              </div>
              <div className='bloqueio-senha-pin-div'>
                <button className='bloqueio-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>4</button>
                <button className='bloqueio-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>5</button>
                <button className='bloqueio-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>6</button>
              </div>
              <div className='bloqueio-senha-pin-div'>
                <button className='bloqueio-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>7</button>
                <button className='bloqueio-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>8</button>
                <button className='bloqueio-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>9</button>
              </div>
              <div className='bloqueio-senha-pin-div'>
                <button className='bloqueio-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>0</button>
              </div>
            </div>
          </div>
          <div className='bloqueio-ajuda'>
            <button className='bloqueio-ajuda-button'>Redefinir senha</button>
          </div>
        </div>
      </div>
    </>
  )
}