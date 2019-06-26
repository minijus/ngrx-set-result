import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './app.reducer';

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectAppReady = createSelector(
  selectAppState,
  state => state && state.ready
);
