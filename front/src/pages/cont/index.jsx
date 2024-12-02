import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles.css';
import ApexCharts from 'apexcharts'
import Cont from "../../componentes/Cont"
import { Link } from "react-router-dom";


const Contador = () => {
  const [contador, setContador] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchContador = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/contador/");
        setContador(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Erro ao carregar os dados de contador.");
      }
    };

    fetchContador();
  }, []);

  return (
    <div>
      <div className="cabecalho-button">
        <Link to="/graficCont" className="btn-link">
          Visualizar Gráfico
        </Link>
        <Link to="/home" className="btn-link">
              Voltar para Home
          </Link>
      </div>
      <div className="title">
        <h1>Registros do Contador</h1>
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
            {contador.map((data) => (
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

export default Contador;
