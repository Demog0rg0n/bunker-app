import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type HeaderSliceState = {
  disaster: string;
  bunker: string;
}

const initialState: HeaderSliceState = {
  disaster: '',
  bunker: '',
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    getDisaster(state, action: PayloadAction<string>) {
      state.disaster = action.payload;
    },

    getBunker(state, action: PayloadAction<string>) {
      state.bunker = action.payload;
    },
  },
});

export const { getDisaster, getBunker } = headerSlice.actions;

export default headerSlice.reducer;
