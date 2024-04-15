import { UnknownAction, applyMiddleware, createStore } from 'redux';

import rootReducer from "./reducers"

import { ThunkAction, thunk } from "redux-thunk"

import { composeWithDevTools } from '@redux-devtools/extension';

const composeEnhanser = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(rootReducer, composeEnhanser)

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType> = ThunkAction<
  ReturnType, 
  RootState, 
  undefined, 
  UnknownAction
>;

export type RootState = ReturnType<typeof store.getState>

export default store;