import { Action, createReducer, on } from '@ngrx/store';

import { setAppState } from './app.actions';

export interface AppState {
  ready: boolean;
}

const initialState: AppState = {
  ready: false
};

const appReducer = createReducer(initialState, on(setAppState, (state, action) => ({ ...state, ready: action.ready })));

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}
