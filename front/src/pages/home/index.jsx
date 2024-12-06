import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import CityImg from "../../images/city.png"; // Substituir pela imagem de cidade inteligente
import LogoImg from "../../images/Logo.png";
import UserImg from "../../images/UserIcon.png";
// import TempImg from "../../images/temperatura.png"

const Home = () => {
    const [token, setToken] = useState(localStorage.getItem("accessToken"));
    const [loggedInUser, setLoggedInUser] = useState("");

    useEffect(() => {
        const username = localStorage.getItem("username");
        if (username) {
            setLoggedInUser(username);
        }
    }, []);

    return (
        <div className="home-container">
            {/* Cabeçalho */}
            <header className="header">
                <div className="header-left">
                    <img src={LogoImg} alt="Smart City Logo" className="logo" />
                </div>
                <nav className="header-nav">
                    <Link to="/">LOGIN</Link>
                    <Link to="/sobrenos">SOBRE NÓS</Link>
                    <Link to="/dashboard">DASHBOARD</Link>
                    <Link to="/sensores">SENSORES</Link>
                </nav>
                <div className="header-user">
                    <div className="login-icon">
                        <p>{loggedInUser}</p>
                    </div>
                    <img src={UserImg} alt="User Icon" className="user-icon" />
                </div>
            </header>

            {/* Conteúdo principal */}
            <main className="main-content">
                <section className="intro-section">
                    <div className="text-content">
                        <h1 className="title-home">SMART CITY</h1>
                        <p className="description">
                        Bem-vindo à Smart City, uma cidade inteligente projetada para integrar tecnologia e inovação ao dia a dia dos seus moradores. 
                        Nosso objetivo é oferecer soluções que melhorem a qualidade de vida, aumentem a eficiência dos serviços públicos e promovam 
                        um ambiente mais sustentável. Aqui, cada sensor desempenha um papel fundamental, coletando dados em tempo real para ajudar 
                        na tomada de decisões informadas e criar uma cidade mais conectada e funcional.

                        Nossa infraestrutura inclui sensores de temperatura, umidade, luminosidade e contadores de presença, todos estrategicamente 
                        distribuídos para monitorar e gerenciar diferentes aspectos da cidade. Essas tecnologias possibilitam, por exemplo, o controle 
                        inteligente do consumo de energia, a otimização dos sistemas de transporte e o monitoramento ambiental, garantindo uma gestão 
                        eficiente e responsiva às necessidades da população.
                        </p>
                    </div>
                    <img src={CityImg} alt="Cidade Inteligente" className="city-image" />
                </section>

                <section className="sensor-section">
                    <h2 className="sensor-title">Sensores Disponíveis</h2>
                    <div className="sensor-list">
                        <div className="sensor-card">
                        {/* <img src={TempImg} alt="img temperatura" className="img-temp" /> */}
                            <Link to="/temperatura" className="btn-link-home">Temperatura</Link>
                            <p>Monitora a temperatura ambiental em tempo real.</p>
                        </div>
                        <div className="sensor-card">
                            <Link to="/contador" className="btn-link-home">Contador</Link>
                            <p>Acompanha a presença de pessoas ou eventos.</p>
                        </div>
                        <div className="sensor-card">
                            <Link to="/luminosidade" className="btn-link-home">Luminosidade</Link>
                            <p>Detecta a intensidade da luz no ambiente.</p>
                        </div>
                        <div className="sensor-card">
                            <Link to="/umidade" className="btn-link-home">Umidade</Link>
                            <p>Mede a quantidade de vapor d'água no ar.</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Rodapé */}
            <footer className="footer">
                <p>SMARTCITY © 2024.</p>
            </footer>
        </div>
    );
};

export default Home;
