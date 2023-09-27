import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchShipments = createAsyncThunk("shipments/fetch", async () => {
  try {
    const response = await axios.get(
      "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0"
    );
    console.log("Fetching from API: ", response.data);
    return response.data;
  } catch (err) {
    console.warn("Error fetching from API - using static JSON instead");
    const localResponse = await axios.get("/shipments.json");
    console.log("Fetching locally: ", localResponse.data);
    return localResponse.data;
  }
});

export const shipmentsSlice = createSlice({
  name: "shipments",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShipments.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchShipments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchShipments.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default shipmentsSlice.reducer;
