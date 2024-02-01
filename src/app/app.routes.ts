import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'base',
    loadChildren: () =>
      import('../app/pages/layout/layout.routes').then((m) => m.routesLayOut),
  },
];
