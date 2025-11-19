import { useState, useEffect } from 'react'
import './css/senha.css'
import '../../App.css'

export default function Senha(props) {

    const [senhaDigitada,setSenhaDigitada]=useState([]);

    const numDigitado=(e)=>{
        if(e && senhaDigitada.length < 6){
            const novaSenha=[...senhaDigitada, e];
            setSenhaDigitada(novaSenha);
        }
    }
    const definirSenha=()=>{
        if(props.senhaDefinida.length == 0 && senhaDigitada.length == 6){
            props.setSenhaDefinida(senhaDigitada);
        }
        if(props.senhaDefinida.length == 6){
            console.log(props.senhaDefinida);
        }
    }

    return(
        <>
            <div className='container'>
                <div className='celular'>
                    <div className='definirSenha'>
                        <div className='definirSenha-text'>
                            <span className='definirSenha-text-item'>Defina sua senha</span>
                        </div>
                        <div className='definirSenha-senha'>
                            <div className='definirSenha-senha-display'>
                                <i className={senhaDigitada.length>=1?'ri-circle-fill':'ri-circle-line'}></i>
                                <i className={senhaDigitada.length>=2?'ri-circle-fill':'ri-circle-line'}></i>
                                <i className={senhaDigitada.length>=3?'ri-circle-fill':'ri-circle-line'}></i>
                                <i className={senhaDigitada.length>=4?'ri-circle-fill':'ri-circle-line'}></i>
                                <i className={senhaDigitada.length>=5?'ri-circle-fill':'ri-circle-line'}></i>
                                <i className={senhaDigitada.length>=6?'ri-circle-fill':'ri-circle-line'}></i>
                            </div>
                            <div className='definirSenha-senha-pin'>
                                <div className='definirSenha-senha-pin-div'>
                                    <button className='definirSenha-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>1</button>
                                    <button className='definirSenha-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>2</button>
                                    <button className='definirSenha-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>3</button>
                                </div>
                                <div className='definirSenha-senha-pin-div'>
                                    <button className='definirSenha-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>4</button>
                                    <button className='definirSenha-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>5</button>
                                    <button className='definirSenha-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>6</button>
                                </div>
                                <div className='definirSenha-senha-pin-div'>
                                    <button className='definirSenha-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>7</button>
                                    <button className='definirSenha-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>8</button>
                                    <button className='definirSenha-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>9</button>
                                </div>
                                <div className='definirSenha-senha-pin-div'>
                                    <button className='definirSenha-senha-pin-div-item' onClick={(e)=>numDigitado(e.target.innerHTML)}>0</button>
                                </div>
                            </div>
                            <div className='definirSenha-definir'>
                                <button className='definirSenha-definir-button' onClick={()=>definirSenha()}>Definir Senha</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}