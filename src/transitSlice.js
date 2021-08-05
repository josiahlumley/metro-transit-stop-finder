import { createSlice } from "@reduxjs/toolkit";

export const transitSlice = createSlice({
  name: "counter",
  initialState: {
    route: null,
    directions: [],
    stops: [],
    isLoaded: true
  },
  reducers: {
    updateRoute: (state, action) => {
      state.route = action.payload;
    },
    updateDirections: (state, action) => {
      state.directions = action.payload;
    },
    updateStops: (state, action) => {
      state.stops = action.payload;
    },
    updateIsLoaded: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const {
  updateRoute,
  updateDirections,
  updateStops,
  updateIsLoaded
} = transitSlice.actions;

export default transitSlice.reducer;
