import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  stealFeature,
  Player,
  changeFeature,
} from '../supportingScripts';

export type ShowFeatureType = {
  age: string;
  gender: string;
  profession: string;
  health: string;
  phobia: string;
  hobby: string;
  fact1: string;
  fact2: string;
}

export interface CardSliceState {
  players: Player[];
}

export function updatePlayer(id: number, featureType: string, feature: {value: string, isShowed: boolean}) {
  axios.put("http://localhost:5000/feature", {
    id,
    [featureType]: feature
  })
}

const initialState: CardSliceState = {
  players: [
    new Player(1),
    new Player(2),
    new Player(3),
    new Player(4),
    new Player(5),
    new Player(6),
    new Player(7),
    new Player(8),
    new Player(9),
    new Player(10),
    new Player(11),
    new Player(12),
  ],
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setPlayers(state, action){
      state.players = action.payload
    },
    generateCard(state, { payload }: PayloadAction<number>) {
      state.players[payload - 1] = new Player(payload);
    },
    removePlayer(state, { payload }: PayloadAction<number>) {
      state.players[payload - 1].isExiled = true;
    },
    showFeature(state, { payload }: PayloadAction<{feature: string, id: number}>) {
      state.players[payload.id - 1][payload.feature as keyof ShowFeatureType].isShowed = true
      console.log(state.players[payload.id - 1][payload.feature as keyof ShowFeatureType])
      updatePlayer(payload.id, payload.feature, state.players[payload.id - 1][payload.feature as keyof ShowFeatureType])
    },
    getName(state, { payload }: PayloadAction<{name: string, id: number}>) {
      state.players[payload.id - 1].name = payload.name;
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
    stealProfession(state, { payload }: PayloadAction<number>) {
      stealFeature(state, 'profession', payload);
    },
    stealHealth(state, { payload }: PayloadAction<number>) {
      stealFeature(state, 'health', payload);
    },
    stealPhobia(state, { payload }: PayloadAction<number>) {
      stealFeature(state, 'phobia', payload);
    },
  },
})

export const {
  generateCard,
  showFeature,
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
