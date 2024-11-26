import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Import hooks from react-redux
import { fetchStats } from '../redux/statsSlice'; // Import the async action
import StatsCard from './StatCard';
import LineChart from './LineChart';
import SalesByRegionChart from './RadarChart';
import DonutChart from './DonutChart';
import IntegrationList from './IntegrationList';

const StatsContainer = ({ theme }) => {  // Accept theme prop
  const dispatch = useDispatch(); // Dispatch function to send actions

  const [premiumUsers, setPremiumUsers] = useState(120); 
  const [basicUsers, setBasicUsers] = useState(80); 

  // Access stats and badges data from Redux store
  const { totalIncome, profit, totalViews, conversionRate, badges, loading } = useSelector(
    (state) => state.stats
  );

  useEffect(() => {
    dispatch(fetchStats()); // Dispatch the action to fetch stats when the component mounts
  }, [dispatch]);

  if (loading) return <div>Loading stats...</div>; // Show a loading state while fetching data

  return (
    <div className={`stats-container ${theme ? 'dark' : 'light'}`}> {/* Apply dark or light theme */}
      
      <div className='flex-row'>
        <StatsCard
          heading="Total Income"
          value={totalIncome}
          currency
          description="Compared to last month"
          badge={badges.totalIncome}
        />
        <StatsCard
          heading="Profit"
          value={profit}
          currency
          description="Compared to last month"
          badge={badges.profit}
        />
        <StatsCard
          heading="Total Views"
          value={totalViews ? totalViews.toLocaleString() : null}
          description="Compared to last month"
          badge={badges.totalViews}
        />
        <StatsCard
          heading="Conversion Rate"
          value={conversionRate}
          description="Compared to last month"
          badge={badges.conversionRate}
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

