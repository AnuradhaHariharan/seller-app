// src/features/countrySlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCountry: 'USA',  // Initial default country
  countries: ['USA', 'Canada', 'Germany', 'India'],  // List of countries
};

const countrySlice = createSlice({
  name: 'country',  // Name of the slice
  initialState,
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;  // Action to update country
    },
  },
});

// Exporting the action to change the country
export const { setSelectedCountry } = countrySlice.actions;

// Export the reducer to be used in the store
export default countrySlice.reducer;