import React from "react";


const IntegrationList = () => {
  const integrations = [
    {
      id: 1,
      logo: "/assets/Stripe.png", // Replace with the actual logo
      name: "Stripe",
      type: "Finance",
      rate: 33,
      profit: "$10,998.28",
    },
    {
      id: 2,
      logo: "/assets/zapier.png", // Replace with the actual logo
      name: "Zapier",
      type: "CRM",
      rate: 27,
      profit: "$8,998.59",
    },
    {
      id: 3,
      logo: "/assets/shopify.png", // Replace with the actual logo
      name: "Shopify",
      type: "Marketplace",
      rate: 40,
      profit: "$13,331.24",
    },
  ];

  return (
    <div className="integration-list">
      <h3>List of Integration</h3>
      <table>
        <thead>
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
                  <img src={integration.logo} alt={integration.name} />
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
              <td>{integration.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IntegrationList;