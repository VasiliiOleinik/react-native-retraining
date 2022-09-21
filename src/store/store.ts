import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from './user';
import todoReducer from './todos';

export const rootReducers = combineReducers({
  user: userReducer,
  todos: todoReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
