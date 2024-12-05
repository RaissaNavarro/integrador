import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import CityImg from "../../images/city.png"; // Substituir pela imagem de cidade inteligente
import LogoImg from "../../images/Logo.png";
import UserImg from "../../images/UserIcon.png";

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
                    <Link to="/areas">ÁREAS</Link>
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
                        <h1 className="title">SMART CITY</h1>
                        <p className="description">
                            Descubra como nossa cidade inteligente utiliza sensores de ponta para
                            monitorar e melhorar a qualidade de vida de seus cidadãos.
                        </p>
                    </div>
                    <img src={CityImg} alt="Cidade Inteligente" className="city-image" />
                </section>

                <section className="sensor-section">
                    <h2 className="sensor-title">Sensores Disponíveis</h2>
                    <div className="sensor-list">
                        <div className="sensor-card">
                            <Link to="/temperatura" className="btn-link">Temperatura</Link>
                            <p>Monitora a temperatura ambiental em tempo real.</p>
                        </div>
                        <div className="sensor-card">
                            <Link to="/contador" className="btn-link">Contador</Link>
                            <p>Acompanha a presença de pessoas ou eventos.</p>
                        </div>
                        <div className="sensor-card">
                            <Link to="/luminosidade" className="btn-link">Luminosidade</Link>
                            <p>Detecta a intensidade da luz no ambiente.</p>
                        </div>
                        <div className="sensor-card">
                            <Link to="/umidade" className="btn-link">Umidade</Link>
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
