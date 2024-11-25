import React from 'react';

const Sidebar = ({ toggleTheme, theme }) => {
  return (
    <div className={`sidebar ${theme ? 'dark' : 'light'}`}>
      {/* Toggle button to switch themes */}
      <span className="icon-container">
        <img src="/assets/sellerApp-icon-logo.svg" alt="Dashboard icon" />
        <img src="/assets/octicon_arrow-up-16.svg" alt="Arrow icon" />
      </span>
      <ul>
        <li>
          <img src="/assets/dashboard-icon.svg" alt="Dashboard icon" />
          <span>Dashboard</span>
        </li>
        <li>
          <img src="/assets/payment-icon.svg" alt="Payment icon" />
          <span>Payment</span>
        </li>
        <li>
          <img src="/assets/customers-icon.svg" alt="Customers icon" />
          <span>Customers</span>
        </li>
        <li>
          <img src="/assets/messages-icon.svg" alt="Messages icon" />
          <span>Messages</span>
        </li>
        <hr />
        <li>
          <img src="/assets/product-icon.svg" alt="Messages icon" />
          <span>Product</span>
        </li>
        <li>
          <img src="/assets/invoice-icon.svg" alt="Messages icon" />
          <span>Invoice</span>
        </li>
        <li>
          <img src="/assets/analytics-icon.svg" alt="Messages icon" />
          <span>Analytics</span>
        </li>
        <hr />
        <li>
          <img src="/assets/setting-icon.svg" alt="Messages icon" />
          <span>Settings</span>
        </li>
        <li>
          <img src="/assets/security-icon.svg" alt="Messages icon" />
          <span>Security</span>
        </li>
        <li>
          <img src="/assets/help-icon.svg" alt="Messages icon" />
          <span>Help</span>
        </li>
        <hr />
        <li>
          <img src="/assets/logout-icon.svg" alt="Messages icon" />
          <span>Logout</span>
        </li>
      </ul>
      <div className="theme-toggle">
        <p className="text-body day-label">Light</p>
        <input
          type="checkbox"
          id="theme-switch"
          onChange={toggleTheme}
          checked={theme}  // Ensure the checkbox reflects the current theme state
        />
        <label htmlFor="theme-switch" className="toggle-label"></label>
        <img src="/assets/sun.png" className="sun" alt="Sun icon" />
        <p className="text-body night-label">Dark</p>
      </div>
    </div>
  );
};

export default Sidebar;