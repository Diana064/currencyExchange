import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency, changeCurrency, latestCurrency } from './operation';

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    value: '',
    items: [],
    rates: [],
  },
  reducers: {
    setBaseCurrency(state, action) {
      state.value = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(changeCurrency.fulfilled, (state, action) => {
        state.items.unshift({
          ...action.payload.query,
          exchange: action.payload.result,
        });
      })
      .addCase(latestCurrency.fulfilled, (state, action) => {
        state.rates = Object.entries(action.payload.rates);
      });
  },
});

export const { setBaseCurrency } = currencySlice.actions;
