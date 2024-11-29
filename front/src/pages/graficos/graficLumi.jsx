import React from "react";
import axios from "axios";
import './grafic.css';
import ApexCharts from 'apexcharts';
import Lumi from "../../componentes/Lumi"
import { Link } from "react-router-dom";

const Lumigrafic = () => {
    return(
    <div>
        <div className="cabecalho-button">
          <Link to="/luminosidade" className="btn-link">
              Voltar para a Tabela
          </Link>
      </div>
        <div className="title">
            <h1>Gráfico de Luminosidade</h1>
        </div>
        <div className="chart-container">
            <Lumi/>
        </div>
    </div>
    )
}

export default Lumigrafic;