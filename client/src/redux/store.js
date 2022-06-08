import { tickerReducer } from './reducer/ticker-reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    tickerReducer,
  },
});

export default store;
