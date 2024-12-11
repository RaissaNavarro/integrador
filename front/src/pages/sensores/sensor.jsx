import React from "react";
import axios from "axios";
import './sensor.css';
import ApexCharts from 'apexcharts';
import { Link } from "react-router-dom";
import ImgTemp from "../../images/temperatura.png"

const ShowSensor = () => {
    return(
    <div>
        <div class="sensor-card">
            <div class="image-container">
                <h2 class="sensor-title">Sensor de Temperatura</h2>
                <img src={ImgTemp} alt="" />
            </div>
            <div class="sensor-info">
                <p>Monitora a temperatura do ambiente em tempo real, ideal para sistemas de controle climático.</p>
                <ul>
                <li>Funcionalidade 1: Medição precisa</li>
                <li>Funcionalidade 2: Conexão via Bluetooth</li>
                <li>Funcionalidade 3: Integração com outros dispositivos IoT</li>
                </ul>
            </div>
        </div>
        <div class="sensor-card">
            <div class="image-container">
                <h2 class="sensor-title">Sensor de Temperatura</h2>
                <img src={ImgTemp} alt="" />
            </div>
            <div class="sensor-info">
                <p>Monitora a temperatura do ambiente em tempo real, ideal para sistemas de controle climático.</p>
                <ul>
                <li>Funcionalidade 1: Medição precisa</li>
                <li>Funcionalidade 2: Conexão via Bluetooth</li>
                <li>Funcionalidade 3: Integração com outros dispositivos IoT</li>
                </ul>
            </div>
        </div>
        <div class="sensor-card">
            <div class="image-container">
                <h2 class="sensor-title">Sensor de Temperatura</h2>
                <img src={ImgTemp} alt="" />
            </div>
            <div class="sensor-info">
                <p>Monitora a temperatura do ambiente em tempo real, ideal para sistemas de controle climático.</p>
                <ul>
                <li>Funcionalidade 1: Medição precisa</li>
                <li>Funcionalidade 2: Conexão via Bluetooth</li>
                <li>Funcionalidade 3: Integração com outros dispositivos IoT</li>
                </ul>
            </div>
        </div>
        <div class="sensor-card">
            <div class="image-container">
                <h2 class="sensor-title">Sensor de Temperatura</h2>
                <img src={ImgTemp} alt="" />
            </div>
            <div class="sensor-info">
                <p>Monitora a temperatura do ambiente em tempo real, ideal para sistemas de controle climático.</p>
                <ul>
                <li>Funcionalidade 1: Medição precisa</li>
                <li>Funcionalidade 2: Conexão via Bluetooth</li>
                <li>Funcionalidade 3: Integração com outros dispositivos IoT</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default ShowSensor;