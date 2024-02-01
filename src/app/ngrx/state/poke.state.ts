import { Poke, PokeDetail } from '../../models/poke.model';

export interface PokeState {
  poke: Poke[];
  loading: boolean;
  error: string;
}

export interface PokeDetailState {
  pokeDetail: PokeDetail;
  loading: boolean;
  error: string;
}
