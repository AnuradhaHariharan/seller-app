import React, { useState, useEffect } from 'react';

const countries = [
    { code: 'US', name: 'USA', flag: '/assets/usa.png' },
    { code: 'IN', name: 'India', flag: '/assets/india.png' },
    { code: 'CA', name: 'Canada', flag: '/assets/canada.png' },
    { code: 'DE', name: 'Germany', flag: '/assets/germany.png' }
];

const Topbar = ({ theme, toggleTheme }) => {
    // Try to get the selected country from localStorage, or use the default first country
    const storedCountry = localStorage.getItem('selectedCountry');
    
    // Check if storedCountry is valid JSON or not
    let initialCountry = countries[0]; // default value
    if (storedCountry) {
        try {
            const parsedCountry = JSON.parse(storedCountry);
            // Check if the parsed object matches the shape of the country object
            if (parsedCountry && parsedCountry.code && parsedCountry.name && parsedCountry.flag) {
                initialCountry = parsedCountry;
            }
        } catch (error) {
            console.error('Error parsing country data from localStorage:', error);
        }
    }

    const [selectedCountry, setSelectedCountry] = useState(initialCountry);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Effect to store the selected country in localStorage
    useEffect(() => {
        try {
            const countryToStore = JSON.stringify(selectedCountry);
            localStorage.setItem('selectedCountry', countryToStore);
        } catch (error) {
            console.error("Error saving country to localStorage", error);
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