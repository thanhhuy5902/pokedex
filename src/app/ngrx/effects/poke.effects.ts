import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
  switchMap,
  map,
  of,
  catchError,
  mergeMap,
  forkJoin,
  concatMap,
} from 'rxjs';
import { PokeserviceService } from '../../services/pokeservice.service';
import { Poke, PokeDetail } from '../../models/poke.model';

import * as PokeActions from '../actions/poke.actions';

@Injectable()
export class PokeEffects {
  constructor(
    private actions$: Actions,
    private pokeService: PokeserviceService
  ) {}

  // getPokemon$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(PokeActions.getPokemonList),
  //     mergeMap((action) => {
  //       return this.pokeService.getPokemon(action.id).pipe(
  //         map((poke: any) => {
  //           console.log(poke);
  //           return PokeActions.getPokemonListSuceess({
  //             poke: poke['pokemon_species'] as Poke[],
  //           });
  //         }),
  //         catchError((error) => {
  //           return of(PokeActions.getPokemonListError({ error: error }));
  //         })
  //       );
  //     })
  //   );
  // });
  //mergeMap with getpokemon() and getpokemonDetail()
  getPokemon$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PokeActions.getPokemonList),
      mergeMap((action) => {
        return this.pokeService.getPokemon(action.id).pipe(
          mergeMap((poke: any) => {
            console.log(poke);
            return forkJoin(
              poke['pokemon_species'].map((poke: Poke) =>
                this.pokeService.getPokemonDetail(poke.name)
              )
            ).pipe(
              map((pokeDetail: any) => {
                console.log(pokeDetail);
                return PokeActions.getPokemonListSuceess({
                  poke: pokeDetail as Poke[],
                });
              }),
              catchError((error) => {
                return of(PokeActions.getPokemonListError({ error: error }));
              })
            );
          })
        );
      })
    );
  });

  // getPokemon$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(PokeActions.getPokemonList),
  //     mergeMap((action) => {
  //       return this.pokeService.getPokemon(action.id).pipe(
  //         map((poke: any) => {
  //           console.log(poke);
  //           return PokeActions.getPokemonListSuceess({
  //             poke: poke['pokemon_species'] as Poke[],
  //           });
  //         }),
  //         catchError((error) => {
  //           return of(PokeActions.getPokemonListError({ error: error }));
  //         })
  //       );
  //     })
  //   );
  // });

  // use mergemap with getPokemonListSuceess and getPokemonDetailSuccess

  getPokemonDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PokeActions.getPokemonDetail),
      switchMap((action) => {
        return this.pokeService.getPokemonDetail(action.name).pipe(
          map((poke: any) => {
            console.log(poke);
            return PokeActions.getPokemonDetailSuccess({
              pokeDetail: poke as PokeDetail,
            });
          }),
          catchError((error) => {
            return of(PokeActions.getPokemonDetailError({ error: error }));
          })
        );
      })
    );
  });
}
