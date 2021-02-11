import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule) },
  { path: 'publications', loadChildren: () => import('./pages/publication/publication.module').then(m => m.PublicationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
