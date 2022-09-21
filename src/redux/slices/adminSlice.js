import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isStarted: false,
  votes: JSON.parse(localStorage.getItem('votes')) || [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ],
};

export const votingSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    getVote(state, action) {
      state.votes[action.payload.data - 1].push(action.payload.id);
      localStorage.setItem('votes', JSON.stringify(state.votes));
    },
    resetVotes(state) {
      state.votes = [[], [], [], [], [], [], [], [], [], [], [], []];
    },
    startVoting(state) {
      state.isStarted = !state.isStarted;
    },
  },
});

export const { getVote, resetVotes, startVoting } = votingSlice.actions;

export default votingSlice.reducer;
