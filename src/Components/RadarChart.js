import React from "react";
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
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw.toLocaleString("en-US")}`;
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
            return `$${value}`;
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
    // Custom plugin to render numbers below each label and fill hexagons with color
    plugins: [
      {
        id: "customLabelNumbers",
        afterDraw: (chart) => {
          const { ctx, chartArea, scales } = chart;
          const { left, right, top, bottom } = chartArea;
          const xAxis = scales.r;
          const labels = chart.data.labels;
          const data = chart.data.datasets[0].data;

          // Calculate position for each point label and hexagon background color
          labels.forEach((label, index) => {
            const radius = xAxis.getDistanceFromCenterForValue(data[index]);
            const angle = (index * Math.PI * 2) / labels.length - Math.PI / 2; // Convert to radians
            const x = chartArea.left + radius * Math.cos(angle); // X position
            const y = chartArea.top + radius * Math.sin(angle); // Y position

            // Adjust vertical position for the label (add a fixed offset below the point)
            const labelOffset = 20; // Adjust this for spacing below the label
            const yOffset = y + labelOffset;

            // Draw the hexagonal background color
            const hexagonRadius = 20; // Size of the hexagon area (adjust this value)
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x + hexagonRadius * Math.cos(angle), y + hexagonRadius * Math.sin(angle));

            for (let i = 1; i < 6; i++) {
              ctx.lineTo(
                x + hexagonRadius * Math.cos(angle + (i * Math.PI) / 3),
                y + hexagonRadius * Math.sin(angle + (i * Math.PI) / 3)
              );
            }
            ctx.closePath();
            ctx.fillStyle = "rgba(138, 102, 226, 0.2)"; // Light purple fill for the hexagon
            ctx.fill();
            ctx.restore();

            // Draw the number below the label
            ctx.save();
            ctx.font = "bold 12px Arial";
            ctx.fillStyle = "#333"; // Color for the number
            ctx.textAlign = "center"; // Center the number
            ctx.fillText(`$${data[index].toLocaleString("en-US")}`, x, yOffset); // Draw the number below the label
            ctx.restore();
          });
        },
      },
    ],
  };

  return (
    <div className="sales-by-region-container">
      {/* Heading */}
      <h3 className="sales-by-region-heading">
        Sales by Region
      </h3>
      {/* Chart */}
      <div className="sales-by-region-chart">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesByRegionChart;