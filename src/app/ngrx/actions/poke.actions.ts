import { createAction, props } from '@ngrx/store';
import { Poke, PokeDetail } from '../../models/poke.model';

export const getPokemonList = createAction(
  '[Pokemon] Get Pokemon List',
  props<{ id: string }>()
);

export const getPokemonListSuceess = createAction(
  '[Pokemon] Get Pokemon List Success',
  props<{ poke: Poke[] }>()
);

export const getPokemonListError = createAction(
  '[Pokemon] Get Pokemon List Error',
  props<{ error: string }>()
);

export const getPokemonDetail = createAction(
  '[Pokemon] Get Pokemon Detail',
  props<{ name: string }>()
);

export const getPokemonDetailSuccess = createAction(
  '[Pokemon] Get Pokemon Detail Success',
  props<{ pokeDetail: PokeDetail }>()
);

export const getPokemonDetailError = createAction(
  '[Pokemon] Get Pokemon Detail Error',
  props<{ error: string }>()
);
