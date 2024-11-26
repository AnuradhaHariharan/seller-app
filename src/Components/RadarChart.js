import React, { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SalesByRegionChart = () => {
  const [currencySymbol, setCurrencySymbol] = useState("$");

  // Define currency symbols based on country
  const currencyMap = {
    US: "$", // USD for US
    CA: "$", // CAD for Canada (same symbol as USD, but different currency)
    IN: "₹", // INR for India
    DE: "€", // EUR for Germany
  };

  useEffect(() => {
    // Retrieve country code from localStorage
    const countryCode = localStorage.getItem("selectedCountry") || "US"; // Default to US if no country is selected
    setCurrencySymbol(currencyMap[countryCode] || "$"); // Set currency symbol based on country
  }, []);

  const data = {
    labels: ["Asia", "Europe", "Americas", "Africa", "Middle East", "Pacific"],
    datasets: [
      {
        label: "",
        data: [2201, 2865, 1762, 1591, 1749, 2475],
        backgroundColor: "rgba(138, 102, 226, 0.2)", // Light purple fill
        borderColor: "rgba(138, 102, 226, 1)", // Purple border
        borderWidth: 2,
        pointBackgroundColor: "rgba(138, 102, 226, 1)", // Purple points
        pointBorderColor: "#fff", // White point border
        pointHoverBackgroundColor: "#fff", // White hover point
        pointHoverBorderColor: "rgba(138, 102, 226, 1)", // Purple hover border
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow custom dimensions
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${currencySymbol}${context.raw.toLocaleString("en-US")}`;
          },
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          color: "#e0e0e0", // Light gray radial lines
        },
        grid: {
          color: "#e0e0e0", // Light gray grid lines
        },
        suggestedMin: 1000,
        suggestedMax: 3000,
        ticks: {
          stepSize: 500,
          backdropColor: "transparent", // No background on ticks
          color: "#888", // Light gray tick labels
          font: {
            size: 12,
          },
          callback: function (value) {
            return `${currencySymbol}${value}`;
          },
        },
        pointLabels: {
          color: "#333", // Darker text for region labels
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="sales-by-region-container">
      {/* Heading */}
      <h3 className="sales-by-region-heading">Sales by Region</h3>
      {/* Chart */}
      <div
        className="sales-by-region-chart"
        style={{
          width: "28vw", // Width in rem
          height: "25.36vh", // Reduced height to 230px
        }}
      >
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesByRegionChart;
