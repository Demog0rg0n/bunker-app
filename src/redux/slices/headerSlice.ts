import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type HeaderSliceState = {
  info: string[];
  bunker: string[];
  disaster: string;
}

const initialState: HeaderSliceState = {
  info: ["Доп. информация:"],
  bunker: ["Бункер:"],
  disaster: ""
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    addInfo(state, { payload }: PayloadAction<string>) {
      state.info.push(payload);
    },
    addBunker(state, { payload }: PayloadAction<string>) {
      state.bunker.push(payload);
    },
    setDisaster(state, { payload }: PayloadAction<string>){
      state.disaster = payload
    }
  },
});

export const { addInfo, addBunker, setDisaster } = headerSlice.actions;

export default headerSlice.reducer;
