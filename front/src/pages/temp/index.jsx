import React, { useEffect, useState } from "react";
import axios from "axios";
import './temp.css';
import ApexCharts from 'apexcharts'
import Temp from "../../componentes/Temp"
import { Link } from "react-router-dom";

const Temperatura = () => {
  const [temperatura, setTemperatura] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTemperatura = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/temperatura/");
        setTemperatura(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Erro ao carregar os dados de temperatura.");
      }
    };

    fetchTemperatura();
  }, []);

  return (
    <div>
      <div className="cabecalho-button">
          <Link to="/graficTemp" className="btn-link">
              Visualizar Gráfico
          </Link>
      </div>
      <div className="title">
        <h1>Temperaturas Registradas</h1>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Tipo</th>
              <th>Unid</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Localização</th>
              <th>Responsável</th>
              <th>Status</th>
              <th>Observação</th>
              <th>Mac_address</th>
              <th>Valor</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {temperatura.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.tipo}</td>
                <td>{data.unidade_medida}</td>
                <td>{data.latitude}</td>
                <td>{data.longitude}</td>
                <td>{data.localizacao}</td>
                <td>{data.responsavel}</td>
                <td>{data.status_operacional ? "Ativado" : "Desativado"}</td>
                <td>{data.observacao}</td>
                <td>{data.mac_address}</td>
                <td>{data.valor}</td>
                <td>{new Date(data.timestamp).toLocaleString()}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Temperatura;
