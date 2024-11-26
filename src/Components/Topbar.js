import React, { useState, useEffect } from 'react';

const countries = [
    { code: 'US', name: 'USA', flag: '/assets/usa.png', currency: 'USD' },
    { code: 'IN', name: 'India', flag: '/assets/india.png', currency: 'INR' },
    { code: 'CA', name: 'Canada', flag: '/assets/canada.png', currency: 'CAD' },
    { code: 'DE', name: 'Germany', flag: '/assets/germany.png', currency: 'EUR' }
];

const Topbar = ({ theme, toggleTheme }) => {
    // Try to get the selected country code from localStorage, or use the default first country code
    const storedCountryCode = localStorage.getItem('selectedCountry');
    
    // Default to the first country if no country is stored in localStorage
    const initialCountry = countries.find(c => c.code === storedCountryCode) || countries[0];

    const [selectedCountry, setSelectedCountry] = useState(initialCountry);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Effect to store the selected country code in localStorage
    useEffect(() => {
        try {
            localStorage.setItem('selectedCountry', selectedCountry.code); // Save only the country code
        } catch (error) {
            console.error("Error saving country code to localStorage", error);
        }
    }, [selectedCountry]);

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
        <div className={`topbar ${theme ? 'dark' : 'light'}`}>
            <h2>Dashboard</h2>
            <div className="right-side">
                {/* Country Dropdown */}
                <div className="country-dropdown" onClick={toggleDropdown}>
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

