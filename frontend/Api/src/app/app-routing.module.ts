import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalaGuard } from './pages/galaPage/gala.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'gala', loadChildren: () => import('./pages/galaPage/gala.module').then(m => m.GalaModule), canActivate: [GalaGuard]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
