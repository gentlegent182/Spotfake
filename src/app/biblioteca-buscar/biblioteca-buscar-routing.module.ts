import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliotecaBuscarPage } from './biblioteca-buscar.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecaBuscarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliotecaBuscarPageRoutingModule {}
