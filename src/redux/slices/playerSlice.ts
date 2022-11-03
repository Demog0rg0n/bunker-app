import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  Player,
  getRandomFeature,
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

export interface playerSliceState {
  players: Player[];
}

const initialState: playerSliceState = {
  players: Array(12),
};

export const playerSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setPlayers(state, action){
      state.players = action.payload
    },
    removePlayer(state, { payload }: PayloadAction<number>) {
      state.players[payload - 1].isExiled = true;
    },
    setCard(state, { payload }: PayloadAction<Player>) {
      state.players[payload.id - 1] = payload
    },
    setMirrored(state, { payload }: PayloadAction<number>) {
      state.players[payload - 1].camera.isMirrored = !state.players[payload - 1].camera.isMirrored
    },
    generateCard(state, { payload }: PayloadAction<{index: number, socket?: WebSocket}>) {
      state.players[payload.index] = new Player(payload.index + 1)
      const message = {
        event: "generate-card",
        data: state.players[payload.index]
      }
      payload.socket?.send(JSON.stringify(message))
    },
    showFeature(state, { payload }: PayloadAction<{feature: string, id: number}>) {
      if(state.players[payload.id - 1] ) {
        state.players[payload.id - 1][payload.feature as keyof ShowFeatureType].isShowed = true
      }
    },
    getName(state, { payload }: PayloadAction<{name: string, id: number}>) {
      state.players[payload.id - 1].name = payload.name;
    },
    getCam(state, { payload }: PayloadAction<{link: string, id: number}>) {
      state.players[payload.id - 1].camera.link = payload.link
    },
    getVote(state, { payload }: PayloadAction<{id: number, vote: string}>) {
      state.players[+payload.vote - 1].votes.push(payload.id)
    },
    changeFeature(state, { payload }: PayloadAction<{ id: number, feature: string }>) {
      state.players[payload.id - 1][payload.feature as keyof ShowFeatureType] = getRandomFeature(payload.feature)
    },
    resetVotes(state) {
      for(let i = 0; i < 12; i++){
        if(state.players[i]){
          state.players[i].votes = []
        }
      }
    },
  },
})

export const {
  showFeature,
  changeFeature,
  getName,
  getVote,
  getCam,
  setCard,
  setMirrored,
  resetVotes,
  generateCard,
  removePlayer,
  setPlayers
} = playerSlice.actions;

export default playerSlice.reducer;
