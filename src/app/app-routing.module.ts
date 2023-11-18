import { NgModule } from '@angular/core';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponentComponent } from './features/page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'sensors',
        pathMatch: 'full',
      },
      {
        path: 'statistics',
        loadChildren: () =>
          import('../app/features/statistics/statistics.module').then(
            (m) => m.StatisticsModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'sensors',
        loadChildren: () =>
          import('../app/features/sensors/sensors.module').then(
            (m) => m.SensorsModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/features/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
