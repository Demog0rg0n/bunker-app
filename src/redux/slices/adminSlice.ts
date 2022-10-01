import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VotesSliceType {
  isStarted: boolean;
  votes: Array<number[]>;
}

const initialState: VotesSliceType = {
  isStarted: false,
  votes: JSON.parse(localStorage.getItem('votes') as any)  || [
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
    getVote(state, action: PayloadAction<{data: string, id: number}>) {
      state.votes[+action.payload.data - 1].push(action.payload.id);
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
