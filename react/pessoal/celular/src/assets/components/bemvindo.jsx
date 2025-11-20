import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/bemvindo.css'
import '../../App.css'

import htmlIcon from '../img/html.png'
import cssIcon from '../img/css.png'
import jsIcon from '../img/js.png'
import reactIcon from '../img/react.png'

export default function Bemvindo(){
    const navigate=useNavigate();
    
    const linguagens=[
        {nome: "html", img: htmlIcon, texto: "Html"},
        {nome: "css", img: cssIcon, texto: "Css"},
        {nome: "javascript", img: jsIcon, texto: "JavaScript"},
        {nome: "react", img: reactIcon, texto: "React"}
    ]

    const[linguagemAtual,setLinguagemAtual]=useState(linguagens[0])

    const linguagemAvancar=()=>{
        if(linguagemAtual.nome=="html"){
            setLinguagemAtual(linguagens[1]);
        }else if(linguagemAtual.nome=="css"){
            setLinguagemAtual(linguagens[2]);
        }else if(linguagemAtual.nome=="javascript"){
            setLinguagemAtual(linguagens[3]);
        }else{
            setLinguagemAtual(linguagens[0]);
        }
    }

    const linguagemRetornar=()=>{
        if(linguagemAtual.nome=="html"){
            setLinguagemAtual(linguagens[3]);
        }else if(linguagemAtual.nome=="react"){
            setLinguagemAtual(linguagens[2]);
        }else if(linguagemAtual.nome=="javascript"){
            setLinguagemAtual(linguagens[1]);
        }else{
            setLinguagemAtual(linguagens[0]);
        }
    }

    const handlePage=()=>{
        navigate(`/Senha`);
    }

    return(
        <div className="container">
            <div className="celular">
                <div className="welcome">
                    <div className="welcome-text">
                        <span className="welcome-text-item">Projeto Celular</span>
                    </div>
                    <div className="welcome-lista">
                        <div className="welcome-lista-text">
                            <span className="welcome-lista-text-item">Tecnologias utilizadas</span>
                        </div>
                        <div className="welcome-lista-elemento">
                            <button className="welcome-lista-elemento-button ri-arrow-left-s-line" onClick={linguagemRetornar}></button>
                            <div className="welcome-lista-elemento-linguagens">
                                <img className="welcome-lista-elemento-linguagens-img" src={linguagemAtual.img} alt="" />
                                <span className="welcome-lista-elemento-linguagens-text">{linguagemAtual.texto}</span>
                            </div>
                            <button className="welcome-lista-elemento-button ri-arrow-right-s-line" onClick={linguagemAvancar}></button>
                        </div>
                    </div>
                    <div className="welcome-continuar">
                        <button className="welcome-continuar-button" onClick={handlePage}>Continuar</button>
                    </div>
                    <div className="welcome-creditos">
                        <span className="welcome-creditos-text">Desenvolvedor: </span>
                        <a className="welcome-creditos-link" href="#">Braion Fernandes</a>
                    </div>
                </div>
            </div>
        </div>
    )
}