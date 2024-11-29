import React from "react";
import axios from "axios";
import './grafic.css';
import ApexCharts from 'apexcharts';
import Umi from "../../componentes/Umi";
import { Link } from "react-router-dom";

const Umigrafic = () => {
    return(
    <div>
        <div className="cabecalho-button">
          <Link to="/umidade" className="btn-link">
              Voltar para a Tabela
          </Link>
      </div>
        <div className="title">
            <h1>Gráfico de Umidade</h1>
        </div>
        <div className="chart-container">
            <Umi/>
        </div>
    </div>
    )
}

export default Umigrafic;