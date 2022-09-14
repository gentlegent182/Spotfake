import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliotecaAlbumesPage } from './biblioteca-albumes.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecaAlbumesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliotecaAlbumesPageRoutingModule {}
