import React, { useState, useEffect } from "react";

const IntegrationList = () => {
  const integrations = [
    {
      id: 1,
      logo: "/assets/Stripe.png", // Replace with the actual logo
      name: "Stripe",
      type: "Finance",
      rate: 33,
      profit: 10998.28,
    },
    {
      id: 2,
      logo: "/assets/zapier.png", // Replace with the actual logo
      name: "Zapier",
      type: "CRM",
      rate: 27,
      profit: 8998.59,
    },
    {
      id: 3,
      logo: "/assets/shopify.png", // Replace with the actual logo
      name: "Shopify",
      type: "Marketplace",
      rate: 40,
      profit: 13331.24,
    },
  ];

  // State to store the currency symbol
  const [currencySymbol, setCurrencySymbol] = useState("$");

  useEffect(() => {
    // Get the country code from localStorage
    const countryCode = localStorage.getItem("selectedCountry");

    // Set currency symbol based on country code
    const currencyMap = {
      US: "$",        // USD for US
      CA: "$",        // CAD for Canada (same symbol as USD, but different currency)
      DE: "€",        // EUR for Germany
      IN: "₹",        // INR for India
    };

    // Set the currency symbol based on country code or default to "$"
    if (countryCode && currencyMap[countryCode]) {
      setCurrencySymbol(currencyMap[countryCode]);
    } else {
      setCurrencySymbol("$"); // Default to USD
    }
  }, []); // Only run once on component mount

  return (
    <div className="integration-list">
      <h3>List of Integration</h3>
      <table>
        <thead style={{backgroundColor: "rgba(105, 111, 251, 0.2)"}}>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Application</th>
            <th>Type</th>
            <th>Rate</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {integrations.map((integration) => (
            <tr key={integration.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <div className="application">
                  <img
                    src={`${process.env.PUBLIC_URL}${integration.logo}`}
                    alt={integration.name}
                  />
                  <span>{integration.name}</span>
                </div>
              </td>
              <td>{integration.type}</td>
              <td>
                <div className="rate-bar">
                  <div
                    className="rate-bar-fill"
                    style={{ width: `${integration.rate}%` }}
                  ></div>
                </div>
                <span>{integration.rate}%</span>
              </td>
              <td>
                {/* Format profit with the correct currency */}
                {currencySymbol}{integration.profit.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IntegrationList;


