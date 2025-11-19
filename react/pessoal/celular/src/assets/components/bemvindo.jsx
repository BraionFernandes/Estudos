import { useState } from "react";
import './css/bemvindo.css'
import '../../App.css'

import htmlIcon from '../img/html.png'

export default function Bemvindo(){

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
                            <button className="welcome-lista-elemento-retornar ri-arrow-left-s-line"></button>
                            <div className="welcome-lista-elemento-linguagens">
                                <img className="welcome-lista-elemento-linguagens-img" src={htmlIcon} alt="" />
                            </div>
                            <button className="welcome-lista-elemento-avancar ri-arrow-right-s-line"></button>
                        </div>
                    </div>
                    <div className="welcome-continuar">
                        <button className="welcome-continuar-button">Continuar</button>
                    </div>
                    <div className="welcome-creditos">
                        <span className="welcome-creditos-text">Desenvolvedor</span>
                        <a className="welcome-creditos-link" href="#">Braion Fernandes</a>
                    </div>
                </div>
            </div>
        </div>
    )
}