import React from "react";
import axios from "axios";
import './grafic.css';
import ApexCharts from 'apexcharts';
import Temp from "../../componentes/Temp";
import { Link } from "react-router-dom";

const Tempgrafic = () => {
    return(
    <div>
        <div className="cabecalho-button">
          <Link to="/temperatura" className="btn-link">
              Voltar para a Tabela
          </Link>
      </div>
        <div className="title">
            <h1>Gráfico de Temperatura</h1>
        </div>
        <div className="chart-container">
            <Temp/>
        </div>
    </div>
    )
}

export default Tempgrafic;