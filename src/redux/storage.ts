import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Players from './slices/playerSlice';
import Header from './slices/headerSlice';
import Votes from './slices/adminSlice';

import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  Players,
  Header,
  Votes,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
