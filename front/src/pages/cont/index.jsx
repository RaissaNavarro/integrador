import React, { useEffect, useState } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import "./styles.css";

const Contador = () => {
  const [contador, setContador] = useState([]);
  const [error, setError] = useState(""); // Caso dê algum problema
  const [chartOptions, setChartOptions] = useState({
    series: [],
    options: {
      chart: {
        id: "contador-chart",
        type: "line",
      },
      xaxis: {
        categories: [],
      },
      title: {
        text: "Valores do Contador ao Longo do Tempo",
        align: "center",
      },
    },
  });

  useEffect(() => {
    const fetchContador = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/contador/"
        );
        setContador(response.data);
        console.log(response.data);

        // Atualizar o gráfico com os dados
        const timestamps = response.data.map((item) =>
          new Date(item.timestamp).toLocaleString()
        );
        const valores = response.data.map((item) => item.valor);

        setChartOptions((prev) => ({
          ...prev,
          series: [{ name: "Valor", data: valores }],
          options: {
            ...prev.options,
            xaxis: { categories: timestamps },
          },
        }));
      } catch (err) {
        setError("Erro ao carregar os dados do contador");
      }
    };

    fetchContador();
  }, []);

  return (
    <div>
      <h1>Registros do Contador</h1>
      {error && <p className="error">{error}</p>}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Contador</th>
              <th>Data de Registro</th>
              <th>Contador ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {contador.map((data) => (
              <tr key={data.id}>
                <td>{data.valor.toFixed(2)}</td>
                <td>{new Date(data.timestamp).toLocaleString()}</td>
                <td>{data.sensor.id}</td>
                <td>{String(data.sensor.status_operacional)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Renderizando o gráfico */}
      <div className="chart-container">
        <Chart
          options={chartOptions.options}
          series={chartOptions.series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default Contador;
