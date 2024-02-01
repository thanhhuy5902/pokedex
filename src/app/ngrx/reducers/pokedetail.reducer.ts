import { createReducer, on } from '@ngrx/store';
import { PokeState } from '../state/poke.state';
import * as PokeActions from '../actions/poke.actions';
import { PokeDetailState } from '../state/poke.state';
import { PokeDetail } from '../../models/poke.model';
export const initialState: PokeDetailState = {
  pokeDetail: <PokeDetail>{},
  loading: false,
  error: '',
};

export const pokeDetailReducer = createReducer(
  initialState,
  on(PokeActions.getPokemonDetail, (state: any, action: any) => {
    console.log(action.type);
    return {
      ...state,
      loading: true,
    };
  }),

  on(PokeActions.getPokemonDetailSuccess, (state: any, action: any) => {
    console.log(action.poke);
    return {
      ...state,
      pokeDetail: action.poke,
      loading: false,
    };
  }),

  on(PokeActions.getPokemonDetailError, (state: any, action: any) => {
    return {
      ...state,
      error: action.error,
      loading: false,
    };
  })
);
