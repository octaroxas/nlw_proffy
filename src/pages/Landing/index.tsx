import React from 'react';

import Logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import '../Landing/styles.css';

function Landing(){
    return (
        <div id="page-landing">
            <div className="container" id="page-landing-content">
                <div className="logo-container">
                    <img src={Logo} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img src={landing} alt="Plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">

                    <a href="" className="study">Estudar
                        <img src={studyIcon} alt="Estudar" />
                    </a>

                    <a href="" className="give-classes">Dar aula
                        <img src={giveClassesIcon} alt="Estudar" />
                    </a>

                </div>

                <span className="total-connections" >
                    Total de xxx conexões já efetuadas! <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span> 
            </div>
        </div>
    );
}

export default Landing;