import React, { useState } from 'react';

const countries = [
    { code: 'US', name: 'USA', flag: '/assets/usa.png' },
    { code: 'IN', name: 'India', flag: '/assets/india.png' },
    { code: 'CA', name: 'Canada', flag: '/assets/canada.png' },
    { code: 'DE', name: 'Germany', flag: '/assets/germany.png' }
];

const Topbar = () => {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleCountryChange = (event) => {
        const selectedCode = event.target.value;
        const country = countries.find((c) => c.code === selectedCode);
        setSelectedCountry(country);
        setIsDropdownOpen(false); // Close the dropdown after selection
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="topbar">
            <h2>Dashboard</h2>
            <div className="right-side">
                {/* Country Dropdown */}
                <div 
                    className="country-dropdown"
                    onClick={toggleDropdown}
                >
                    <div className="selected-country">
                        <img
                            src={selectedCountry.flag}
                            alt={`${selectedCountry.name} Flag`}
                            className="flag-image"
                        />
                        <span>{selectedCountry.name}</span>
                        <img
                            src="/assets/down-arrow.png"
                            alt="Down Arrow"
                            className="down-arrow"
                        />
                    </div>
                    {isDropdownOpen && (
                        <ul className="dropdown-list">
                            {countries.map((country) => (
                                <li
                                    key={country.code}
                                    onClick={() => handleCountryChange({ target: { value: country.code } })}
                                    className="dropdown-item"
                                >
                                    <span>{country.name}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Divider */}
                <div className="divider"></div>

                {/* Login Image */}
                <img
                    src="/assets/login-icon.png"
                    alt="Login Icon"
                    className="login-image"
                />
            </div>
        </div>
    );
};

export default Topbar;