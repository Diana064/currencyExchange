import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Api from '../services/api';
export const fetchBaseCurrency = createAsyncThunk(
  'currency/fetchCurrency',
  async (crd, { rejectWithValue }) => {
    try {
      const results = await Api.fetchCurrency(crd);
      console.log(results[0].annotations.currency.iso_code);
      return results[0].annotations.currency.iso_code;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const changeCurrency = createAsyncThunk(
  'currency/changeCurrency',
  async (credential, { rejectWithValue }) => {
    try {
      const results = await Api.changeCurrency(credential);
      console.log(results);
      return results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const latestCurrency = createAsyncThunk(
  'currency/latestCurrency',
  async (credential, { rejectWithValue }) => {
    try {
      const results = await Api.latestCurrency(credential);
      console.log(results);
      return results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
