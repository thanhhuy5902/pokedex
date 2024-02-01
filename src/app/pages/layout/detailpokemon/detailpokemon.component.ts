import { Component } from '@angular/core';
import * as PokeActions from '../../../ngrx/actions/poke.actions';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { PokeDetailState } from '../../../ngrx/state/poke.state';
@Component({
  selector: 'app-detailpokemon',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './detailpokemon.component.html',
  styleUrl: './detailpokemon.component.scss',
})
export class DetailpokemonComponent {
  pokemonDetail$ = this.store.select((state) => state.pokeDetail.pokeDetail);
  loading$ = this.store.select((state) => state.pokeDetail.loading);
  error$ = this.store.select((state) => state.pokeDetail.error);
  constructor(private store: Store<{ pokeDetail: PokeDetailState }>) {
    this.store.dispatch(PokeActions.getPokemonDetail({ name: 'bulbasaur' }));
    this.pokemonDetail$.subscribe((data) => {
      console.log(data);
    });
  }
}
