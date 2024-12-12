import React, { useEffect, useState } from "react";
import axios from "axios";
import './dashboard.css';
import ApexCharts from 'apexcharts'
import { Link } from "react-router-dom";
import LogoImg from "../../images/Logo.png";
import loggedInUser from "../home/index";
import UserImg from "../../images/UserIcon.png";
import ExitButton from "../../componentes/SairButton";


const Dashboard = () => {

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
        </div>
    );
}

export default Dashboard;