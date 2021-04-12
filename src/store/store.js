import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { loadState, saveState } from '../utils/webStorageHelper';

import timer from './timer';
import task from './task';

const preloadedState = loadState();

const reducer = combineReducers({
  timer,
  task,
});

const store = configureStore({
  reducer,
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
