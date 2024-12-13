import React, { useEffect } from "react";
import axios from "axios";
import ApexCharts from "apexcharts";
 
const ChartComponent = () => {
  useEffect(() => {
 
    const handleSubmit = async (e) => { // informações genericas ** não deu pra conectar com o banco

      const options = {
        series: [44, 55, 67, 83],
        chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                return 249
              }
            }
          }
        }
      },
      labels: ['Temperatura', 'Umidade', 'Contador', 'Luminosidade'],
      };

      const chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
      return () => chart.destroy();
    }

    const timeline = async (e) => { // informações genericas ** não deu pra conectar com o banco

        
        const options = {
            series: [{
            data: [21, 22, 10, 28,]
          }],
            chart: {
            height: 350,
            type: 'bar',
            events: {
              click: function(chart, w, e) {
              }
            }
          },
          plotOptions: {
            bar: {
              columnWidth: '45%',
              distributed: true,
            }
          },
          dataLabels: {
            // enabled: 
          },
          legend: {
            show: false
          },
          xaxis: {
            categories: [
              ['Janeiro'],
              ['Fevereiro'],
              ['Março'],
              ['Abril'],
            ],
            labels: {
            }
          }
          };
  
          const chart = new ApexCharts(document.querySelector("#chart"), options);
          chart.render();
        return () => chart.destroy();
      }


 
   
 
    handleSubmit()
    timeline()
   
  }, []);
 
  return (
    <div
      id="chart"
      style={{
        width: "40%",  
        height: "300px",
        margin: "0 auto",
        paddingTop:"150px",

        

      }}
    ></div>
  );
};
 
 
export default ChartComponent;      