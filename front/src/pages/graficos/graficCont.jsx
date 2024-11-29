import React from "react";
import axios from "axios";
import './grafic.css';
import ApexCharts from 'apexcharts';
import Cont from "../../componentes/Cont";
import { Link } from "react-router-dom";

const Contgrafic = () => {
    return(
    <div>
        <div className="cabecalho-button">
          <Link to="/contador" className="btn-link">
              Voltar para a Tabela
          </Link>
      </div>
        <div className="title">
            <h1>Gráfico do Contador</h1>
        </div>
        <div className="chart-container">
            <Cont/>
        </div>
    </div>
    )
}

export default Contgrafic;