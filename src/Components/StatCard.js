import React from "react";

const StatCard = ({ heading, value, currency, description, badge }) => {
  return (
    <div className="stat-card">
      <h3 className="stat-card-heading">{heading}</h3>
      <p className="stat-card-value">
        {currency && <span className="currency-symbol">$</span>} {/* Currency Span */}
        {value !== null ? value : "N/A"}
      </p>
      <div className="stat-card-footer">
        <span className="stat-card-badge">
          {badge !== null && badge !== undefined ? `${badge}%` : "0%"}
        </span>
        <p className="stat-card-description">{description}</p>
      </div>
    </div>
  );
};

export default StatCard;