import React, { useEffect } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Doughnut } from "react-chartjs-2";
import { Card } from "react-bootstrap";
import "./PieChart.css";

const PieChart = ({ chartData }) => {
  const emi = chartData.emi;
  // console.log(chartData.emi, emi);
  Chart.register(ArcElement, Tooltip);

  const data = {
    labels: ["EMI", "Principle", "Interest", "Total Amount"],
    datasets: [
      {
        data: [
          chartData.emi,
          chartData.amount,
          chartData.totalInterest,
          (
            parseFloat(chartData.amount) + parseFloat(chartData.totalInterest)
          ).toFixed(2),
        ],
        backgroundColor: ["#4257b2", "#36A2EB", "#FF6384", "#FFCE56"],
        hoverBackgroundColor: ["#4257b2", "#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  return (
    // <div className="col-12 col-sm-6">
      <Card className="mx-0 my-4 py-0 px-3" style={{width: 'max-content' , flexDirection: 'column'}}>
        <Card.Body>
          <Doughnut className="chart" data={data} />
        </Card.Body>
        <div className="pill-box mt-4 mb-3">
          <div className="pill-container">
            <div style={{ backgroundColor: "#4257b2" }} className="pills"></div>
            <label className="pill-label">
              Monthly EMI: &#x20B9;{chartData.emi}
            </label>
          </div>
          <div className="pill-container">
            <div style={{ backgroundColor: "#36A2EB" }} className="pills"></div>
            <label className="pill-label">
              Principle: &#x20B9;{chartData.amount}
            </label>
          </div>
          <div className="pill-container">
            <div style={{ backgroundColor: "#FF6384" }} className="pills"></div>
            <label className="pill-label">
              Interest: &#x20B9;{chartData.totalInterest}
            </label>
          </div>
          <div className="pill-container">
            <div style={{ backgroundColor: "#FFCE56" }} className="pills"></div>
            <label className="pill-label">
              Total Amount: &#x20B9;
              {(
                parseFloat(chartData.amount) +
                parseFloat(chartData.totalInterest)
              ).toFixed(2)}
            </label>
          </div>
        </div>
      </Card>
    // </div>
  );
};

export default PieChart;
