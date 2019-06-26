import { createAction, props } from '@ngrx/store';

export const setAppState = createAction('[App] Set ready state', props<{ ready: boolean }>());
