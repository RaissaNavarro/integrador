import React from "react";
import axios from "axios";
import './sensor.css';
import ApexCharts from 'apexcharts';
import { Link } from "react-router-dom";
import ImgTemp from "../../images/temperatura.png"
import loggedInUser from "../home/index"
import LogoImg from "../../images/Logo.png"
import UserImg from "../../images/UserIcon.png"
import UmiImg from "../../images/umidade.png"
import LumiImg from "../../images/luminosidade.png"
import ContImg from "../../images/contador.png"
import ExitButton from "../../componentes/SairButton";

const ShowSensor = () => {
    return (
        <div className="home-container">
            <header className="header">
                <div className="header-left">
                    <img src={LogoImg} alt="Smart City Logo" className="logo" />
                </div>
                <nav className="header-nav">
                    <Link to="/">LOGIN</Link>
                    <Link to="/sobrenos">SOBRE NÓS</Link>
                    <Link to="/dashboard">DASHBOARD</Link>
                    <Link to="/home">HOME</Link>
                </nav>
                <div className="header-user">
                    <div className="login-icon">
                        <p>{loggedInUser}</p>
                    </div>
                    <img src={UserImg} alt="User Icon" className="user-icon" />
                    <ExitButton/>
                </div>
            </header>
        
            <h1>Bem-vindo à Home!</h1>
            <p>Você fez login com sucesso.</p>
            
            <div className="sensor-info">
                <div className="sensor-section left">
                    <img src={ImgTemp} alt="Sensor de Temperatura" />
                    <p>
                        O sensor de temperatura é um dispositivo fundamental em diversos ambientes, pois permite o monitoramento e registro das variações de temperatura em tempo real, garantindo que dados precisos estejam sempre disponíveis. Este tipo de sensor opera captando as mudanças térmicas e transformando-as em informações digitais, que são, então, transmitidas para sistemas de controle. Ele é amplamente utilizado em aplicações industriais, residenciais e comerciais para manter o ambiente em condições ideais, além de proteger equipamentos sensíveis ao calor. Em sistemas de climatização, por exemplo, o sensor de temperatura é essencial para ajustar automaticamente a refrigeração ou o aquecimento, assegurando a eficiência energética e o conforto dos ocupantes. Em ambientes laboratoriais, a precisão do sensor é crucial para a realização de experimentos sensíveis que dependem de condições térmicas específicas.</p>
                </div>
                <div className="sensor-section right">
                    <img src={UmiImg} alt="Sensor de Umidade" />
                    <p>O sensor de umidade é essencial para monitorar a quantidade de vapor d’água no ar, o que é especialmente importante em ambientes como estufas, armazéns, indústrias e até residências. Esse dispositivo mede a umidade relativa, oferecendo informações em tempo real que ajudam a manter as condições ideais em um espaço. Em sistemas de climatização, o sensor permite ajustes automáticos para preservar o conforto térmico. Além disso, em ambientes industriais, ele auxilia na proteção de equipamentos sensíveis e evita a deterioração de materiais. O monitoramento contínuo da umidade é vital para manter a integridade dos processos e garantir ambientes saudáveis e seguros.</p>
                </div>
                <div className="sensor-section left">
                    <img src={LumiImg} alt="Sensor Contador" />
                    <p>O contador é um dispositivo crucial utilizado para monitorar e registrar a frequência de eventos ou a presença de pessoas em uma área específica. Ele pode ser empregado em diversos contextos, como em lojas de varejo, onde é usado para contabilizar o número de clientes que entram e saem, ajudando a avaliar o fluxo de clientes e otimizar o atendimento. 
                        
                        Em eventos, como concertos ou conferências, o contador permite verificar a quantidade de participantes, garantindo a segurança e o cumprimento das normas de capacidade. Além disso, em ambientes industriais, ele pode ser usado para monitorar a movimentação de trabalhadores e equipamentos, contribuindo para a segurança e eficiência operacional.
                        
                         A tecnologia utilizada varia, podendo incluir sensores infravermelhos, câmeras ou contadores de pressão, dependendo da aplicação.</p>
                </div>
                <div className="sensor-section right">
                    <img src={ContImg} alt="Sensor de Luminosidade" />
                    <p>O sensor de luminosidade é um dispositivo projetado para medir a intensidade da luz em um ambiente específico. Ele é amplamente utilizado em diversas aplicações, desde residências até indústrias, desempenhando um papel crucial na automação e no controle ambiental. Esses sensores funcionam detectando a luz natural ou artificial e convertendo essa informação em sinais elétricos que podem ser interpretados por sistemas eletrônicos.

                        Um dos principais benefícios do sensor de luminosidade é sua capacidade de otimizar o uso de energia. Por exemplo, em ambientes comerciais, ele pode regular a intensidade das luzes artificiais com base na luminosidade natural disponível, contribuindo para a redução do consumo de energia e custos operacionais. Em casas inteligentes, esses sensores podem ativar ou desativar luzes automaticamente, melhorando o conforto e a conveniência para os moradores.

                        Além disso, o sensor de luminosidade é fundamental em sistemas de segurança, onde a detecção de mudanças nos níveis de luz pode indicar a presença de intrusos.</p>

                </div>
            </div>
        </div>
    );
}

export default ShowSensor;