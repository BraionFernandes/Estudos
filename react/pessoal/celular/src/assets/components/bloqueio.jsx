import { useState, useEffect } from 'react'
import './css/bloqueio.css'

export default function Bloqueio() {

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

  return (
    <>
      <div className='container'>
        <div className='bloqueio'>
          <div className='bloqueio-text'>
            <span className='bloqueio-text-item'>Insira o PIN para desbloquear</span>
          </div>
          <div className='bloqueio-time'>
            <span className='bloqueio-time-display'>{hora}:{min}</span>
          </div>
          <div className='bloqueio-senha'>
            <div className='bloqueio-senha-display'>
              <i class="ri-circle-line"></i>
              <i class="ri-circle-line"></i>
              <i class="ri-circle-line"></i>
              <i class="ri-circle-line"></i>
              <i class="ri-circle-line"></i>
              <i class="ri-circle-line"></i>
            </div>
            <div className='bloqueio-senha-pin'>
              <div className='bloqueio-senha-pin-div'>
                <button className='bloqueio-senha-pin-div-item'>1</button>
                <button className='bloqueio-senha-pin-div-item'>2</button>
                <button className='bloqueio-senha-pin-div-item'>3</button>
              </div>
              <div className='bloqueio-senha-pin-div'>
                <button className='bloqueio-senha-pin-div-item'>4</button>
                <button className='bloqueio-senha-pin-div-item'>5</button>
                <button className='bloqueio-senha-pin-div-item'>6</button>
              </div>
              <div className='bloqueio-senha-pin-div'>
                <button className='bloqueio-senha-pin-div-item'>7</button>
                <button className='bloqueio-senha-pin-div-item'>8</button>
                <button className='bloqueio-senha-pin-div-item'>9</button>
              </div>
              <div className='bloqueio-senha-pin-div'>
                <button className='bloqueio-senha-pin-div-item'>0</button>
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