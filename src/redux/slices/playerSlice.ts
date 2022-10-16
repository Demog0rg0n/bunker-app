import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  stealFeature,
  Card,
  changeFeature,
  InitialCard,
  InitialPlayer,
} from '../supportingScripts';

export type ShowFeatureType = {
  name: string
  age: string;
  profession: string;
  health: string;
  phobia: string;
  hobby: string;
  fact1: string;
  fact2: string;
}

export interface CardSliceState {
  players: InitialPlayer[];
  playersCard: InitialCard[];
}

// export const fetchPlayers = createAsyncThunk("player/fetchPlayerStatus", async () => {
//   try{
//     const { data } = await axios.get("http://localhost:5000/players")
//     console.log('Запрос отправлен');
//     fetchPlayers()
//     return data
//   } catch (e){
//     console.log(e)
//     setTimeout(() => {
//       fetchPlayers()
//     }, 1000)
//   }
  
// })

export function updatePlayer(id: number, featureType: string, feature: string | {link: string, data: string}) {
  axios.put("http://localhost:5000/player", {
    id,
    [featureType]: feature
  })
}

const initialState: CardSliceState = {
  players: [
    new InitialPlayer(1),
    new InitialPlayer(2),
    new InitialPlayer(3),
    new InitialPlayer(4),
    new InitialPlayer(5),
    new InitialPlayer(6),
    new InitialPlayer(7),
    new InitialPlayer(8),
    new InitialPlayer(9),
    new InitialPlayer(10),
    new InitialPlayer(11),
    new InitialPlayer(12),
  ],
  playersCard: [
    new InitialCard(1),
    new InitialCard(2),
    new InitialCard(3),
    new InitialCard(4),
    new InitialCard(5),
    new InitialCard(6),
    new InitialCard(7),
    new InitialCard(8),
    new InitialCard(9),
    new InitialCard(10),
    new InitialCard(11),
    new InitialCard(12),
  ],
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setPlayers(state, action){
      state.players = action.payload
    },
    generateCard(state) {
      let id = +(window.location.pathname.slice(18));
      state.playersCard[id - 1] = new Card(id);
    },
    removePlayer(state, action: PayloadAction<number>) {
      state.players[action.payload - 1].isExiled = true;
    },
    showGender(state){
      let id = +window.location.pathname.slice(18) - 1;
      state.players[id].gender = state.playersCard[id].gender;
      updatePlayer(id, "gender", state.players[id].gender)
    },
    showFeature(state, action: PayloadAction<string>) {
      let id = +window.location.pathname.slice(18) - 1;
      state.players[id][action.payload as keyof ShowFeatureType] = state.playersCard[id][action.payload as keyof ShowFeatureType];
      updatePlayer(id + 1, action.payload, state.players[id][action.payload as keyof ShowFeatureType])
    },
    getName(state, action: PayloadAction<string>) {
      let id = Number(window.location.pathname.slice(18));
      state.players[id - 1].name = action.payload;
    },
    changeProfession(state, action: PayloadAction<number>) {
      changeFeature(state, action.payload, 'profession');
    },
    changeHealth(state, action: PayloadAction<number>) {
      changeFeature(state, action.payload, 'health');
    },
    changePhobia(state, action: PayloadAction<number>) {
      changeFeature(state, action.payload, 'phobia');
    },
    changeFact1(state, action: PayloadAction<number>) {
      changeFeature(state, action.payload, 'fact1');
    },
    changeFact2(state, action: PayloadAction<number>) {
      changeFeature(state, action.payload, 'fact2');
    },
    changeHobby(state, action: PayloadAction<number>) {
      changeFeature(state, action.payload, 'hobby');
    },

    stealProfession(state) {
      stealFeature(state, 'profession');
    },
    stealHealth(state) {
      stealFeature(state, 'health');
    },
    stealPhobia(state) {
      stealFeature(state, 'phobia');
    },
  },
  // extraReducers: builder => {
  //   builder.addCase(fetchPlayers.fulfilled, (state, { payload }) => {
  //     state.players = payload
  //     fetchPlayers()
  //   })
  // },
})

export const {
  generateCard,
  showFeature,
  showGender,
  getName,
  changeProfession,
  changeHealth,
  changePhobia,
  changeFact1,
  changeFact2,
  changeHobby,
  stealHealth,
  stealPhobia,
  stealProfession,
  removePlayer,
  setPlayers
} = cardSlice.actions;

export default cardSlice.reducer;
