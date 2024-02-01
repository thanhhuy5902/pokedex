import { provideAnimations } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { PokeEffects } from './ngrx/effects/poke.effects';
import { pokeReducer } from './ngrx/reducers/poke.reducer';
import { pokeDetailReducer } from './ngrx/reducers/pokedetail.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideStore({
      poke: pokeReducer,
      pokeDetail: pokeDetailReducer,
    }),
    importProvidersFrom(TuiRootModule),
    provideEffects(PokeEffects),
    provideHttpClient(),
  ],
};
