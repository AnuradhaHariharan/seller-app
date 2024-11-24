// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import countryReducer from '../features/countrySlice'; // Correct path to CountrySlice

const store = configureStore({
  reducer: {
    country: countryReducer,  // Ensure you are using the correct reducer here
  },
});

export { store};