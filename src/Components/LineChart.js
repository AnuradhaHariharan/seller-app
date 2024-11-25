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

const LineChart = () => {
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
        display: true,
        position: "top",
        labels: {
          color: "#333",
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: $${context.raw.toLocaleString("en-US")}`;
          },
        },
      },
      annotation: {
        annotations: {
          line1: {
            type: "line",
            xMin: 9,
            xMax: 9,
            yMin: 10000,
            yMax: 10000,
            borderColor: "black",
            borderWidth: 1,
            label: {
              content: "$10k",
              enabled: true,
              position: "right",
              font: {
                size: 12,
                weight: "bold",
              },
            },
          },
          line2: {
            type: "line",
            xMin: 9,
            xMax: 9,
            yMin: 15000,
            yMax: 15000,
            borderColor: "black",
            borderWidth: 1,
            label: {
              content: "$15k",
              enabled: true,
              position: "right",
              font: {
                size: 12,
                weight: "bold",
              },
            },
          },
          line3: {
            type: "line",
            xMin: 9,
            xMax: 9,
            yMin: 20000,
            yMax: 20000,
            borderColor: "black",
            borderWidth: 1,
            label: {
              content: "$20k",
              enabled: true,
              position: "right",
              font: {
                size: 12,
                weight: "bold",
              },
            },
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide default x-axis grid
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
          color: "rgba(0, 0, 0, 0.05)", // Light grid lines
        },
        ticks: {
          stepSize: 5000,
          color: "#666",
          font: {
            size: 12,
          },
          callback: function (value) {
            return `$${value}`;
          },
        },
      },
    },
  };

  return (
    <div
      className="chart-container"  // Added class to control the background color
      style={{
        width: "800px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          display: "flex", // Use flexbox for the main layout
          justifyContent: "space-between", // Distribute space between left and right elements
          alignItems: "center", // Align items vertically in the center
          marginBottom: "10px",
        }}
      >
        <span
          className="heading"
          style={{
            color: "black",
            fontSize: "18px",
            fontWeight: "700",
            marginBottom: "",
          }}
        >
          Sales Overview
        </span>

        <div
          style={{
            display: "flex", // Use flexbox for the inner content to be aligned horizontally
            justifyContent: "flex-end", // Align items to the right
            alignItems: "center",
          }}
        >
          <div style={{ color: "black", marginLeft: "30px" }}>
            <span style={{ fontSize: "14px" }}>Total Revenue</span>
            <br />
            <span style={{ fontWeight: "400", fontSize: "14px", fontWeight: "700" }}>$50,345.67</span>
          </div>
          <div style={{ color: "black", marginLeft: "30px" }}>
            <span style={{ fontSize: "14px" }}>Total Target</span>
            <br />
            <span style={{ fontWeight: "400", fontSize: "14px", fontWeight: "700" }}>$70,321.45</span>
          </div>
        </div>
      </div>

      <div style={{ height: "300px" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;