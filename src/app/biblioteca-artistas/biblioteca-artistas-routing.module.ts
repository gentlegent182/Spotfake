import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliotecaArtistasPage } from './biblioteca-artistas.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecaArtistasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliotecaArtistasPageRoutingModule {}
