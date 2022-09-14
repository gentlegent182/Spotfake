import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaBuscarPageRoutingModule } from './biblioteca-buscar-routing.module';

import { BibliotecaBuscarPage } from './biblioteca-buscar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaBuscarPageRoutingModule
  ],
  declarations: [BibliotecaBuscarPage]
})
export class BibliotecaBuscarPageModule {}
