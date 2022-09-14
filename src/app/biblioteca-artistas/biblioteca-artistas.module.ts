import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaArtistasPageRoutingModule } from './biblioteca-artistas-routing.module';

import { BibliotecaArtistasPage } from './biblioteca-artistas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaArtistasPageRoutingModule
  ],
  declarations: [BibliotecaArtistasPage]
})
export class BibliotecaArtistasPageModule {}
