import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MadeforuPage } from './madeforu.page';

const routes: Routes = [
  {
    path: '',
    component: MadeforuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MadeforuPageRoutingModule {}
