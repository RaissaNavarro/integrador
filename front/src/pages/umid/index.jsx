import React, { useEffect, useState } from "react";
import axios from "axios";
import './umid.css';
import ApexCharts from 'apexcharts'
import Umi from "../../componentes/Umi"

const Umidade = () => {
  const [umidade, setUmidade] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUmidade = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/umidade/");
        setUmidade(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Erro ao carregar os dados de Umidade.");
      }
    };

    fetchUmidade();
  }, []);

  return (
    <div>
      <div className="title">
        <h1>Registros de Umidade</h1>
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
            {umidade.map((data) => (
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
      <div className="title">
          <h1>Informações em Gráfico</h1>
        </div>
      <section className="chart-container">
        < Umi/>
      </section>
    </div>
  );
};

export default Umidade;
