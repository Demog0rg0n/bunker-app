import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  disaster: '',
  bunker: '',
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    getDisaster(state, action) {
      state.disaster = action.payload;
    },

    getBunker(state, action) {
      state.bunker = action.payload;
    },
  },
});

export const { getDisaster, getBunker } = headerSlice.actions;

export default headerSlice.reducer;
