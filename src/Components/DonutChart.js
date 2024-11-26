import React from "react";

const DonutChart = () => {
  const premiumUsers = 2804;
  const basicUsers = 397;
  const totalUsers = premiumUsers + basicUsers;

  const premiumPercentage = (premiumUsers / totalUsers) * 100;
  const basicPercentage = (basicUsers / totalUsers) * 100;

  return (
    <div
      className="donut-chart-container"
      style={{
        width: "29.4vw", // Fixed width
        minHeight: "30.4vh", // Fixed height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <div
        className="donut-chart"
        style={{
          position: "relative",
          width: "60%", // Adjust size relative to container
          height: "60%", // Maintain aspect ratio
          width: "200px",
          maxHeight: "200px",
        }}
      >
        <div
          className="donut-chart__segment"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: `conic-gradient(
              #6c63ff ${premiumPercentage}%, 
              #f4f4f4 ${premiumPercentage}% 100%
            )`,
          }}
        ></div>
        <div
          className="donut-chart__center"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "50%",
            height: "50%",
            borderRadius: "50%",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src="../../public/assets/customers-icon.svg"
            alt="User Icon"
            className="user-icon"
            style={{
              width: "30px",
              height: "30px",
              marginBottom: "0.5rem",
            }}
          />
          <div className="count" style={{ fontSize: "1rem", fontWeight: "700" }}>
            {totalUsers}
          </div>
          <div className="text" style={{ fontSize: "0.875rem", color: "#666" }}>
            Total Users
          </div>
        </div>
      </div>
      <div
        className="user-legend"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "1rem",
        }}
      >
        <div
          className="user-legend__item"
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <span
            className="legend-color premium"
            style={{
              display: "inline-block",
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#6c63ff",
            }}
          ></span>
          <span className="legend-text" style={{ fontSize: "0.875rem" }}>
            Premium Users
          </span>
          <span
            className="legend-count"
            style={{ fontWeight: "700", marginLeft: "0.5rem" }}
          >
            {premiumUsers}
          </span>
        </div>
        <div
          className="user-legend__item"
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <span
            className="legend-color basic"
            style={{
              display: "inline-block",
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#f4f4f4",
            }}
          ></span>
          <span className="legend-text" style={{ fontSize: "0.875rem" }}>
            Basic Users
          </span>
          <span
            className="legend-count"
            style={{ fontWeight: "700", marginLeft: "0.5rem" }}
          >
            {basicUsers}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;