import { createReducer, on } from '@ngrx/store';
import { PokeState } from '../state/poke.state';

import * as PokeActions from '../actions/poke.actions';

export const initialState: PokeState = {
  poke: [],
  loading: false,
  error: '',
};

export const pokeReducer = createReducer(
  initialState,
  on(PokeActions.getPokemonList, (state: any, action: any) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(PokeActions.getPokemonListSuceess, (state: any, action: any) => {
    console.log(action.poke);
    let poke = [...state.poke, ...action.poke];

    return {
      ...state,
      poke: action.poke,
      loading: false,
    };
  }),

  on(PokeActions.getPokemonListError, (state: any, action: any) => {
    return {
      ...state,
      error: action.error,
      loading: false,
    };
  })
);
