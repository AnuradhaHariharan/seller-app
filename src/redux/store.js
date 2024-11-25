// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import countryReducer from '../features/countrySlice'; // Correct path to CountrySlice
import statsReducer from './statsSlice'; 

const store = configureStore({
  reducer: {
    country: countryReducer,
    stats: statsReducer, 
  },
});

export { store};