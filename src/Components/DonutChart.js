import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const HalfDonutChart = () => {
  const data = {
    labels: ["Premium Users", "Basic Users"],
    datasets: [
      {
        data: [2804, 397], // Example data
        backgroundColor: ["#696FFB", "#696FFB99"], // Colors for the segments
        borderWidth: 2, // No border
        borderColor: "#ffffff",
      },
    ],
  };

  const options = {
    rotation: -90, // Start angle (half-donut)
    circumference: 180, // End angle (half-donut)
    cutout: "70%", // Inner radius for the donut hole
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
  };

  return (
    <div
    className="donut-chart"
    >
      {/* Heading */}
      <h3 style={{ margin: "0 0 16px", fontSize: "18px", fontWeight: "600" }}>
        Registered Users
      </h3>

      {/* Chart Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "150px",
        }}
      >
        {/* Add a shadow using a wrapper */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, 0)",
            width: "120%",
            height: "70px",
            backgroundColor: "rgba(0, 0, 0, 0.05)", // Light grey shadow
            borderRadius: "50%",
            zIndex: -1, // Push behind the chart
            filter: "blur(10px)", // Smooth shadow effect
          }}
        ></div>

        <Doughnut data={data} options={options} />

        {/* Center Content (Icon and Number) */}
        <div
          style={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              margin: "0 auto",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={`${process.env.PUBLIC_URL}/assets/customers-icon.svg`}/>
          </div>
          <h1
            style={{
              fontSize: "34px",
              fontWeight: "700",
            }}
          >
            3,201
          </h1>
          <p style={{ fontSize: "14px", color: "#888" }}>Total users</p>
        </div>
      </div>

      {/* Footer Labels */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "16px",
          fontSize: "14px",
          color: "#555",
        }}
      >
        <div style={{ textAlign: "center", display: "flex", gap: "8px" }}>
          <span className="round-line"></span>
          <div>
            <p style={{ margin: 0, fontWeight: "600", color: "#4A90E2", textAlign: "left" }}>2,804</p>
            <p style={{ margin: 0 }}>Premium Users</p>
          </div>
        </div>
        <div style={{ textAlign: "center", display: "flex", gap: "8px"  }}>
          <div>
            <p style={{ margin: 0, fontWeight: "600", color: "#C2D6FF", textAlign: "left"  }}>397</p>
            <p style={{ margin: 0 }}>Basic Users</p>
          </div>
          <span className="round-line"></span>
        </div>
      </div>
    </div>
  );
};

export default HalfDonutChart;

