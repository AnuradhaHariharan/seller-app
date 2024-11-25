import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch stats data from an API (mocking the API here)
export const fetchStats = createAsyncThunk('stats/fetchStats', async () => {
  const response = await axios.get('/api/stats'); // Replace with your actual API
  return response.data;
});

// Initial state of the stats slice
const initialState = {
  totalIncome: null,
  profit: null,
  totalViews: null,
  conversionRate: null,
  badges: {
    totalIncome: 0,
    profit: 0,
    totalViews: 0,
    conversionRate: 0,
  },
  loading: false,
  error: null,
};

// Creating the slice
const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStats.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStats.fulfilled, (state, action) => {
        state.loading = false;
        state.totalIncome = action.payload.totalIncome;
        state.profit = action.payload.profit;
        state.totalViews = action.payload.totalViews;
        state.conversionRate = action.payload.conversionRate;
        state.badges = {
          totalIncome: action.payload.totalIncomeBadge || 0,
          profit: action.payload.profitBadge || 0,
          totalViews: action.payload.totalViewsBadge || 0,
          conversionRate: action.payload.conversionRateBadge || 0,
        };
      })
      .addCase(fetchStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default statsSlice.reducer;