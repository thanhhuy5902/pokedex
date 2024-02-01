import { Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ListpokemonComponent } from './listpokemon/listpokemon.component';
import { DetailpokemonComponent } from './detailpokemon/detailpokemon.component';

export const routesLayOut: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'pokemonList',
        component: ListpokemonComponent,
      },

      {
        path: 'pokemonDetail',
        component: DetailpokemonComponent,
      },
    ],
  },
];
