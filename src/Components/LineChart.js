import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation"; // Import the annotation plugin

// Register Chart.js components and the annotation plugin
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin // Register the plugin
);

const getCurrencySymbol = (countryCode) => {
  const currencyMap = {
    US: "$",    // United States
    IN: "₹",    // India
    CA: "C$",   // Canada
    DE: "€",    // Germany
  };
  return currencyMap[countryCode] || "$"; // Default to "$" if the code is not found
};

const LineChart = () => {
  const countryCode = localStorage.getItem("selectedCountry") || "US"; // Default to "US"
  const currencySymbol = getCurrencySymbol(countryCode);

  const data = {
    labels: ["Apr 2023", "May 2023", "Jun 2023", "Jul 2023", "Aug 2023", "Sep 2023", "Oct 2023", "Nov 2023", "Dec 2023", "Jan 2024"],
    datasets: [
      {
        label: "",
        data: [12000, 15000, 18000, 17000, 19000, 15000, 14000, 16000, 15380.21, 18000],
        borderColor: "#696FFB",
        backgroundColor: "rgba(74, 144, 226, 0.2)",
        borderWidth: 2,
        pointBackgroundColor: "#000000",
        pointBorderColor: "#ffffff",
        pointHoverBackgroundColor: "#ffffff",
        pointHoverBorderColor: "#000000",
      },
      {
        label: "",
        data: [10000, 13000, 17000, 16000, 20000, 14000, 18000, 15000, 17000, 20000],
        borderColor: "#FFB03A",
        borderWidth: 2,
        pointBackgroundColor: "#FFB03A",
        pointBorderColor: "#ffffff",
        pointHoverBackgroundColor: "#ffffff",
        pointHoverBorderColor: "#FFB03A",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
        labels: {
          color: "#333",
          font: {
            size: 8,
          },
          usePointStyle: true,
          padding: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${currencySymbol}${context.raw.toLocaleString("en-US")}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: function (context) {
            return context.index % 2 === 0 ? "rgba(105, 111, 251, 0.2)" : "rgba(0, 0, 0, 0.1)";
          },
        },
        ticks: {
          color: "#666",
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: "",
        },
        ticks: {
          stepSize: 5000,
          color: "#666",
          font: {
            size: 12,
          },
          callback: function (value) {
            return `${currencySymbol}${value}`;
          },
        },
      },
    },
  };

  return (
    <div
      className="chart-container"
      style={{
        minWidth: "60.6vw", // Hardcoded width
        minHeight: "30.4vh", // Hardcoded height
        padding: "20px",
        borderRadius: "0.5rem",
        boxShadow: "0 0.25rem 0.625rem rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <span
          className="heading"
          style={{
            color: "black",
            fontSize: "1.125rem",
            fontWeight: "700",
          }}
        >
          Sales Overview
        </span>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div style={{ color: "black", marginLeft: "1.5rem" }}>
            <span style={{ fontSize: "0.875rem" }}>Total Revenue</span>
            <br />
            <span style={{ fontWeight: "700", fontSize: "0.875rem" }}>
              {currencySymbol}50,345.67
            </span>
          </div>
          <div style={{ color: "black", marginLeft: "1.5rem" }}>
            <span style={{ fontSize: "0.875rem" }}>Total Target</span>
            <br />
            <span style={{ fontWeight: "700", fontSize: "0.875rem" }}>
              {currencySymbol}70,321.45
            </span>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", height: "calc(100% - 2.5rem)" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;


