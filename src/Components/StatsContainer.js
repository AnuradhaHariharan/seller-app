import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import hooks from react-redux
import { fetchStats } from '../redux/statsSlice'; // Import the async action
import StatsCard from './StatCard';
import LineChart from './LineChart';
import SalesByRegionChart from './RadarChart';
import DonutChart from './DonutChart';
import IntegrationList from './IntegrationList';
import countryStats from '../data/countryStats.json'; // Import your JSON file

const StatsContainer = ({ theme }) => {  
  const dispatch = useDispatch(); // Dispatch function to send actions

  // Get initial values from localStorage or fallback to default values
  const storedPremiumUsers = parseInt(localStorage.getItem('premiumUsers')) || 120;
  const storedBasicUsers = parseInt(localStorage.getItem('basicUsers')) || 80;

  const [premiumUsers, setPremiumUsers] = useState(storedPremiumUsers); 
  const [basicUsers, setBasicUsers] = useState(storedBasicUsers); 

  // Access stats and badges data from Redux store
  const { totalIncome, profit, totalViews, conversionRate, badges, loading } = useSelector(
    (state) => state.stats
  );

  // State to hold country-specific stats
  const [countryStatsData, setCountryStatsData] = useState(null);

  // Get the selected country code from localStorage (defaults to 'IN' if not found)
  const selectedCountryCode = localStorage.getItem('selectedCountry') || 'IN';

  useEffect(() => {
    dispatch(fetchStats()); // Dispatch the action to fetch stats when the component mounts

    // Fetch initial country-specific stats from the JSON file based on the selected country
    const countryData = countryStats[selectedCountryCode];
    setCountryStatsData(countryData); // Set the data dynamically based on country

    // Simulate dynamic updates every 5 seconds (for example)
    const intervalId = setInterval(() => {
      const updatedCountryData = countryStats[selectedCountryCode];
      setCountryStatsData(updatedCountryData); // Update the state with new data
    }, 5000); // Update every 5 seconds

    return () => {
      clearInterval(intervalId); // Cleanup the interval when the component unmounts
    };
  }, [dispatch, selectedCountryCode]);

  // Update localStorage whenever premiumUsers or basicUsers changes
  useEffect(() => {
    localStorage.setItem('premiumUsers', premiumUsers); // Store premiumUsers in localStorage
  }, [premiumUsers]);

  useEffect(() => {
    localStorage.setItem('basicUsers', basicUsers); // Store basicUsers in localStorage
  }, [basicUsers]);

  if (loading) return <div>Loading stats...</div>; // Show a loading state while fetching data
  if (!countryStatsData) return <div>No country data available</div>;

  return (
    <div className={`stats-container ${theme ? 'dark' : 'light'}`}> {/* Apply dark or light theme */}
      <div className='flex-row'>
        {/* Pass the country-specific data to StatsCard */}
        <StatsCard
          heading="Total Income"
          value={countryStatsData.totalIncome.value}
          currency={countryStatsData.totalIncome.currency}
          description="Compared to last month"
          badge={countryStatsData.totalIncome.badge}
        />
        <StatsCard
          heading="Profit"
          value={countryStatsData.profit.value}
          currency={countryStatsData.profit.currency}
          description="Compared to last month"
          badge={countryStatsData.profit.badge}
        />
        <StatsCard
          heading="Total Views"
          value={countryStatsData.totalViews.value}
          description="Compared to last month"
          badge={countryStatsData.totalViews.badge}
        />
        <StatsCard
          heading="Conversion Rate"
          value={countryStatsData.conversionRate.value}
          description="Compared to last month"
          badge={countryStatsData.conversionRate.badge}
        />
      </div>

      <div className='flex-row'>
        <LineChart stats={{ totalIncomeData: [], profitData: [], conversionRateData: [] }} />
        <SalesByRegionChart />
      </div>

      <div className='flex-row'>
        <DonutChart premiumUsers={premiumUsers} basicUsers={basicUsers} />
        <IntegrationList />
      </div>
    </div>
  );
};

export default StatsContainer;





